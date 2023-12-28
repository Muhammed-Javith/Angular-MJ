import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  Users: User[] = [];
  editUser: boolean = false;
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private http: HttpClient) {
  }
  editId = 0;
  //1.check console for veriffication
  // ngOnInit(){
  //   this.getUsers().subscribe((response) =>{
  //     console.log('response:',response);
  //   })
  // }
  ngOnInit() {
    this.getUsers().subscribe((response) => {
      this.Users = response;
      console.log('response:', response);
    });
  }
  getUsers() {
    //return this.http.get('https://jsonplaceholder.typicode.com/users');
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users'); //return data as the form expected.
  }
  onSubmit() {
    this.addUsers().subscribe((response) => {
      this.Users.push(response)
    });
  }
  onUpdate() {
    const request = this.http.put<User>('https://jsonplaceholder.typicode.com/users/' + this.editId, {
      name: this.userForm.controls.name.value,
      email: this.userForm.controls.email.value
    });
    request.subscribe((response) => {
      this.Users = this.Users.map(User => {
        if (User.id === response.id) {
          User.name = response.name;
          User.email = response.email;
        }
        return User;
      })
    });
  }
  addUsers() {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users',
      {
        name: this.userForm.controls.name.value,
        email: this.userForm.controls.email.value
      });
  }
  edit(id: number) {
    // console.log('id',id);
    this.editUser = true;
    const user = this.Users.find((user => {
      return user.id == id;
    }))
    if (user != undefined) {
      this.userForm.controls.name.setValue(user.name);
      this.userForm.controls.email.setValue(user.email);
      this.editId = id;
    }
  }
  delete (id:number) {
    const request = this.http.put<User>('https://jsonplaceholder.typicode.com/users/' + id, {
    });
    request.subscribe(() => {
      this.Users = this.Users.filter(user => {
        return user.id !== id;
      })
    });
  }

}
class User {
  name!: string;
  email!: string;
  id!: number;
}