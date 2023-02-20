<h1>api 활용 도서 검색</h1>


<ol>
  <li>카카오개발자 = 책 검색 =ajax 사용 <li>
  <li>검색 후에 input 창 비우기<li>
  <li>input 창에 다음 책을 입력하면 원래 있던 책 정보 사라지게 하기</li>
</ol>


<ol>
  <li>enter키 사용 가능하게 => 현재 엔터가 되면 클릭이 안됨, 클릭이 되면 엔터가 안되고<li>
  <li>검색했던 히스토리를 보이게 할지 말지 </li>
</ol>








<hr/>
<p>아직 정리되지 않은 코드들</p>

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
      //현재의 키보드의 입력값을 keyNum으로 받음
      if(keyNum.keyCode == 13){ 
        // keydown으로 발생한 keyNum의 숫자체크
        // 숫자가 enter의 아스키코드 13과 같으면
        // 기존에 정의된 클릭함수를 호출
        $("#submit").click()	
      }
    })
  })
})

// enterkey event 출처 https://seeminglyjs.tistory.com/298



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

// enterkey event 출처 https://seeminglyjs.tistory.com/298


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
    // $("#submit").click(); 이거 넣으면 엔터키는 적용되는데 버튼키가 안됨
  };
  // $("#submit").click()	여기에 넣으면 치는 순간순간 실시간 반영;;;
};




// enterkey event 출처 https://seeminglyjs.tistory.com/298
// enterkey event 출처 https://record-than-remember.tistory.com/entry/onkeyup-%EC%97%94%ED%84%B0%ED%82%A4-%EC%82%AC%EC%9A%A9-windoweventkeyCode-13-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0



