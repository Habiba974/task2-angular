import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users :any = []
  handleUser(eve:any){
   
    this.users.push(eve)

}
delet(d:any){
  this.users.splice(d,1)
}
edit(index:any){
  this.users[index].userName=prompt("edit your name")
  this.users[index].email=prompt("edit your email")
}
}
