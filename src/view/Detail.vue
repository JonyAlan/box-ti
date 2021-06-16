<template>
  <div class="container align-center"> 
    <b-card bg-variant="Light" text-variant="white" title="Card Title">
      <b-card-text class="text-black">
        With supporting text below as a natural lead-in to additional content.
      </b-card-text>

      <colapses :info="user"></colapses>
 
      <b-button @click="goHome()" :disabled="loading" class="primary mt-3"> 
        <font>voltar</font>
      </b-button> 

    </b-card>
 
  </div>
</template>

<script>
import { mapActions } from "vuex";
import colapses from "../components/Collapses.vue"

export default {
  components: {
    colapses,
  },
  data() {
    return {
      title: "Detail",
      user: {},
    };
  },
  mounted() { 
    this.user = this.$store.getters['getUser']; 
    console.log("🚀 ~ file: Detail.vue ~ line 52 ~ mounted ~ this.user", this.user)
  },
  methods: {
    ...mapActions(["resetUser"]),

    goHome() {
      this.resetUser();
      this.$router.push('/')
       
    },
  
  },
};
</script>

<style scoped>  
  .lds-dual-ring {  
    display: flex; 
    justify-content: center;  
  } 
</style>