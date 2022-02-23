<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## NestJS : Node.js에 기반을 둔 웹 API 프레임 워크
```bash
Node.js는 Java의 spring, Python의 django처럼 구조화 된 프레임워크가 부족했습니다.
구조화 되지 않은 프레임워크는 개발자들에게 자율성을 부여하여 소규모 프로젝트를 진행할 때는 
간단한 규칙과 구조로 쉽개 어플리케이션을 생성하고 배포할 수 있었지만 대규모 프로젝트를
진행해야 할 경우에는 하나하나 규칙을 생성하여 만들어야 하는데 이는 개발자에 부담으로 돌아왔고
이를 해결하기 위해 Nest.js가 개발되었습니다.

Nest.js는 생산성을 높여주어 전체 프로젝트진행에 효율성을 제공해 줄 수 있으며, typescript를 도입해 오류들을
사전에 방지할 수 있도록 했고, 모듈로 감싸는 형태로 개발되기 때문에 모듈별로 쉽게 테스트를 할 수 있습니다.
또한 모듈을 사용하기때문에 확장에도 용이합니다.
```

## NestJS 기본 구성요소 : module / controller / provider
module
```bash
1. 하나의 어플리케이션을 구성하기 위해 사용되는 시작점
2. 모듈을 이용해 내부 데이터 구조를 분리하고 연결해 줄 수 있음
2. module은 controller, provider들을 한데 모아서 관리 
```
controller
```bash
1. controller는 들어오는 요청을 받고 처리된 결과를 응답으로 돌려주는 인터페이스 역할
2. 라우팅을 활용해 어떤 컨트롤러가 어떤 요청을 수신할지 제어
```
providers(service)
```bash
1. 어플리케이션이 제공하고자하는 핵심 기능을 수행하는 역할
2. 컨트롤러에서 수행할 수도 있지만 분리해 두는 것이 더 좋음
3. 기본 Nest class인 service, repositories, factories, helpers 등은 provider로 취급됨
```

## 참고한 자료
```bash
https://www.youtube.com/watch?v=SHfR1tLpe1o&t=237s
https://www.wisewiredbooks.com/nestjs/overview/05-modules.html
https://jay2u8809.github.io/docs/nodejs/nestjs-how_to_start_nestjs/
```
