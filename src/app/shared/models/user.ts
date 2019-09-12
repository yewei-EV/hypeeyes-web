import { Constant } from '../constant';

export class User {
  uid: number;
  username: string;
  userslug: string;
  reputation: number;
  private postcount: number;
  picture: string;
  signature: string;
  banned: number;
  status: string;
  private 'icon:text': string;
  'icon:bgColor': string;
  // tslint:disable-next-line:variable-name
  private banned_until_readable: string;
  get postCount() {
    return this.postcount;
  }
  get userSlug() {
    return this.userslug;
  }
  get iconBgColor() {
    return this['icon:bgColor'];
  }
  get iconText() {
    return this['icon:text'];
  }

  public static convert(user) {
    return Object.assign(new User(), user);
  }

  getLink(relativePath: string) {
    return relativePath + '/user/' + this.userSlug;
  }

}
