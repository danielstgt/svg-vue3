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

    data() {
        return {
            svgString: require(`svg-files-path/${this.getIconPath()}`).default,
            svgViewBoxValues: computed(() => this.svgString ? (/viewBox="([^"]+)"/.exec(this.svgString) || '')[1] : null),
            svgContent: computed(() => this.svgString ? this.svgString.replace(/^<svg[^>]*>|<\/svg>$/g, '') : null),
        }
    },

    methods: {
        getIconPath() {
            return this.$props.icon.replace(new RegExp('.'.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), '/') + '.svg';
        },
    },
}
</script>
