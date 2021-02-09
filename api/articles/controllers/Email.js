module.exports = {

    create: async ctx => {

        const email = ctx.request.body.emailAddress;
        const body = ctx.request.body.emailBody;

        await strapi.plugins['email'].services.email.send({
            to: email,
            from: 'admin@strapi.io',
            subject: 'testing email',
            text: body,
        });

        await ctx.send({
            message: "email sent from post request"
        })
    }
}