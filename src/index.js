import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes'
import './styles.css'

export const todoList = new TodoList()

todoList.todos.forEach(crearTodoHtml) // = forEach(todo => crearTodoHtml(todo))

console.log('todos', todoList.todos)
