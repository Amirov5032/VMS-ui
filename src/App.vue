<template>
  <div id="app">
    <md-card class="md-card-style">
      <md-card-header>
        <div class="md-title">New Issue on MS Srvers</div>
        <div class="md-subhead">04/13/2019</div>
      </md-card-header>
      <md-card-content>
        <p>A new security issue is reported by Kaspersky</p>
        <md-chip>MS server</md-chip>
      </md-card-content>
    </md-card>

    <md-list class="md-list-style">
      <md-list-item>
        <p>THE VMS</p>
      </md-list-item>
      <md-list-item to="/components/home">Home</md-list-item>

      <md-list-item>
        <span class="md-list-item-text" to="/components/zones">Zones</span>
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
    <div>
      <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.md-chip {
  border: #2c3e50 2px;
  background-color: aqua;
}

.table {
  margin-left: 300px;
  width: 70% !important;
}

.md-card-style {
  width: 300px;
  margin-left: 78%;
  margin-top: 3%;
}

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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
