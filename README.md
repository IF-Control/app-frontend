# Aplicativo IF Control

Aplicação mobile para rastreio de casos de COVID-19 e medição de público nos ambientes de uma faculdade. 

<h1 align="center">
    <img src="https://i.imgur.com/Hqdlv0c.png" alt="Tela inicial do aplicativo IF Control" width="350"><br/>
</h1>

Para o desenvolvimento deste projeto fizemos [este curso](https://www.udemy.com/course/dev-fullstack/) na plataforma Udemy do instrutor [Matheus Fraga](https://github.com/devfraga).

## Setup 

### Dependências

- [React Native](https://reactnative.dev/);
- [Expo](https://expo.dev/);
- [NodeJS](https://nodejs.org/uk/blog/release/v16.13.0/) v16.13;
- [Android Studio](https://developer.android.com/studio);
- [Yarn](https://yarnpkg.com/);
- [TypeScript](https://www.typescriptlang.org/);
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [Styled Components](https://styled-components.com/).

### Preparando Ambiente

Este é um passo a passo para a realição de uma execução local do aplicativo, para que se possa trabalhar em seu desenvolvimento.

1. Crie um diretório local e clone o repositório:

```
$ mkdir frontend
$ cd frontend
$ git clone https://github.com/IF-Control/app-frontend.git .
```

2. Execute o aplicativo com a seguinte sequência de comandos em seu terminal:

```
$ yarn install
$ expo start
```

3. Para gerar o instalável do Android, rode o seguinte comando (precisará de uma conta no Expo):

```
$ expo build:android
```

> <br/>É possível também personalizar o aplicativo para que fique com a identidade visual de outra instituição, para isso basta apenas mudar as cores e imagens, e , por fim, alterar os pontos onde é feito o consumo da API para a sua própria.<br/><br/>

## Possíveis Funcionalidades Novas e Melhorias

- [x] Mapa interativo do campus;
- [x] Geolocalização para registrar presença dos usuários nos ambientes.

## Equipe

* [Débora Miyake](https://github.com/DeboraMiyake)
* [Victor Sousa](https://github.com/VictorPSousa)

## Erros e bugs

Se algo não está funcionando corretamente, isso é um bug e deve ser reportado.

[Reporte aqui um bug ou erro por meio das issues](https://github.com/IF-Control/app-frontend/issues).

## Como contribuir

Todas as contribuições são bem-vindas. Sugerimos usar este workflow:
 
1. Faça um Fork no projeto;
2. Crie um branch: `git checkout -b nome_da_branch`;
3. Faça a sua adição de funcionalidade ou correção de bug e faça o commit: `git commit -m 'mensagem_descritiva_do_commit'`;
4. Envie uma Pull Request com a descrição do seu trabalho.

## Copyright

© Copyright 2022 IF Control, Débora Miyake & Victor Sousa. 

## Licença

Lançado com a licença [MIT](https://github.com/IF-Control/app-frontend/blob/main/LICENSE).
