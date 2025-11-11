<h2>나의 이력서 포트폴리오</h2>
<br>
↓페이지 바로가기↓
<h2>https://jaehee-portfolio.vercel.app/</h2>
<br>
<h3>📌 프로젝트 소개</h3>
기획 → 디자인 → 개발 전 과정을 직접 수행한 개인 포트폴리오 웹사이트입니다.<br>
스크롤 기반 섹션 전환과 Framer Motion 애니메이션을 활용하여 부드러운 사용자 경험과 인터랙션 중심 UI를 구현했습니다.<br>
또한 react-intersection-observer 를 이용해 현재 섹션을 감지하고, 그에 따라 배경 색상 및 헤더 메뉴 상태가 자동으로 변경되도록 설계했습니다.<br>
컴포넌트 재사용성과 유지보수성을 고려한 구조 설계를 목표로 했습니다.<br>
<br>
<h3>📂 전체 폴더 구조</h3>
📦 resume-portfolio/<br>
┗ 📂 src/<br>
  ┣ 📂 assets<br>
  ┣ 📂 animations<br>
  ┣ 📂 component<br>
  ┃ ┣ 📂 Header<br>
  ┃ ┣ 📂 Start<br>
  ┃ ┣ 📂 About<br>
  ┃ ┣ 📂 Skills<br>
  ┃ ┣ 📂 Project<br>
  ┃ ┗ 📂 Footer<br>
  ┣ 📜 App.jsx<br>
  ┣ 📜 App.css<br>
  ┗ 📜 main.jsx<br>

<h2>section 소개</h2>
<h3>👋 About Me</h3><br>
React로 구현한 개인 소개 페이지입니다.<br>
자기소개, 기술 스택, 프로젝트 목록 등을 시각적으로 정리하여 포트폴리오 사이트의 중심이 되는 섹션입니다.<br>
부드러운 스크롤 인터랙션과 통일된 컬러 컨셉을 통해 전체 사이트의 아이덴티티를 표현했습니다.<br>

<h3>🧩 주요 기능</h3>

<h3>🛠 사용 기술</h3>
✅ React (Functional Component)<br>
✅ CSS3 (Flexbox, 반응형 단위 rem/em 활용)<br>

💡 Skills 섹션
<h2>🧩 Skills</h2>
<h3>📌 프로젝트 소개</h3>
React와 CSS를 활용해 기술 스택을 시각화한 섹션입니다.<br>
<h3>📂 폴더 구조</h3> 📦 src/<br> ┣ 📂 components<br> ┃ ┣ 📜 Skills.jsx<br> ┃ ┗ 📜 Skills.css<br> <h3>🧩 주요 기능</h3> ✅ `map()`을 이용한 반복 렌더링으로 skill 리스트 자동 생성<br> ✅ 짝수/홀수 index 구분(`index % 2`)을 활용해 테두리 및 타이틀 위치를 다르게 표현<br> ✅ CSS에서 `box-shadow`와 `rotate`를 이용한 카드형 디자인 구현<br> ✅ `min-height: 100vh`로 화면 중앙 정렬 유지<br> <h3>🛠 사용 기술</h3> ✅ Frontend: React (Vite)<br> ✅ Language: JavaScript (ES6+)<br> ✅ Styling: CSS3 (Flexbox, Shadow, Border Animation)<br> <h3>✍️ 회고</h3> ✓ 단순 나열이 아닌 “정보 시각화” 중심의 구성 방식을 배웠다.<br> ✓ JSX 내에서 index 기반 조건부 클래스 제어를 활용할 수 있게 되었다.<br>
🧱 Projects / ProjectCard / ProjectModal 섹션
<h2>💼 Projects</h2> <h3>📌 프로젝트 소개</h3> 프로젝트 목록을 카드 형태로 보여주는 섹션입니다.<br> 각 프로젝트 카드 클릭 시 상세 모달(ProjectModal)이 등장하여 프로젝트 내용, 기술 스택, 링크 등을 표시합니다.<br> 이 페이지는 포트폴리오 사이트의 핵심으로, 사용자가 개발자의 전체 작업물을 한눈에 볼 수 있도록 구성되었습니다.<br> <h3>📂 폴더 구조</h3> 📦 src/<br> ┣ 📂 components<br> ┃ ┣ 📜 Projects.jsx<br> ┃ ┣ 📜 Projects.css<br> ┃ ┣ 📜 ProjectCard.jsx<br> ┃ ┣ 📜 ProjectCard.css<br> ┃ ┣ 📜 ProjectModal.jsx<br> ┃ ┗ 📜 ProjectModal.css<br> <h3>🧩 주요 기능</h3> ✅ `ProjectCard` 컴포넌트에서 props를 받아 프로젝트 정보를 렌더링<br> ✅ `onClick` 이벤트로 `ProjectModal` 열림/닫힘 제어<br> ✅ `framer-motion` 없이 CSS transition으로 자연스러운 모달 애니메이션 구현<br> ✅ 반응형 디자인으로 화면 크기에 따라 카드 수가 유연하게 변경<br> ✅ Modal 오버레이 클릭 시 외부 클릭 감지(`e.target === e.currentTarget`)로 닫기 구현<br> <h3>🛠 사용 기술</h3> ✅ React (Functional Component + Props)<br> ✅ CSS3 (Flexbox, Transition, Overlay Layer)<br> ✅ 상태 관리: useState<br> <h3>✍️ 회고</h3> ✓ 컴포넌트 간 데이터 전달(props) 흐름을 완전히 이해하게 되었다.<br> ✓ 모달의 “외부 클릭 닫기” 로직을 통해 이벤트 버블링/캡처링 개념을 실전 적용했다.<br> ✓ 컴포넌트 간 역할 분리의 중요성을 체감했다. (Projects → ProjectCard → ProjectModal)<br>
✓ Google Analytics 연동 및 내부 트래픽(IP) 필터링 적용으로 실제 사용자 데이터만 분석하도록 구성



1.🧩 TroubleShooting — ScrollY 기반 배경색 전환 오류
문제 상황

첫 번째 섹션(Start)에서만 배경이 검정, 이후 섹션(About, Project 등)은 흰색으로 바꾸는 로직을 window.scrollY 기준으로 구현했음.
하지만 GitHub/Velog 링크를 클릭했다가 돌아오거나, 화면 크기가 달라질 때 색상 상태가 어긋나는 문제가 발생.

원인 분석

scrollY는 화면 위치(px) 를 기준으로 계산되기 때문에,
브라우저 복귀 시 기억된 스크롤 위치가 미묘하게 달라지면 조건이 틀어짐.
페이지 길이나 섹션 개수가 바뀌면 기준 비율(window.innerHeight * 0.9)도 매번 수정해야 함.
사용자 화면 크기(해상도)에 따라 스크롤 비율 계산이 달라져, 의도와 다른 시점에 색이 바뀔 수 있음.

해결 방법
react-intersection-observer로 전환 → “요소가 화면에 들어왔는가?” 기준으로 판단.
Start 섹션이 보이면 setBgColor('black'), 안 보이면 setBgColor('white') 로 처리하면
섹션 수나 길이 변경, 화면 크기, 브라우저 복귀 등의 영향을 받지 않음.

결론
“scrollY는 화면 비율에 의존하기 때문에,
구조 변화나 해상도 변화에 약하다.
반면 react-intersection-observer는 요소의 실제 가시 여부를 감지하기 때문에
유지보수성과 정확도가 훨씬 높다.”