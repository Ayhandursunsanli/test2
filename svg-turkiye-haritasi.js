/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

// function svgturkiyeharitasi() {
//     const element = document.querySelector('#svg-turkiye-haritasi');
//     const info = document.querySelector('.il-isimleri');
  
//     element.addEventListener(
//       'click',
//       function (event) {
//         if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
//           info.innerHTML = [
//             '<div>',
//             event.target.parentNode.getAttribute('id'),
//             '</div>'
//           ].join('');
//         }
//       }
//     );
  
//     // element.addEventListener(
//     //   'mousemove',
//     //   function (event) {
//     //     info.style.top = event.pageY + 25 + 'px';
//     //     info.style.left = event.pageX + 'px';
//     //   }
//     // );
  
//     // -------------------kaybolması için------
//     // element.addEventListener(
//     //   'mouseout',
//     //   function (event) {
//     //     info.innerHTML = '';
//     //   }
//     // );
  
//   //   element.addEventListener(
//   //     'click',
//   //     function (event) {
//   //       if (event.target.tagName === 'path') {
//   //         const parent = event.target.parentNode;
//   //         const id = parent.getAttribute('id');
  
//   //         if (
//   //           id === 'guney-kibris'
//   //         ) {
//   //           return;
//   //         }
  
//   //         window.location.href = (
//   //           '#'
//   //           + id
//   //           + '-'
//   //           + parent.getAttribute('data-plakakodu')
//   //         );
//   //       }
//   //     }
//   //   );
//   }


// const gs = document.querySelectorAll('g');
// gs.forEach((g) => {
//   g.classList.add('sehirler');
// });
// const sehirler = document.querySelectorAll('.sehirler');

// const sehirlerDizisi = Array.from(sehirler);

// const randomIndex = Math.floor(Math.random() * sehirlerDizisi.length);
// const randomElement = sehirlerDizisi[randomIndex];

// console.log(randomElement);

