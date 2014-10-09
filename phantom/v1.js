var page = require('webpage').create();
var system = require('system');
if (system.args.length === 1) {
    console.log('file path required, exiting');
    phantom.exit();
} else {
    system.args.forEach(function (arg, i) {
        console.log(i + ': ' + arg);
    });
}

page.settings.userAgent = 'SpecialAgent';
//var url = 'http://www.httpuseragent.org';
//var url = 'http://localhost:8080/colourArray2.html?filename=source/londoncalling.jpg';
var url = 'http://localhost:8080/colourArray2.html?filename=' + system.args[1];
page.open(url, function(status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    }
    //phantom.exit();
});