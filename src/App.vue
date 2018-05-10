<template>
  <div id="app">
    <site-header></site-header>
    <body-component></body-component>
  </div>
</template>

<script>
import SiteHeader from './components/Header.vue';
import BodyComponent from './components/Body';

export default {
  name: 'app',
  components: { SiteHeader, BodyComponent },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getEntries');
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: $primary-color;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
