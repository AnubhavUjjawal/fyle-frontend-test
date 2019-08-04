<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <b-table striped hover :items="items" :fields="fields" :busy="isBusy" :per-page="perPage" :current-page="currentPage" responsive outlined>
        <div slot="table-busy" class="text-center text-info my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
        </div>
    </b-table>
  </div>
</template>

<script>
  export default {
    name: "BankTable",
    data() {
        // console.log("chainging data", this.props)
        return {
            fields: ["ifsc", "branch", "address", "city", "district", "state", "bank_name"],
            currentPage: 1,
        }
    },
    computed: {
        isBusy() {
            return this.items.length > 0 ? false:true;
        },
        rows() {
            return this.items.length;
        }
    },
    props: ["items", "perPage"]
  }
</script>