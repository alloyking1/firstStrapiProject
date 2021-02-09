module.exports = {
    index: async ctx => {
        // await strapi.plugins['email'].services.email.send({
        //     to: 'alloyking1@gmail.com',
        //     from: 'admin@strapi.io',
        //     subject: 'testing email',
        //     text: 'this is a test email.',
        // });
        // console.log(ctx.response.body);

        await ctx.send({
            message: "email sent"
        });

        
    },

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