const square = function(x){
    return x*x
}
const square1 = (x) => {
    return x*x
}
const square2 = (x) =>  x*x
const person = {
    name:["chaitanya","Venkata"],
    car:["Audi","Tesla"],
    getCar(){
        this.name.map((e,i)=>{
            console.log(e+" has "+this.car[i])
        })
       
    }
}
person.getCar()
console.log(square2(5))
