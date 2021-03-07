import { Injectable } from '@angular/core';
import { MonitorConfig } from '@client/monitor/monitor.config';

@Injectable()
export class MonitorService {
  constructor(private config?: MonitorConfig) { }
  initializer() { }
  public getConfig() { return this.config; }
}
