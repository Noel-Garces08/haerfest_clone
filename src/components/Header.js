const Header = () => {
    return `
        <div class="container">
            <div class="header-brand-container">
                <div class="header-logo">HAERFEST</div>
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
                            <a class="ui-sidebar-category-toggler" href="/women" data-gender="women" data-link>Explore</a>
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
};

export default Header;