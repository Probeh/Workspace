import { Injectable } from '@angular/core';
import { MonitorConfig } from '@client/monitor/monitor.config';

@Injectable()
export class StorageService {
  constructor(private config?: MonitorConfig) { }
  initializer() { }
}
