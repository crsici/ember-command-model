import Component from '@ember/component';

export default Component.extend({
  actions: {
    changeUserName(name) {
      let validationModel = this.model;
      this.model.modifyName('Hard code new name');
      this.model.validate().then(() => {
        console.log(validationModel.get('validations.errors'));      
      });
    }
  }
});
