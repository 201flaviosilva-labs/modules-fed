const { WebpackPluginServe } = require("webpack-plugin-serve");
const {
	MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");

exports.devServer = () => ({
	plugins: [
		new WebpackPluginServe({
			port: 3001,
			static: "./dist", // Expose if output.path changes
			liveReload: true,
			waitForBuild: true,
		}),
	],
});

exports.page = ({ title }) => ({
	plugins: [new MiniHtmlWebpackPlugin({ context: { title } })],
});
