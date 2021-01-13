module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'mailtrap',
    providerOptions: {
      user: env('MAILTRAP_USER', '4a7a5c351e0a92'),
      password: env('MAILTRAP_PASSWORD', 'df1ffa9754dafd')
    },
    settings: {
      defaultFrom: env('MAILTRAP_DEFAULT_FROM', 'default@value.com'),
      defaultReplyTo: env('MAILTRAP_DEFAULT_REPLY_TO', 'default@value.com'),
    },
  }
  // ...
});