import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  user: string;
  room: string;
  messageText: String;
  messageArray: Array<{ user: String; message: String }> = [];

  constructor(private chatService: ChatService) {
    this.chatService.newUserJoined().subscribe((data) => {
      this.messageArray.push(data);
    });

    this.chatService.userLeftRoom().subscribe((data) => {
      this.messageArray.push(data);
    });

    this.chatService.newMessageReceived().subscribe((data) => {
      this.messageArray.push(data);
    });
    this.user = this.chatService.userData.user;
    this.room = this.chatService.userData.room;
  }

  sendMessage() {
    this.chatService.sendMessage({
      user: this.user,
      room: this.room,
      message: this.messageText,
    });
  }

  ngOnInit(): void {}

  leave() {
    this.chatService.leaveRoom({ user: this.user, room: this.room });
  }
}
