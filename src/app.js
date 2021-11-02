
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

/* rest */
let showProducts=function(id,...product){
    console.log(id) // 1
    console.log(product) // ['elma', 'armut', 'karpuz']
}
showProducts(1,"elma","armut","karpuz")

/* spread */
let points=[1,2,3,4,78,50,10]
console.log(...points) //1 2 3 4 78 50 10
console.log(Math.max(points)) //NaN
console.log(Math.max(...points)) //78
console.log(..."ABCDEFGHIJKLMNOPRSTUVYZWQ") //A B C D E F G H I J K L M N O P R S T U V Y Z W Q
console.log("ABCDEFGHIJKLMNOPRSTUVYZWQ") //ABCDEFGHIJKLMNOPRSTUVYZWQ

/* destructuring */
let nufus=[10000,20000,30000]
let[s,m,h]=nufus
console.log(s,m) //10000
console.log(m) //20000
console.log(h) //30000

let bilgi={i:2,n:"isim",sehir:"kütahya"}
let{i,n,sehir}=bilgi
console.log(i) //2
console.log(n) //isim
console.log(sehir) //kütahya
console.log(bilgi.sehir)//kütahya
console.log(bilgi["sehir"])//kütahya

let insan=[1,"test","sehir"]
let[number,adi,yer]=insan
console.log(number)//1
console.log(insan[0])//1
console.log(adi)//test
console.log(yer)//sehir
