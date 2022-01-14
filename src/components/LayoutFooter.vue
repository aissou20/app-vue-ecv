<template>
<div class="footer">
  <footer class="footer">
    <ul>
      <li v-for="link in links" :key="link.id">
        {{ link.title }}
      </li>
    </ul>
  </footer>

</div>
</template>

<script>
export default {
  name: "LayoutFooter",
  data() {
    return {
      links: [
        {id: 1, title: 'Lien 1'},
        {id: 2, title: 'Lien 2'},
        {id: 3, title: 'Lien 3'}
      ],
    }
  },
}
</script>

<style scoped>

</style>