<template>
<div class="recap">
  <pre> {{recapdatas}}</pre>
</div>
</template>

<script>
export default {
  name: "Resume",
  computed: {
    recapdatas(){
      const values={
        email: this.$store.state.email,
        password: this.$store.state.password,
        address: this.$store.state.address,
        cgv: this.$store.state.cgv,
      }
      return values;
    }
  }
}
</script>

<style scoped>

</style>