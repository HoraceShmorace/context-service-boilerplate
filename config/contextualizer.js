var config = {

    dbUrl: (function(env) {
        switch (env) {
            case "production":
                return "";
            case "staging":
                return "";
            default:
                return "mongodb://localhost:27017/adsuite";
        }
    })(process.env.NODE_ENV),


    waitForPageScrape: false,

    minQualifyingScore: 5,

    urlDataPoint: {
        name: 'url',
        weight: 5,
        filter: function(value) {
            var url = require('url').parse(value);
            return url.pathname;
        }
    },

    htmlDataPoints: [{
        tag: 'link',
        nameAttr: 'rel',
        nameValue: 'canonical',
        valueAttr: 'href',
        weight: 5,
        filter: function(value) {
            var url = require('url').parse(value);
            return url.pathname;
        }
    }, {
        tag: 'title',
        weight: 4
    }, {
        tag: 'meta',
        nameAttr: 'property',
        nameValue: 'og:title',
        valueAttr: 'content',
        weight: 3
    }, {
        tag: 'meta',
        nameAttr: 'name',
        nameValue: 'description',
        valueAttr: 'content',
        weight: 2
    }, {
        tag: 'meta',
        nameAttr: 'property',
        nameValue: 'og:description',
        valueAttr: 'content',
        weight: 2
    }, {
        tag: 'meta',
        nameAttr: 'name',
        nameValue: 'keywords',
        valueAttr: 'content',
        weight: 4
    }, {
        tag: 'body',
        weight: 1
    }]
};
module.exports = config;
