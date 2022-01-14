<template>
  <div id="app">
    <layout-header></layout-header>
    <layout-content></layout-content>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import LayoutContent from "./components/LayoutContent";

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutContent,
    LayoutFooter
  },
  data() {
    return {
      result: 0,
    }
  },
}
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

h1 {
  color: blue;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin: 1em;
}

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.content-wrapper {
  border: solid yellow;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.footer {
  border: solid red;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
