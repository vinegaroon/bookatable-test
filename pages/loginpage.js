module.exports = {
  selectors: {
    userField: '#Email',
    passwordField: '#Password'
  },

  load: function () {
    return this.client
      .url('https://erb.bookatable.com')
      //.expect.element('body').to.be.present.before(1000)
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1.sso-title-login', 'Log in');
  },

  login: function(username, password) {
    return this.client
      .assert.visible(this.selectors.userField)
      .setValue(this.selectors.userField, username)
      .assert.visible(this.selectors.passwordField)
      .setValue(this.selectors.passwordField, password)
      .click('input[data-event-label="Log in Button Clicked"]');
  }
};

