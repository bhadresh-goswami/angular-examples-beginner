import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavigationDockComponent } from './admin-navigation-dock/admin-navigation-dock.component';
import { MenubarModule } from 'primeng/menubar';
import { DockModule } from 'primeng/dock';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { TerminalModule } from 'primeng/terminal';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminNavigationDockComponent,
    AddQuestionComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MenubarModule,
    DockModule,
    ToastModule,
    DialogModule,
    TreeModule,
    MessagesModule,
    CardModule,
    TableModule,
  ],
})
export class AdminModule {}
