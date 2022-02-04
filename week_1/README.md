## babel 이란?

- 브라우저가 이해할 수 없는 최신 문법 등을 여러 브라우저들에서 호환되는 문법으로 변환해 준다.

## babel에서 plugin, preset 무엇인지 알아보기

- plugin: 스크립트를 변환할 때 적용하는 변환 규칙들
- preset: 세부적으로 특화된 내용들을 plugin들의 모음
  (ex: @babel/preset-env, @babel/preset-typescript, @babel/preset-react ...)

## webpack 이란?

- 해결하고자 하는 문제

  네트워크 병목 현상 해결

  변수의 유효 범위 문제 해결

- 단점

  러닝 커브가 높은 듯 하다

## webpack에서 mode가 무엇인지

- mode 파라미터를 이용하여 개발, 배포 등을 설정하면 webpack에 내장된 환경별 최적화를 활성할 수 있다.
