import Ember from 'ember';

export default Ember.Component.extend({
  addNewBusiness: false,
  actions: {
    businessFormShow() {
      this.set('addNewBusiness', true);
    },

    saveBusiness() {
      var params = {
        businessName: this.get('businessName') ? this.get('businessName') : "",
        hours: this.get('hours') ? this.get('hours') : "",
        addr1: this.get('addr1') ? this.get('addr1') : "",
        addr2: this.get('addr2') ? this.get('addr2') : "",
        city: this.get('city') ? this.get('city') : "Portland",
        state: this.get('state') ? this.get('state') : "OR",
        zip: this.get('zip') ? this.get('zip') : "",
        phone: this.get('phone') ? this.get('phone') : "",
        image: this.get('image') ? this.get('image') : "https://dummyimage.com/600x400/000/fff.png&text=??",
        yearsInBusiness: this.get('yearsInBusiness') ? this.get('yearsInBusiness') : "",
        description: this.get('description') ? this.get('description') : "",
        website: this.get('website') ? this.get('website') : "",
        category: this.get('category')
      };
      this.set('addNewBusiness', false);
      this.sendAction('saveBusiness', params);
      this.set('businessName', "");
      this.set('hours', "");
      this.set('addr1', "");
      this.set('addr2', "");
      this.set('zip', "");
      this.set('phone', "");
      this.set('yearsInBusiness', "");
      this.set('description', "");
    }
  }
});