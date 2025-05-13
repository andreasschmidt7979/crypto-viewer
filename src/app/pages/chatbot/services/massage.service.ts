import { Injectable } from '@angular/core';

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
  constructor() {}
  private readonly http = inject(HttpClient);

  private readonly _messages = signal<Message[]>([]);
  private readonly _completeMessages = signal<Message[]>([]);
  private readonly _generatingInProgress = signal<boolean>(false);

  readonly messages = this._messages.asReadonly();
  readonly generatingInProgress = this._generatingInProgress.asReadonly();
}
