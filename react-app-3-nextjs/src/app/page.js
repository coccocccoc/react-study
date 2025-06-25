
// home 컴포넌트: 전체 UI를 만드는 부분

// next.js의 기능
// 1. 자동 라우트
// 라우트란? 페이지 이동시 주소를 매핑하는 기능

export default function Home() {

  // 링크 추가
  return (
    <div>
      <h1>/app/page.js</h1>
      <ul>
        <li><a href="/sub">/app/sub/page.js</a></li>
        {/* about 페이지로 이동하는 링크 추가 */}
        <li><a href="/sub/about">/app/sub/about/page.js</a></li>
        {/* sub 상세페이지로 이동하는 링크 추가 */}
        {/* /sub/1과 /sub/2를 id라는 하나의 파일로 처리 */}
        <li><a href="/sub/1">/app/sub/[id]/about/page.js</a></li>
        <li><a href="/sub/2">/app/sub/[id]/about/page.js</a></li>
        {/* 링크 추가 */}
        <li><a href="/sub/fetch">/app/sub/fetch/page.js</a></li>
      </ul>
    </div>
  );
}
