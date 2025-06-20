import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalEntry } from '../models/journal-entry.model';

@Component({
  selector: 'app-journal-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent {
  @Input() entries: JournalEntry[] = [];
}
