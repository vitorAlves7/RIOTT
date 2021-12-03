import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route: Router) { }

  /*
  public routerMethod(): Router {
    return this.route.navigate(['/pages/history']);
  }

  routeList = this.route.navigate(['/pages/list']);
  routeHistory = this.route.navigate(['/pages/list']);
  routeActivity = this.route.navigate(['/pages/list']);
  routeMembers = this.route.navigate(['/pages/list']);
  goBack = this.route.navigate(['/pages/list']); */
}
