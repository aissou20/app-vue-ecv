<template>
  <div class="header">
    <nav class="navbar">
      <span>
        <img src="../assets/logo.png" alt="logo">
      </span>
      <div class="header_nav">
        <ul>
          <li v-for="menu in menus" :key="menu.id">
            <router-link :to="{ name: menu.link }">{{ menu.title }}</router-link>
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
        {id: 1, title: 'Utilisateurs', link:'Users'},
        {id: 2, title: 'Posts',link:'Posts'},
        {id: 3, title: 'Photos',link:'Photos'},
        {id: 4, title: 'Stepper',link:'Stepper'},
        {id: 5, title: 'Administration',link:'Administration'}
      ],
    }
  },

}
</script>

<style scoped>
img{
  width: 20%;
  height: 20%;
}
</style>