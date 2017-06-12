var path = require('path');

module.exports = {
  tags: ['sanity'],

  'Login to Bookatable': function (client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));
    
    client.page.loginpage.load();
    client.page.loginpage.login('omnia.erb+sam-paulin@gmail.com', 'T3ster');
  },

  'Go to the services page': function(client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));

    client.page.homepage.openMainMenu();
    client.page.homepage.goToServices();
  },

  'Add a service on Monday with defaults': function(client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));

    // Can't create a service if one exists with the same name, so add a random number on the end
    client.page['service-settings-page'].addMondayService("Sam's Sweet Service #" + Math.floor(Math.random() * 100000)).end();
  }
};
