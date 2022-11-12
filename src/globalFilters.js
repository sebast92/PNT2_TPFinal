import Vue from 'vue'

Vue.filter('pasarAMayuscula', function(value) {
  return value.toUpperCase()
})

Vue.filter('reverse', function(value) {
  return value.split('').reverse().join('')
})

Vue.filter('wrap', function(value, strBegin, strEnd) {
  return strBegin + value + strEnd
})