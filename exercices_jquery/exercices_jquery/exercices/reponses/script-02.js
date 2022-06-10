$(function () {
  // let clique = (".box first").onclick(e) => {
  //     if
  // }
  $(".box").first().hide(1000);
  $(".box").first().show(400);
  $(".box").eq(1).hide(1200);
  $(".box").eq(1).show(800);
  $(".box").eq(2).hide(1400);
  $(".box").eq(2).show(1000);
  $(".box").eq(3).hide(1600);
  $(".box").eq(3).show(1400);
  $(".box").eq(4).hide(1800);
  $(".box").eq(4).show(1800);
  $(".box").eq(5).hide(2000);
  $(".box").eq(5).show(2200);
  $(".box").last().hide(2200);
  $(".box").last().show(2800);
});
