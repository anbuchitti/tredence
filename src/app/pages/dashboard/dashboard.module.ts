import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FillChartComponent } from './fill-chart/fill-chart.component';
import { GadgetComponent } from './gadget/gadget.component';
import { LineChartComponent } from './line-chart/line-chart.component';

import { HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { SocialMediaGadgetComponent } from './social-media-gadget/social-media-gadget.component';

@NgModule({
  imports: [DashboardRoutingModule,SharedModule],
  declarations: [DashboardComponent, GadgetComponent, LineChartComponent, FillChartComponent, SocialMediaGadgetComponent],
  exports: [DashboardComponent],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] } // add as factory to your providers
  ]
})
export class DashboardModule { }
