<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Settings
      </v-card-title>

      <div class="pa-8">
        Welcome visitor from {{ country }}
        <country-select
          v-model="country"
          :country.sync="country"
          />
        <v-switch
          :label="`Dark Mode: ${$vuetify.theme.dark}`"
          v-model="$vuetify.theme.dark">
        </v-switch>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import CountrySelect from "@/components/CountrySelect.vue";

export default Vue.extend({
  name: "Settings",
  components: {CountrySelect},
  data: () => {
    return {
      country: "",
      darkTheme: true
    };
  }
});
</script>
