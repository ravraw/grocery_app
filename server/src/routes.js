module.exports = function routes(app) {
  const chargeCallback = require("./callbacks/chargeCallback.js");
  app.post("/charge", async (req, res) => {
    chargeCallback(req, res);
  });

  const registerCallback = require("./callbacks/registerCallback.js");
  app.post("/register", async (req, res) => {
    registerCallback(req, res);
  });

  const distanceCallback = require("./callbacks/distanceCallback.js");
  app.post("/distances", async (req, res) => {
    distanceCallback(req, res);
  });
};
