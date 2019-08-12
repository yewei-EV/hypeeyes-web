import { User } from './user';
import * as moment from 'moment';
import { Config } from '../config';

export class Topic {
  static convert(topics: Topic[]) {
    return topics.map(topic => Object.assign(new Topic(), topic));
  }

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
  user: User;
  cid: number;
  deleted: number;
  locked: number;
  mainPid: number;
  pinned: number;
  postCount: number;
  slug: string;
  tid: number;
  title: string;
  uid: number;
  viewCount: number;
  upVotes: number;
  downVotes: number;
  titleRaw: string;
  timestampISO: string;
  lastPostTimeISO: string;
  votes: number;
  teaser
  private _timestamp: number;
  private _lastPostTime: moment.Moment;

  getLink() {
    return Config.relativePath + '/topic/' + this.slug + '/' + this.tid;
  }

}
