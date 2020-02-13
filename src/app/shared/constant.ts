import { TopicListInfo } from './models';

export class Constant {
  static apiUrl = '/hypeeyes/api';
  static topicListInfoMap: Map<string, TopicListInfo> = new Map([
    ['潮流速递', {line: 1, itemNumberPerLine: 3, maxItems: 3}],
    ['潮目秘籍', {line: 1, itemNumberPerLine: 3, maxItems: 3}],
    ['潮流百科', {line: 1, itemNumberPerLine: 3, maxItems: 3}],
    ['美图细赏', {line: 1, itemNumberPerLine: 3, maxItems: 3}],
    ['潮目社区', {line: 1, itemNumberPerLine: 4, maxItems: 4}],
  ]);
}
