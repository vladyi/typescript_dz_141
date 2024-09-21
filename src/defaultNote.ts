class DefaultNote extends Note {
    constructor(title: string, content: string) {
      super(title, content);
    }
  
    public updateContent(newTitle: string, newContent: string): boolean {
      this.title = newTitle;
      this.content = newContent;
      this.updatedAt = new Date();
      return true;
    }
  }
  