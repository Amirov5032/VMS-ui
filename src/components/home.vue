<template>
<div class="home-route">
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
      <md-list-item  to="/components/home.vue">Home</md-list-item>

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
    </div>
</<template>
    
    <script>
    export default {
        name: 'home',
        data(){

        }
    }
    </script>


    <style>
    
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.md-card-style {
  width: 300px;
  margin-left: 78%;
  margin-top: 4%;
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
    
    
