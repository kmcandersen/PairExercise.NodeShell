const request = require("request");

module.exports = function(address) {
  request(address, function(error, response, body) {
    if (error) {
      throw error;
    } else {
      //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      //console.log("body:", body); // Print the HTML for the Google homepage.
      process.stdout.write(body);
      process.stdout.write("prompt >");
    }
  });
};
