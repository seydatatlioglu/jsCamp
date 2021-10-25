
let dolarD=9
let dolarB=10
dolarD="ankara"
{
    let dolarD=9.20
}
console.log(dolarD)

//array

let krediler=["konut","emlak","ev"]
console.log(krediler)
//(3) ['konut', 'emlak', 'ev']

for (let i = 0; i < krediler.length; i++) {
    const element = krediler[i];
    console.log(element)   
    // konut
    // emlak
    // ev

}

let student={id:1,name:"seyda",city:"bolu"} //eğer obje {} tanımı yapılacaksa 'let' kullan...
console.log(student) //e.ç. {id: 1, name: 'seyda', city: 'bolu'}

let adress={id:2,name:"adres1",city:"izmir"}
let a={i:2,n:"adres1",c:"izmir"}

/* fonksiyonlar*/
function save(p,note=20){
    console.log(p.id+" "+p.name+" "+p.city+" "+note) 
}
save(student) //1 seyda bolu 20

function save2(note=20,p){
    console.log(p.id+" "+p.name+" "+p.city+" "+note) 
}
save2(undefined,student) //1 seyda bolu 20

/* array */
let students=["eda","seda","engin","seyda",student,{id:2,name:"adres1",city:"izmir"}]
console.log(students) //['eda', 'seda', 'engin', 'seyda']
