// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import './style.css'
import Layout from './theme-customize/Layout.vue';

export default {
  //extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
     
  }
} satisfies Theme
