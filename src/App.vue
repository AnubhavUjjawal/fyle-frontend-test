<template>
  <b-container fluid>
    <NavBar />
    <br />
    <b-row>
      <b-col>
        <BankSearch v-model="searchText"/>
      </b-col>
      <b-col>
        <ItemsPerPage v-model="perPage" />
      </b-col>
    </b-row>
    <br />
    <BankTable :items="items" :perPage="perPage" :filter="searchText"/>
  </b-container>
</template>

<script>
import NavBar from "./components/NavBar";

import BankSearch from "./components/BankSearch";
import BankTable from "./components/BankTable";
import ItemsPerPage from "./components/ItemsPerPage";

import { loadBanks } from "./api/loadBanks";
export default {
  name: "app",
  components: {
    NavBar,
    BankSearch,
    BankTable,
    ItemsPerPage
  },
  created() {
    loadBanks().then(data => {
      this.items = data;
    });
  },
  data() {
    return {
      items: [],
      perPage: 6,
      searchText: ""
    };
  }
  // updated(){
  //   console.log(this.searchText)
  // }
};
</script>
