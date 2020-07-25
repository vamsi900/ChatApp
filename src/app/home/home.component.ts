import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: string;
  selectedRoom: string;
  createNewRoom: Boolean;
  newRoom: string;
  chooseRoom: any = ['Lobby', 'Hall', 'Deluxe'];
  userData: any = {};
  constructor(public chatService: ChatService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    this.createNewRoom = true;
  }

  addRoom() {
    this.chooseRoom.push(this.newRoom);
  }

  join() {
    this.chatService.joinRoom({ user: this.user, room: this.selectedRoom });
    this.router.navigate(['/chat']);
  }
}
