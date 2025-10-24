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