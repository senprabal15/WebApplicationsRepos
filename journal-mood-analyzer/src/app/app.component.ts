import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JournalFormComponent } from './components/journal-form.component';
import { JournalListComponent } from './components/journal-list.component';
import { JournalEntry } from './models/journal-entry.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, JournalFormComponent, JournalListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'journal-mood-analyzer';
  entries: JournalEntry[] = [];
  filterDate: string = '';
  filterMood: string = '';
  moods = ['😊', '😐', '😢', '😡', '😴', '😍'];

  ngOnInit() {
    // Load from localStorage
    const saved = localStorage.getItem('journalEntries');
    this.entries = saved ? JSON.parse(saved) : [];
    // Listen for new entries
    window.addEventListener('addEntry', (e: any) => {
      this.addEntry(e.detail);
    });
  }

  addEntry(entry: JournalEntry) {
    this.entries.unshift(entry);
    localStorage.setItem('journalEntries', JSON.stringify(this.entries));
  }

  get filteredEntries(): JournalEntry[] {
    return this.entries.filter(e =>
      (!this.filterDate || e.date === this.filterDate) &&
      (!this.filterMood || e.mood === this.filterMood)
    );
  }

  get moodStats() {
    const stats: { [mood: string]: number } = {};
    for (const mood of this.moods) stats[mood] = 0;
    for (const entry of this.filteredEntries) {
      if (stats[entry.mood] !== undefined) stats[entry.mood]++;
    }
    return stats;
  }
}
