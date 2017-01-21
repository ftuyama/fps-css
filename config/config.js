var config = {};

config.web = {
    port: process.env.PORT || 8080,
    cookie_age: 3600000
};

module.exports = config;