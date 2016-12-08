'use strict';

const commands = {
    isLoaded () {
      return this
        .waitForElementVisible('@npmLovesYou', 5000);
      }
};


module.exports = {
  commands: [commands],
  elements: {
  firstSearchResult: 'div.content-column > ul.search-results > li',
  npmLovesYou: '.npm-loves-you'
  }
};

  // positive search: h2 >!= 0 and href =.search value
  // negative search: h2=0 and href =.search value
