<template>
  <div id="app">
    <app-header :user="user"></app-header>
    <router-view class="container"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: {
    boardName: ''
  }
}
</script>

<style>
  #app {
    box-sizing: border-box;
    color: #37474f;
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  .container {
    padding-bottom: 4rem;
  }
</style>

