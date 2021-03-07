import { Injectable } from '@angular/core'
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router'
import { MonitorConfig } from '@client/monitor/monitor.config'
import { LoggingService } from '@client/monitor/services/logging.service'

@Injectable()
export class RoutingService {
  constructor(private router: Router, private logger: LoggingService, private config?: MonitorConfig) {
    console.log(this.router)
    this.router.events
      .subscribe({
        next: event => {
          if (event instanceof NavigationStart) {
            console.log(event);
          }
          else if (event instanceof NavigationCancel) {
            console.log(event);
          }
          else if (event instanceof NavigationError) {
            console.log(event);
          }
          else if (event instanceof NavigationEnd) {
            console.log(event);
          }
        }
      });
  }
  initializer() { }
}
