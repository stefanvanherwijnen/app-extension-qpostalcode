/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendWithComponent (conf) {
  // make sure boot file is registered
  conf.boot.push('~quasar-app-extension-qpostalcode/src/boot/index.js')

  // make sure boot file transpiles
  conf.build.transpileDependencies.push(/quasar-app-extension-qpostalcode[\\/]src/)
  console.log(`App Extension (qpostalcode) Info: 'Adding qpostalcode boot reference to your quasar.conf.js'`)
}

module.exports = function (api) {
  api.compatibleWith('@quasar/app', '^1.0.0')

  // register JSON api
  api.registerDescribeApi('QPostalCode', './components/QPostalCode.json')

  // extend quasar.conf
  api.extendQuasarConf(extendWithComponent)
}
