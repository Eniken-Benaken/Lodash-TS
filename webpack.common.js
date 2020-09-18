
module.exports = {
  entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.ts"
	},
  module: {
    rules: [
			{
				test: /\.html$/,
				use: [
					"html-loader"
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "imgs"
					}
				}
			},
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
				use: {
          loader: 'ts-loader'
        }
			}			
    ]
	},
	resolve: {
    extensions: [".ts",".js"]
  }
	
};
