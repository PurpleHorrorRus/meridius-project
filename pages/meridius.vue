<template>
    <div id="container">
        <div id="header">
            <h1 id="logo" v-text="'Meridius'" />
            <span id="description" v-text="'Музыкальный плеер для ВКонтакте'" />
        </div>
        <div id="content">
            <div id="meridius">
                <div id="description">
                    <div id="meridius-logo">
                        <img id="meridius-icon" src="~/assets/meridius/icon.png" alt="Meridius icon">
                        <h2 id="logo" v-text="'Meridius'" />
                    </div>
                    <h3 id="description-text" v-text="'Современный, красивый, многофункциональный \
                    и бесплатный музыкальный плеер для социальной сети ВКонтакте'"
                    />
                    <a id="download-link" :href="link">
                        <SolidButton :label="'Скачать для Windows'" />
                    </a>
                    <div id="warn">
                        <div id="contact">
                            <span id="contact-label" v-text="'Обратная связь с разработчиком:'" />
                            <a href="https://vk.com/id529592613">
                                <font-awesome-icon id="vk-icon" :icon="['fab', 'vk']" />
                            </a>
                            <a href="https://github.com/PurpleHorrorRus">
                                <font-awesome-icon id="github-icon" :icon="['fab', 'github']" />
                            </a>
                            <a href="https://twitch.tv/infinitehorror">
                                <font-awesome-icon id="twitch-icon" :icon="['fab', 'twitch']" />
                            </a>
                        </div>
                    </div>
                </div>
                <img id="MeridiusScreenshot" src="~/assets/meridius/Meridius.png" alt="Meridius screenshot">
            </div>
        </div>
        <div id="features">
            <span id="features-label" v-text="'Особенности'" />
            <div id="features-chunks">
                <div 
                    v-for="(featureChunk, index) of featuresSplitted"
                    :key="index"
                    class="features-chunk"
                >
                    <Feature
                        v-for="feature of featureChunk"
                        :key="feature.text"
                        :feature="feature"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SolidButton from "~/components/Meridius/SolidButton";
import Feature from "~/components/Meridius/Feature";

import preview from "~/assets/meridius/icon.png";

export default {
    components: {
        SolidButton,
        Feature
    },
    data: () => ({
        version: "1.6.6",
        features: [
            {
                icon: ["fas", "dollar-sign"],
                color: "red",
                text: "Приложение абсолютно бесплатное"
            },
            {
                icon: ["fas", "microchip"],
                color: "white",
                text: "Низкое потребление системных ресурсов"
            },
            {
                icon: ["fas", "tachometer-alt"],
                color: "white",
                text: "Быстрая работа приложения"
            },
            {
                icon: ["fas", "pencil-ruler"],
                color: "white",
                text: "Современный красивый и понятный дизайн"
            },
            {
                icon: ["fas", "paint-brush"],
                color: "white",
                text: "Поддержка цветовых схем"
            },
            {
                icon: ["fas", "music"],
                color: "white",
                text: "Лёгкое управление и быстрый доступ к аудиозаписям и плейлистам"
            },
            {
                icon: ["fas", "search"],
                color: "white",
                text: "Поиск пользователей, сообществ, исполнителей, плейлистов и аудиозаписей"
            },
            {
                icon: ["fas", "arrow-down"],
                color: "white",
                text: "Скачивание аудио и целых плейлистов на компьютер"
            },
            {
                icon: ["fas", "window-maximize"],
                color: "white",
                text: "Мини-плеер, который выводится поверх окон"
            },
            {
                icon: ["fas", "keyboard"],
                color: "white",
                text: "Поддержка горячих клавиш"
            },
            {
                icon: ["fas", "sliders-h"],
                color: "white",
                text: "Встроенный эквалайзер с предустановками"
            },
            {
                icon: ["fas", "broadcast-tower"],
                color: "white",
                text: "Вывод музыки на стрим через OBS Studio или любую другую программу"
            },
            {
                icon: ["fab", "youtube"],
                color: "white",
                text: "Импорт треков и плейлистов из YouTube"
            },
            {
                icon: ["fas", "comment-dots"],
                color: "white",
                text: "Постоянная поддержка и связь с разработчиком"
            },
            {
                icon: ["fas", "server"],
                color: "white",
                text: "Встроенный веб-сервер"
            },
            {
                icon: ["fas", "ellipsis-h"],
                color: "white",
                text: "И многое другое"
            }
        ]
    }),
    head: {
        title: "Meridius - музыкальный плеер для ВКонтакте",
        meta: [
            { 
                hid: "description", 
                name: "description", 
                content: "Meridius - бесплатный современный музыкальный плеер для социальной сети ВКонтакте" 
            },
            { 
                hid: "keywords", 
                name: "keywords", 
                content: "Meridius, Music player, VK, vk.com, ВКонтакте, \
                    музыкальный плеер для ВК, музыкальный плеер для ВКонтакте, музыкальный плеер для ВК" 
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "Meridius - музыкальный плеер для ВКонтакте"
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "Meridius - бесплатный современный музыкальный плеер для социальной сети ВКонтакте"
            },
            {
                hid: "og:image",
                property: "og:image",
                content: preview
            },
            {
                hid: "og:url",
                property: "og:url",
                content: "/meridius"
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "meridius_favicon.ico" },
            { rel: "canonical", href: "https://purplehorrorrus.github.io/meridius/" }
        ]
    },
    computed: {
        featuresSplitted () {
            return this.chunk(this.features, Math.floor(this.features.length / 2) + 1);
        },
        link () {
            // eslint-disable-next-line max-len
            return `https://github.com/PurpleHorrorRus/Meridius/releases/download/v${this.version}/meridius-${this.version}.exe`;
        }
    },
    methods: {
        chunk (arr, size) {
            return arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
        }
    }
};
</script>

