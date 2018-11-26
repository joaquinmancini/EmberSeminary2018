import DS from 'ember-data';

export default DS.Model.extend({

    name : DS.attr(),
    description : DS.attr(),
    /*image : computedProperty('path' , 'extension' , function(){
        return path + '.' + extension;
    }),*/
    age : DS.attr('number')
});
