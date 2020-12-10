import HomeScreen from './screens/HomeScreen.js';
import ProjectScreen from './screens/ProjectScreen.js';
import NotFound404 from './screens/NotFound404.js';
import Header from './components/Header.js';

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', screen: HomeScreen },
        { path: '/projects/:id', screen: ProjectScreen },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path)),
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: { path: location.pathname, screen: NotFound404 },
            result: [location.pathname],
        };
    }

    const screen = match.route.screen;

    document.getElementById('header-container').innerHTML = await Header();
    document.getElementById('main-container').innerHTML = await screen(getParams(match));
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});

window.addEventListener('popstate', router);
