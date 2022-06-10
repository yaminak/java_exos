$(function () {
  let devenuRouge = $("#ce div").first().css("color", "red");
  let clonage = $("#ce div").first().clone();
  console.log(devenuRouge);
  $("#ce").append(clonage);
  $("#ce").children().eq(3).prependTo("#ce");
  $("#ce").append("<div> Il y a 6 divs en tout </div>");
  $("#ce div").select("<ol><li></li></ol>");

  //   let enHaut = $(".resultat").prepend();
  //   $("body").prepend(enHaut);
  //   $("body").wrap("<div><h2>Montant Total</h2></div>");
});
