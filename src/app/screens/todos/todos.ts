import { Component, inject } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { TodosService } from '../../services/todos.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todos',
  imports: [Title, MatIconModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  readonly todos = inject(TodosService);
}
