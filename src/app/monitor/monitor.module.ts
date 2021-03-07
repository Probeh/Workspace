import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { ContainerModule } from '@client/monitor/container/container.module'
import { EventsDirective } from '@client/monitor/events.directive'
import { RequestInterceptor } from '@client/monitor/interceptors/request.interceptor'
import { ResponseInterceptor } from '@client/monitor/interceptors/response.interceptor'
import { MonitorRoutingModule } from '@client/monitor/monitor-routing.module'
import { MonitorComponent } from '@client/monitor/monitor.component'
import { MonitorConfig } from '@client/monitor/monitor.config'
import { LoggingService } from '@client/monitor/services/logging.service'
import { MonitorService } from '@client/monitor/services/monitor.service'
import { NetworkService } from '@client/monitor/services/network.service'
import { RoutingService } from '@client/monitor/services/routing.service'
import { RuntimeService } from '@client/monitor/services/runtime.service'
import { StorageService } from '@client/monitor/services/storage.service'

@NgModule({
  imports: [
    CommonModule,
    MonitorRoutingModule
  ],
  declarations: [
    MonitorComponent,
    EventsDirective
  ],
  exports: [MonitorComponent]
})
export class MonitorModule {
  static forRoot(config?: MonitorConfig): ModuleWithProviders<MonitorModule> {
    return {
      ngModule: MonitorModule,
      providers: [
        { provide: MonitorConfig, useValue: config },
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
        LoggingService,
        MonitorService,
        NetworkService,
        RuntimeService,
        RoutingService,
        StorageService
      ]
    }
  }
}
