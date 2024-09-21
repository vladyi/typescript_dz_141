interface ISorted {
    sortNotesByStatus(): Note[];
    sortNotesByCreationDate(): Note[];
}

class SortedTodoList extends TodoList implements ISorted {
    public sortNotesByStatus(): Note[] {
      return this.notes.sort((a, b) => a.getStatus().localeCompare(b.getStatus()));
    }
  
    public sortNotesByCreationDate(): Note[] {
      return this.notes.sort((a, b) => b.getCreatedAt().getTime() - a.getCreatedAt().getTime());
    }
}