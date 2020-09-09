//require includes other modules(classes) to use their methods and properties
var http = require('http');
//url module can be used to split query string from client's request input example : http://localhost:8080/?year=2017&month=July
var url = require('url');
//filesystem module can be used to work with files on the computer/server
var fs = require('fs');
//using module created
var dateTime = require('./modules');
//creates server listening on port 8080 on this computer. To host server run node firstPage.js in cmd
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The date and time are currently "+ dateTime.myDateTime()+"\n");
    //convert req.url path url to retrieve date time query
    var q = url.parse(req.url,true).query;
    var txt = q.year + " " + q.month;
    res.write(req.url);
    res.end(txt);
}).listen(8080);

