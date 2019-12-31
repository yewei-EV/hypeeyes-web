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
  private _firstImg: string;
  private _firstCalendar: Date;
  static convert(post) {
    return Object.assign(new Post(), post);
  }
}
