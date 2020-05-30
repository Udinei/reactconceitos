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
           },
           {
               test: /\.css$/,
               use:
               [
                   { loader: 'style-loader'}, // faz import de arquivos css para dentro da app
                   { loader: 'css-loader'}    // permite fazer outras importações de outros arquivos ex: imagens, outros ccs etc 
               ]
           },
           {
               test: /.*\.(gif|png|jpe?g)$/i, // extensões de imagem permitidas file-loader
               use: {
                   loader: 'file-loader'
               }
           }
        ]
    }
};