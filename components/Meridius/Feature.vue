<template>
    <div class="feature">
        <div class="feature-icon">
            <font-awesome-icon :icon="feature.icon" :style="{ color: feature.color || '#fff' }" />
        </div>
        <span class="feature-label" v-text="feature.text" />
    </div>
</template>

<script>
export default {
    props: {
        feature: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss">
.feature {
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "icon label";

    margin-bottom: 10px;

    font-size: 14pt;

    .feature-label {
        grid-area: label;
        display: inline-block;
    }

    .feature-icon {
        grid-area: icon;
        display: block;
        width: 100%;
        text-align: center;

        svg {
            color: #fff;
        }
    }
}
</style>