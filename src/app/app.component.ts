import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { UiEventsService } from './ui-events.service';
import { UserService } from './models/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atillabaspinar';

  constructor(public uiService: UiEventsService,
    public userService: UserService,
    private firestore: AngularFirestore) {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.userService.formData = {
      id: null,
      fullName: '',
      email: ''
    };
  }

  onSearch() {
   // this.firestore.collection('users', ref => ref.where('fullName', '==', 'Atilla Baspinar'));
  
  }
  onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    form.value.fullName = 'atilla';
    form.value.email = 'atillabaspinar@gmail.com';
    delete data.id;
    // if (form.value.id == null) {
    //   this.firestore.collection('users').add(data);
    // } else {
    //   this.firestore.doc('users/' + form.value.id).update(data);
    // }
    this.resetForm(form);
  }
}
