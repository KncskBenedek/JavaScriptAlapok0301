/*  Tömb  */

var tomb = [];
var tomb2 = [1,23,4,5,56,23,3];
var tomb3 = [2];
console.log(tomb.length)
console.log(tomb2.length)
console.log(tomb3.length)
console.log(tomb2[2])

var gyumolcs = ["alma","körte", "szilva", "Narancs"]
var gyumolcsSzin = ["piros", "sárga", "kék", "sárga"]
var gyumolcsAr = [200, 180, 320, 310]
for (let index = 0; index < gyumolcs.length; index++) {
    console.log(gyumolcs[index])   
}
var i = 0;
while(i < gyumolcsSzin.length && !(gyumolcsSzin[i] === "sárga")){
    i++;
}

var feltetel = i < gyumolcsSzin.length;
console.log(feltetel)

//hány sárga van
// mannyi a gyümik összege
// piros vagy sárga van több
//vam e 100 alatt
//mennyi a gyümölcsök átlag ára
var osszeg = 0;
for (let index = 0; index < gyumolcsAr.length; index++) {
    osszeg += gyumolcsAr[index];
}
console.log(osszeg)
var atlag = osszeg / gyumolcsAr.length;
console.log(atlag+ " a gyümölcsök átlaga")


index = 0;
hossza = gyumolcsAr.length;
var sargaDb = 0;
var pirosDb = 0;
while(index < hossza){
    if(gyumolcsSzin[index] === "sárga")
        sargaDb++;
    else if(gyumolcsSzin[index] === "piros"){
        pirosDb;
    }
    index++;
}

console.log("sárga db = "+ sargaDb)
console.log("piros db = "+ pirosDb)


if(sargaDb > pirosDb){console.log("sárga több van")}
else if(sargaDb === pirosDb){console.log("eggyenlő db van")}
else{console.log("pirosból több db van")}


index =0;
while(index < hossza && !(gyumolcsAr < 100)){
    index++;
}

var vanSzaAlatt = index < hossza;
console.log(vanSzaAlatt?"van 100ft alatt gyümölcs":"nincs 100ft alatt gyümölcs")
