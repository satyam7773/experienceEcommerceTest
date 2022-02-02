import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  CreatedDataArray:any=[]

  constructor(public storage:Storage) {}

  ionViewDidEnter(){
    console.log("ionViewDidEnter called")

    this.storage.get("data").then((res:any)=>{
      console.log("res",res)
      this.CreatedDataArray = res

    })

  }

}
