const Header = {
    after_render: () => {
        // ScrollTrigger.create({
        //     trigger: '.home-page-hero',
        //     start: 'top 80%',
        //     end: 'bottom 80%',
        //     onEnter: () => gsap.to('.header', { backgroundColor: 'transparent' }),
        //     onLeave: () => gsap.to('.header', { backgroundColor: 'white', color: '#333' }),
        //     onLeaveBack: () => gsap.to('.header', { backgroundColor: 'white', }),
        //     onEnterBack: () => gsap.to('.header', { backgroundColor: 'transparent', color: '#fff' }),
        //     markers: true
        // });
        ScrollTrigger.create({
            trigger: '.home-page-hero',
            start: 'top 80%',
            end: 'bottom 80%',
            onLeave: () => gsap.fromTo('.header', { height: '0' }, { backgroundColor: 'white', color: '#333', height: '80px' }),
            onEnterBack: () => gsap.fromTo('.header', { height: '0', backgroundColor: 'transparent' }, { color: '#fff', height: '80px' }),
            markers: true
        });
    },
    render: () => {
        return `
            <div class="container">
                <div class="header-brand-container">
                    <a href="/" class="brand">H&HAPPAREL</a>
                </div>
                <div class="main-navigation-container">
                    <div class="nav-primary">
                        <ul class="menu-items-list">
                            <li class="menu-item">
                                <a class="ui-sidebar-category-toggler" href="/men" data-gender="men" data-link>Men</a>
                            </li>
                            <li class="menu-item">
                                <a class="ui-sidebar-category-toggler" href="/women" data-gender="women" data-link>Women</a>
                            </li>
                            <li class="menu-item">
                                <a class="ui-sidebar-category-toggler" href="/explore" data-gender="explore" data-link>Explore</a>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-secondary">
                        <ul class="menu-items-list">
                            <li class="menu-item">
                                <a href="#!">
                                    <i class="fas fa-search"></i>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="#!">
                                    <i class="far fa-user"></i>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="#!">
                                    <i class="fas fa-shopping-bag"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    },
};

export default Header;