import { Injectable } from '@angular/core';
import { MonitorConfig } from '@client/monitor/monitor.config';

@Injectable()
export class NetworkService {
  constructor(private config?: MonitorConfig) { }
  initializer() { }
}
