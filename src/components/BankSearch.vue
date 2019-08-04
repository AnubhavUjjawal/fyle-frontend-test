<template>
  <div>
    <b-col sm="3">
      <label for="Search here">Search</label>
    </b-col>
    <b-col sm="8">
        <b-form-input v-model="searchText" placeholder="Enter Bank Name, City, etc.."></b-form-input>
    </b-col>
  </div>
</template>

<script>
  export default {
    name: "BankSearch",
    data() {
        return {
            searchText: ""
        }
    }
  }
</script>