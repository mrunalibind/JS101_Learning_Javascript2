//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_username="mrunali123";
let reg_password="Pass765";

let ent_username="mrunali123";
let ent_password="Pass765";

if(reg_username==ent_username){
  if(reg_password==ent_password){
    console.log("Login:)");
  }
  else{
    console.log("Wrong Password");
  }
}
else{
  console.log("Wrong Username");
}


