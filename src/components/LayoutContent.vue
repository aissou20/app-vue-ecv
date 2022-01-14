<template>
  <div class="content">
    <div class="content-wrapper">
      <h1> {{ titleContent }}</h1>
      <p> La valeur de la variable est :</p>
      <p> Le paragraphe s'affiche car la variable result est égale à </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutContent",
  data() {
    return {
      titleContent: 'Hello le monde',
      result: 0,
    }
  }
}
</script>

<style scoped>

</style>