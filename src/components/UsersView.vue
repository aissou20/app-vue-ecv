<template>
  <div class="content">
    <div class="content-wrapper">
      <h1> {{ titleContent }}</h1>
      <p> La valeur de la variable est :{{result}}</p>
      <p v-if="total>ajoutAuto"> la valeur de la variable total est : {{total}}</p>
      <p v-if="resultIsNull"> Le paragraphe s'affiche car la variable result est égale à 0 </p>
      <button @click="increment">Incrementer</button>
      <button @click="reset">Reset</button>
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
  },
  methods: {
    increment() {
      this.result++
    },
    reset() {
      this.result = 0
    },
    ajoutAuto(){

    }
  },
  computed: {
    resultIsNull() {
      return this.result === 0;
    },
    total(){
      return this.result+this.ajoutAuto
    }

  },
  mounted() {
    console.log("",this.total)
  },
  watch: {
    result() {
      console.log("la somme a changé")
    },
  },
}
</script>

<style scoped>

</style>