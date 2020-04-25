let coins = prompt("Combien de crédit voulez-vous créditer ?");
localStorage.setItem("wallet", coins.toString());

//TODO: pouvoir kill le programme depuis un bouton de l'interface, au pire cut l'apache avec un bouton.
//TODO: afficher les résultats fûr et à mesure de l'activation de l'event.
