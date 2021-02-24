const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// only form HtmlWebPackPlugin
const config = [
  { site: 'index', share: 'share' },
  { site: 'about', share: 'share' },
  { site: 'o-cyklu', share: 'share' },
  { site: 'artysci', share: 'share' },
  { site: 'festiwal', share: 'share' },
  { site: 'contact' ,share: 'share'}
];

// configure Babel Loader
const configureBabelLoader = () => {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  }
}


// configure HtmlWebPackPlugin
const entryHtmlPlugins = config.map(({ site, share }) => {
  return new HtmlWebPackPlugin({
    filename: `${site}.html`,

    // template for individual pages index, about and contact
    template: `./sources/pages/${site}.html`,

    // injecting js and css files into
    // html as well as common share.js file
    chunks: [site, share],
  })
})

// configure Output
const configureOutput = () => {
  return {
    path: path.resolve(__dirname, '../docs'),
    filename: 'vendor/js/[name].[fullhash].js',
    // assetModuleFilename: 'images/static/[name].[hash][ext]',
    publicPath: './',
  }
}

module.exports = {
  // input files
  entry: {
    'index': {
      import: './sources/js/index.js',
      dependOn: 'share'
    },

    'about': {
      import: './sources/js/about.js',
      dependOn: 'share'
    },

    'o-cyklu': {
      import: './sources/js/o-cyklu.js',
      dependOn: 'share'
    },
    
    'artysci': {
      import: './sources/js/artists.js',
      dependOn: 'share'
    },

    'festiwal': {
      import: './sources/js/festiwal.js',
      dependOn: 'share'
    },

    'contact': {
      import: './sources/js/contact.js',
      dependOn: 'share'
    },

    share: './sources/js/module/share.js'
  },
  // configuration of output files
  output: configureOutput(),
  module: {
    rules: [

      // Images, fonts, e.t.c: Copy files to build folder
      // https://webpack.js.org/guides/asset-modules/#resource-assets
      // {
      //   test: /\.svg/,
      //   type: 'asset/resource',
      //   generator: {
      //     // adding a hash to the file
      //     filename: 'images/static/[name].[hash][ext]',
      //   },
      // },
      {
        test: /\.jpg/,
        type: 'asset/resource',
        generator: {
          // adding a hash to the file
          filename: 'images/static/[name].[hash][ext]',
        },
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          // adding a hash to the file
          filename: 'images/static/[name].[hash][ext]',
        },
      },

      // OR -------------------------

      //creates an inline svg
      // {
      //   test: /\.svg/,
      //   type: 'asset/inline',
      // },

      // OR -------------------------

      {
        test: /\.svg/,
        type: "asset",
        generator: {
          // adding a hash to the file
          // and copy to specific folder
          filename: 'images/static/[name].[hash][ext]',
        },

        // depending on the size of the file, 
        // if the file is too small, the file is inline,
        // if the larger niche size, the file is only copied
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024, // 30 * 1024
          }
        },
      },

      // ----------------------------

      // Other uses, fonts
      // the above solution works not only on
      // graphic files but also on fonts etc.

      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },

      configureBabelLoader(),
    ],
  },
  plugins: [
    ...entryHtmlPlugins
  ]
};