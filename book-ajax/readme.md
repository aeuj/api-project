<h1>๋์ ๊ฒ์๐</h1>


<p>์ฐธ๊ณ  : ์กฐ์ฝ๋ฉ์ฑ</p>


<h3>๊ตฌํ ๊ธฐ๋ฅโ๏ธ</h3>
<ol>
  <li> input ๋น์ฐ๊ธฐโ๏ธ</li>
  <li> input ์๋ ฅ์ append ์๋์ผ๋ก ๋น์ฐ๊ธฐโ๏ธ</li>
  <li> ajax ์ฐ๊ฒฐโ๏ธ</li>
  <li> ์นด์นด์ค๊ฐ๋ฐ์ ๋ค์ ์ฑ ๊ฒ์ ํค ์ด์ฉโ๏ธ</li>
</ol>
<h3>์ถ๊ฐํ  ๋ถ๋ถโ๏ธ</h3>
<ol>
  <li> enterํค ์ฌ์ฉ ๊ฐ๋ฅํ๊ฒ => ํ์ฌ ์ํฐ๊ฐ ๋๋ฉด ํด๋ฆญ์ด ์๋จ, ํด๋ฆญ์ด ๋๋ฉด ์ํฐ๊ฐ ์๋๊ณ  </li>
  <li> ๊ฒ์ํ๋ ํ์คํ ๋ฆฌ๋ฅผ ๋ณด์ด๊ฒ ํ ์ง ๋ง์ง </li>
</ol>


๐[๊ฒฐ๊ณผ๋ฌผ๋งํฌ](https://kakao-book.aeuj.repl.co)








<hr/>
<p>์์ง ์ ๋ฆฌ๋์ง ์์ ์ฝ๋๋ค</p>

$(document).ready(function(){
  const $search = $("#search")
  $('#submit').click(function(){
    console.log($search.val())
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title&query=" + 
      $('#search').val(),
      headers: {Authorization: "KakaoAK 209248ea654b7abf6b2c0219a114d2c0"},
    })
    .done(function(data){
      $('body').append("<span>" + data.documents[0].title + "</span>");
      $('body').append("<img src=" + data.documents[0].thumbnail + "/>");
    });
    $("#search").keydown(function(keyNum){
      //ํ์ฌ์ ํค๋ณด๋์ ์๋ ฅ๊ฐ์ keyNum์ผ๋ก ๋ฐ์
      if(keyNum.keyCode == 13){ 
        // keydown์ผ๋ก ๋ฐ์ํ keyNum์ ์ซ์์ฒดํฌ
        // ์ซ์๊ฐ enter์ ์์คํค์ฝ๋ 13๊ณผ ๊ฐ์ผ๋ฉด
        // ๊ธฐ์กด์ ์ ์๋ ํด๋ฆญํจ์๋ฅผ ํธ์ถ
        $("#submit").click()	
      }
    })
  })
})

// enterkey event ์ถ์ฒ https://seeminglyjs.tistory.com/298



  $('#submit').click(function(){
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title&query=" + 
      $('#search').val(),
      headers: {Authorization: "KakaoAK 209248ea654b7abf6b2c0219a114d2c0"},
    })
    .done(function(data){
      $('body').append("<span>" + data.documents[0].title + "</span>");
      $('body').append("<img src=" + data.documents[0].thumbnail + "/>");
    });
})

// enterkey event ์ถ์ฒ https://seeminglyjs.tistory.com/298


function enterFn(){
  if(window.event.keyCode == 13){
    $('#submit').click(function(){
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title&query=" + 
        $('#search').val(),
        headers: {Authorization: "KakaoAK 209248ea654b7abf6b2c0219a114d2c0"},
      })
      .done(function(data){
        $('body').append("<span>" + data.documents[0].title + "</span>");
        $('body').append("<img src=" + data.documents[0].thumbnail + "/>");
      });
    })
    // $("#submit").click(); ์ด๊ฑฐ ๋ฃ์ผ๋ฉด ์ํฐํค๋ ์ ์ฉ๋๋๋ฐ ๋ฒํผํค๊ฐ ์๋จ
  };
  // $("#submit").click()	์ฌ๊ธฐ์ ๋ฃ์ผ๋ฉด ์น๋ ์๊ฐ์๊ฐ ์ค์๊ฐ ๋ฐ์;;;
};




// enterkey event ์ถ์ฒ https://seeminglyjs.tistory.com/298
// enterkey event ์ถ์ฒ https://record-than-remember.tistory.com/entry/onkeyup-%EC%97%94%ED%84%B0%ED%82%A4-%EC%82%AC%EC%9A%A9-windoweventkeyCode-13-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0



