import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

const delay = ms => new Promise( (resolve, reject) => {
    if(typeof ms == 'number') {
        setTimeout(resolve,ms)
    }
    else {
        reject('ms no es un número')
    }
})

export default new Vuex.Store({
    state : {
        contador : 321
    },
    actions : {
        contarDown({commit},cant) {
            console.warn('actions -> contarDown', cant, new Date().toLocaleString())    
            setTimeout(() => {
                commit('decrementar', cant)        
            },2000)
        },
        async contarUp({commit},cant) {
            console.warn('actions -> contarUp', cant, new Date().toLocaleString())    
            try {
                await delay(1000)
                commit('incrementar', cant)        
            }
            catch(error) {
                console.error(error)
            }
        }        
    },
    mutations : {
        [types.FETCH_BOARDS_REQUEST] (state) {
            state.fetchingData = true
            state.error = null
          },
        
          [types.FETCH_BOARDS_SUCCESS] (state, { boards }) {
            state.fetchingData = false
            state.error = null
            state.boards = { ...boards }
          },
        
          [types.FETCH_BOARDS_FAILURE] (state, { error }) {
            state.fetchingData = false
            state.error = error
          },
        
          // Fetch the lists from a board
          [types.FETCH_LISTS_REQUEST] (state) {
            state.fetchingData = true
            state.error = null
          },
        
          [types.FETCH_LISTS_SUCCESS] (state, { lists }) {
            state.fetchingData = false
            state.error = null
            state.lists = { ...lists }
          },
        
          [types.FETCH_LISTS_FAILURE] (state, { error }) {
            state.fetchingData = false
            state.error = error
          },
        
          // Fetch the tasks from a list
          [types.FETCH_TASKS_REQUEST] (state) {
            state.fetchingData = true
            state.error = null
          },
        
          [types.FETCH_TASKS_SUCCESS] (state, { tasks }) {
            state.fetchingData = false
            state.error = null
            state.tasks = { ...tasks }
          },
        
          [types.FETCH_TASKS_FAILURE] (state, { error }) {
            state.fetchingData = false
            state.error = error
          },
        
          // Create a new board
          [types.ADD_BOARD] (state, { board }) {
            Vue.set(state.boards, board.id, board)
          },
        
          // Create a new task list
          [types.ADD_COLUMN] (state, { column }) {
            Vue.set(state.lists, column.id, column)
          },
        
          // Add a new task to a task list
          [types.ADD_TASK] (state, { task }) {
            Vue.set(state.tasks, task.id, task)
          },
        
          // Delete a task from a task list
          [types.DELETE_TASK] (state, { taskId }) {
            state.tasks = Object.values(state.tasks)
              .filter(task => task.id !== taskId)
          },
        
          // Check a task as completed
          [types.MARK_AS_COMPLETED] (state, { task }) {
            task.completed = !task.completed
          }
        
    }
})
