import { NgModule } from "@angular/core";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { ChartModule } from 'angular-highcharts';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
    exports: [NzIconModule, NzProgressModule, ChartModule, NzGridModule],
    imports: [NzIconModule, NzProgressModule, ChartModule, NzGridModule]
})

export class SharedModule { }
