<template>
  <v-autocomplete
      @change="handleUpdate"
      :v-model="selectedCountry"
      label="Country"
      :items="countries"/>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CountrySelect",
  props: {
    country: {
      type: String,
      default: "Singapore"
    }
  },
  data: function () {
    return {
      countries: [
          "UK",
          "USA",
          "Brazil",
          "Singapore",
          "Japan",
          "China",
          "Russia"
      ],
      selectedCountry: `${this.$props.country}`
    };
  },
  methods: {
    handleUpdate() {
      this.$emit("update:country", this.selectedCountry);
    }
  }
});
</script>
