import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode: boolean = false;
  taskName: string = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate: string = '';
  config: {
    title: string;
    footer: string;
    date: Date;
  };
  tasks: Task[] = [
    { name: 'siłowania', deadline: '2022-01-02', done: false },
    { name: 'Nauka angulara', deadline: '2022-01-03', done: true },
    { name: 'Sprzątanie domu', deadline: '2022-01-04', done: false },
    { name: 'Nauka', deadline: '2022-01-04', done: true },
    { name: 'Sprzątanie kuwety2', deadline: '2022-01-04', done: false },
    { name: 'Sprzątanie kuwety22', deadline: '2022-01-04', done: false },
  ];

  constructor() {
    this.config = {
      title: 'lista zadań',
      footer: '@lista zadań w Angularze',
      date: new Date(),
    };
    this.sortTasks();
  }

  makeTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskDate = '';
    this.taskName = '';
    this.sortTasks();
  }
  switchEditMode() {
    this.editMode = !this.editMode;
  }
  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((e) => e !== task);
    this.sortTasks();
  }
  sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
  checkDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }
}
