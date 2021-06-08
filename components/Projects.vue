<template>
    <div id="main-page-container-content-projects">
        <a id="main-page-container-content-projects-title" class="category" href="https://github.com/PurpleHorrorRus/">
            <span
                id="main-page-container-content-projects-title-text"
                class="category-text"
                v-text="'Мои крупные проекты:'"
            />
        </a>

        <div id="main-page-container-content-projects-list">
            <Project v-for="project of projects" :key="project.title" :project="project" />
        </div>
    </div>
</template>

<script>
import Project from "~/components/Project";

import MeridiusIcon from "~/assets/images/Meridius.png";
import OverlayIcon from "~/assets/images/StreamOverlay.png";

export default {
    components: {
        Project
    },
    data: () => ({
        projects: [
            {
                title: "Meridius",
                icon: MeridiusIcon,
                description: "Meridius - это бесплатный неофициальный музыкальный плеер для социальной сети ВКонтакте",
                href: "/meridius"
            },
            {
                title: "Stream Overlay",
                icon: OverlayIcon,
                description:
                    "Оверлей для стримеров с одним монитором. \
                Выводится поверх окон, поддерживает чат Twitch и кастомные виджеты",
                href: "https://github.com/PurpleHorrorRus/StreamOverlay"
            }
        ]
    })
};
</script>

<style lang="scss">
#main-page-container-content-projects {
    display: grid;

    padding: 20px;
}
</style>
