<template>
  <div id="app">
    <Applications />
  </div>
</template>

<script>
import Applications from './pages/applications'

export default {
  name: 'App',
  components: {
    Applications
  }
}
</script>

<style>
@import "assets/css/_main.scss";

body {
  background: #f4f5fa;
}
</style>
