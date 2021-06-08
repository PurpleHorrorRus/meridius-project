<template>
    <a class="main-page-project-item" :href="project.href">
        <img class="main-page-project-item-icon" :src="project.icon">
        <div class="main-page-project-item-info">
            <span class="main-page-project-item-info-title" v-text="project.title" />
            <span class="main-page-project-item-info-description" v-text="project.description" />
        </div>
    </a>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss">
.main-page-project-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    width: 100%;

    margin-top: 10px;

    text-decoration: none;

    &:hover {
        .main-page-project-item-info-title {
            color: red;
        }
    }

    * {
        cursor: pointer;
    }

    &-icon {
        width: 60px;
    }

    &-info {
        display: flex;
        flex-wrap: wrap;

        span {
            width: 100%;
        }

        &-description {
            color: #bbbbbb;
        }
    }
}
</style>
