<template>
  <router-view/>
</template>

<script>
//import axios from 'axios';

export default {
  name: "App",
  created() {

  },
  mounted: {
    //axios.get
  },
  methods: {
    confirm_leaving (evt) {
      const unsaved_changes_warning = "You have unsaved changes. Are you sure you wish to leave?";
      evt.returnValue = unsaved_changes_warning;
      return unsaved_changes_warning;
    }
  },
}
</script>

<style lang="scss">
@import "src/assets/jrc";
@media (prefers-color-scheme: dark) {
  html {
    background: #000;
    color: #fff;
  }
}

@media (prefers-color-scheme: light) {
  html {
    background: #fff;
    color: #000;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0 1.2rem;
}
</style>
