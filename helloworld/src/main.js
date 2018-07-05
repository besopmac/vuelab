import Vue from 'vue'
//import App from './App.vue'

new Vue({
  el: '#app',
  //render: h => h(App)

  // render : (createElement) => {
  //   return createElement('header', { attrs: {id: 'elemento'} },
  //   [
  //     createElement('h1', 'Titulo do Post'),
  //     createElement('p', 'Conteúdo do post')
  //   ])
  // }

  // Using JSX
  render (h) {
    return (
      <header>
        <h1>Título do post</h1>
        <p>Conteudo da postagem com JSX</p>
      </header>
    )
  }
})
