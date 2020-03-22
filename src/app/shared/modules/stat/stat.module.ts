import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { ApiServiceService } from 'src/app/api-service.service';

@NgModule({
    imports: [CommonModule],
    declarations: [StatComponent],
    exports: [StatComponent],
    providers: [ApiServiceService]
})
export class StatModule {}
