// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: { url: "/_dist_", static: false },
  },
  plugins: [
    [
      '@snowpack/plugin-webpack', {
        htmlMinifierOptions: false
      }
    ]
  ],
  // installOptions: {},
  // devOptions: {},
  buildOptions: {
    clean: true,
  },
};
