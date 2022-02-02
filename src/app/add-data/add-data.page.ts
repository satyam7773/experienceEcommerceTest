import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.page.html',
  styleUrls: ['./add-data.page.scss'],
})
export class AddDataPage implements OnInit {

  
  form: FormGroup;
  TodayDate = new Date().toDateString()
  CreatedData=[]
  storageData=[]

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get type() {
    return this.registrationForm.get('type');
  }

  get Personname() {
    return this.registrationForm.get('Personname');
  }

  get date() {
    return this.registrationForm.get('date');
  }

  get entry() {
    return this.registrationForm.get('entry');
  }

  get exit() {
    return this.registrationForm.get('exit');
  }

  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Name Cannot have numeric or special characters ' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email' }
    ],
    type: [
      { type: 'required', message: 'Type is required' },
    ],
    Personname: [
      { type: 'required', message: 'Person Name is required' },
      { type: 'pattern', message: 'Person Name Cannot have numeric or special characters ' }
    ],
    entry: [
      { type: 'required', message: 'Entry time is required' },
    ],
    exit: [
      { type: 'required', message: 'Exit time is required' },
    ],


  }

  registrationForm = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    type: [
      '',
      [
        Validators.required,
      ]
    ],
    Personname: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]
    ],
    date: [
      this.TodayDate,
      [

      ]
    ],
    entry: [
      '',
      [
        Validators.required,
      ]
    ],
    exit: [
      '',
      [
        Validators.required,
      ]
    ],

  });

  constructor(private formBuilder: FormBuilder,
    public storage: Storage,
    public location:Location) { }

  ngOnInit() {
  }


 async create(){
    console.log("form Data", this.registrationForm.value)

    console.log("CreatedData", this.CreatedData)

   await this.storage.get("data").then((res:any)=>{
      console.log("res",res)
      if(res!=null){
        this.CreatedData = res
        console.log("storage arrray",this.CreatedData)
      }

    })

    this.CreatedData.push(this.registrationForm.value)


    this.storage.set("data",this.CreatedData)

    this.location.back()

  }

}
