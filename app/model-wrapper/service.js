import { getOwner } from '@ember/application';
import EmberObject, { get, getProperties, set, setProperties } from '@ember/object';
import Service from '@ember/service';

let changeNameAction = EmberObject.create({
  modifyName(name){
    this.set('name', name);
  }
});

export default Service.extend({
  wrapper(target, validationMixin, actions){
    return target.reopen(validationMixin, changeNameAction);
  }
});
