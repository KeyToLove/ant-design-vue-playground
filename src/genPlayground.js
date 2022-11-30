import React from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'

const initCode = `import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App)
app.use(Antd).mount('#app')
`

const Playground = ({ path }) => {
  const fileConfig = require('./' + path)
  return (
    <Sandpack
      files={{
        '/index.js': initCode,
        '/App.vue': fileConfig,
      }}
      theme="dark"
      options={{
        showConsole: true,
        showConsoleButton: true,
        showInlineErrors: true,
        editorHeight: '100vh',
      }}
      customSetup={{
        entry: '/index.js',
        dependencies: {
          'ant-design-vue': '3.2',
          vue: '3.2.45',
          '@vue/cli-plugin-babel': '4.5.0',
        },
      }}
    />
  )
}

export default Playground
