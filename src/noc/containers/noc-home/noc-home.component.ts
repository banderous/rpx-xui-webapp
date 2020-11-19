import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { answerErrorVisibilityStates, caseRefVisibilityStates, checkAnswerVisibilityStates, qAndAVisibilityStates } from '../../constants';
import { NocNavigation, NocNavigationEvent, NocState } from '../../models';
import * as fromFeature from '../../store';
import { NocCaseRefComponent } from '../noc-case-ref/noc-case-ref.component';
import { NocQAndAComponent } from '../noc-q-and-a/noc-q-and-a.component';

@Component({
  selector: 'exui-noc-home',
  templateUrl: 'noc-home.component.html',
  styleUrls: ['noc-home.component.scss']
})
export class NocHomeComponent implements OnInit, OnDestroy {

  @ViewChild('nocCaseRef', { read: NocCaseRefComponent })
  public nocCaseRefComponent: NocCaseRefComponent;

  @ViewChild('nocQandA', { read: NocQAndAComponent })
  public nocQandAComponent: NocQAndAComponent;

  public nocNavigationCurrentState: NocState;
  private nocNavigationCurrentStateSub: Subscription;
  public navEvent: NocNavigation;

  public caseRefVisibilityStates = caseRefVisibilityStates;
  public caseRefErrorStates = [NocState.CASE_REF_SUBMISSION_FAILURE];

  public qAndAVisibilityStates = qAndAVisibilityStates;
  public answerErrorVisibilityStates = answerErrorVisibilityStates;

  public checkAnswerVisibilityStates = checkAnswerVisibilityStates;

  constructor(
    private readonly store: Store<fromFeature.State>,
  ) { }

  public ngOnInit() {
    this.nocNavigationCurrentStateSub = this.store.pipe(select(fromFeature.currentNavigation)).subscribe(state => this.nocNavigationCurrentState = state);
  }

  public onNavEvent(event: NocNavigationEvent) {
    this.navEvent = {
      event,
      timestamp: Date.now()
    };
    this.navigationHandler(event);
  }

  public isComponentVisible(currentNavigationState: NocState, requiredNavigationState: NocState[]): boolean {
    return requiredNavigationState.includes(currentNavigationState);
  }

  public navigationHandler(navEvent: NocNavigationEvent) {
    switch (navEvent) {
      case NocNavigationEvent.BACK: {
        switch (this.nocNavigationCurrentState) {
          case NocState.QUESTION:
          case NocState.ANSWER_INCOMPLETE:
          case NocState.ANSWER_SUBMISSION_FAILURE:
            this.store.dispatch(new fromFeature.Reset());
            break;
          case NocState.CHECK_ANSWERS:
            this.store.dispatch(new fromFeature.ChangeNavigation(NocState.QUESTION));
            break;
          default:
            throw new Error('Invalid NoC state');
        }
        break;
      }
      case NocNavigationEvent.CONTINUE: {
        switch (this.nocNavigationCurrentState) {
          case NocState.START:
            this.nocCaseRefComponent.navigationHandler(navEvent);
            break;
          case NocState.CASE_REF_VALIDATION_FAILURE:
            this.nocCaseRefComponent.navigationHandler(navEvent);
            break;
          default:
            throw new Error('Invalid NoC state');
        }
        break;
      }
      case NocNavigationEvent.SET_ANSWERS: {
        switch (this.nocNavigationCurrentState) {
          case NocState.QUESTION:
          case NocState.ANSWER_INCOMPLETE:
            this.nocQandAComponent.navigationHandler(navEvent);
            break;
          default:
            throw new Error('Invalid NoC state');
        }
        break;
      }
      default:
        throw new Error('Invalid NoC navigation event');
    }
  }

  public ngOnDestroy() {
    if (this.nocNavigationCurrentStateSub) {
      this.nocNavigationCurrentStateSub.unsubscribe();
    }
  }
}
