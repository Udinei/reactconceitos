const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), // arquivo de entrada
    output: { // codigo transpilado pelo webpack
      path: path.resolve(__dirname, 'public'), // pasta onde sera gerado o arquivo final da app
      filename: 'bundle.js'     // arquivo gerado
    },
    devServer: {  // script de reload da app
       contentBase: path.resolve(__dirname, 'public'), // local do arquivo
    },
    module: { // criando regras para o webpack
        rules:[
           {
               test: /\.js$/, // expresao regular encontre um arquivo com final .js
               exclude: /node_module/, // nao tranpila,
               use: {
                   loader: 'babel-loader'
               }

           }
        ]
    }
};