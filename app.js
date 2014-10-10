var http = require('http');
var url = require('url');
var fs = require('fs');
//var readline = require('readline');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    //console.log(query);
    var log = fs.createWriteStream('output/' + query['filename'] + '.' + (new Date()).getDate() + '.txt', {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
    var result = query['status'];
    if (result)
        log.write(result + "\n");
    log.close();
  res.end("");
});
server.on('error', function (err) {
    console.log('server error', err);
});

server.listen(4040);

//var viewer = http.createServer(function(req, res) {
//  res.writeHead(200);
//    var url_parts = url.parse(req.url, true);
//    var query = url_parts.query;
//    console.log(query);
//	
//	var rd = readline.createInterface({
//		input: fs.createReadStream(query['filename'] + '.txt'),
//		output: process.stdout,
//		terminal: false
//	});
//	console.log("createInterface");
//
//	rd.on('line', function(line) {
//		console.log(line);
//		var parsed = JSON.parse(line);
//		res.end(JSON.stringify(parsed.polyArray));
//	});
//	//res.end("");
//});
//viewer.listen(4041);