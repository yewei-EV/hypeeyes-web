import { User } from './user';
import * as moment from 'moment';
import { Post } from './post';
import { Constant } from '../constant';

export class Topic {
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
  thumb: string;

  upVotes: number;
  downVotes: number;
  titleRaw: string;
  timestampISO: string;
  lastPostTimeISO: string;
  votes: number;
  private viewCount: number;
  private postCount: number;
  timestamp: moment.Moment;
  lastPostTime: moment.Moment;

  public static convert(topic: Topic) {
    topic.timestamp = moment(topic.timestamp);
    topic.lastPostTime = moment(topic.lastPostTime);
    topic.user = User.convert(topic.user);
    return Object.assign(new Topic(), topic);
  }

  getLink(relativePath: string) {
    return relativePath + '/topic/' + this.slug + '/' + this.tid;
  }

}
