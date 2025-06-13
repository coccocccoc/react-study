// hello.js
// 이제 프론트엔드와 백엔드를 연동

// handler 라는 일반 함수 정의

// API 구현
// API: 서버 프로그램
// 순수하게 데이터만 처리하는 프로그램

// 매개변수:
// req: 사용자 요청
// res: 응답 데이터

// URL 주소 매핑:
// 파일 기반으로 자동 처리됨
// 해당 API 주소는 /api/hello
function handler(req, res) {
  
  // 응답 코드: 200 ok
  // 바디데이터: 객체
  res.status(200).json({name:'둘리'})
}

export default handler;