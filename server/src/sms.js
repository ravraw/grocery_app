// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

require('dotenv').config();
// const accountSid = process.env.DB_ACCOUNTSID;
// const authToken = process.env.DB_AUTHTOKEN
const accountSid = 'AC44c296aef0acfd3c9d89eb43323cc1c1';
const authToken = 'a4213c0a7d60fe51572089a36504fb34'
const client = require('twilio')(accountSid, authToken);



// console.log("authToken",authToken)
client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+15878530743',
    to: '+1 780-708-4684'
  })
  .then(message => console.log(message.sid))
  .done();