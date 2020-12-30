<script>
import { defineComponent } from 'vue';
import SvgVue from '@/svg-vue.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    SvgVue
  }
});
</script>

<template>
  <div id="app">
    <svg-vue />
  </div>
</template>
