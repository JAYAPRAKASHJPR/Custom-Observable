export class AppObservable {
  subscribers = [];
  constructor(cust) {
    setTimeout(() => {
      cust(this)
    }, 1000)
   
    
  }
  subscribe(method) {
   
    this.subscribers.push(method);
  }
  next(value){
   // console.log(value);
    this.subscribers.forEach(x => {
      x(value);
    })
  }
}
