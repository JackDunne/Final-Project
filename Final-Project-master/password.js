class Password{
  //The first part of the class.
  constructor(pu,pv){
    this.publickey = pu;
    this.privatekey = pv;
  }
  //Instance functions below this comment.
  validPublicKey(){
    if(this.publickey.length >= 8 && this.publickey.length <= 25){
      return true;
    }
    else{
      return false;
      }
    }
    validPrivateKey(){
      let limit = 14;
      for(x = 0;x<limit;x++){
        if(this.privatekey[4]=="-" && this.privatekey[9]=="-"){
          return true;
        }
      }
      else{
        return false;
      }
      for(x = 0;x<=3;x++){
        this.privatekey[x].isinteger
      }
      }
    }
  //Static function below this comment.
  static makePrivateKey(){
    let key = "";
    let limit = 14;
    for(let k = o;k<limit;k++){
      if(k == 4 || k == 9){
        key += "-";
      }
    }
    else{
      let number = Math.random()*10;
      number = Math.floor(number);
      key += number;
    }
    return key;
  }
}
