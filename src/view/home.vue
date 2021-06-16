<template>
  <div class="container align-center"> 
    <div class="row justify-content-center align-items-center">
      <b-card
        title="Busca de perfis Github"
        img-src="https://boxti.com.br/wp-content/uploads/2020/12/imagem-hero.png"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="my-2"
      >
        <b-form-input
          class="my-3"
          sm="3"
          v-model="username"
          placeholder="Digite o nome do usuário"
        ></b-form-input>
        <b-button @click="changeUser()" :disabled="loading" class="primary">
          <div v-if="loading" class="lds-dual-ring"></div>
          <font v-else>Buscar</font>
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.services";
import Swal from "sweetalert2";
import { mapActions } from "vuex";

export default {
  components: {
    // List,
  },
  data() {
    return {
      title: "Home",
      username: "",
      loading: false, 
    };
  },
  mounted() {
    this.username = ""; 
  },
  methods: {
    ...mapActions(["setUser"]),
    changeUser() {
      this.loading = true;
      UserService.getUser(this.username).then(
        (response) => {
          let resp = response.data; 

          setTimeout(() => {
            this.loading = false; 
            this.setUser(resp);
            this.$router.push('/detail')
          }, 1000);
  
        },
        () => {
          this.loading = false;
          Swal.fire({
            icon: "info",
            title: "",
            text: "Nenhum usuário encontrado",
          });
        }
      );
    },
  
  },
};
</script>

<style scoped> 
  .lds-dual-ring {  
    display: flex; 
    justify-content: center;  
  }
  .lds-dual-ring:after {
    content: " ";
    display: flex; 
    width: 22px;
    height: 24px; 
    border-radius: 50%; 
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>