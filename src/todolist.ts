class TodoList {
    protected notes: Note[] = [];
  
    public addNote(title: string, content: string, type: NoteType = 'default'): Note {
      let note: Note;
  
      if (type === 'default') {
        note = new DefaultNote(title, content);
      } else {
        note = new ConfirmationRequiredNote(title, content);
      }
  
      this.notes.push(note);
      return note;
    }
  
    public deleteNoteById(id: string): boolean {
      const index = this.notes.findIndex(note => note.getId() === id);

      if (index !== -1) {
        this.notes.splice(index, 1);
        return true;
      }

      return false;
    }
  
    public editNoteById(id: string, newTitle: string, newContent: string): boolean {
      const note = this.getNoteById(id);

      if (note) {
        return note.updateContent(newTitle, newContent);
      }

      return false;
    }
  
    public getNoteById(id: string): Note | undefined {
      return this.notes.find(note => note.getId() === id);
    }
  
    public getAllNotes(): Note[] {
      return this.notes;
    }
  
    public markNoteAsCompleted(id: string): boolean {
      const note = this.getNoteById(id);

      if (note) {
        note.markAsCompleted();
        return true;
      }

      return false;
    }
  
    public getNotesSummary(): { total: number, pending: number, completed: number } {
      const total = this.notes.length;
      const pending = this.notes.filter(note => note.getStatus() === 'pending').length;
      const completed = total - pending;
      
      return { total, pending, completed };
    }
  }
  