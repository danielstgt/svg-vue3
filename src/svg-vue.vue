<template>
    <svg
        :viewBox="svgViewBoxValues"
        xmlns="http://www.w3.org/2000/svg"
        v-html="svgContent"
    >
    </svg>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'SvgVue',

    props: {
        icon: String
    },

    setup(props) {
        const iconPath = computed(() => props.icon.replace(new RegExp('.'.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), '/') + '.svg');
        const svgString = computed(() => require(`svg-files-path/${iconPath.value}`).default);
        const svgViewBoxValues = computed(() => svgString ? (/viewBox="([^"]+)"/.exec(svgString.value) || '')[1] : null);
        const svgContent = computed(() => svgString ? svgString.value.replace(/^<svg[^>]*>|<\/svg>$/g, '') : null);

        return { svgViewBoxValues, svgContent };
    },
}
</script>
