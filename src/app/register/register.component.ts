import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // acno:any
  // psw:any
  // uname:any
  registerForm: any;
  

constructor(private ds:DataService,private router:Router,private fb:FormBuilder){

//Model for registration
  this.registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]]
  })


}  
  register(){
     var acno=this.registerForm.value.acno
     var uname=this.registerForm.value.uname
     var psw=this.registerForm.value.psw
     if(this.registerForm.valid){
      const result= this.ds.register(acno,uname,psw).subscribe((result:any)=>{
        alert(result.message)
        this.router.navigateByUrl("")  //redirection to login page
      },
        result=>{
          alert(result.error.message)
        }
      )
     }
      else{
          alert('invalid form')
        }
  }

}
  //    if(result){
  //     alert("registered")
  //     this.router.navigateByUrl(" ")
  //    }
  //    else{
  //     alert("user already registered")
  //    }
  // }
  // else{
  //   alert('invalid form')
  // }






