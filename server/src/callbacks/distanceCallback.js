module.exports = function distanceCallback(req, res) {
  const stores = {
    superstore: [
      "5858 Signal Hill Centre SW, Calgary, Alberta, Canada",
      "20 Heritage Meadows Way SE, Calgary, Alberta, Canada",
      "3575 20 Ave NE, Calgary, Alberta, Canada",
      "100 Country Village Rd NE, Calgary, Alberta, Canada",
      "4700 130 Ave SE, Calgary, Alberta, Canada"
    ],
    walmart: [
      "1212 37 St SW, Calgary, Alberta, Canada",
      "9650 Macleod Trail, Calgary, Alberta, Canada",
      "3800 Memorial Dr, Calgary, Alberta, Canada",
      "1110 57 Ave NE, Calgary, Alberta, Canada",
      "5005 Northland Dr NW, Calgary, Alberta, Canada",
      "4705 130 Ave SE, Calgary, Alberta, Canada"
    ]
  };
  const distance = require("google-distance-matrix");
  const { deliveryAddress, storeName } = JSON.parse(req.body);
  console.log("deliveryAddress", deliveryAddress);

  const origins = [deliveryAddress];
  const destinations = stores[storeName];

  distance.key("AIzaSyD5tIgFoKnBfLJb5a0ao2CHcEYdYiQME_c");
  distance.units("imperial");

  distance.matrix(origins, destinations, function(err, distances) {
    if (err) {
      return console.log(err);
    }
    if (!distances) {
      return console.log("no distances");
    }
    if (distances.status == "OK") {
      let shortestDistance = Infinity;
      let shortestAddress = "";
      const distanceArr = [];
      for (let i = 0; i < origins.length; i++) {
        for (let j = 0; j < destinations.length; j++) {
          const origin = distances.origin_addresses[i];
          const destination = distances.destination_addresses[j];
          if (distances.rows[0].elements[j].status == "OK") {
            const distance = distances.rows[i].elements[j].distance.text;
            const numberDistance = Number(distance.slice(0, -2));
            if (shortestDistance > numberDistance) {
              shortestDistance = numberDistance;
              shortestAddress = destination;
            }
          } else {
            console.log(
              destination + " is not reachable by land from " + origin
            );
          }
        }
      }
      res.status(200).send({ shortestAddress, shortestDistance });
    }
  });
};
