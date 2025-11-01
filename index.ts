function greet(firstname :string) {
  console.log("hello "+firstname)
}
//number ,string 
let x: any =1;
x =true 
x = "shivam"
x = "random"

greet("shivam")
greet("random")

function sum (a :number , b:number){
  return a+b;
}
let ans = sum(3,7);
console.log(ans);

function islegalage (age :number) :boolean {
if (age>=18){
  return true;
}
return false;
}
console.log(islegalage(20));

function delaythecall (fn:()=>void){
  setTimeout(fn,2000)
}


function gree (user:{
  name:string,
  age:number
}) {
  console.log(`hello ${user.name} your age is ${user.age}`)   
}

const y: number =10;
console.log(y)

function getfullname(fullname:string) {
  console.log("hello everyone my name is " + fullname)
};
getfullname("shivam dubey");

function areaofcircle(radius:number) :number{
  let area = Math.PI*radius*radius;
  return area;
}

let ballarea = areaofcircle(12);
console.log(ballarea);

function drinkingage (age:number ):boolean{
  if (age>=21){
    return true;
  }
  return false;
}


const user = {
  name:"shivam dubey",
  age:22,
  graduated:false,
  emailid: "duebyshivam.2020@gmail.com"
}

interface User {
  name:string,
  age:number,
  graduated:boolean,
  emailid:string
}

function canvote(user:User):boolean{
  if(user.age>=18){
    return true;

  }
  return false;
}
console.log(canvote(user));     