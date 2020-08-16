module.exports = {
    mode: "spa",
    target: "static",
    head: {
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
    modules: [
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
    ]
};

