'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('content-management')
      .service('myService')
      .getWelcomeMessage();
  },
});
