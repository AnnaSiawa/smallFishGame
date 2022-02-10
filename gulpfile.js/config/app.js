const isProd = process.argv.includes("--prodaction");
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },

    webpack: {
        mode: isProd ? "production" : "development"
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    },

    favicons: {
        icons: {
            favicons: true,
            appleIcons: true,
            android: true,
            window: true,
            yandex: false,
            coast: false,
            firefox: false,
            appleStartup: false
        },
        path: "/"
    }
}
