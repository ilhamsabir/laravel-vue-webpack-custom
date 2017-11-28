<template>
  <div class="container">
      <div class="row">
          <div class="col-md-8 col-md-offset-2">
              <div class="panel panel-default">
                  <div class="panel-heading">Example Component</div>
                  <div class="panel-body">
                      I'm an example component! tester
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 5rem;
  }
  .main-content {
  }
</style>
