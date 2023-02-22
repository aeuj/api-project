const searchButton = document.querySelector('#button'); // 검색 버튼
const searchInput = document.querySelector('#input'); // 검색어 입력 필드
const resultBox = document.querySelector('#result'); // 검색 결과를 표시할 요소

function searchWeb(query) {
  const apiURL = 'https://dapi.kakao.com/v2/search/web?query=' + query; // 검색 API 요청 URL
  fetch(apiURL, {
    headers: {
      'Authorization': 'KakaoAK 118bdab6bcdc9de37840fa3e3b77cd87' // API 인증 키
    }
  })
  .then(response => response.json()) // 응답을 JSON 형태로 파싱
  .then(data => {
    if (!resultBox) { // #result 요소가 없는 경우
      console.log('#result 요소를 찾을 수 없습니다.');
      return;
    }

    const documents = data.documents; // 검색 결과 배열
    if (documents.length === 0) { // 검색 결과가 없는 경우
      resultBox.innerHTML = '검색 결과가 없습니다.';
      return;
    }

    let html = '';
    documents.forEach(document => { // 검색 결과 하나씩 반복
      const title = document.title; // 검색 결과 제목
      const url = document.url; // 검색 결과 링크
      html += `<p><a href="${url}" target="_blank">${title}</a></p>`; // 링크와 제목을 p 태그로 감싸서 결과 HTML 생성
    });
    resultBox.innerHTML = html; // 검색 결과를 HTML로 출력
  })
  .catch(error => console.error(error)); // 오류 처리
}

searchButton.addEventListener('click', function() { // 검색 버튼 클릭 시 검색 실행
  const query = searchInput.value; // 검색어 입력 필드의 값
  searchWeb(query);
});

searchInput.addEventListener('keydown', function(event) { // 검색어 입력 필드에서 Enter 키를 눌렀을 때 검색 실행
  if (event.key === 'Enter') { // Enter 키를 눌렀는지 확인
    const query = searchInput.value; // 검색어 입력 필드의 값
    searchWeb(query);
  }
});
