import { User } from './user';
import * as moment from 'moment';
import { Config } from '../config';
import { Post } from './post';

export class Topic {
  get timestamp(): number {
    return this._timestamp;
  }

  set timestamp(value: number) {
    this._timestamp = value;
  }
  get lastPostTime(): moment.Moment {
    return this._lastPostTime;
  }

  set lastPostTime(value: moment.Moment) {
    this._lastPostTime = moment(value);
  }

  get viewCount(): number {
    return this.viewcount;
  }
  get postCount(): number {
    return this.postcount;
  }

  posts: Post[];
  user: User;
  cid: number;
  deleted: number;
  locked: number;
  mainPid: number;
  pinned: number;
  slug: string;
  tid: number;
  title: string;
  uid: number;

  upVotes: number;
  downVotes: number;
  titleRaw: string;
  timestampISO: string;
  lastPostTimeISO: string;
  votes: number;
  teaser
  private viewcount: number;
  private postcount: number;
  private _timestamp: number;
  private _lastPostTime: moment.Moment;

  public static convert(topic) {
    topic.user = User.convert(topic.user);
    return Object.assign(new Topic(), topic);
  }

  getLink() {
    return Config.relativePath + '/topic/' + this.slug + '/' + this.tid;
  }

}
