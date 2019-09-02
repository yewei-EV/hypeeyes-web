import { Component, OnInit } from '@angular/core';
import { Config } from '../../models/config';
import { ConfigService } from '../../service/config.service';
import { NavItem } from '../../models/nav-item';
import {User} from '../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  config: Config;
  brandLogoUrl: string;
  navItems: NavItem[];
  user: User;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig().subscribe((config) => {
      this.config = config;
      this.brandLogoUrl = this.config.brandLogoUrl || this.config.relativePath;
    });
  }

}
