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
      <b-col>
        <b-button @click="viewAllBanks = !viewAllBanks">
          {{ loading? "Loading.." : viewAllBanks ? "Switch to Favorite Banks":"Show all Banks"}}
        </b-button>
      </b-col>
    </b-row>
    <br>
    <BankTable :items="tableItems" :perPage="perPage" :filter="searchText" />
  </b-container>
</template>

<script>
import NavBar from "./components/NavBar";

import BankSearch from "./components/BankSearch";
import BankTable from "./components/BankTable";
import ItemsPerPage from "./components/ItemsPerPage";

import { getBanks, getFavoriteBanks } from "./api/loadBanks";
export default {
  name: "app",
  components: {
    NavBar,
    BankSearch,
    BankTable,
    ItemsPerPage
  },
  created() {
    this.loading = true;
    getBanks().then(data => {
      this.items = data;
      this.loading = false;
    });
  },
  data() {
    return {
      items: [],
      perPage: 6,
      searchText: "",
      viewAllBanks: true,
      loading: false
    };
  },
  computed: {
    tableItems() {
      return this.viewAllBanks?this.items:this.favoriteItems(); 
    }
  },
  methods: {
    favoriteItems() {
      let favBanks = [];
      let favItems = getFavoriteBanks();
      for(let i=0; i<this.items.length; i++) {
        if(favItems[this.items[i].ifsc] == true)
          favBanks.push(this.items[i]);
      }
      if(favBanks.length == 0) {
        favBanks.push({ "district": "nothing to show"});
      }
      return favBanks;
    }
  }
  // updated(){
  //   console.log(this.searchText)
  // }
};
</script>
