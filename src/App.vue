<template> 
  <vue-page-transition id="app" name="fade">
    <router-view></router-view> 
  </vue-page-transition> 
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  #app {
    min-height: 100vh;
    display: flex; 
    background-color: #F0F2F8;
    font-family: Avenir, Helvetica, Arial, sans-serif;
 
    text-align: center;
    color: #2c3e50;
    padding-top:  80px;
  } 
  .primary {
    background-color: #1F2741;
    font-size: 1em;
  }
  .swal2-styled.swal2-confirm { 
    background-color: #1f274182 !important;
    color: #fff;
    font-size: 1em;
    border: none;
  }
  .swal2-styled.swal2-confirm:active { 
 
    border: none !important;
  }
  .text-black{
    color: black;
  }
</style>
