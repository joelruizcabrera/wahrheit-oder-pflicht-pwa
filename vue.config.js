const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxPluginMode: 'GenerateSW',
    name: 'Wahrheit oder Pflicht',
    themeColor: '#000',
    msTileColor: '#000',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      start_url: '/'
    }
  }
})