<template>
  <b-container fluid>
    <b-col sm="3">
      <label for="Page Size">Page Size</label>
    </b-col>
    <b-col sm="8">
      <b-form-input type="number" :value="itemsPerPage" @input="updateItemsPerPage" min="1"></b-form-input>
    </b-col>
  </b-container>
</template>

<script>
export default {
    name: "ItemsPerPage",
    props: ["value"],
    data: function () {
        return {
            itemsPerPage: this.value,
        }
    },
    methods: {
        updateItemsPerPage(val){
            this.$emit("input", val) 
        }
    }
};
</script>