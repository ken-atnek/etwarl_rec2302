////////////////////ヘッダー・フッターインクルード
var header_xhr = new XMLHttpRequest(),
  method = "GET",
  url = "./inc_header.html";//読み込まれるHTMLを指定
var header_box = document.getElementById("inc_header");//読み込みたい位置を指定
include(header_xhr, header_box);

var footer_xhr = new XMLHttpRequest(),
  method = "GET",
  url = "./inc_footer.html";//読み込まれるHTMLを指定
var footer_box = document.getElementById("inc_footer");//読み込みたい位置を指定
include(footer_xhr, footer_box);

function include(xhr, box) {
  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var restxt = xhr.responseText;//String型で取得
      box.innerHTML = restxt;//完了
    }
  };
  xhr.send();
}
////////////////////ヘッダー・フッターインクルード  <--END

function SlideMenu() {
  document.getElementById('HamburgerButton').classList.toggle('open');
  document.getElementById('inc_header').classList.toggle('open');
}
