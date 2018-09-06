const path = require("path");

module.exports = {
    mode: "none",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist")
    },

    resolve: {
        extensions: [".ts"]
    },

    module: {
        rules: [
            { test: /\.ts$/, loader: "awesome-typescript-loader" }
        ]
    },

    externals: {
        "express": "express"
    }
};
