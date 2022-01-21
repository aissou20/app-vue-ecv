<template>
  <div class="stepper">

    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1"
        >
          Email
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2"
        >
          Mot de passe
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">
          Adresse
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4">
          CGV
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step step="5">
          Récapitulatif
        </v-stepper-step>

      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-text-field
              label="Email"
              outline
              v-model="$store.state.email"
          ></v-text-field>

          <v-btn
              color="primary"
              @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-text-field
              label="Mot de passe"
              outline
              v-model="$store.state.password"
          ></v-text-field>

          <v-btn
              color="primary"
              @click="e1 = 3"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-text-field
              label="Adresse"
              outline
              v-model="$store.state.address"
          ></v-text-field>

          <v-btn
              color="primary"
              @click="e1 = 4"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-checkbox
              label="CGV"
              v-model="$store.state.cgv"
          ></v-checkbox>

          <v-btn
              color="primary"
              @click="e1 = 5"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="5">
          <resume>

          </resume>
          <v-btn
              color="primary"
              @click="e1 = 1"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import Resume from "../components/Resume";

export default {
  name: "Stepper",
  components: {
    Resume
  },
  data() {
    return {
      e1: 1,
    }
  },
}
</script>

<style scoped>
.stepper {
  margin-left: 2em;
  margin-right: 2em;
}
</style>