var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query);
    var log = fs.createWriteStream('computerworld.txt', {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
    var result = query['status'];
    if (result)
        log.write(result + "\n");
    log.close();
  res.end("");
});
server.listen(4040);