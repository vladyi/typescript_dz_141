interface ISearch {
    searchNotes(searchParam: string): Note[];
}

class SearchTodoList extends TodoList implements ISearch {

    public searchNotes(searchParam: string): Note[] {
      return this.notes.filter(note =>
        note.getTitle().includes(searchParam) || note.getContent().includes(searchParam)
      );
    }
}