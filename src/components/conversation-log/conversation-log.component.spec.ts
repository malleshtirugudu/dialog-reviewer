import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationLogComponent } from './conversation-log.component';

describe('ConversationLogComponent', () => {
  let component: ConversationLogComponent;
  let fixture: ComponentFixture<ConversationLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
