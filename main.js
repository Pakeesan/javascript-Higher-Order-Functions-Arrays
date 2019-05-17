console.log("hello")

const companies=[
    {name:"Company One", category: "Finance",start:1981,end:2003},
    {name:"Company Two", category: "it",start:1981,end:2003},
    {name:"Company Tree", category: "Finance",start:1981,end:2003},
    {name:"Company Four", category: "tv",start:1980,end:1993},
    {name:"Company Five", category: "it",start:1978,end:2003},
    {name:"Company Six", category: "Finance",start:1954,end:2010},
    {name:"Company Seven", category: "Finance",start:1981,end:2003},
    {name:"Company Eight", category: "Finance",start:1990,end:1995},
    {name:"Company Nine", category: "Finance",start:1981,end:1994},
]; 

const ages =[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// for(let i=0; i<companies.length;i++){
//     console.log(companies[i]);
// }
//foreach

// companies.forEach(function(com){
//     console.log(com.name);
// });

//filter

// let canDrink=[];
// for(let i=0; i<ages.length; i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }
// const canDrink =ages.filter(age => age>=21);
// console.log(canDrink);

// const stucom=companies.filter(function(company){
//     if(company.category === 'it'){
//         return true;
//     }
// });

// const stucom=companies.filter(company => company.category==='tv');

// console.log(stucom);

const eightcompany=companies.filter(company => (company.start>=1978 && company.start<2000));

console.log(eightcompany);