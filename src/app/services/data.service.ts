import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//create global header for header overlaping
const option={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentuser:any
  currentAcno:any
  userDetails:any

  // userDetails:any={
  //   1000:{username:"anu",acno:1000,password:"abc123",balance:0,transaction:[]},
  //   1001:{username:"amal",acno:1001,password:"123abc",balance:0,transaction:[]},
  //   1002:{username:"arun",acno:1002,password:"arun123",balance:0,transaction:[]},
  //   1003:{username:"mega",acno:1003,password:"m123",balance:0,transaction:[]}
  // }

  constructor(private http:HttpClient) { 
    // this.getDetails()
  }

  // saveDetails(){
  //   if(this.userDetails){
  //     localStorage.setItem("userDetails",JSON.stringify(this.userDetails))
  //   }
  //   if(this.currentuser){
  //     localStorage.setItem("currentuser",this.currentuser)
  //   }
  //   if(this.currentAcno){
  //     localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  //   }
  // }

  // getDetails(){
  //   if(localStorage.getItem("userDetails")){
  //     this.userDetails=JSON.parse(localStorage.getItem("userDetails") || "")
  //   }
  //   if(localStorage.getItem("currentuser")){
  //     this.currentuser=localStorage.getItem("currentuser")
  //   }
  //   if(localStorage.getItem("currentAcno")){
  //     this.currentAcno=JSON.parse(localStorage.getItem("currentAcno") || "")
  //   }
  // }
  
  getToken(){
    //access token
    const token=JSON.parse(localStorage.getItem("token") || "")
    //generate header
    let headers=new HttpHeaders()
    //check token accessed or not
    if(token){
      //add the token into headers
      option.headers=headers.append('access_token',token)
    }
    return option
  }
  
  register(acno:any,uname:any,psw:any){
  const data={acno,uname,psw}
  return this.http.post('http://localhost:3000/register',data) 
    // var userDetails=this.userDetails
    // if(acno in userDetails){
    //   return false
    // }
    // else{
    //   userDetails[acno]={username:uname,acno,password:psw,balance:0,transaction:[]}
    //   // console.log(userDetails);
    //   this.saveDetails()
    //   return true
    // }
  }
  login(acno:any,psw:any){

    const data={acno,psw}
    return this.http.post('http://localhost:3000/login',data)
    // var userDetails=this.userDetails
    // if(acno in userDetails){
    //   if(psw==userDetails[acno].password){
    //     //store current user (showing username in dashboard)
    //     this.currentuser=userDetails[acno]["username"]

    //     this.currentAcno=acno
    //     this.saveDetails()
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // }
    // else{
    //   return false
    // }
  }

  deposit(acno:any,psw:any,amnt:any){
    const data={acno,psw,amnt}
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())
    //To convert string to int 
    // var amount=parseInt(amnt)
    // var userDetails=this.userDetails

    // if(acno in userDetails){
    //   if(psw==userDetails[acno]["password"]){
    //    userDetails[acno]["balance"]+=amount
    //    console.log(userDetails);

    //    //add transcation data
    //    userDetails[acno]["transaction"].push({Type:"Credit",Amount:amount}
    //    )
    //   //  console.log(userDetails);
    //   this.saveDetails()
       
    //    return userDetails[acno]["balance"]
    //   }
    //   else{
    //     return false
    //   }
    // }
    // else{
    //   return false
    // }
  }

  withdraw(acno:any,psw:any,amnt:any){
    const data={acno,psw,amnt}
    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
    //To convert string to int 
  //   var amount=parseInt(amnt)
  //   var userDetails=this.userDetails

  //   if(acno in userDetails){
  //     if(psw==userDetails[acno]["password"]){
  //       if(amount<=userDetails[acno]["balance"]){
  //         userDetails[acno]["balance"]-=amount

  //         userDetails[acno]["transaction"].push({Type:"Debit",Amount:amount})
  //         // console.log(userDetails);
  //         this.saveDetails()
  //         return userDetails[acno]["balance"]
  //       }
  //     else{
  //       alert("insufficient balance")
  //     }
  //   }
  //   else{
  //     return false
  //   }
  // }
  // else{
  //    return false
  // }
}

getTransaction(acno:any){
  const data={acno}
  return this.http.post('http://localhost:3000/transaction',data,this.getToken())
  //  return this.userDetails[acno].transaction
}
 
deleteAcc(acno:any){
   return this.http.delete('http://localhost:3000/delete/'+acno,this.getToken())
}
 
}
