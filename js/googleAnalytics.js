// Google analytics code. It is the old school one because otherwise, the
// following trackOutboundLink does not work.
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-79254642-1', 'auto');
ga('send', 'pageview');

// Function that tracks a click on an outbound link in Analytics.
// This function takes a valid URL string as an argument, and uses that URL string
// as the event label. Setting the transport method to 'beacon' lets the hit be sent
// using 'navigator.sendBeacon' in browser that support it.
var trackOutboundLink = function(url) {
   ga('send', 'event', 'advertisement', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
   });
}