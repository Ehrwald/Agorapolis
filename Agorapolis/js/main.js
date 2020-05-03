var mapKeysValues = [ [0, "Double Bar"], [1, "Double Bar"], [2, "Double Bar"], [3, "Double Bar"],
  [4, "Double Bar"], [5, "Double Bar"], [6, "Double Bar"], [7, "Seven"], [8, "Triple Bar"],
  [9, "Triple Bar"], [10, "Triple Bar"],[11, "Bell"], [12, "Single Bar"], [13, "Single Bar"],
  [14, "Single Bar"], [15, "Single Bar"], [16, "Single Bar"], [17, "Single Bar"],[18, "Bell"],
  [19, "Single Bar"], [20, "Single Bar"], [21, "Single Bar"], [22, "Single Bar"], [23, "Single Bar"],
  [24, "Single Bar"], [25, "Single Bar"], [26, "Single Bar"], [27, "Seven"], [28, "Triple Bar"],
  [29, "Triple Bar"], [30, "Triple Bar"], [31, "Double Bar"], [32, "Double Bar"], [33, "Double Bar"],
  [34, "Bell"]
];
var arrayImages = [ 'img/1_singlebar_1.png','img/2_bell_1.png', 'img/3_doublebar_1.png',
  'img/4_seven_1.png','img/5_triplebar_1.png','img/6_bell_2.png',
  'img/7_doublebar_2.png','img/8_seven_2.png','img/9_triplebar_2.png',
  'img/10_singlebar_2.png'];


var rollOne = new Map(mapKeysValues);
var rollTwo = new Map(mapKeysValues);
var rollThree = new Map(mapKeysValues);

let iterator = imageIterator(0);

let wallet = parseInt(localStorage.wallet, 10);
console.log(wallet);
const bet = document.querySelectorAll("button.bet");

//
// changeImg(arrayImages, "rollOne");
// changeImg(arrayImages, "rollTwo");
// changeImg(arrayImages, "rollThree");


//refreshEverysec(5000);

for (let i=0; i<bet.length; i++) {
    bet[i].addEventListener("click", function () {
    if(parseInt(bet[i].innerHTML, 10) > wallet){

      alert("vous n'avez pas assez de crédit");
      return false;
    } else {
      if (Perdu(wallet)) {
        localStorage.clear();
        return false;
      } else {

         changeImg(arrayImages, "rollOne");
         changeImg(arrayImages, "rollTwo");
         changeImg(arrayImages, "rollThree");

        // const interval = ms => new Promise(resolve => setTimeout(resolve, ms));
        // interval(250).then(() => changeImg(arrayImages, "rollOne")).catch(function (error) {
        //   console.error(error)
        // })


        let value = rollOne.get(getRandomInt(rollOne.size));
        let value2 = rollTwo.get(getRandomInt(rollTwo.size));
        let value3 = rollThree.get(getRandomInt(rollThree.size));
        let invested = bet[i].innerHTML;

        //changeImg(arrayImages, "rollOne", true);




        //document.write(localStorage.wallet);
        console.log("le solde de localStrorage : ", localStorage.wallet);

        // changeImg(arrayImages, "rollOne", setTimeout(function () {
        //     return true;
        // }, 2000));

        // changeImg(arrayImages, "rollTwo", true);
        // changeImg(arrayImages, "rollThree", true);

        //$("#rollOne").attr("src", "img/7_doublebar_2.png");

        console.log(value, " / ", value2, " / ", value3, "vous misez : ", invested,
          "Votre solde est de : ", wallet);

        if (value === value2 && value2 === value3) {
          switch (value) {
            case 'Single Bar':
              console.log("c'est single bar");
              console.log(calcul(invested, 5), "€");
              wallet += calcul(invested, 5);
              setImages('img/1_singlebar_1.png');
              break;
            case 'Double Bar':
              console.log("c'est Double bar");
              console.log(calcul(invested, 10), "€");
              wallet += calcul(invested, 10);
              setImages('img/3_doublebar_1.png');
              break;
            case 'Triple Bar':
              console.log("c'est Triple bar");
              console.log(calcul(invested, 50), "€");
              wallet += calcul(invested, 50);
              setImages('img/5_triplebar_1.png');
              break;
            case 'Bell':
              console.log("c'est Bell");
              console.log(calcul(invested, 500), "€");
              wallet += calcul(invested, 500);
              setImages('img/2_bell_1.png');
              break;
            case 'Seven':
              console.log("c'est Seven");
              console.log(calcul(invested, 10000), "€");
              wallet += calcul(invested, 10000);
              setImages('img/4_seven_1.png');
              break;
          }
        } else {
          wallet = wallet - parseInt(invested, 10);
          console.log("c'est perdu!", "& Votre solde est de : ", wallet);
          localStorage.setItem("wallet", wallet.toString());
          console.log("Après jeu : ", localStorage.wallet);
          return wallet;
        }
      }
    }
      console.log(value);
      localStorage.setItem("wallet", wallet.toString());
      console.log("Après jeu : ", localStorage.wallet);
    });

}
function  getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function calcul(bet, multip) {
  return parseInt(bet, 10) * multip;
}

function Perdu(sommes) {
  if (sommes === 0 || sommes < 0) {
    $('button.bet').attr('disabled','disabled');
    alert("Vous n'avez plus d'argent");
    return true;
  }
}

function refreshEverysec(sec) {
  setInterval(function (){
    window.location.reload();
  }, sec)
}


function* imageIterator(idx) {
  while (idx < arrayImages.length)
    yield idx++;
  iterator = imageIterator(1);
  yield 0;
}


function changeImg(array, roll) {

    $("#" + roll + "").attr("src", array[iterator.next().value]);

}



// function changeImg(array, roll) {
//
//     setInterval(() => {
//       $("#" + roll + "").attr("src", array[iterator.next().value]);
//
//     }, 250);
// }

function setImages(value) {
  $("#rollOne").attr("src", value);
  $("#rollTwo").attr("src", value);
  $("#rollThree").attr("src", value);
}

//TODO: remplacer la fonction refresh par un bouton 'restart' qui refresh la page.
//retiré après avoir écrire la valeur dans le dom
//alert("Votre solde est de : " + localStorage.wallet);


