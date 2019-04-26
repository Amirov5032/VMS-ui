<template>
  <div>
    <md-list class="md-list-style">
      <md-list-item to="/components/home">
        <p>THE VMS</p>
      </md-list-item>
      <md-list-item to="/components/home">Home</md-list-item>

      <md-list-item>
        <span class="md-list-item-text">Zones</span>
      </md-list-item>

      <md-list-item>
        <span class="md-list-item-text">Assets</span>
      </md-list-item>

      <md-list-item>
        <span class="md-list-item-text">Servers</span>
      </md-list-item>

      <md-list-item>
        <span class="md-list-item-text">Statistics</span>
      </md-list-item>

      <md-list-item>
        <span class="md-list-item-text">Vulnerabilities</span>
      </md-list-item>
    </md-list>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>
  </div>
</template>


<script>
export default {
  name: "zones",
  data() {
    return {
      perPage: 9,
      currentPage: 1,
      items: [
        { id: 1, Zone_name: "North Bank Zone", operation: "" },
        { id: 2, Zone_name: "North Bank Zone", operation: "" },
        { id: 3, Zone_name: "North Bank Zone", operation: "" },
        { id: 4, Zone_name: "North Bank Zone", operation: "" },
        { id: 5, Zone_name: "North Bank Zone", operation: "" },
        { id: 6, Zone_name: "North Bank Zone", operation: "" },
        { id: 8, Zone_name: "North Bank Zone", operation: "" },
        { id: 10, Zone_name: "North Bank Zone", operation: "" },
        { id: 11, Zone_name: "North Bank Zone", operation: "" },
        { id: 12, Zone_name: "North Bank Zone", operation: "" },
        { id: 13, Zone_name: "North Bank Zone", operation: "" },
        { id: 14, Zone_name: "North Bank Zone", operation: "" },
        { id: 15, Zone_name: "North Bank Zone", operation: "" },
        { id: 16, Zone_name: "North Bank Zone", operation: "" },
        { id: 17, Zone_name: "North Bank Zone", operation: "" },
        { id: 18, Zone_name: "North Bank Zone", operation: "" }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>


<style>
.md-list-style {
  width: 220px;
  max-width: 100%;
  display: inline-block !important;
  background-color: rgb(56, 54, 54);
  vertical-align: top;
  border: 1px solid gray;
  position: fixed !important;
  left: 30px;
  top: 30px;
  height: 90vh;
  color: azure;
}
</style>
