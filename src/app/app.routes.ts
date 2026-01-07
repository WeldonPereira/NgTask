import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Counter } from './screens/counter/counter';
import { Todos } from './screens/todos/todos';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'counter',
    component: Counter,
  },
  {
    path: 'todos',
    component: Todos,
  },
];
