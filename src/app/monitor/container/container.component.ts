import { AfterViewInit, Component } from '@angular/core'
import { MonitorService } from '@client/monitor/services/monitor.service'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterViewInit {
  constructor(private monitor: MonitorService) { }
  ngAfterViewInit() { }
}
