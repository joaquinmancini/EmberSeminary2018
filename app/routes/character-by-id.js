import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    ajax: service(),
    model(params){
        console.log(params['character_id']);
        let requestUrl = 'https://gateway.marvel.com:443/v1/public/characters?'
        + params['character_id'] + '&apikey=cc6b1d2786d4716cfca5d74b7f9d4d35';
        return this.get('ajax').request(requestUrl);    
        }
});
