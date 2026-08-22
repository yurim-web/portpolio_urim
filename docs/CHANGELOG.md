# Changelog

## [0.3.0] - 2026-08-22

### 콘텐츠 개편 (경력기술서 기준 최신화)

- **메인/자기소개 문구**: "디자인부터 프론트엔드 개발까지" → "웹 개발자 이유림" 포지셔닝으로 교체, Frontend Experience · Backend Learning 서브텍스트 추가
- **경력·학력**: 회사명·근무기간 최신화((주)청명종합광고기획 등), 학력·자격 최신순 재정렬, 정보처리기사 등 자격사항 추가
- **공개 개인정보 정리**: 생년월일·휴대전화·카카오톡 오픈채팅 QR 삭제
- **Professional Projects 재구성**: ReviewX 신규 추가(View/GitHub 링크 포함), ReportingX·Herzion Shop 기간·기술스택 갱신, 스웨디시 뉴트라 목록에서 제외
- **Training Project(냉부 | Recipe Community)** 추가 — Learning Projects 캐러셀 첫 번째 슬라이드로 통합(DEMO VIDEO·GitHub 링크 포함)
- **Skills 재구성**: Frontend / Backend·Cloud(학습 중) / Development Tools / Collaboration·Design Tools 카테고리로 재정리, 아이콘 전체를 실제 브랜드 로고 SVG로 교체
- **경력기술서 PDF 다운로드** 버튼 추가 (헤더 데스크톱·모바일, Contact 섹션)

### 버그·UI 수정

- Learning/Training 프로젝트 카드 이미지가 다음 카드에 가려 잘리던 문제 수정
- Contact "경력기술서" 버튼 색상을 사이트 인디고 톤에 맞게 교체, "Thank you" 이모지 하단 잘림 수정
- 학력 리스트 줄바꿈이 단어 중간에서 끊기던 문제 수정 (`word-break: keep-all`)
- 페이지 내 `h1` 중복(5개) → 1개로 정리, `id="about"` 중복 제거
- 클릭 가능한 비-버튼 요소에 키보드(Enter/Space) 접근성 추가

### 리팩토링 / 정리

- `Project.tsx` 키보드 활성화 로직을 `activateProps` 헬퍼로 통합
- `GitHubLink`/`ResumeLink` 공용 `ExternalLink` 컴포넌트로 통합
- 사용하지 않는 이미지 자산 다수 삭제, 렌더링되지 않던 죽은 CSS(`.contact_form_*`, `.portfolio_project_*` 등) 제거
- 오타 파일 `StrenthToggleBox.jsx` 삭제

## [0.2.0] - 2026-03-13

### 코드 구조 개선

- **스킬 데이터 통합**: `src/data/skillsData.ts` 생성 — 15개 스킬 데이터를 단일 파일로 관리 (기존 2곳 하드코딩 제거)
- **GitHubLink 공용 컴포넌트**: `src/common/GitHubLink.tsx` 생성 — Header, Contact에서 중복되던 GitHub SVG 코드 통합
- **파일명 오타 수정**: `StrenthToggleBox.tsx` → `StrengthToggleBox.tsx`

### 코드 품질 개선

- **네이밍 컨벤션 통일**: snake_case → camelCase 전환 (ThemeContext, Header, ResumeToggle, ThemeToggle)
- **바닐라 JS → React 훅 전환**: `utils/header.js` → `hooks/useHeaderScroll.ts`, `utils/main.js` → `hooks/useScrollAnimation.ts`
- **GSAP import 수정**: `import { gsap }` → `import gsap` (7개 파일, TypeScript 호환성 개선)
- **불필요 코드 정리**: 주석 처리된 포트폴리오 항목(ToDoList, Apple) 제거, 미사용 EmailJS import 제거
- **미사용 Tailwind import 제거**: `index.css`에서 `@import 'tailwindcss'` 제거

### 개발 도구 추가

- **ESLint 독립 설정**: `.eslintrc.js` 생성 (import 정렬, no-console, unused-vars 등)
- **eslint-plugin-import**: import 자동 정렬 및 그룹핑
- **source-map-explorer**: `npm run analyze`로 번들 크기 분석
- **react-helmet-async**: SEO 메타 태그 지원
- **.editorconfig**: 에디터 간 코딩 스타일 통일
- **신규 스크립트**: `lint`, `lint:fix`, `format`, `format:check`, `typecheck`, `analyze`

### 주석 추가

- 리팩토링된 모든 주요 컴포넌트에 JSDoc 주석 추가 (역할, 동작 방식, 사용처 설명)

### 파일 변경 요약

#### 신규 파일

- `src/data/skillsData.ts`
- `src/common/GitHubLink.tsx`
- `src/hooks/useHeaderScroll.ts`
- `src/hooks/useScrollAnimation.ts`
- `.editorconfig`
- `.eslintrc.js`
- `CHANGELOG.md`

#### 삭제 파일

- `src/common/box/StrenthToggleBox.tsx` (오타 → StrengthToggleBox.tsx로 교체)
- `src/utils/header.js` (→ hooks/useHeaderScroll.ts로 전환)
- `src/utils/main.js` (→ hooks/useScrollAnimation.ts로 전환)

#### 수정 파일

- `src/contexts/ThemeContext.tsx` — camelCase 전환
- `src/pages/header.tsx` — GitHubLink 컴포넌트 사용, camelCase
- `src/pages/contact.tsx` — GitHubLink 컴포넌트 사용, 주석 코드 제거
- `src/pages/skills.tsx` — StrengthToggleBox import 경로 수정
- `src/pages/about.tsx` — useScrollAnimation 훅 적용
- `src/pages/main.tsx` — utils/main.js import 제거
- `src/common/box/StrengthContentsBox.tsx` — skillsData.ts 참조로 변경
- `src/common/box/StrengthToggleBox.tsx` — skillsData.ts 참조로 변경 (신규 파일)
- `src/common/button/ThemeToggle.tsx` — camelCase
- `src/common/button/ResumeToggle.tsx` — camelCase
- `src/data/portfolioData.ts` — 주석 처리된 항목 제거
- `src/styles/index.css` — Tailwind import 제거
- `package.json` — 버전 0.2.0, 스크립트 추가, devDependencies 추가

---

## [0.1.0] - 초기 버전

- React + TypeScript 포트폴리오 초기 구현
- GSAP ScrollTrigger 기반 애니메이션
- 다크모드 지원
- 반응형 레이아웃 (320px ~ 1440px+)
- Swiper 모바일 캐러셀
- gh-pages 배포 설정
