import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        getListsByBoard: (state) => (boardId) => {
            return Object.values(state.lists)
              .filter(list => list.board === boardId)
          },
        
          getTasksFromList: (state) => (listId) => {
            return Object.values(state.tasks)
              .filter(task => task.list === listId)
          }
    },
    computed: {

    }    
}

Vue.mixin(miMixinGlobal)