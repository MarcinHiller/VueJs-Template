new Vue({
  el:'#vue-app',
  data: {
    name: 'Marcin',
    job: 'Developer',
    surname: 'Hiller',
    website: 'http://inteligo.pl',
    websitetag: '<a class="vueApp" href="http://inteligo.pl">Website</a>',
    debug: true
  },
  methods: {
    welcome: function (){
      return 'Welcome to VueJS';
    },
    test: function(){
      if (this.debug) {
        return 'Debugging On';
      }
    }
  }
});

new Vue({
  el:'#vue-calc',
  data: {
    name: 'Ewa',
    job: 'Designer',
    surname: 'Hiller'
  },
  methods: {}
});
