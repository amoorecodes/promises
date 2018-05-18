/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  
  fs.readFile(filePath, (err, textFile) => {
    if (err) {
      callback(err);
    } else {
      textFile = textFile.toString()
      let firstLine = textFile.slice(0, textFile.indexOf('\n'));
      callback(err, firstLine);
    }
  });
}

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (err, response, body) => {
    if (err) { callback(err) }
    else {
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
