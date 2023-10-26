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

            const text = this.newItem.trim()
            if (text != '') {
                const newTask = {
                    text: text,
                    done: false

                }

                this.todos.push(newTask) 
            }

            this.newItem = ''           
        },

        checkTask(index) {
            // this.todos[index].done = !this.todos[index].done
            console.log('ho cliccato')
            if(this.todos[index].done === true) {
                this.todos[index].done = false
            } else {
                this.todos[index].done = true
            }
        }

        },

        mounted() {
        console.log('ciao')
        }


}).mount('#app')