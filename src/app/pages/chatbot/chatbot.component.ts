import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenAiApiService } from './services/open-ai-api.service';

@Component({
  selector: 'app-chatbot',
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
})
export class ChatbotComponent {
  userMessage!: string;
  assistantReply!: string;
  chatMessages: { role: string; content: string }[] = [];

  constructor(
    private http: HttpClient,
    private openAiApiService: OpenAiApiService
  ) {}

  sendMessage() {
    const userMessage = this.userMessage;
    this.chatMessages.push({ role: 'user', content: userMessage });
    this.openAiApiService
      .sendMessage(this.userMessage)
      .subscribe((response) => {
        this.assistantReply = response.reply;
        this.chatMessages.push({
          role: 'assistant',
          content: this.assistantReply,
        });
        this.userMessage = '';
      });
  }
}
