<template>
    <div id="main-page-container-content-header">
        <div id="main-page-container-content-header-name">
            <span id="main-page-container-content-header-name-Infinite" v-text="'Infinite'" />
            <span id="main-page-container-content-header-name-Horror" v-text="'Horror'" />
        </div>
        <span id="main-page-container-content-header-welcome" v-text="'Welcome to the Page'" />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@font-face {
    font-family: "Arisawa-Kaisho";
    src: url("~/assets/fonts/Arisawa-Kaisho.ttf");
}

#main-page-container-content-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    height: max-content;

    &-name {
        display: flex;
        justify-content: center;
        gap: 20px;

        width: 100%;

        &-Infinite,
        &-Horror {
            font-family: "Arisawa-Kaisho";
            font-size: 72pt;
        }

        &-Infinite {
            letter-spacing: -20px;
        }

        &-Horror {
            color: #ff0000;
            letter-spacing: -15px;
        }
    }

    &-welcome {
        font-family: "Arisawa-Kaisho";
        font-size: 24pt;
        letter-spacing: -6px;
    }
}
</style>
