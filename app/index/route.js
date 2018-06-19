import Route from '@ember/routing/route';
import EmberObject, { computed, get, set } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';
import Service, { inject as service } from '@ember/service';

const Validations =
  buildValidations({
    name: {
      description: 'name',
      validators: [
        validator('presence', true),
        validator('length', {
          min: 5,
          max: 15
        })
      ]
    }
  });

export default Route.extend({
  modelWrapper: service(),
  model(){
    let user  = this.store.createRecord('user-details', {
        name: 'My User Name'
    });
    return this.get('modelWrapper').wrapper(user, Validations);
  }
});
