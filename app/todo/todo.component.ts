import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: any[] = []; // Массив с задачами
  newTodoText: string = ''; // Текст новой задачи
  editingTodo: any = null; // Задача, которую редактируют

  addTodo() {
    if (this.newTodoText) {
      const newTodo = {
        text: this.newTodoText,
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTodoText = '';
    }
  }

  editTodo(todo: any) {
    this.editingTodo = todo;
  }

  saveTodo() {
    this.editingTodo = null;
  }

  deleteTodo(todo: any) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleComplete(todo: any) {
    todo.completed = !todo.completed;
  }
}
