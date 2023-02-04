import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ToastrModule.forRoot(),
    TableModule,
    ButtonModule,
    SliderModule,
    ProgressBarModule,
    InputTextModule,
    ToolbarModule,
    CardModule,
    ButtonModule,
    ConfirmPopupModule,
    DropdownModule,
    CalendarModule
    


  ],
  exports: [
    FormsModule,
    BsDropdownModule,
    CollapseModule,
    ModalModule,
    TabsModule,
    TooltipModule,
    ToastrModule,
    TableModule,
    ButtonModule,
    SliderModule,
    ProgressBarModule,
    InputTextModule,
    ToolbarModule,
    CardModule,
    ConfirmPopupModule,
    DropdownModule,CalendarModule
  ],
})
export class SharedModule { }
