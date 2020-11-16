// Altro possibile Bonus: gestire una funzione con un evento nel modo Vue.

// Print a message on h1, using data
var app = new Vue({
  el: '#root',
  data: {
    message: 'Hello, this is one of my favourite Pokémon!',
    image: 'img/Togepi.gif', //Bonus 1: Add an img
    evo: 'Evolve!',
    restart: 'Restart!'
  },
  methods: {
    changeImg: function() {
      if (this.image === 'img/Togepi.gif'){
        this.image = 'img/Togetic.gif'
      }else if (this.image === 'img/Togetic.gif'){
        this.image = 'img/Togekiss.gif';
        this.evo = 'Restart!'
      }else if (this.image === 'img/Togekiss.gif'){
        this.image = 'img/Togepi.gif';
        this.evo = 'Evolve!'
      }
    }
  }
});
