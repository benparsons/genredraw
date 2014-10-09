var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
var url = 'http://www.httpuseragent.org';
url = 'http://localhost:8080/colourArray2.html?filename=source/insilico.jpg';
page.open(url, function(status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function() {
            //return document.getElementById('myagent').textContent;
        });
        console.log(ua);
    }
    //phantom.exit();
});