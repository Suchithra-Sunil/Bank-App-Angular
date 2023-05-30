import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 data="Your perfect banking partner"
 data1="enter your ac number"

//  acno=" "
//  or 
//  acno:any
//  psw:any
  //database
  // userDetails:any={
  //   1000:{username:"anu",acno:1000,password:"abc123",balance:0},
  //   1001:{username:"amal",acno:1001,password:"123abc",balance:0},
  //   1002:{username:"arun",acno:1002,password:"arun123",balance:0},
  //   1003:{username:"mega",acno:1003,password:"m123",balance:0}
  // }

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) {

  }
   //  $event()
  // login(){
  //   // alert('login worked')
  //   var acnum=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(psw==userDetails[acnum]["password"]){
  //       alert("login sucessful")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("incorrect acnum")
  //   }


  // }
  // acnoChange(event:any){
  //   // console.log(event.target.value);
  //   this.acno=event.target.value
  //   // console.log(this.acno);
  // }
  // pswChange(event:any){
  //   this.psw=event.target.value
  //   console.log(this.psw);
  // }   
// }


//  template rendering method

// login(acnum:any,psw:any){
//   // console.log(acnum.value,psw.value);
  
//   var acnum=acnum.value
//   var psw=psw.value
//   var userDetails=this.userDetails
//   if(acnum in userDetails){
//     if(psw==userDetails[acnum]["password"]){
//       alert("login sucessful")
//     }
//     else{
//       alert("incorrect password")
//     }
//   }
//   else{
//     alert("incorrect acnum")
//   }
// }


// ngModel (2 way)

// login(){
//     var acnum=this.acno
//     var psw=this.psw
//     var userDetails=this.ds.userDetails
//     if(acnum in userDetails){
//       if(psw==userDetails[acnum]["password"]){
//         alert("login sucessful")
//         //redirection
//         this.router.navigateByUrl("dashboard")
//       }
//       else{
//         alert("incorrect password")
//       }
//     }
//     else{
//       alert("incorrect acnum")
//     }

// }

//model for login
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
})

//dependency injection

login(){
 var acnum=this.loginForm.value.acno
 var psw=this.loginForm.value.psw
 if(this.loginForm.valid){
  this.ds.login(acnum,psw).subscribe((result:any)=>{
    localStorage.setItem("currentuser",result.currentuser)
    localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
    localStorage.setItem("token",JSON.stringify(result.token))
    alert(result.message)
    this.router.navigateByUrl("dashboard")
  },
  result=>{
    alert(result.error.message)
  })
}
else{
  alert("invalid form")
}
//  if(result){
//   alert("login sucessful")
//   this.router.navigateByUrl("dashboard")
//  }
//  else{
//   alert("incorrect acno or password")
//  }
// }
// else{
//   alert("invalid form")
// }
// }
} 

}
