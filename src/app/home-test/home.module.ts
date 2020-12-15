import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { DirectivesModule } from '../directives/directives.module';
import { HomeComponent } from './home.component';
import { HomeTestComponent } from './home-test.component';
import { QuoteService } from './quote.service';
import { NodeComponent } from './node/node.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    DirectivesModule
  ],
  entryComponents: [HomeTestComponent, NodeComponent],
  declarations: [HomeComponent, HomeTestComponent, NodeComponent],
  providers: [QuoteService]
})
export class HomeModule {}
