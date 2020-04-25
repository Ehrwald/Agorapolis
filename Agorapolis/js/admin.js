const give = document.getElementById('give');

give.addEventListener("click", function () {setCoins()}, false);



//refreshEverysec(5000);


function refreshEverysec(sec) {
  setInterval(function (){
    window.location.reload();
  }, sec)
}
function setCoins() {
 let coins = prompt("Combien de crédit voulez-vous créditer ?");
  console.log(coins);
  localStorage.setItem("wallet", coins.toString());
  return coins;
}
//refresh la page
//event que quand on click sur un bouton on affiche le promp


//TODO: pouvoir kill le programme depuis un bouton de l'interface, au pire cut l'apache avec un bouton.
//TODO: forcer le refresh de la page du client après que l'admin a set la valeur de localStorage.wallet.
//TODO: afficher le résultat courant sur la page d'amin de la valeur de localStorage.wallet.
