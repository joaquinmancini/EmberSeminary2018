import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      name:'thor',
      weapon:'hommer'
    };
  },
  actions:{
    doSearch(){
      console.log("llego");
    }
  }
});
