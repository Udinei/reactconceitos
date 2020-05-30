module.exports = {
    presets: [  
        "@babel/preset-env",      // altera funcionalidades do javascrit, o que navegador nao entende
        "@babel/preset-react"  // converte codigos do react para o navegador
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
};