import { computed, openBlock, createBlock } from 'vue';

var script = {
  name: 'SvgVue',
  props: {
    icon: String
  },

  setup(props) {
    const getIconPath = () => props.icon.replace(new RegExp('.'.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), '/') + '.svg';

    const svgString = require(`svg-files-path/${getIconPath()}`).default;

    const svgViewBoxValues = computed(() => svgString ? (/viewBox="([^"]+)"/.exec(svgString) || '')[1] : null);
    const svgContent = computed(() => svgString ? svgString.replace(/^<svg[^>]*>|<\/svg>$/g, '') : null);
    return {
      svgViewBoxValues,
      svgContent
    };
  }

};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", {
    viewBox: $setup.svgViewBoxValues,
    xmlns: "http://www.w3.org/2000/svg",
    innerHTML: $setup.svgContent
  }, null, 8, ["viewBox", "innerHTML"]);
}

script.render = render;

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('SvgVue', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
