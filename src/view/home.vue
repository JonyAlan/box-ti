<template>
  <div class="container align-center">

    <b-modal id="modal-user"  >
      <template >
        <b-card 
        :img-src="userDate.avatar_url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 10rem,"
        class="mb-2"
      >
      </b-card>
      </template>
      <div class="d-block text-center">
        <h5 v-if="userDate.name">Nome: <h6>{{userDate.name}}</h6></h5>
        <h5 v-if="userDate.login">Login: {{userDate.login}}</h5>
        <h5 v-if="userDate.bio">Bio: {{userDate.bio}}</h5>
        <h5 v-if="userDate.followers">Seguidores: {{userDate.followers}}</h5>
      </div> 
    </b-modal>


    <div class="row justify-content-center align-items-center">
      <b-card
        title="Busca de perfis"
        img-src="https://boxti.com.br/wp-content/uploads/2020/12/imagem-hero.png"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-form-input
          class="my-3"
          sm="3"
          v-model="username"
          placeholder="Digite o nome"
        ></b-form-input>
        <b-button @click="changeUser()" variant="primary">Buscar</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.services";
import Swal from "sweetalert2";

export default {
  components: {
    // List,
  },
  data() {
    return {
      title: "Home",
      username: "",
      userDate: [],
    };
  },
  mounted() {
    this.username = "";
  },
  methods: {
    changeUser() {
      var self = this

      UserService.getUser(this.username).then(
        (response) => {
          let resp = response.data;

          self.userDate = resp
          this.$bvModal.show('modal-user')
  
        },
        (error) => {
          console.log("🚀 ~ error", error);
          Swal.fire({
            icon: "info",
            title: "",
            text: "Nenhum usuário encontrado",
          });
        }
      );
    },
    detailUser() {
      var self = this

      UserService.getUserDetal(this.username).then(
        (response) => {
          let resp = response.data;

          self.userDate = resp
          this.$bvModal.show('modal-user')
  
        },
        (error) => {
          console.log("🚀 ~ error", error);
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
  .avatar-wrapper {
    height: 62px;
    width: 62px;
  }
  .form {
    width: 50%;
  }
</style>