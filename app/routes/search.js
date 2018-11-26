import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
    doSearch(searchTerm){
      this.transitionTo('search-results', {queryParams:{name:searchTerm}});
    }
  }
});
