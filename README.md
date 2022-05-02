##WEBPACK
- Empacotrador de módulos JS
- Ultilizado por diversos frameworks modernos como o React e Angular...
- Trabalha com Node.js

## Instalação
- Iniciar o projeto no diretório
  - npm init -y
- Instalar o Webpack como dependência de desenvolvimento
  - npm install --save-dev webpack-cli  
- npx webpack --config webpack.config.js 'This command run webpack file'
## Adicionar HTML
- npm install html-webpack-plugin
## Adcionar CSS 
Add some extension to work with style
- node-sass 'Compiler sass
- sass-loader 'Load for webpack to compile'
- style-loader 'Inject styles in the object tree (DOM)
- css-loader 'interprets css directives'
- extract 'Extract CSS from JS'
- npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin
## Melhorar compatibilidade do JS com Babel
Makes JS code compatible with older browsers using Babel
- npm install --save-dev @babel/core @babel/preset-env babel-loader
## Add imagens
Add file loader
- mpm install --save-dev file-loader
