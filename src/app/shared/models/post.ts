export class Post {
  get upVotes() {
    return this.upvotes;
  }
  get downVotes() {
    return this.downvotes;
  }
  content: string;
  deleted: number;
  pid: number;
  tid: number;
  timestamp: number;
  uid: number;
  private upvotes: number;
  private downvotes: number;
  deleterUid: number;
  edited: number;
  votes: number;
  timestampISO: string;
  editedISO: string;
  static convert(post) {
    return Object.assign(new Post(), post);
  }
}
