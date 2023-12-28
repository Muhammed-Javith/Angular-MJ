import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  title = 'List of Movies';
  movies=[
    'Jurrasic park', 
    'Narniya', 
    'BatMan vs SuperMan',
    'Zootopia',
    'Harry porter',
    'X-men',
    'Final Destination'
  ];
  TitleName = 'List of Movies in details';
  movieslist = [
    {moviename:'Jurrasic park',director:'mr a',cast:'mr p'},
    {moviename:'Narniya',director:'mr b',cast:'mr q'},
    {moviename:'BatMan vs SuperMan',director:'mr c',cast:'mr r'},
    {moviename:'Zootopia',director:'mr d',cast:'mr s'},
    {moviename:'Harry porter',director:'mr e',cast:'mr t'},
    {moviename:'X-men',director:'mr f',cast:'mr u'},
    {moviename:'Final Destination',director:'mr g',cast:'mr v'},
  ];
  users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    { id: 4, name: 'Alice Johnson' }
  ]; 
}
