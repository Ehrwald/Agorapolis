var mapKeysValues = [ [0, "Double Bar"], [1, "Double Bar"], [2, "Double Bar"], [3, "Double Bar"],
  [4, "Double Bar"], [5, "Double Bar"], [6, "Double Bar"], [7, "Seven"], [8, "Triple Bar"],
  [9, "Triple Bar"], [10, "Triple Bar"],[11, "Bell"], [12, "Single Bar"], [13, "Single Bar"],
  [14, "Single Bar"], [15, "Single Bar"], [16, "Single Bar"], [17, "Single Bar"],[18, "Bell"],
  [19, "Single Bar"], [20, "Single Bar"], [21, "Single Bar"], [22, "Single Bar"], [23, "Single Bar"],
  [24, "Single Bar"], [25, "Single Bar"], [26, "Single Bar"], [27, "Seven"], [28, "Triple Bar"],
  [29, "Triple Bar"], [30, "Triple Bar"], [31, "Double Bar"], [32, "Double Bar"], [33, "Double Bar"],
  [34, "Bell"]
];

var rollOne = new Map(mapKeysValues);
var rollTwo = new Map(mapKeysValues);
var rollThree = new Map(mapKeysValues);

let wallet = parseInt(localStorage.wallet, 10);
console.log(wallet);
const bet = document.querySelectorAll("button.bet");

refreshEverysec(5000);

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

        let value = rollOne.get(getRandomInt(rollOne.size));
        let value2 = rollTwo.get(getRandomInt(rollTwo.size));
        let value3 = rollThree.get(getRandomInt(rollThree.size));
        let invested = bet[i].innerHTML;

        //document.write(localStorage.wallet);
        console.log("le solde de localStrorage : ", localStorage.wallet);

        console.log(value, " / ", value2, " / ", value3, "vous misez : ", invested,
          "Votre solde est de : ", wallet);

        if (value === value2 && value2 === value3) {
          switch (value) {
            case 'Single Bar':
              console.log("c'est single bar");
              console.log(calcul(invested, 5), "€");
              wallet += calcul(invested, 5);
              break;
            case 'Double Bar':
              console.log("c'est Double bar");
              console.log(calcul(invested, 10), "€");
              wallet += calcul(invested, 10);
              break;
            case 'Triple Bar':
              console.log("c'est Triple bar");
              console.log(calcul(invested, 50), "€");
              wallet += calcul(invested, 50);
              break;
            case 'Bell':
              console.log("c'est Bell");
              console.log(calcul(invested, 500), "€");
              wallet += calcul(invested, 500);
              break;
            case 'Seven':
              console.log("c'est Seven");
              console.log(calcul(invested, 10000), "€");
              wallet += calcul(invested, 10000);
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


//retiré après avoir écrire la valeur dans le dom
//alert("Votre solde est de : " + localStorage.wallet);


