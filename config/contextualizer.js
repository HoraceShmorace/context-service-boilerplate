var config = {
    development: {
        port: "9090",
        dbUrl: "mongodb://localhost:27017/adsuite"
    },
    staging: {
        dfpNetworkId: "ENTER YOUR DFP NETWORK ID",
        port: "9091",
        dbUrl: "ENTER URL TO YOUR MONGODB DATABASE",
        contextServiceUrl: "IF USING THE CONTEXT SERVICE, ENTER URL TO YOUR CONTEXT SERVICE APP."
    },
    production: {
        dfpNetworkId: "ENTER YOUR DFP NETWORK ID",
        port: "9091",
        dbUrl: "ENTER URL TO YOUR MONGODB DATABASE",
        contextServiceUrl: "IF USING THE CONTEXT SERVICE, ENTER URL TO YOUR CONTEXT SERVICE APP."
    }
};
module.exports = config;
