// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: '美食、外賣、生活服務、O2O、休閒娛樂、本地服務、澳門、澳覓、松鼠' },
        { name: 'keyword', content: '美食、外賣、生活服務、O2O、休閒娛樂、本地服務、澳門、澳覓、松鼠' },
      ],
      title: '澳覓APP-澳門外賣美食平台'
    },
  },
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n']
      }
    ]
  },
  modules: ['@element-plus/nuxt', '@pinia/nuxt'],
  vite: {
    css: {
      preprocessorMaxWorkers: true // number of CPUs minus 1
    }
  }
})
