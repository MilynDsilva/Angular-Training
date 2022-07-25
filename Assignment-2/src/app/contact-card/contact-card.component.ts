import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  public item = ''
  current = new Date()
  date = this.current.getFullYear() + '-' + (this.current.getMonth() + 1) + '-' + this.current.getDate();
  cards = [
    {
      img: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Kiran Acharya',
      contactNumber: '9876543210',
      status: '',
      date: this.date,
      time: this.current.toLocaleTimeString(),
      info: '28 yrs, Male'
    }, {
      img: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Sandeep Hegde',
      contactNumber: '9876543210',
      status: '',
      date: this.date,
      time: this.current.toLocaleTimeString(),
      info: '28 yrs, Male'
    }, {
      img: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      name: 'John Doe',
      contactNumber: '9876543210',
      status: '',
      date: this.date,
      time: this.current.toLocaleTimeString(),
      info: '28 yrs, Male'
    }, {
      img: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Vishwanath',
      contactNumber: '9876543210',
      status: '',
      date: this.date,
      time: this.current.toLocaleTimeString(),
      info: '28 yrs, Male'
    }, {
      img: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Kiran Acharya',
      contactNumber: '9876543210',
      status: '',
      date: this.date,
      time: this.current.toLocaleTimeString(),
      info: '28 yrs, Male'
    }, {
      img: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Sandeep Hegde',
      contactNumber: '9876543210',
      status: '',
      date: this.date,
      time: this.current.toLocaleTimeString(),
      info: '28 yrs, Male'
    }

  ];

  // removeFromList(item:any) {
  //   let index = this.cards.indexOf(item);
  //   this.cards.splice(index, 1); 
  // }
}
