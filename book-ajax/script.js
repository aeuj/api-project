
function action(){
    $('#submit').click(function(){
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title&query=" + 
        $('#search').val(),
        headers: {Authorization: "본인의 카카오개발자 rest api 키"},
      })
      .done(function(data){
        $('p').append("<div>" + "<img src=" + data.documents[0].thumbnail + "/>" + "</div>" );
        $('p').append("<h2>" + data.documents[0].title + "</h2>");
        $('p').append("<em>" + data.documents[0].authors + "</em>");
        $('p').append("<span>" + data.documents[0].contents + "</span>");
      });
        $('#search').val(''); // input 창 비우기
        $('#search').on('input', function(){
        $('p').empty(); // 비우긴했는데 실행이 안됨 => remove에서 변경 => 성공
        })
      })
    }
    action() 
