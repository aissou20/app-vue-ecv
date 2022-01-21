<template>
  <div class="users-lists">
    <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

  </div>

</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      headers: [
        {
          text: 'Nom',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {text: 'Email', value: 'email'},
        {text: 'Action', value: 'Modifier'}

      ],
      users: [],
    }
  },
  async mounted() {
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => (this.users = data));

  },
};
</script>

<style scoped>
.users-lists {
  margin-left: 1em;
  margin-right: 1em;
}

</style>