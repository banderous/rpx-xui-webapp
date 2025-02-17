import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExuiCommonLibModule } from '@hmcts/rpx-xui-common-lib';

import * as fromComponents from '.';
import * as fromPipes from '../pipes';
import { CaseworkerDataService } from './../services/case-worker-data.service';
import { LocationDataService } from './../services/location-data.service';

// from containers
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ExuiCommonLibModule,
    FormsModule // TODO: Remove this as it's only needed for testing.
  ],
  declarations: [
    ...fromComponents.components,
    ...fromPipes.pipes
  ],
  providers: [CaseworkerDataService, LocationDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ...fromComponents.components,
    ...fromPipes.pipes
  ]
})
export class WorkAllocationComponentsModule {

}