<style lang="scss">
#container {
    position: absolute;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px auto auto;
    grid-template-areas: "header" "content" "features";

    left: 0px;
    top: 0px;

    width: 100%;

    #header {
        grid-area: header;
        padding: 10px;

        border-bottom: 1px solid #4f4f4f;

        #logo {
            font-family: Acme;
            font-size: 24pt;
        }

        #description {
            display: block;
            
            color: #7e7e7e;
            font-size: 10pt;
        }
    }

    #content {
        grid-area: content;
        
        background-color: #111111;
        border-bottom: 1px solid #4f4f4f;

        #meridius {
            display: flex;
            justify-content: center;
            align-items: center;

            #description {
                display: inline-block;

                #meridius-logo {
                    display: block;

                    #meridius-icon {
                        width: 40px;
                        vertical-align: middle;
                    }

                    #logo {
                        display: inline-block;
                        font-family: Acme;
                        font-size: 24pt;
                        vertical-align: middle;
                    }
                }

                #warn {
                    display: block;
                    margin-top: 5%;
                    width: 400px;
                    font-size: 8pt;

                    * {
                        user-select: none;
                    }
                    
                    span, a, svg {
                        color: #6d6d6d;
                    }

                    #contact {
                        margin-top: 10px;
                        
                        svg {
                            font-size: 12pt;
                            vertical-align: middle;
                            margin-right: 5px;

                            &:hover {
                                cursor: pointer;
                            }

                            &#vk-icon {
                                &:hover {
                                    color:rgb(117, 117, 252);
                                }
                            }

                            &#github-icon {
                                &:hover {
                                    color:#fff;
                                }
                            }

                            &#twitch-icon {
                                &:hover {
                                    color: #6441a5;
                                }
                            }
                        }
                    }
                }

                &-text {
                    display: block;
                    max-width: 400px;

                    margin-top: 10px;
                }

                #download-link {
                    text-decoration: none;
                }
            }

            #MeridiusScreenshot {
                width: 650px;

                padding: 50px;

                border-radius: 25px;

                vertical-align: middle;
            }
        }
    }

    #features {
        grid-area: features;

        width: 100%;

        margin: auto;
        margin-top: 0px;
        // padding: 15px;

        #features-chunks {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        #features-label {
            display: block;
            width: 100%;

            margin-bottom: 10px;

            text-align: center;
            font-size: 36pt;
        }
    }
}
</style>