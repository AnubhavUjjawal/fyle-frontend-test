<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <b-table
      :items="items"
      :fields="fields"
      :busy="isBusy"
      :per-page="perPage"
      :filter="filter"
      @filtered="onFiltered"
      :current-page="currentPage"
      striped
      hover
      responsive
      outlined
    >
      <div slot="table-busy" class="text-center text-info my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong> Loading...</strong>
      </div>
      <template slot="favorite" slot-scope="items">
        <b-button @click="toggleFavorite(items.item)">
          {{ items.item.favorite ? "Mark as not Favorite" : "Mark as Favorite"  }}
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { toggleFavorites } from "../api/loadBanks";
export default {
  name: "BankTable",
  data() {
    return {
      fields: [
        "ifsc",
        "branch",
        "address",
        "city",
        "district",
        "state",
        "bank_name",
        "favorite"
      ],
      currentPage: 1,
      itemsCount: 0
    };
  },
  computed: {
    isBusy() {
      return this.items.length > 0 ? false : true;
    },
    rows() {
      return this.filter != "" ? this.itemsCount:this.items.length;
    },
  },
  props: ["items", "perPage", "filter"],
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      // console.log(filteredItems)
      this.itemsCount = filteredItems.length;
      this.currentPage = 1;
    },
    toggleFavorite(item) {
      toggleFavorites(item.ifsc, !item.favorite);
      item.favorite = ! item.favorite;
    }
  },
};
</script>