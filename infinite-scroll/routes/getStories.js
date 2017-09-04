
var http = require("https");

/* GET home page. */
exports.getStories = function (req, res) {


  var options = {
    "method": "GET",
    "hostname": "rio.quintype.io",
    "port": null,
    "headers": {
      "content-type": "application/json"
    },
    "path": "/api/v1/stories?limit=" + req.query.limit + "&offset=" + req.query.offset,
  };

  var req1 = http.request(options, function (res1) {
    var chunks = [];

    res1.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res1.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
      body=JSON.parse(body.toString());
      res.send(body);
    });
  });

  req1.end();
};

