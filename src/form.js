import Vue from 'vue'
import VueForm from 'vue-form'


let options = {
    validators: {
        'entre-3-15-caracteres' : function(value) {
            return (value.length > 3 && value.length < 15)
        },
        'entre-10-30-caracteres' : function(value) {
            return (value.length > 10 && value.length < 30)
        },
        'mayor-a-0': function(value) {
            return (value > 0)
        },
        'no-espacios' : function(value) {
            return !value.includes(' ')
        }        
    }
}

Vue.use(VueForm, options)