const HomeScreen = {
    after_render: () => { },
    render: () => {
        return `
            <section class="home-page-hero">
                <div class="container">
                    <div class="home-page-hero-content">
                        <h1 class="h1">Fashion Guide 2020</h1>
                        <p class="description">Products designed for modern passionate individuals. We've curated groups of items that make fashion up exciting.</p>
                        <a class="btn" href="/explore">
                            <span>Discover</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <div class="home-page-hero-image">
                        <img src="https://images.pexels.com/photos/953266/pexels-photo-953266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                    </div>
                </div>
            </section>
            <section class="gender-selection">
                <div class="container">
                    <div class="col-left">
                        <div class="content">
                            <h2 class="h2">Women</h2>
                            <a class="btn" href="/explore">
                                <span>Shop Now</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <figure class="image-left">
                            <img src="//cdn.shopify.com/s/files/1/0017/9686/6113/files/woman-haerfest-harvest-bags-indiegogo-backpack-tote-duffel-apollo_990x.jpg?v=1578084620">
                        </figure>
                    </div>
                    <div class="col-right">
                        <div class="content">
                            <h2 class="h2">Men</h2>
                            <a class="btn" href="/explore">
                                <span>Show Now</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <figure class="image-right">
                            <img src="//cdn.shopify.com/s/files/1/0017/9686/6113/files/man-haerfest-harvest-bags-indiegogo-backpack-tote-duffel-apollo_990x.jpg?v=1578084620">
                        </figure>
                    </div>
                </div>
            </section>
            <section class="featured-category">
                <div class="container">
                    <div class="featured-image">
                        <img src="https://cdn.shopify.com/s/files/1/0017/9686/6113/files/backpack-black-side-haerfest-harvest-bag-bags-luggage-daypack-backpack-rucksack-knapsack-quality-size-fits-unisex-men-women-ladies-review-small-large-medium-color-travel-commute-carry-on-work-professi_750x.jpg?v=1555441676">
                    </div>
                    <div class="featured-content">
                        <h2 class="h2">Your Everyday, <br>Everywhere Bag</h2>
                        <p class="description">Featuring the Travel Backpack. Carry it to your next workout, your next pitch, your next big thing.</p>
                        <a class="btn btn-black" href="/explore">
                            <span>Show Now</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
};

export default HomeScreen;