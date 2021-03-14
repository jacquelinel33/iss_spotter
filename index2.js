

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

// fetchMyIP()
//   .then(body => fetchCoordsByIP(body))
//   .then(body => fetchISSFlyOverTimes(body))
//   .then(body => console.log(body));

const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });