const $nav = document.querySelector('nav');
const $root = document.querySelector('#root');
const initialPath = 'http://127.0.0.1:5500/prototype/history-study/index.html';
const routes = {
  '?page=1': '<p>page1 입니다요</p>',
  '?page=2': '<p>page2 입니다요</p>',
  // 예시를 위해 ?page=3 은 없는 페이지라고 가정하자
  'http://127.0.0.1:5500/prototype/history-study/index.html': '',
};

window.addEventListener('DOMContentLoaded', () => {
  // 초기 페이지 로딩 시, 사용자의 쿼리문이 있는지 확인하고
  const path = window.location.search || initialPath;
  const content = routes[path] ?? '<p>없는 페이지입니다 !</p>';
  $root.innerHTML = content;
  // 해당 쿼리문을 이용해 페이지를 렌더링 한다. (만약 쿼리문이 없다면 기초 주소로 렌더링 된다.)
});

$nav.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') return;

  const path = `?${event.target.id}`;
  // history.state 객체에 라우팅 할 객체의 key 인 path 프로퍼티도 추가
  const states = { page: path.slice(-1), path: path };

  window.history.pushState(states, '', path);
  $root.innerHTML = routes[path] ?? '<p>없는 페이지입니다 !</p>';
});

// 뒤로 갔을 때에도 렌더링이 변경되도록 이벤트 핸들러 등록
window.addEventListener('popstate', () => {
  const path = window.history.state.path;

  console.log(routes);

  $root.innerHTML = routes[path] ?? '<p>없는 페이지입니다 !</p]>';
});
