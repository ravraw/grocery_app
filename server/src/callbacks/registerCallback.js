const nodemailer = require("nodemailer");
const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: "cross.aisle.app@gmail.com",
    pass: "1234567890Kk"
  }
};
const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(
      "/register is ready to send messages from cross.aisle.app@gmail.com!"
    );
  }
});
module.exports = function registerCallback(req, res) {
  const { email, password } = JSON.parse(req.body);

  console.log("email", email);
  const line1 = `<h2>Welcome to Cross Aisle!</h2></br>`;
  const line2 = "<h2>Your registration is successful.</h2></br>";
  const line3 =
    "<h2>Now you can start ordering groceries from anywhere.</h2></br>";
  const line4 = "<h1><a href='http://localhost:3000'>Cross Aisle</a></h1>";
  const content = line1 + line2 + line3 + line4;
  const mail = {
    from: "cross.aisle.app@gmail.com",
    to: email,
    subject: "Welcome to Cross Aisle!",
    html: content
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(400).send("Failed to send email!!");
    } else {
      res.status(200).send("Registration confirmation has been sent");
    }
  });
  if (email && password) {
    res.status(200).send("Status Code 200!! Registration succeeded!!!");
  }
};
