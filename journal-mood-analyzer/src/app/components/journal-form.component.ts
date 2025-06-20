import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JournalEntry } from '../models/journal-entry.model';

@Component({
  selector: 'app-journal-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css']
})
export class JournalFormComponent {
  entry: JournalEntry = {
    date: new Date().toISOString().substring(0, 10),
    time: new Date().toTimeString().substring(0, 5),
    mood: '',
    text: ''
  };
  moods = ['😊', '😐', '😢', '😡', '😴', '😍'];

  submitted = false;

  @Output() addEntryEvent = new EventEmitter<JournalEntry>();

  onSubmit() {
    this.submitted = true;
    this.addEntryEvent.emit({ ...this.entry });
    // Reset form
    this.entry = {
      date: new Date().toISOString().substring(0, 10),
      time: new Date().toTimeString().substring(0, 5),
      mood: '',
      text: ''
    };
  }
}
