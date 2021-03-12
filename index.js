//require and run our main fetch function
// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIp } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
// fetchCoordsByIp('142.113.219.242', (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', data)
// });

// const { fetchISSFlyOverTimes } = require('./iss');
// const coordsInput = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(coordsInput, (error, data) => {
//   if (error) {
//     console.log("Please enter correct longitude and latitude", error);
//     return;
//   }
//   console.log('It worked!:', data);
// });

const nextISSTimesForMyLocation = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});