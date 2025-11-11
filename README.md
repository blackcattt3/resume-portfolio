<h2>나의 이력서 포트폴리오</h2>
<br>
↓페이지 바로가기↓
<h2>https://jaehee-portfolio.vercel.app/</h2>
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
<br>
<br>
<h2>section별 소개</h2>
<h3>🎬 Start Section</h3>
<h5>📁 폴더 구조</h5>
📂 component/Start/<br>
 ┣ 📜 Header.jsx<br>
 ┣ 📜 Header.css<br>
<br>
📄 섹션 소개<br>
사이트의 첫 인트로 섹션으로, 방문자가 가장 먼저 접하게 되는 영역입니다.<br>
React-Typed로 구현된 타이핑 애니메이션을 통해 포트폴리오의 주제를 시각적으로 전달합니다.<br>
Header 컴포넌트는 상단 고정 네비게이션 역할을 하며, 클릭 시 해당 섹션으로 부드럽게 스크롤 이동합니다.<br>
useRef와 scrollIntoView를 조합해 자연스러운 스크롤 네비게이션을 구현했습니다.<br>
<br>
<h3>👋 About Me</h3>
📁 폴더 구조<br>
📂 component/About/<br>
 ┣ 📜 About.jsx<br>
 ┗ 📜 About.css<br>
<br>
📄 섹션 소개<br>
React로 구현한 개인 소개 페이지입니다.<br>
자기소개, 기술 스택, 프로젝트 목록 등을 시각적으로 정리하여 포트폴리오 사이트의 중심이 되는 섹션입니다.<br>
부드러운 스크롤 인터랙션과 통일된 컬러 컨셉을 통해 전체 사이트의 아이덴티티를 표현했습니다.<br>
<br>
자기소개, 가치관, 개발자로서의 방향성을 담은 섹션입니다.<br>
Framer Motion을 통해 스크롤 진입 시 페이드 업 애니메이션이 자연스럽게 나타나도록 설정했습니다.<br>
섹션 높이가 짧아 Intersection Observer의 감지 범위가 제한되는 이슈를 해결하기 위해 threshold 값과 rootMargin을 조정했습니다.<br>
이를 통해 감지 정확도와 애니메이션 타이밍을 세밀하게 제어했습니다.<br>
<br>
<h3>🧩 Skills Section</h3>
📁 폴더 구조<br>
📂 component/Skills/<br>
 ┣ 📜 Skills.jsx<br>
 ┗ 📜 Skills.css<br>
<br>
📄 섹션 소개<br>
Front-End 역량과 사용 가능한 기술 스택을 한눈에 보여주는 섹션입니다.<br>
map() 함수를 활용하여 기술 아이콘 및 이름을 자동 렌더링하며, 컴포넌트화로 유지보수를 용이하게 했습니다.<br>
Hover 시 scale과 opacity 전환 애니메이션을 적용해 역동적인 시각 효과를 부여했습니다.<br>
Framer Motion으로 스크롤 시 순차적 등장 효과를 연출했습니다.<br>
<br>
<h3>💼 Projects Section</h3>
<br>
📁 폴더 구조<br>
📂 component/Project/<br>
 ┣ 📜 Projects.jsx<br>
 ┣ 📜 Projects.css<br>
 ┣ 📜 ProjectCard.jsx<br>
 ┣ 📜 ProjectCard.css<br>
 ┣ 📜 ProjectModal.jsx<br>
 ┗ 📜 ProjectModal.css<br>
<br>
📄 섹션 소개<br>
진행했던 주요 프로젝트들을 카드 형태로 시각화한 섹션입니다.<br>
각 카드에 Hover 효과를 주고, 클릭 시 Modal이 열리며 상세 내용(이미지, 기술스택, 링크 등)을 표시합니다.<br>
외부 영역 클릭 시 모달이 닫히도록 stopPropagation과 useEffect를 활용한 이벤트 제어 로직을 구현했습니다.<br>
react-intersection-observer로 각 카드의 등장 시점에 Fade-In 애니메이션을 적용하여, 사용자가 스크롤을 내릴 때 부드럽게 콘텐츠가 나타납니다.<br>
<br>
<br>
<h3>🛠 사용 기술</h3>

✅ Frontend: React (Hooks: useState, useEffect, useRef, useInView)<br>
✅ Animation: Framer Motion, React Typed<br>
✅ Observer: react-intersection-observer<br>
✅ Language: JavaScript (ES6+)<br>
✅ Styling: CSS3 (Flexbox, MediaQuery, Transform)<br>
✅ Icons: React Icons<br>
✅ Deployment: Vercel<br>
<br>
<h3>✍️ 회고</h3>
✓ Framer Motion을 활용해 애니메이션을 단순한 시각효과가 아닌 사용자 경험 중심으로 설계했다.<br>
✓ Header/Section/Card/Modal 단위로 컴포넌트를 분리하며 재사용성과 유지보수성의 중요성을 체감했다.<br>
✓ map을 통한 반복 렌더링 시 각 요소별 useInView 훅을 개별 호출해야 함을 학습했다.<br>
✓ addEventListener/removeEventListener의 cleanup 메커니즘을 이해하며 메모리 누수 방지를 실무 감각으로 익혔다.<br>
✓ 부모 요소의 높이값이 명시되지 않으면 height: 100%가 적용되지 않는 CSS의 레이아웃 구조 원리를 체득했다.<br>




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