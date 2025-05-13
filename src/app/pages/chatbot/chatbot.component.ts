import { Component, effect, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MessageService } from './message.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
})
export class ChatbotComponent {
  private readonly messageService = inject(MessageService);

  readonly messages = this.messageService.messages;
  readonly generatingInProgress = this.messageService.generatingInProgress;

  private readonly scrollOnMessageChanges = effect(() => {
    // run this effect on every `messages` change
    this.messages();

    // scroll after the messages render
    setTimeout(() =>
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    );
  });

  sendMessage(form: NgForm, messageText: string): void {
    this.messageService.sendMessage(messageText);
    form.resetForm();
  }
}
