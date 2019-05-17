const m=prompt("enter maths marks:","");
const s=prompt("enter science marks:","");
const e=prompt("enter english marks:","");

var total=(m+s+e);
var ave=total/3;

console.log(ave);

if(ave>=75){
    console.log("A");
}
else if(ave>=65){
    console.log("B");
}
else if(ave>=65){
    console.log("C");
}
else if(avg>=55){
    console.log("d");
}
else{
    console.log("f")
}