// let adana = document.querySelector("#adana").getAttribute("data-iladi");
// let adiyaman = document.querySelector("#adiyaman").getAttribute("data-iladi");
// let afyon = document.querySelector("#afyonkarahisar").getAttribute("data-iladi");
// let agri = document.querySelector("#agri").getAttribute("data-iladi");
// let amasya = document.querySelector("#amasya").getAttribute("data-iladi");
// let ankara = document.querySelector("#ankara").getAttribute("data-iladi");
// let antalya = document.querySelector("#antalya").getAttribute("data-iladi");
// let artvin = document.querySelector("#artvin").getAttribute("data-iladi");
// let aydin = document.querySelector("#aydin").getAttribute("data-iladi");
// let balikesir = document.querySelector("#balikesir").getAttribute("data-iladi");
// let bilecik = document.querySelector("#bilecik").getAttribute("data-iladi");
// let bingol = document.querySelector("#bingol").getAttribute("data-iladi");
// let bitlis = document.querySelector("#bitlis").getAttribute("data-iladi");
// let bolu = document.querySelector("#bolu").getAttribute("data-iladi");
// let burdur = document.querySelector("#burdur").getAttribute("data-iladi");
// let bursa = document.querySelector("#bursa").getAttribute("data-iladi");
// let canakkale = document.querySelector("#canakkale").getAttribute("data-iladi");
// let cankiri = document.querySelector("#cankiri").getAttribute("data-iladi");
// let corum = document.querySelector("#corum").getAttribute("data-iladi");
// let denizli = document.querySelector("#denizli").getAttribute("data-iladi");
// let diyarbakir = document.querySelector("#diyarbakir").getAttribute("data-iladi");
// let edirne = document.querySelector("#edirne").getAttribute("data-iladi");
// let elazig = document.querySelector("#elazig").getAttribute("data-iladi");
// let erzincan = document.querySelector("#erzincan").getAttribute("data-iladi");
// let erzurum = document.querySelector("#erzurum").getAttribute("data-iladi");
// let eskisehir = document.querySelector("#eskisehir").getAttribute("data-iladi");
// let gaziantep = document.querySelector("#gaziantep").getAttribute("data-iladi");
// let giresun = document.querySelector("#giresun").getAttribute("data-iladi");
// let gumushane  = document.querySelector("#gumushane").getAttribute("data-iladi");
// let hakkari = document.querySelector("#hakkari").getAttribute("data-iladi");
// let hatay = document.querySelector("#hatay").getAttribute("data-iladi");
// let isparta = document.querySelector("#isparta").getAttribute("data-iladi");
// let mersin = document.querySelector("#mersin").getAttribute("data-iladi");
// let istanbul = document.querySelector("#istanbul").getAttribute("data-iladi");
// let izmir = document.querySelector("#izmir").getAttribute("data-iladi");
// let kars = document.querySelector("#kars").getAttribute("data-iladi");
// let kastamonu = document.querySelector("#kastamonu").getAttribute("data-iladi");
// let kayseri = document.querySelector("#kayseri").getAttribute("data-iladi");
// let kirklareli = document.querySelector("#kirklareli").getAttribute("data-iladi");
// let kirsehir = document.querySelector("#kirsehir").getAttribute("data-iladi");
// let kocaeli = document.querySelector("#kocaeli").getAttribute("data-iladi");
// let konya = document.querySelector("#konya").getAttribute("data-iladi");
// let kutahya = document.querySelector("#kutahya").getAttribute("data-iladi");
// let malatya = document.querySelector("#malatya").getAttribute("data-iladi");
// let manisa = document.querySelector("#manisa").getAttribute("data-iladi");
// let kahramanmaras = document.querySelector("#kahramanmaras").getAttribute("data-iladi");
// let mardin = document.querySelector("#mardin").getAttribute("data-iladi");
// let mugla = document.querySelector("#mugla").getAttribute("data-iladi");
// let mus = document.querySelector("#mus").getAttribute("data-iladi");
// let nevsehir = document.querySelector("#nevsehir").getAttribute("data-iladi");
// let nigde = document.querySelector("#nigde").getAttribute("data-iladi");
// let ordu = document.querySelector("#ordu").getAttribute("data-iladi");
// let rize = document.querySelector("#rize").getAttribute("data-iladi");
// let sakarya = document.querySelector("#sakarya").getAttribute("data-iladi");
// let samsun = document.querySelector("#samsun").getAttribute("data-iladi");
// let siirt = document.querySelector("#siirt").getAttribute("data-iladi");
// let sinop = document.querySelector("#sinop").getAttribute("data-iladi");
// let sivas = document.querySelector("#sivas").getAttribute("data-iladi");
// let tekirdag = document.querySelector("#tekirdag").getAttribute("data-iladi");
// let tokat = document.querySelector("#tokat").getAttribute("data-iladi");
// let trabzon = document.querySelector("#trabzon").getAttribute("data-iladi");
// let tunceli = document.querySelector("#tunceli").getAttribute("data-iladi");
// let sanliurfa = document.querySelector("#sanliurfa").getAttribute("data-iladi");
// let usak = document.querySelector("#usak").getAttribute("data-iladi");
// let van = document.querySelector("#van").getAttribute("data-iladi");
// let yozgat = document.querySelector("#yozgat").getAttribute("data-iladi");
// let zonguldak = document.querySelector("#zonguldak").getAttribute("data-iladi");
// let aksaray = document.querySelector("#aksaray").getAttribute("data-iladi");
// let bayburt = document.querySelector("#bayburt").getAttribute("data-iladi");
// let karaman = document.querySelector("#karaman").getAttribute("data-iladi");
// let kirikkale = document.querySelector("#kirikkale").getAttribute("data-iladi");
// let batman = document.querySelector("#batman").getAttribute("data-iladi");
// let sirnak = document.querySelector("#sirnak").getAttribute("data-iladi");
// let bartin = document.querySelector("#bartin").getAttribute("data-iladi");
// let ardahan = document.querySelector("#ardahan").getAttribute("data-iladi");
// let igdir = document.querySelector("#igdir").getAttribute("data-iladi");
// let yalova = document.querySelector("#yalova").getAttribute("data-iladi");
// let karabuk = document.querySelector("#karabuk").getAttribute("data-iladi");
// let osmaniye = document.querySelector("#osmaniye").getAttribute("data-iladi");
// let duzce = document.querySelector("#duzce").getAttribute("data-iladi");
// let kibris = document.querySelector("#kibris").getAttribute("data-iladi");

