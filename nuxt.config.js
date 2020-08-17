module.exports = {
    mode: "spa",
    target: "static",
    head: {
        htmlAttrs: {
            lang: "ru"
        },
        title: "PurpleHorror",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "A personal website" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ]
    },
    build: {
        extend (config) {
            config.module.rules.push(
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "sass-loader"
                    ]
                }
            );
        }
    },
    buildModules: [
        "@nuxtjs/google-analytics"
    ],
    googleAnalytics: {
        id: "UA-157148734-2",
        debug: {
            enabled: false,
            sendHitTask: true
        }
    },
    plugins: ["~plugins/jsonld"],
    modules: [
        "@nuxtjs/sitemap",
        [
            "nuxt-fontawesome", {
                imports: [
                    {
                        set: "@fortawesome/free-solid-svg-icons",
                        icons: ["fas"]
                    },
                    {
                        set: "@fortawesome/free-brands-svg-icons",
                        icons: ["fab"]
                    },
                ]
            }
        ]
    ],
    sitemap: {
        routes: [
            {
                url: "/meridius",
                changefreq: "daily",
                priority: 1,
                lastmod: new Date()
            }
        ]
    }
};
