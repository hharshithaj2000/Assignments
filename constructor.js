class Student
{
    constructor(fname,lname,dob,cs,{math,sci,comp})
    {
        this.fname=fname;
        this.lname=lname;
        this.dob=dob;
        this.cs=cs;
        this.math=math;
        this.sci=sci;
        this.comp=comp;
    }
    sumofsub(){
        return (this.math+this.sci+this.comp)/3;
    }
}
let obj1=new Student("h","j","566","5",{math:56,sci:20,comp:10});
console.log(obj1.sumofsub());

let obj2=new Student("h","j","566","5",{math:20,sci:20,comp:10});
console.log(obj2.sumofsub());

let obj3=new Student("h","j","566","5",{math:57,sci:24,comp:14});
console.log(obj3.sumofsub());

let obj4=new Student("h","j","566","5",{math:78,sci:24,comp:76});
console.log(obj4.sumofsub());

let obj5=new Student("h","j","566","5",{math:56,sci:20,comp:13});
console.log(obj5.sumofsub());
