const createApp = Vue.createApp

createApp ({
    data () {
        return {
            newItem: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]

        }
    },
    methods: {
        removeTask(index) {
            this.todos.splice(index , 1)
        },

        addTask() {
            this.todos.push({text: this.newItem, done:false}) 
            this.newItem = ''           
        },

        checkTask(index) {
            this.todos[index].done = !this.todos[index].done
            console.log('ho cliccato')
        }

        },

        mounted() {
        console.log('ciao')
        }


}).mount('#app')