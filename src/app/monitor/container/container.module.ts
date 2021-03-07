import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ContainerComponent } from '@client/monitor/container/container.component'

const components = [ContainerComponent];
const modules = [];
const providers = [];

@NgModule({
  imports: [CommonModule, modules],
  declarations: components,
  providers: providers,
  exports: [components, modules, providers],
})
export class ContainerModule { }
