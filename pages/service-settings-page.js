module.exports = {
  selectors: { 
    addServiceMondayButton: "a[analytics-label='Day 1']",
    serviceNameField: '#label',
    addServiceButton: 'input.shift-form__submit',
    shiftConfirmationLabel: 'div.shift-add-confirmation p.shift-add-confirmation__label'
  },

  addMondayService: function(serviceName) {
    // Open the add service form and fill in name
    return this.client
      .waitForElementVisible(this.selectors.addServiceMondayButton, 3000)
      .assert.visible(this.selectors.addServiceMondayButton)
      .click(this.selectors.addServiceMondayButton)
      .waitForElementVisible(this.selectors.serviceNameField, 3000)
      .assert.visible(this.selectors.serviceNameField)
      .setValue(this.selectors.serviceNameField, serviceName)
      .assert.visible(this.selectors.addServiceButton)
      .click(this.selectors.addServiceButton)
      .waitForElementVisible(this.selectors.shiftConfirmationLabel, 6000)
      .assert.containsText(this.selectors.shiftConfirmationLabel, serviceName);
  }

};

