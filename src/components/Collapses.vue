<template>
      <div class="accordion" role="tablist"> 
        <b-card no-body class="mb-1 text-black">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info">Nome</b-button>
          </b-card-header>
          <b-collapse id='accordion-1' visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <h5 v-if="info.name">Nome: <h6>{{info.name}}</h6></h5>
              <h5 v-if="info.login">Login: {{info.login}}</h5>
              <h5 v-if="info.bio">Bio: {{info.bio}}</h5>
              <h5 v-if="info.followers">Seguidores: {{info.followers}}</h5>
              <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>  
      </div> 
</template>

<script>
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
    };
  },
  mounted() { 
  },
 
}
</script>
 
<style scoped>
 
</style>
