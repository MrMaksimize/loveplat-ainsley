module.exports = {
  db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/loveplat2',

  localAuth: true,
  sessionSecret: "Your Session Secret goes here",

};

