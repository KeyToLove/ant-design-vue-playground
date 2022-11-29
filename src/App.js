import React from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'

const indexCode = `
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App)
app.use(Antd).mount('#app')
`

const appCode = `
<template>
<h1>{{ helloWorld }}</h1>
<span class="text">count is {{count}}</span>
<hr/>
<a-button @click="add">点我</a-button>
</template>
<script type="module">
import { ref } from "vue";
import "./style.css"
export default {
    name: "App",
    setup() {
      const helloWorld = ref("Hello World ~");
      const count = ref(0)
      const add = () => {
        count.value++
      }
      return { helloWorld,count,add };
    }
};
</script>
`

const styleCode = `
.text{
  color: skyblue;
}
`

const Playground = () => {
  return (
    <Sandpack
      files={{
        '/index.js': indexCode,
        '/App.vue': {
          code: appCode,
          active: true,
        },
        '/style.css': styleCode,
        '/src/App.vue': '',
      }}
      theme="dark"
      options={{
        showConsole: true,
        showConsoleButton: true,
      }}
      template="vue3"
      customSetup={{
        entry: '/index.js',
        dependencies: {
          'ant-design-vue': '3.2',
        },
      }}
    />
  )
}

export default Playground
