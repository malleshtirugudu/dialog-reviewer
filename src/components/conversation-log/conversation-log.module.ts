import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationLogComponent } from './conversation-log.component';


@NgModule({
  declarations: [ConversationLogComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ConversationLogComponent,
  ]
})
export class ConversationLogModule { }
