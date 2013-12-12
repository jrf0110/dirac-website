requirejs.config({
  baseUrl: '/'

, packages: [
    { name: 'utils',        location: 'js',                             main: 'utils.js' }

  , { name: 'jquery',       location: 'bower_components/jquery',        main: 'jquery.js' }
  , { name: 'lodash',       location: 'bower_components/lodash',        main: 'dist/lodash.js' }
  , { name: 'domReady',     location: 'bower_components/domReady',      main: 'domReady.js' }
  , { name: 'prism',        location: 'bower_components/prismjs',       main: 'prism.js' }
  ]

, paths: {
  //   config: './config'
  // , env:    './env'
    'components': 'js/components'
  }

, shim: {
    prism: {
      exports: 'Prism'
    }
  }
});