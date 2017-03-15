# VueJS Konami code plugin

[![Build Status](https://travis-ci.org/azzra/vue-konami-code.svg?branch=master)](https://travis-ci.org/azzra/vue-konami-code)

Enable the [Konami code](https://en.wikipedia.org/wiki/Konami_Code) on your VueJS application.

## Installation

Download the plugin

```sh
npm install --save vue-konami-code
```

In your application code

```js
import KonamiCode from 'vue-konami-code'
```

## Usage

```js
Vue.use(KonamiCode, {callback: function () {
  alert('Snake? Snake!? Snaaaake!')
}})
```