let adana = document.querySelector("#adana");
let adiyaman = document.querySelector("#adiyaman");
let afyon = document.querySelector("#afyonkarahisar");
let agri = document.querySelector("#agri");
let amasya = document.querySelector("#amasya");
let ankara = document.querySelector("#ankara");
let antalya = document.querySelector("#antalya");
let artvin = document.querySelector("#artvin");
let aydin = document.querySelector("#aydin");
let balikesir = document.querySelector("#balikesir");
let bilecik = document.querySelector("#bilecik");
let bingol = document.querySelector("#bingol");
let bitlis = document.querySelector("#bitlis");
let bolu = document.querySelector("#bolu");
let burdur = document.querySelector("#burdur");
let bursa = document.querySelector("#bursa");
let canakkale = document.querySelector("#canakkale");
let cankiri = document.querySelector("#cankiri");
let corum = document.querySelector("#corum");
let denizli = document.querySelector("#denizli");
let diyarbakir = document.querySelector("#diyarbakir");
let edirne = document.querySelector("#edirne");
let elazig = document.querySelector("#elazig");
let erzincan = document.querySelector("#erzincan");
let erzurum = document.querySelector("#erzurum");
let eskisehir = document.querySelector("#eskisehir");
let gaziantep = document.querySelector("#gaziantep");
let giresun = document.querySelector("#giresun");
let gumushane  = document.querySelector("#gumushane");
let hakkari = document.querySelector("#hakkari");
let hatay = document.querySelector("#hatay");
let isparta = document.querySelector("#isparta");
let mersin = document.querySelector("#mersin");
let istanbul = document.querySelector("#istanbul");
let izmir = document.querySelector("#izmir");
let kars = document.querySelector("#kars");
let kastamonu = document.querySelector("#kastamonu");
let kayseri = document.querySelector("#kayseri");
let kirklareli = document.querySelector("#kirklareli");
let kirsehir = document.querySelector("#kirsehir");
let kocaeli = document.querySelector("#kocaeli");
let konya = document.querySelector("#konya");
let kutahya = document.querySelector("#kutahya");
let malatya = document.querySelector("#malatya");
let manisa = document.querySelector("#manisa");
let kahramanmaras = document.querySelector("#kahramanmaras");
let mardin = document.querySelector("#mardin");
let mugla = document.querySelector("#mugla");
let mus = document.querySelector("#mus");
let nevsehir = document.querySelector("#nevsehir");
let nigde = document.querySelector("#nigde");
let ordu = document.querySelector("#ordu");
let rize = document.querySelector("#rize");
let sakarya = document.querySelector("#sakarya");
let samsun = document.querySelector("#samsun");
let siirt = document.querySelector("#siirt");
let sinop = document.querySelector("#sinop");
let sivas = document.querySelector("#sivas");
let tekirdag = document.querySelector("#tekirdag");
let tokat = document.querySelector("#tokat");
let trabzon = document.querySelector("#trabzon");
let tunceli = document.querySelector("#tunceli");
let sanliurfa = document.querySelector("#sanliurfa");
let usak = document.querySelector("#usak");
let van = document.querySelector("#van");
let yozgat = document.querySelector("#yozgat");
let zonguldak = document.querySelector("#zonguldak");
let aksaray = document.querySelector("#aksaray");
let bayburt = document.querySelector("#bayburt");
let karaman = document.querySelector("#karaman");
let kirikkale = document.querySelector("#kirikkale");
let batman = document.querySelector("#batman");
let sirnak = document.querySelector("#sirnak");
let bartin = document.querySelector("#bartin");
let ardahan = document.querySelector("#ardahan");
let igdir = document.querySelector("#igdir");
let yalova = document.querySelector("#yalova");
let karabuk = document.querySelector("#karabuk");
let osmaniye = document.querySelector("#osmaniye");
let duzce = document.querySelector("#duzce");
let kibris = document.querySelector("#kibris");

let sor_btn = document.querySelector(".sor");
let cevap_btn = document.querySelector(".cevap");


iller = [adana, adiyaman, afyon, agri, amasya, ankara, antalya, artvin, artvin, aydin, balikesir, bilecik, bingol, bitlis, bolu, burdur, bursa, canakkale, cankiri, corum, denizli, diyarbakir, edirne, elazig, erzincan, erzurum, eskisehir, gaziantep, giresun, gumushane, hakkari, hatay, isparta, mersin, istanbul, izmir, kars, kastamonu, kayseri, kirklareli, kirsehir, kocaeli, konya, kutahya, malatya, manisa, kahramanmaras, mardin, mugla, mus, nevsehir, nigde, ordu, rize, sakarya, samsun, siirt, sinop, sivas, tekirdag, tokat, trabzon, tunceli, sanliurfa, usak, van, yozgat, zonguldak, aksaray, bayburt, karaman, kirikkale, batman, sirnak, bartin, igdir, yalova, karabuk, osmaniye, duzce,]



let random_il;

sor_btn.addEventListener("click" , () => {
  let randomIndex = Math.floor(Math.random() * iller.length);
  random_il = iller[randomIndex];
  random_il.style["fill"]="blue";

  il_text = random_il.getAttribute("data-iladi").toUpperCase();
  console.log(il_text);
});

cevap_btn.addEventListener("click" , () => {
  let tahminInput = document.querySelector(".tahmin_et");
  let tahmin = tahminInput.value.toUpperCase();
  tahminInput.value = "";
  
  if(il_text === tahmin){
    document.querySelector(".dogru").style.display = "block";
    document.querySelector(".yanlis").style.display = "none";
    random_il.style["fill"]="green";
  }
  else{
    document.querySelector(".dogru").style.display = "none";
    document.querySelector(".yanlis").style.display = "block";
    random_il.style["fill"]="red";
  }  
});





