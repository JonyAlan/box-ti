<template>
  <div class="container"> 
    <b-card class="mb-4" bg-variant="Light" text-variant="white">

      <div class="row flex px-3 d-flex justify-content-end">
        <div class="mb-3">  
          <b-avatar rounded :src="user.avatar_url" size="8rem"></b-avatar>
        </div>
      </div>
        <h5 class="text-black text-left mb-3 ml-2">
          Seja bem vindo, aqui você pode conferir um pouco mais sobre <font class="text-danger">{{user.login}}</font>.
        </h5> 
 
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