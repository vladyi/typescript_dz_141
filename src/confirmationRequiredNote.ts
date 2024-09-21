class ConfirmationRequiredNote extends Note {
    constructor(title: string, content: string) {
      super(title, content);
    }
  
    public updateContent(newTitle: string, newContent: string, isConfirmed: boolean): boolean {
        if (isConfirmed) {
            this.title = newTitle;
            this.content = newContent;
            this.updatedAt = new Date();
            return true;
        }

      return false;
    }
  }
  