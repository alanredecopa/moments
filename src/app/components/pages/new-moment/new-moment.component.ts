import { Moment } from './../../../Moments';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar';

  constructor() { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {

    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if(moment.image){
      formData.append('image', moment.image);
    }

    //TODO
      // enviar para o service
      // exibir mensagem
      // redirect

    }

}
