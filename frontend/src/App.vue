<template>
  <div id="app">
    <Something></Something>
    <!-- <control-panel/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Something from './Something.vue';
import ControlPanel from './ControlPanel.vue';

@Component({
  components: {
    Something,
    ControlPanel,
  },
})
export default class App extends Vue {
}
</script>

<style>
body {
  margin: 0 0 0 0;
}
</style>
