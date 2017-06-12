module.exports = {
  selectors: {
    mainMenu: 'div.nwt-global-navigation-v2__home > a.nwt-global-navigation-v2__link',
    venueSettingsButton: "#nwt-global-navigation-list > li:nth-child(2) > a.nwt-global-navigation-v2__list-link[href^='/venue-settings']",
    servicesButton: "#nwt-global-navigation-list > li.open ul.nwt-global-navigation-v2__sublist a[href^='/venue-settings']"
  },

  openMainMenu: function() {
    return this.client
      .waitForElementVisible(this.selectors.mainMenu, 5000)
      .assert.visible(this.selectors.mainMenu)
      .click(this.selectors.mainMenu);
  },

  goToServices: function() {
    return this.client
      .waitForElementVisible(this.selectors.venueSettingsButton, 3000)
      .assert.visible(this.selectors.venueSettingsButton)
      .click(this.selectors.venueSettingsButton)
      .assert.visible(this.selectors.servicesButton)
      .click(this.selectors.servicesButton)
      .waitForElementVisible('div.settings__main', 5000)
      .assert.title("Settings");
  }
};

