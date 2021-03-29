import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  newPlayer={};
  showModal= false;
  constructor() { }

  ngOnInit(): void {
    //this.initPlayer();
  }
  initPlayer(){
   this.newPlayer = {"name":'','age':'','club':'','country':''};
   console.log(this.newPlayer);
   
  }

}
