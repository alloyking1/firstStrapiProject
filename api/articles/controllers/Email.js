module.exports = {
    index: async ctx => {
        await strapi.plugins['email'].services.email.send({
            to: 'alloyking1@gmail.com',
            from: 'admin@strapi.io',
            subject: 'testing email',
            text: `i am testing this email sending feature`,
        });
    }
}