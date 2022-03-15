//spread and rest
function detailes(fname,lname,...det){
    console.log(fname);
    console.log(lname);
    console.log(det);

}
detailes("harshitha","jagadish","5/6/2000","b.tech","eee");

function sum(w,x,y,z,){
    return w+x+y+z;
}
let arr=[1,2,3,4];
console.log(sum(...arr));

//array destructing
let names=["harshitha","jagadish"];
let [a,b]=names;
console.log(a,b);

//object destruction
let person={
    firstname:"harshitha",
    lastname:"jagadish",
}
let {firstname:fname,lastname:lname}=person;
console.log(fname,lname);
