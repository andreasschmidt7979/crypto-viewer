import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuitemComponent } from '../menuitem/menuitem.component';

@Component({
  selector: 'app-manu',
  standalone: true,
  imports: [CommonModule, MenuitemComponent, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  model: MenuItem[] = [];

  ngOnInit() {
      this.model = [
          {
              label: 'Home',
              items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
          },
          {
              label: 'Pages',
              icon: 'pi pi-fw pi-briefcase',
              routerLink: ['/pages'],
              items: [
                  {
                      label: 'Landing',
                      icon: 'pi pi-fw pi-globe',
                      routerLink: ['/landing']
                  },
                  {
                      label: 'Auth',
                      icon: 'pi pi-fw pi-user',
                      items: [
                          {
                              label: 'Login',
                              icon: 'pi pi-fw pi-sign-in',
                              routerLink: ['/auth/login']
                          },
                          {
                              label: 'Error',
                              icon: 'pi pi-fw pi-times-circle',
                              routerLink: ['/auth/error']
                          },
                          {
                              label: 'Access Denied',
                              icon: 'pi pi-fw pi-lock',
                              routerLink: ['/auth/access']
                          }
                      ]
                  },
                  {
                      label: 'Crypto Viewer',
                      icon: 'pi pi-fw pi-bitcoin',
                      routerLink: ['/pages/crypto-viewer']
                  },
                  {
                      label: 'Not Found',
                      icon: 'pi pi-fw pi-exclamation-circle',
                      routerLink: ['/pages/notfound']
                  },
                  {
                      label: 'Empty',
                      icon: 'pi pi-fw pi-circle-off',
                      routerLink: ['/pages/empty']
                  }
              ]
          },
          {
              label: 'Get Started',
              items: [
                  {
                      label: 'Documentation',
                      icon: 'pi pi-fw pi-book',
                      routerLink: ['/documentation']
                  },
                  {
                      label: 'View Source',
                      icon: 'pi pi-fw pi-github',
                      url: 'https://github.com/primefaces/sakai-ng',
                      target: '_blank'
                  }
              ]
          }
      ];
  }
}

