<template>
  <div class="">
    <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Dashboard <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Analytics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Export</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    data () {
      return {
        navbar: "asd"
      }
    },
    created() {
      // this.fetchListElement()
    },
    methods: {
      fetchListElement() {
        // console.log(this.panelActive)
      }
    },
  }
</script>

<style>
</style>
