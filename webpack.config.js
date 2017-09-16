var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: "./src/boot.js", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js", 
        publicPath: "dist",
        library: "StupidHackathon",
        libraryTarget: "umd",
    },
    devtool:'source-map',
    module: {
        rules: [
            {
				'test': /\.js$/,
				'exclude': /(node_modules|bower_components)/,
				'use': {
					'loader': 'babel-loader',
					'options': {
						'presets': ['env', 'react']
					}
				}
			},
        ],

        
    },
    target: "web", 
    plugins: [
        // ...
    ]
}
