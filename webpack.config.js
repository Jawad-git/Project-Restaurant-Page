// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // after HTML inclusion

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // these are for eval map, which makes it clear where the errors are instead of jumbled js. put the html files in watchFiles.
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  // plugins entry in the exports object added after HTML inclusion
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  // since CSS-Inclusion packages aren't plugins, we will be adding them here! under "module"!
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // here we added the html loader, this one is not for including html in the webpack! but for the images to be correctly processed.
      // It is different from HTMLWebpackPlugIn!
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // here we added the object to allow JS produced images to render correctly.
      // You can always edit the regex in the test property to remove any file extensions you don’t need or add any extensions you do need.
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // in whatever Javascript module we want to use that image in, we just have to default import it.
      /*
      eg. greeting/index.js

          import odinImage from "./odin.png";
          const image = document.createElement("img");
          image.src = odinImage;
          document.body.appendChild(image);
      */
    ],
  },
};

// the added text gives webpack config access to htmlwebpackplugin in line 3 and then adding it as a plugin in the object in line 19,
// Inside the HtmlWebpackPlugin constructor call, we pass in any options. For now, we’re only interested in the template option.

// the CSS packages added in line 25, basically tell Webpack that if it sees imported files ending with .css, they should use the loaders to process them.
// Notice how we put css-loader at the end of the array. We must set this order and not the reverse.
// Webpack will run the loaders starting at the end, so we want it to read the CSS file into a string with css-loader first,
// then use style-loader to inject the JavaScript that applies the CSS in that string to the page. It wouldn’t work the same the other way round.