// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(Vuetify)

const opts = {}

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  /*  theme: {
      themes: {
        light: {
          {
            primary: '#607d8b',
            secondary: '#ff5722',
            accent: '#009688',
            error: '#f44336',
            warning: '#ff9800',
            info: '#2196f3',
            success: '#4caf50',
          }
        }
        */
      }
    }
  },
})
