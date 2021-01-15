'use strict';

/**
 * my-custom-plugin.js controller
 *
 * @description: A set of functions called "actions" of the `my-custom-plugin` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.
     await strapi.plugins['email'].services.email.send({
        to: 'alloyking1@gmail.com',
        from: 'admin@strapi.io',
        subject: 'testing email',
        text: `i am testing this email sending feature`,
      });


    // Send 200 `ok`
    await ctx.send({
      message: 'email sent successfully'
    });
  }
};
