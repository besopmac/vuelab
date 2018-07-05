<template>
  <div id="app">
    <h1 v-once v-text="titulo"></h1>
    <h2>{{ subtitulo }}</h2>
    
    <input v-bind:disabled="tarefas.length == 0" v-model="subtitulo" type="text" placeholder="Descrição">
    <!-- <input :disabled="tarefas.length == 0" v-model="subtitulo" type="text" placeholder="Descrição"> -->

    <div v-if="tarefas.length <= 0">
      Não há tarefas.
    </div>
    <div v-if="tarefas.length > 0">
      Existem {{ tarefas.length }} tarefas.

      <ul>
        <li v-for="tarefa in tarefas" :key="tarefa">{{ tarefa }}</li>
      </ul>
    </div>

    <!-- <button v-on:click="tarefas = []">Limpar</button> -->
    <button @click="tarefas = []">Limpar</button>
  </div>
</template>

<script>
export default {
  name: 'lv-tarefas',
  data () {
    return {
      titulo: 'Lista de Tarefas',
      subtitulo: 'Defina uma descrição',
      tarefas: []
    }
  },
  mounted() {
    // o atributo título não irá se alterar pois usa a diretiva v-once
    setTimeout( () => {
      this.nome = "Bambala",
      this.tarefas = ['Enviar email para o fornecedor', 'Entrevistar o novo estagiário']
    }, 3000 )
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 2.5%;
}

h1, h2 {
  margin: 0 0 15px;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  line-height: 1.5em;
  font-size: .8rem;
  margin: 0;
}

a {
  color: #42b983;
}
</style>
