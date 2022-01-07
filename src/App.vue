<template>
  <div id="app">
    <nav class="navbar">
      <span>
        <img :src="imageSrc" alt="logo">
      </span>
      <ul>
        <li  v-for="menu in menus" :key="menu.id">
          {{ menu.title }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      titleContent: 'Hello le monde',
      result: 0,
      menus: [
        {id: 1, title: 'Menu 1'},
        {id: 2, title: 'Menu 2'},
        {id: 3, title: 'Menu 3'}
      ],
      links: [
        {id: 1, title: 'Lien 1'},
        {id: 2, title: 'Lien 2'},
        {id: 3, title: 'Lien 3'}
      ],
      imageSrc:'/assets/logo.png'
    }
  },
}
</script>
<style lang="scss">

</style>
