$(function(){
$('#bouton').click(function(){
  //la méthode .val() récupère ou remplace la value d'un élément de formulaire
  //Nous récuperons donc la valeur de l'input portant l'id #nombredeclick dans l'objet result
  var result = $('#nombredeclick').html();
  alert(result);
  //On incrémente d'une unité d'oblet result a chaque click
  result++;
  //on récupere la valeur de result que l'on affiche dans l'input
  $('#nombredeclick').html(result);
  });
});
