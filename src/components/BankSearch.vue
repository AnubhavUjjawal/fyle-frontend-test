<template>
  <div>
    <b-col sm="3">
      <label for="Search here">Search</label>
    </b-col>
    <b-col sm="8">
      <b-form-input :value="filter" @input="updateBankSearch" placeholder="Enter Bank Name, City, etc.."></b-form-input>
    </b-col>
  </div>
</template>

<script>
  export default {
    name: "BankSearch",
    props: ["value"],
    data() {
      return {
        filter: this.value
      }
    },
    methods: {
      updateBankSearch(val){
        this.$emit("input", val) 
      }
    }
  }
</script>