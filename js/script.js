const MyMobFilm = +prompt('scolko filmov ty posmotrel?' , ' ');
const personalMd = {
  count: MyMobFilm,
  movies:{},
  actors:{},
  genres:[],
  privat: false
};
const a = prompt('poslednij prosmotrennyj film' , ''),
      b = prompt('kak wy jego oceniwajjete?' , ''),
      c = prompt('poslednij prosmotrennyj film' , ''),
      d = prompt('kak wy jego oceniwajjete?' , '');
personalMd.movies[a] = b;
personalMd.movies[c] = d;
console.log(personalMd);