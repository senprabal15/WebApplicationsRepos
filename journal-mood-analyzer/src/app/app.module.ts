import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JournalFormComponent } from './components/journal-form.component';
import { JournalListComponent } from './components/journal-list.component';

@NgModule({
  declarations: [AppComponent, JournalFormComponent, JournalListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
