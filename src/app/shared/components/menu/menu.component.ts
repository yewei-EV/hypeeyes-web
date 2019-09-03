import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Config } from '../../models/config';
import { ConfigService } from '../../service/config.service';
import { NavItem } from '../../models/nav-item';
import {User} from '../../models/user';
import { UserService } from '../../../entities/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('search', {static: false})
  search: ElementRef;
  config: Config = new Config();
  brandLogoUrl: string;
  navItems: NavItem[];
  user: User;
  toggled: boolean;
  swToggled: boolean;
  showSearch: boolean;
  constructor(private configService: ConfigService,
              private renderer: Renderer2,
              private userService: UserService) { }

  ngOnInit() {
    this.syncLayout();
    this.configService.getConfig().subscribe((config) => {
      this.config = config;
      this.brandLogoUrl = this.config.brandLogoUrl || this.config.relativePath;
    });
    this.userService.getCurUser().subscribe(user => this.user = user);
  }

  swChange() {
    this.swToggled = !this.swToggled;
    const value = this.swToggled ? '1' : '0';
    localStorage.setItem('ma-layout-status', value);
    this.syncLayout();
  }

  syncLayout() {
    const layoutStatus = localStorage.getItem('ma-layout-status');
    if (!this.config.menuInHeader) {
      if (+layoutStatus === 1) {
        this.renderer.addClass(document.body, 'sw-toggled');
        this.swToggled = true;
      } else if (+layoutStatus === 0) {
        this.renderer.removeClass(document.body, 'sw-toggled');
        this.swToggled = false;
      }
    }
  }

  showAndFocusSearch() {
    this.showSearch = true;
    setTimeout(() => this.search.nativeElement.focus());
  }
}
