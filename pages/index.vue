<template>
    <div id="main-page">
        <img id="main-page-Jestress" src="~/assets/images/Jestress.png">
        <div id="main-page-container">
            <div id="main-page-container-left" />
            <div id="main-page-container-content">
                <Header />
                <Projects />
                <Stream />
            </div>
            <div id="main-page-container-right" />
        </div>
    </div>
</template>

<script>
import Header from "~/components/Header";
import Projects from "~/components/Projects";
import Stream from "~/components/Stream";

export default {
    components: {
        Header,
        Projects,
        Stream
    },
    head: {
        link: [
            { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
            { rel: "canonical", href: "https://purplehorrorrus.github.io/" }
        ]
    }
};
</script>

<style lang="scss">
html,
body {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    margin: 0px;

    overflow: hidden;

    span,
    a {
        font-family: Roboto;
    }
}

#main-page {
    width: 100%;
    height: 100%;

    background: url("~/assets/images/background.png");
    background-size: cover;

    &-container {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 100%;
        grid-template-areas: "left content right";

        width: 100%;
        height: 100%;

        &-left {
            grid-area: left;
        }

        &-content {
            grid-area: content;

            background: rgb(20, 20, 19, 0.9);

            .category {
                margin-bottom: 5px;

                text-decoration: none;

                &-text {
                    &:hover {
                        color: red;
                    }
                }
            }
        }

        &-right {
            grid-area: right;
        }
    }

    &-Jestress {
        position: absolute;
        bottom: 0px;

        height: 70%;
    }
}
</style>
