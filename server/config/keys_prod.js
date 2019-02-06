module.exports = {
  mongoURI: process.env.PORTFOLIO_MONGO_URI,
  secretOrKey: process.env.PORTFOLIO_SECRET_OR_KEY,
  mailHost: process.env.PORTFOLIO_MAIL_HOST,
  mailUser: process.env.PORTFOLIO_MAIL_USER,
  mailPass: process.env.PORTFOLIO_MAIL_PASS,
  receivingMail: process.env.PORTFOLIO_RECEIVING_MAIL
};
