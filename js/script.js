'use strict';
const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start : function() {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
                while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
                }
            },
        rememberMyFilms: function(){
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
                }
          },
          detectorPersonalLevel: function(){
           if (personalMovieDB.count < 10){
               console.log("zamalo");
           } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
               console.log("clasikin");
           } else if (personalMovieDB.count >=30){
               console.log("krasawa");
           } else {
               console.log("error");
           }
          },
          showMyDB: function(hidden){
            if(!hidden){
                    console.log(personalMovieDB);
          }
          },
          toggleVisibleMyDB: function(){
             if (personalMovieDB.privat){
                personalMovieDB.privat = false;
             } else{
                personalMovieDB.privat = true;
             }
          },
          writeyuergenres: function(){
            for(let i = 1 ; i <= 3; i++ ){
                        const genre = prompt (`wasz lubimyj rzanrpod nomerom ${i}`);
                        if(genre === "" || genre == null){
                           console.log("wy wweli nekorektnyje dannyje")
                           i--;
                        } else{
                        personalMovieDB.genres[i - 1] = genre
                        }
                    }
            personalMovieDB.genres.forEach((item, i) =>{
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
          }
}
































//osnowy oop start
// console.dir(['1', '2', '3']);

// const solider = {
//     health: 400,
//     armor: 400,
//     sayHello: function(){
//         console.log("hello");
//     }
// };
// const maikl = Object.create(solider);
// console.log(maikl);
// const roloik = {
//     health: 100
// };

// Object.setPrototypeOf(roloik, solider)

// roloik.sayHello();
//osnowy oop finish
//copy start
// function copy (mainobj){
//     let objm = {};
//     let key;
//     for(key in mainobj){
//         objm[key] = mainobj[key];
//     };
//      return objm;
// }
//   const numbers = {
//       a: 5,
//       b: 6,
//       c: 8,
//       d:{
//            x: 1,
//            y: 12
//       }
//   };
//   const NewNumbers = copy(numbers);
//   NewNumbers.a = 10;
//   console.log(NewNumbers);
//   console.log(numbers);

// const art = {
//     w: 4,
//     b:{
//         h:5,
//         c:2
//     }
// };
// const uty = {
//     r:5,
//     l:12
// };
// const clone = Object.assign({}, uty);
// clone.r = 45;
// console.log(clone);


// //console.log(Object.assign(art, uty));
// const oldArray = ['a',  'b', 'g', 't', 'u'];
// const newArray = oldArray.slice();
// newArray[3] = 'asdasadasda';
// console.log(oldArray);
// console.log(newArray);

// const app = ['kkl', 'warcraft', 'wedmak', 'toys'],
//       soc = ['vk', 'instagram', 'youtube', 'play'],
//       alls = [...app, ...soc, 'rrrrr', 'ooooo'];
// console.log(alls);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// const num = ['5', '6', '7'];
// log(...num);
//copy finish
//massiv start
// const str = prompt("" , "")
// const produkts = str.split(", ")
// produkts.sort();
// console.log(produkts.join('; '));
// const arr = [1 , 2 , 3 , 4 , 5 , 6];
// arr.forEach(function( item , i , arr){
//       console.log(`${i} : ${item} iz massiwa ${arr}`);
// });
//arr.pop();
//arr.push(10);
//console.log(arr);
// for(let value of arr){
//     console.log(arr);
// }
// for (let i = 0; i < arr.lenght ; i++){
//      console.log(arr[i]);
// }
//massiv finish
//object start
//const options = {
//    name: 'test',
    // width: 1243,
    // height: 1243,
    // colors:{
    //     border: 'black',
    //     bg: 'red'
    // },
    // maketest: function(){
    //    console.log('salam');
    // }
//};
//      setTimeout(function(){
//          console.log(1);
//      }, 500);
// }
// function two(){
//     console.log(2);
// };
// one();
// two();
// function LearnJs( lang , callback ) {
//     console.log(`ja uczu jazyk ${lang}`);
//     callback();
// };
// LearnJs('javascript' , function() {
//       console.log("ja proszole etot urok");
// });
//object finish
// practik 3 finish
//let numberOfFilms;

//function start() {
//    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//    }
//}
//start();

//const personalMd = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};
//const a =prompt('poslednij prosmotrennyj film' , ''),
//      b = prompt('kak wy jego oceniwajjete?' , ''),
//      c = prompt('poslednij prosmotrennyj film' , ''),
//      d = prompt('kak wy jego oceniwajjete?' , '');
//personalMd.movies[a] = b,
//personalMd.movies[c] = d;

//for ( let i = 0; i < 2; i++ ){
//    const a =prompt('poslednij prosmotrennyj film' , ''),
//          b = prompt('kak wy jego oceniwajjete?' , '');
//     if(a != null && b!=null && a!= '' && b!= '' && a.length < 50) {
//    personalMd.movies[a] = b;
//        console.log('done');
//   }
//    else {
//        console.log('none');
//       i--;
//    }
//};
//console.log(personalMd);
//function showmydb(hidden){
//    if(!hidden){
//        console.log(personalMd);
//    }
//}
//showmydb(personalMd.privat);
//function writeyuergenres(){
//    for(let i = 1 ; i <= 3; i++ ){
//        const genre = prompt (`wasz lubimyj rzanrpod nomerom $[i]`);
//        personalMd.genres[i - 1] = genre
//    }
//}
//writeyuergenres();
// practik 3 finish
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
//            console.log('newer
