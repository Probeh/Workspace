import { Component, Input, OnInit } from '@angular/core'
import { MonitorConfig } from '@client/monitor/monitor.config'
import { MonitorService } from '@client/monitor/services/monitor.service'
import { RoutingService } from '@client/monitor/services/routing.service'
import { RuntimeService } from '@client/monitor/services/runtime.service'

@Component({
  selector: 'monitor-runtime',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  @Input() public config: MonitorConfig;
  public sidenav_primary_show: boolean = false;
  public sidenav_secondary_show: boolean = false;

  constructor(private routing: RoutingService, private monitor: MonitorService, private runtime: RuntimeService) { this.config = this.monitor.getConfig(); }
  ngOnInit() { }
  public toggleSidenav(option: string) {
    option == 'primary'
      ? this.sidenav_primary_show = !this.sidenav_primary_show
      : this.sidenav_secondary_show = !this.sidenav_secondary_show;
  }
}
