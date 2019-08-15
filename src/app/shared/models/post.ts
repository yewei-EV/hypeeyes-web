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
  private _firstImg;
  deleterUid: number;
  edited: number;
  votes: number;
  timestampISO: string;
  editedISO: string;
  static convert(post) {
    return Object.assign(new Post(), post);
  }
  get firstImg(): string {
    let img = null;
    if (!this._firstImg) {
      const content = this.content;
      const regexp = new RegExp(/<img[ ]+src="([^"]*)"/);
      const result = regexp.exec(content);
      if (result && result.length > 1) {
        img = result[1];
        this._firstImg = img;
      }
    } else {
      img = this._firstImg;
    }
    return img;
  }
}
