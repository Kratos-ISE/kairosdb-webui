import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <ul>
      <li class="title"><div><img src="resources/images/kairosdb_dark.png" alt="KairosDB" style="height:25px;"></div><li>
      <li><a routerLink="/query" routerLinkActive="active">Query</a></li>
      <li><a routerLink="/events" routerLinkActive="active">Events</a></li>
      <li><a routerLink="/rollups" routerLinkActive="active">Rollups</a></li>
      <li style="float:right"><a href="#grafana">Go to Grafana</a></li>
    </ul>
    <div style="height:50px"></div>
    <router-outlet></router-outlet>
      `,
  styleUrls: ['app.component.css']
})
export class AppComponent {

  title = 'KairosDB WebUI';

}