import { TopicListInfo } from './models';

export class Constant {
  static apiUrl = '/hypeeyes/api';
  static topicListInfoMap: Map<string, TopicListInfo> = new Map([
    ['发售资讯', {line: 1, itemNumberPerLine: 3, maxItems: 3}],
    ['潮流百科', {line: 1, itemNumberPerLine: 3, maxItems: 3}],
    ['美图细赏', {line: 1, itemNumberPerLine: 4, maxItems: 4}],
  ]);
}
