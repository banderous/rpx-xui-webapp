import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {reducers} from 'src/app/store';
import { CdkTableModule } from '@angular/cdk/table';

import {TaskListWrapperComponent, TaskListComponent} from '..';
import { WorkAllocationComponentsModule } from '../../components/work-allocation.components.module';
import { InfoMessage, InfoMessageType } from '../../enums';

describe('TaskListWrapperComponent', () => {
  let component: TaskListWrapperComponent;
  let fixture: ComponentFixture<TaskListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        WorkAllocationComponentsModule,
        CdkTableModule,
        RouterTestingModule,
        StoreModule.forRoot({...reducers}),
      ],
      declarations: [TaskListWrapperComponent, TaskListComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should initialise', async () => {

  });
});