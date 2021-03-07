import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from '@client/app-routing.module'
import { AppComponent } from '@client/app.component'
import { HomeComponent } from '@client/home/home.component'
import { MonitorModule } from '@client/monitor/monitor.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonitorModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
