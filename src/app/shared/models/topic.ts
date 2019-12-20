import { User } from './user';
import * as moment from 'moment';
import { Post } from './post';
import { Constant } from '../constant';

export class Topic {
  firstImg: string;
  firstCalendar: Date;
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
  mainPost: Post;

  upVotes: number;
  downVotes: number;
  titleRaw: string;
  timestampISO: string;
  lastPostTimeISO: string;
  votes: number;
  postCount: number;
  timestamp: moment.Moment;
  lastPostTime: moment.Moment;

  public static convert(topic: Topic) {
    topic.timestamp = moment(topic.timestamp);
    topic.lastPostTime = moment(topic.lastPostTime);
    topic.user = User.convert(topic.user);
    topic.firstCalendar = new Date(topic.firstCalendar);
    topic.mainPost = Post.convert(topic.mainPost);
    return Object.assign(new Topic(), topic);
  }

  getLink(relativePath: string) {
    return relativePath + '/topic/' + this.slug + '/' + this.tid;
  }

}
