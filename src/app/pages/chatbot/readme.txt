https://colinaw.com/blog/angular-ai-chatbot/

https://github.com/gsans/google-ai-gemini-angular

https://gerard-sans.medium.com/building-advanced-chatbots-with-angular-and-google-gemini-2-0-real-time-data-tools-and-apis-c917d3c594ba


import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from '../../../environments/environment';
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from '@google/generative-ai';

class Message {
  text?: string;
  type!: MessageType;
}

enum MessageType {
  Bot = 'bot',
  User = 'user',
  Loading = 'loading',
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormGroup, FormBuilder],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageContainer') private messageContainer: ElementRef;
  @Input() public display!: string;

  public form!: FormGroup;
  public messages: Array<Message> = [];
  private canSendMessage = true;

  constructor(private formBuilder: FormBuilder) {}

  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  chat: any;

  ngOnInit(): void {
    // Google AI
    this.InitGeminiProChat();
    this.form = this.formBuilder.group({
      message: [''],
    });
    this.getBotMessage();
  }
  private getBotMessage(): void {}

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

  async sendMessage(messageText: string) {
    // prompt = 'What is the largest number with a name? Brief answer.';
    const prompt = messageText;
    const result = await this.chat.sendMessage(prompt);
    const response = await result.response;
    //console.log(response.candidates?.[0].content.parts[0].text);
    console.log(response.text());
    // console.log('End of response stream');
  }
}

// import { Component, effect, inject } from '@angular/core';
// import { NgClass } from '@angular/common';
// import { MessageService } from './services/massage.service';
// import { FormsModule, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-chatbot',
//   standalone: true,
//   imports: [NgClass, FormsModule],
//   templateUrl: './chatbot.component.html',
//   styleUrl: './chatbot.component.scss',
// })
// export class ChatbotComponent {
//   private readonly messageService = inject(MessageService);

//   readonly messages = this.messageService.messages;
//   readonly generatingInProgress = this.messageService.generatingInProgress;

//   private readonly scrollOnMessageChanges = effect(() => {
//     // run this effect on every `messages` change
//     this.messages();

//     // scroll after the messages render
//     setTimeout(() =>
//       window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: 'smooth',
//       })
//     );
//   });

//   sendMessage(form: NgForm, messageText: string): void {
//     this.messageService.sendMessage(messageText);
//     form.resetForm();
//   }
// }

managed.services

import { inject, Injectable, signal } from '@angular/core';
import { filter, map, Observable, startWith } from 'rxjs';
import {
  HttpClient,
  HttpDownloadProgressEvent,
  HttpEvent,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http';

export interface Message {
  id: string;
  text: string;
  fromUser: boolean;
  generating?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // private readonly http = inject(HttpClient);

  private readonly _completeMessages = signal<Message[]>([]);
  private readonly _messages = signal<Message[]>([]);
  private readonly _generatingInProgress = signal<boolean>(false);

  readonly messages = this._messages.asReadonly();
  readonly generatingInProgress = this._generatingInProgress.asReadonly();

  GeneratingInProgress(inprogress: boolean): void {
    if (inprogress === true) {
      this._generatingInProgress.set(true);
    } else {
      this._generatingInProgress.set(false);
    }

    // this._completeMessages.set([
    //   ...this._completeMessages(),
    //   {
    //     id: window.crypto.randomUUID(),
    //     text: prompt,
    //     fromUser: true,
    //   },
    // ]);

    // this.getChatResponseStream(prompt).subscribe({
    //   next: (message) =>
    //     this._messages.set([...this._completeMessages(), message]),

    //   complete: () => {
    //     this._completeMessages.set(this._messages());
    //     this._generatingInProgress.set(false);
    //   },

    //   error: () => this._generatingInProgress.set(false),
    // });
  }

  // private getChatResponseStream(prompt: string): Observable<Message> {
  //   const id = window.crypto.randomUUID();

  //   return this.http
  //     .post('http://localhost:3000/message', prompt, {
  //       responseType: 'text',
  //       observe: 'events',
  //       reportProgress: true,
  //     })
  //     .pipe(
  //       filter(
  //         (event: HttpEvent<string>): boolean =>
  //           event.type === HttpEventType.DownloadProgress ||
  //           event.type === HttpEventType.Response
  //       ),
  //       map(
  //         (event: HttpEvent<string>): Message =>
  //           event.type === HttpEventType.DownloadProgress
  //             ? {
  //                 id,
  //                 text: (event as HttpDownloadProgressEvent).partialText!,
  //                 fromUser: false,
  //                 generating: true,
  //               }
  //             : {
  //                 id,
  //                 text: (event as HttpResponse<string>).body!,
  //                 fromUser: false,
  //                 generating: false,
  //               }
  //       ),
  //       startWith<Message>({
  //         id,
  //         text: '',
  //         fromUser: false,
  //         generating: true,
  //       })
  //     );
  // }
}
