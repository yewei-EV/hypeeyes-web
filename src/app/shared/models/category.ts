import { Topic } from './topic';
import { Constant } from '../constant';

export class Category {
  private bgColor: string;
  private color: string;
  private backgroundImage: string;
  private imageClass: string;
  cid: number;
  class: string;
  link: string;
  totalTopicCount: number;
  totalPostCount: number;
  icon: string;
  name: string;
  descriptionParsed: string;
  topics: Topic[];
  slug: string;
  order: number;


  public getStyle() {
    return '';
    const style = [];

    if (this.bgColor) {
      style.push('background-color: ' + this.bgColor);
    }

    if (this.color) {
      style.push('color: ' + this.color);
    }

    if (this.backgroundImage) {
      style.push('background-image: url(' + this.backgroundImage + ')');
      if (this.imageClass) {
        style.push('background-size: ' + this.imageClass);
      }
    }

    return style.join('; ') + ';';
  }
}
