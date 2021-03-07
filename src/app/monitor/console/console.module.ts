import { CommonModule } from '@angular/common'
import { ConsoleComponent } from '@client/monitor/console/console.component'
import { NgModule } from '@angular/core'

const components = [ConsoleComponent];
const modules = [];
const providers = [];

@NgModule({
  imports: [CommonModule, modules],
  declarations: components,
  providers: providers,
  exports: [components, modules, providers],
})
export class ConsoleModule { }
