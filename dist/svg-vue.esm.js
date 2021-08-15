import { computed, openBlock, createBlock, mergeProps } from 'vue';

var script = {
  name: 'SvgVue',
  props: {
    icon: String
  },

  setup(props) {
    const iconPath = computed(() => props.icon.replace(new RegExp('.'.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), '/') + '.svg');
    const svgString = computed(() => require(`svg-files-path/${iconPath.value}`).default);
    const svgAttributes = computed(() => {
      if (!svgString) return {};
      let wrapper = document.createElement('div');
      wrapper.innerHTML = svgString.value;
      let attributesList = wrapper.firstElementChild.attributes;
      let attributes = {};
      Object.keys(attributesList).map(i => attributes[attributesList[i].name] = attributesList[i].value);
      return attributes;
    });
    const svgContent = computed(() => svgString ? svgString.value.replace(/^<svg[^>]*>|<\/svg>$/g, '') : null);
    return {
      svgAttributes,
      svgContent
    };
  }

};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", mergeProps($setup.svgAttributes, {
    innerHTML: $setup.svgContent
  }), null, 16, ["innerHTML"]);
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
