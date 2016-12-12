class Cart{
  //What is the first part of every class? Type it below.
  constructor(iL,iQ){
    this.itemList = iL;
    this.itemQuantity = iQ;
  }

  //Type the instance functions below this comment.
  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    let total = 0;
    for(let c = 0;c<this.itemList.length;c++){
      total = total + (this.itemList[c]*this.itemQuantity[c]);
    }
  }
  subCart(days){
    let subCart = 
  }

}
