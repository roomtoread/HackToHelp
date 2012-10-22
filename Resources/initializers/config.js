// App wide configuration.

var PropertyCache = nrequire('/lib/property_cache'),
    Twitter = nrequire('/lib/twitter');

// Cache time for each call in Repo.js and whatever you choose to add.
PropertyCache.setup({cache_time: 600000});

// Generic Admin user on ACS for making destructive calls with.  Create on ACS you haven't.
ACS_ADMIN_CREDENTIALS = {login: 'appcharity', password: '123456'};

// FB SETUP
Ti.Facebook.appid = "126015560881913";
Ti.Facebook.permissions = ['publish_stream', 'read_stream', 'offline_access'];
FB_PAGE = 'roomtoread'; // for page retrieval
FB_ID = '34477598010'; // real fb id for fql calls. You can find out by inspecting fb links

// TWITTER SETUP
TWITTER_SCREEN_NAME = 'roomtoread'; // For page link and tweet @
Twitter.setup({consumerKey: "R8DvsOrUGWmvXcMeFybrg", consumerSecret: "2rGGF6vvTlX0TApKiCrtMgLSYEtC8vEJMEVKmtL4"});