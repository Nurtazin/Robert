'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMd = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a =prompt('poslednij prosmotrennyj film' , ''),
      b = prompt('kak wy jego oceniwajjete?' , ''),
      c = prompt('poslednij prosmotrennyj film' , ''),
      d = prompt('kak wy jego oceniwajjete?' , '');
personalMd.movies[a] = b,
personalMd.movies[c] = d;
for ( let i = 0; i < 2; i++ ){
    const a =prompt('poslednij prosmotrennyj film' , ''),
          b = prompt('kak wy jego oceniwajjete?' , '');
     if(a != null && b!=null && a!= '' && b!= '' && a.length < 50) {
    personalMd.movies[a] = b;
        console.log('done');
   }
    else {
        console.log('none');
       i--;
    }
};
console.log(personalMd);
function showmydb(hidden){
    if(!hidden){
        console.log(personalMd);
    }
}
showmydb(personalMd.privat);
function writeyuergenres(){
    for(let i = 1 ; i <= 3; i++ ){
        const genre = prompt (`wasz lubimyj rzanrpod nomerom $[i]`);
        personalMd.genres[i - 1] = genre
    }
}
writeyuergenres();





























//let num = 30
//function NumberTer(text){
//    console.log(text);
 //   num = 50
//}
//NumberTer("himi")
//console.log(num);
//function calck(a ,b){
//    return  (a + b);
//}
//console.log(calck(3,3));
//console.log(calck(5,5));
//console.log(calck(10,10));

//function mar(){
 //   let rrta = 123
 //   return rrta;
//}
//const glother = mar ()
//console.log(glother);
//const fgt = "fjreninjnfebcrncrjebjksncjribhdksw";
//console.log(fgt.length);
//const pera = "prRwet";
//console.log(pera);
//console.log(pera.toUpperCase());
//const MyMobFilm = +prompt('scolko filmov ty posmotrel?' , ' ');
//if (MyMobFilm <=30 ){
//    alert('zamalo')
//} else if (MyMobFilm <50){
//   alert('classickin');
//}  else if (MyMobFilm >50){
//    alert('krasawa');
//};
//const personalMd = {
//  count: MyMobFilm,
//  movies:{},
//  actors:{},
//  genres:[],
//  privat: false
//};
//const a =prompt('poslednij prosmotrennyj film' , ''),
//      b = prompt('kak wy jego oceniwajjete?' , ''),
//      c = prompt('poslednij prosmotrennyj film' , ''),
//      d = prompt('kak wy jego oceniwajjete?' , '');
//personalMd.movies[a] = b;
//personalMd.movies[c] = d;
//for ( let i = 0; i < 2; i++ ){
//    const a =prompt('poslednij prosmotrennyj film' , ''),
 //         b = prompt('kak wy jego oceniwajjete?' , '');
//     if(a != null && b!=null && a!= '' && b!= '' && a.length < 50) {
//    personalMd.movies[a] = b;
//    console.log('done');
//   }
 //    else {
 //        console.log('none');
 //       i--;
 //   }
//}
//console.log(personalMd);

//if ( 4 == 4 ){
//    console.log('ok');
//};
//const rar = 50;
//if(50 == 49){
 //   console.log('no');
//} else if (50 == 50){
 //   console.log('ok');
//};
//(rar === 50) ? console.log('ok') : console.log('error');
//const jaj = 60
//switch(jaj){
 //   case 90:
//        console.log('newerno');
//        break;
//        case 90:
//            console.log('newerno');
//            break;
 //           case 61:
 //               console.log('yes');
//                break;
//                default:
//                    console.log('ne w etot raz');
//                    break;
//}