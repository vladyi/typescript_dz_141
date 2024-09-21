type NoteStatus = 'pending' | 'completed';
type NoteType = 'default' | 'confirmationRequired';

abstract class Note {
    protected id: string;
    protected title: string;
    protected content: string;
    protected createdAt: Date;
    protected updatedAt: Date;
    protected status: NoteStatus;
  
    constructor(title: string, content: string) {
      if (!title || !content) {
        throw new Error('Title and content cannot be empty');
      }
  
      this.id = crypto.randomUUID();
      this.title = title;
      this.content = content;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.status = 'pending';
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getTitle(): string {
      return this.title;
    }
  
    public getContent(): string {
      return this.content;
    }
  
    public getCreatedAt(): Date {
      return this.createdAt;
    }
  
    public getUpdatedAt(): Date {
      return this.updatedAt;
    }
  
    public getStatus(): NoteStatus {
      return this.status;
    }
  
    public markAsCompleted(): void {
      this.status = 'completed';
    }
  
    public abstract updateContent(newTitle: string, newContent: string, isConfirmed?: boolean): boolean;
  }
  