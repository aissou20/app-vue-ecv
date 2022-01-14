<template>
  <div class="header">
    <nav class="navbar">
      <span>
        <img src="../assets/logo.png" alt="logo">
      </span>
      <div class="header_nav">
        <ul>
          <li v-for="menu in menus" :key="menu.id">
            {{ menu.title }}
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",
  data() {
    return {
      titleContent: 'Hello le monde',
      result: 0,
      menus: [
        {id: 1, title: 'Menu 1'},
        {id: 2, title: 'Menu 2'},
        {id: 3, title: 'Menu 3'}
      ],
    }
  },

}
</script>

<style scoped>

</style>