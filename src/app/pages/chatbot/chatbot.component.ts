import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message, MESSAGE_TYPE } from './utility/constants';
import { MessagePanelComponent } from './message-panel/message-panel.component';
import { UserInputComponent } from './user-input/user-input.component';
import { v4 as uuidv4 } from 'uuid';
import { environment } from '../../../environments/environment';
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from '@google/generative-ai';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, MessagePanelComponent, UserInputComponent],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
})
export class ChatbotComponent {
  data: Message[] = [];
  loading: boolean = false;
  hide: boolean = false;
  chat: any;
  increment: number = 0;

  ngOnInit(): void {
    // Google AI
    this.InitGeminiProChat();
  }
  async getMessage($event: string) {
    if (!this.loading) {
      let messageObject: Message = this.createMessage(
        $event,
        MESSAGE_TYPE.USER
      );
      this.data = [...this.data].concat(messageObject);
      this.loading = true;

      const result = this.sendMessage(this.data[this.increment].content);
      messageObject = this.createMessage(await result, MESSAGE_TYPE.ASSISTANT);
      this.data = [...this.data].concat(messageObject);
      this.loading = false;
      MESSAGE_TYPE.ASSISTANT;
      //console.log(this.data);
      this.increment = this.increment + 2;
      //   this.openaiService
      //     .QueryPrompt($event)
      //     .subscribe((response: OpenAIResponse): void => {
      //       messageObject = this.createMessage(
      //         response.content.replace(/【[0-9]*†source】/g, ''),
      //         MESSAGE_TYPE.ASSISTANT
      //       );
      //       this.data = [...this.data].concat(messageObject);
      //       this.loading = false;
      //     });
      // } else {
      //   let messageObject: Message = this.createMessage(
      //     $event,
      //     MESSAGE_TYPE.USER
      //   );
    }
  }

  async sendMessage(messageText: string) {
    //console.log(messageText);
    //const prompt = 'What is the largest number with a name? Brief answer.';
    const prompt = messageText;
    const result = await this.chat.sendMessage(prompt);
    const response = await result.response;
    //console.log(response.candidates?.[0].content.parts[0].text);
    //console.log(response.text());
    return response.text();
    // console.log('End of response stream');
  }

  createMessage(content: string, type: MESSAGE_TYPE): Message {
    return {
      id: uuidv4(),
      sender: type,
      content: content,
      dateTime: new Date(),
    };
  }

  public debounce(func: Function, timeout = 400) {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  InitGeminiProChat() {
    // Gemini Client
    const genAI = new GoogleGenerativeAI(environment.API_KEY);
    const generationConfig = {
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
      //maxOutputTokens: 100,
    };

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      ...generationConfig,
    });

    this.chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: 'Hi there!',
        },
        {
          role: 'model',
          parts: 'Great to meet you. What would you like to know?',
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });
  }
}
