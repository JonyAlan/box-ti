<template>
    <div class="card p-3 mb-5 text-black text-left">
      <h6>Nome: {{info.name || 'Não informado'}}</h6>
      <h6>Bio:  {{info.bio || 'Não informado'}}</h6>
      <h6>Repositórios públicos: {{info.public_repos || 'Não informado'}}</h6>
      <h6>Seguidores: {{info.followers || 'Não informado'}}</h6>
      <h6>Seguindo: {{info.following || 'Não informado'}}</h6>

      <div v-for="(item , index) in repositorios" :key="index"  class=" card accordion text-black text-left" role="tablist">  
        
        <b-card no-body class="my-2 ">
          <b-card-header header-tag="header" class="p-1 text-left" role="tab">
            <b-button class="text-left" block v-b-toggle="'accordion-' + index" variant="info">Repositório {{item.name}}</b-button>
          </b-card-header>
          <b-collapse :id="'accordion-' + index" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
 
              <h6>Linguagem:  {{item.language || 'Não informado'}}</h6>
              <h6>Forks: {{item.forks}}</h6>
              <h6>Watchers: {{item.watchers_count }}</h6>
              <h6>Issues abertas: {{item.open_issues_count }}</h6>

              <b-button size="sm" class="mb-2" @click="toRepo(item.html_url)">
                <b-icon icon="arrow-up" aria-hidden="true"></b-icon> Ir para repositório
              </b-button>
 
            </b-card-body>
          </b-collapse>
        </b-card>  
      </div> 

    </div>
</template>

<script>
import UserService from "../services/user.services";

export default {
  name: 'Colapses',
  props: {
    info: {
      type: Object,
      required: false, 
    },
  },
   data() {
    return {
      title: "Colapses",
      repositorios: []
    };
  },
  mounted() { 
    setTimeout(() => {
      this.changeUserRepos();
    }, 1000);
  },
  methods:{
    changeUserRepos() { 

      UserService.getUserRepos(this.info.login).then(
        (response) => {
          this.repositorios = response.data;  
        }
      );
    },
    toRepo(link){
      window.open(link, '_blank');
    }
  }
 
}
</script>
 
<style scoped>
  .text-left{
    text-align: left !important;
  }
  .text-black{
    color: rgb(113, 112, 112);
  }
  .btn-info:hover {
    color: #fff;
    background-color: rgb(35, 38, 41)!important;
    border-color: rgb(36, 40, 44)!important;
  }
  .btn-info {
    color: #fff;
    background-color: rgb(36,41,46)!important;
    border-color:rgb(36,41,46) !important;
  }
  
</style>
