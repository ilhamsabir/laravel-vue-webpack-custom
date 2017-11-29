<template>
  <div class="">
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">Example Component</div>
            <div class="panel-body">
              THis is dashboard
              <router-link to="/builder/12">Go to builder</router-link>
              <a href="./app#/builder/34">goto</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Sidebar from './Sidebar.vue'

  export default {
    name: 'Dashboard',
    components: {
      'app-navbar': Navbar,
      'app-sidebar': Sidebar
    },
    data () {
      return {
        panelActive: "panel-elements"
      }
    },
    created() {
      this.fetchListElement()
    },
    methods: {
      fetchListElement() {
        console.log(this.panelActive)
      }
    },
  }
</script>

<style>
</style>
