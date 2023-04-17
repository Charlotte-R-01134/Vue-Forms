import { createApp } from 'vue'
import App from './App.vue'
import { upperFirst } from 'lodash'
import { camelCase } from 'lodash'

function requireComponent(fileName) {
  const componentConfig = fileName
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  return {
    [componentName]: componentConfig.default || componentConfig
  }
}

const app = createApp(App)

requireComponent('./components') // import all components

app.mount('#app')
