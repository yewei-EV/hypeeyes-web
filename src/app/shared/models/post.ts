export class Post {
  content: string;
  deleted: number;
  pid: number;
  tid: number;
  timestamp: number;
  uid: number;
  upVotes: number;
  downVotes: number;
  deleterUid: number;
  edited: number;
  votes: number;
  timestampISO: string;
  editedISO: string;
  private _firstImg;
  private _calendar;
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

  get calendar(): string {
    if (!this._calendar) {
      const content = this.content;
      const regexp = new RegExp(/local, ([0-9]+),/);
      const result = regexp.exec(content);
      console.log(content.length, result);
      if (result && result.length > 1) {
        this._calendar = new Date(+result[1]);
        console.log(this._calendar);
      }
    }
    return this._calendar;
  }
}
