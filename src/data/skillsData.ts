/**
 * 스킬 데이터 (Single Source of Truth)
 *
 * StrengthToggleBox(버튼 목록)와 StrengthContentsBox(카드 목록) 모두 이 파일을 참조합니다.
 * 스킬을 추가/수정/삭제할 때 이 파일만 수정하면 됩니다.
 *
 * category 순서대로 정렬되어 있으며, UI에서는 category가 바뀌는 지점에
 * 그룹 제목을 표시합니다 (StrengthToggleBox, StrengthContentsBox 참고).
 */
import awsImg from '../assets/skill_img/aws.svg';
import confluenceImg from '../assets/skill_img/confluence.svg';
import cssImg from '../assets/skill_img/css.svg';
import figmaImg from '../assets/skill_img/figma.svg';
import gitImg from '../assets/skill_img/git.svg';
import githubImg from '../assets/skill_img/github.svg';
import gsapImg from '../assets/skill_img/gsap.png';
import htmlImg from '../assets/skill_img/html.svg';
import illustratorImg from '../assets/skill_img/illustrator.svg';
import javaImg from '../assets/skill_img/java.svg';
import javascriptImg from '../assets/skill_img/javscript.svg';
import mysqlImg from '../assets/skill_img/mysql.svg';
import nextImg from '../assets/skill_img/nextjs.svg';
import notionImg from '../assets/skill_img/notion.svg';
import photoshopImg from '../assets/skill_img/photoshop.svg';
import reactImg from '../assets/skill_img/react.svg';
import slackImg from '../assets/skill_img/slack.svg';
import springImg from '../assets/skill_img/spring.svg';
import springBootImg from '../assets/skill_img/springboot.svg';
import thymeleafImg from '../assets/skill_img/thymeleaf.svg';
import typescriptImg from '../assets/skill_img/typescript.svg';

export type SkillCategory =
  | 'Frontend'
  | 'Backend / Cloud — Currently Learning'
  | 'Development Tools'
  | 'Collaboration / Design Tools';

export interface SkillItem {
  name: string;
  description: string;
  img: string;
  category: SkillCategory;
}

export const skillList: SkillItem[] = [
  // ── Frontend ──────────────────────────────────────────
  {
    name: 'HTML',
    description:
      '시맨틱 마크업과 웹 표준·접근성을 고려한 HTML 구조를 설계합니다. 다양한 디바이스 환경을 고려한 견고한 마크업을 빠르게 작성합니다.',
    img: htmlImg,
    category: 'Frontend',
  },
  {
    name: 'CSS',
    description:
      'Flexbox, Grid를 활용한 복잡한 레이아웃과 애니메이션을 구현합니다. 디자인 시안을 세밀하게 재현하며 JavaScript 인터랙션과 결합한 동적 UI 표현에 강점이 있습니다.',
    img: cssImg,
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    description:
      'DOM 제어와 이벤트 처리를 기반으로 슬라이드, 메뉴, 스크롤 인터랙션 등 실무 수준의 동적 기능을 구현합니다.',
    img: javascriptImg,
    category: 'Frontend',
  },
  {
    name: 'React',
    description:
      '컴포넌트 기반으로 UI를 구조화하고, useState·useEffect·useRef 등 기본 훅을 활용해 상태 관리와 사이드 이펙트를 처리합니다.',
    img: reactImg,
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    description:
      '인터페이스와 타입 정의를 활용해 React 프로젝트의 컴포넌트와 데이터 구조를 타입 안전하게 구성하는 방법을 학습하고 적용하고 있습니다.',
    img: typescriptImg,
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    description:
      'Next.js를 활용해 페이지 라우팅과 기본적인 프로젝트 구조를 설계할 수 있으며, 실무 프로젝트에 적용한 경험이 있습니다.',
    img: nextImg,
    category: 'Frontend',
  },
  {
    name: 'GSAP',
    description:
      'ScrollTrigger와 Timeline을 활용해 스크롤 기반 애니메이션과 시퀀스 인터랙션을 구현합니다. 다수의 실무·개인 프로젝트에 적용한 경험이 있습니다.',
    img: gsapImg,
    category: 'Frontend',
  },

  // ── Backend / Cloud — Currently Learning ─────────────
  {
    name: 'Java',
    description:
      '객체지향 문법과 컬렉션, 예외 처리 등 기본기를 바탕으로 백엔드 로직을 구현하는 방법을 학습하고 있습니다.',
    img: javaImg,
    category: 'Backend / Cloud — Currently Learning',
  },
  {
    name: 'Spring',
    description:
      'Spring 프레임워크의 구조와 동작 방식을 학습하며 웹 서비스의 서버 로직을 이해해가고 있습니다.',
    img: springImg,
    category: 'Backend / Cloud — Currently Learning',
  },
  {
    name: 'Spring Boot',
    description:
      'Spring Boot로 Controller·Service·Repository 구조의 웹 애플리케이션을 구성하고, 게시판 등 기본 기능을 구현한 경험이 있습니다.',
    img: springBootImg,
    category: 'Backend / Cloud — Currently Learning',
  },
  {
    name: 'SQL',
    description:
      '테이블 설계와 조인·조건 조회 등 기본적인 SQL 작성법을 학습하며 데이터베이스 활용 능력을 넓히고 있습니다.',
    img: mysqlImg,
    category: 'Backend / Cloud — Currently Learning',
  },
  {
    name: 'Thymeleaf',
    description:
      'Thymeleaf 템플릿 엔진을 활용해 서버 렌더링 기반 화면을 구성하는 방법을 학습하고 있습니다.',
    img: thymeleafImg,
    category: 'Backend / Cloud — Currently Learning',
  },
  {
    name: 'AWS EC2',
    description:
      'AWS EC2를 활용한 서버 환경 구성과 배포 과정을 학습하며 웹 서비스 인프라에 대한 이해를 넓히고 있습니다.',
    img: awsImg,
    category: 'Backend / Cloud — Currently Learning',
  },

  // ── Development Tools ─────────────────────────────────
  {
    name: 'Git',
    description:
      'feature 브랜치 전략과 Pull Request 기반 협업 워크플로우로 팀 프로젝트의 소스 관리를 수행한 경험이 있습니다.',
    img: gitImg,
    category: 'Development Tools',
  },
  {
    name: 'GitHub',
    description:
      'Pull Request 기반 코드 리뷰와 GitHub Pages 배포, Issue 관리 등 GitHub을 활용한 협업 워크플로우에 익숙합니다.',
    img: githubImg,
    category: 'Development Tools',
  },

  // ── Collaboration / Design Tools ──────────────────────
  {
    name: 'Figma',
    description:
      'UI/UX 디자인 실무 경험을 바탕으로 화면 시안과 디자인 에셋을 제작하고, 개발 관점에서 구현 가능한 UI 구조를 설계할 수 있습니다.',
    img: figmaImg,
    category: 'Collaboration / Design Tools',
  },
  {
    name: 'Notion',
    description:
      '프로젝트 일정 관리, 회의록 작성, 작업 현황 공유 등 팀 단위 협업 도구로 Notion을 활용한 경험이 있습니다.',
    img: notionImg,
    category: 'Collaboration / Design Tools',
  },
  {
    name: 'Slack',
    description:
      '팀 커뮤니케이션 도구로 Slack을 활용해 실시간 협업 및 이슈 공유를 진행한 경험이 있습니다.',
    img: slackImg,
    category: 'Collaboration / Design Tools',
  },
  {
    name: 'Confluence',
    description:
      'Confluence를 활용한 팀 문서 작성 및 프로젝트 협업이 가능합니다. 실무 환경에서 팀원들과 문서를 공유하고 관리한 경험이 있습니다.',
    img: confluenceImg,
    category: 'Collaboration / Design Tools',
  },
  {
    name: 'Illustrator',
    description:
      '로고, 아이콘, UI 요소 등 벡터 기반 디자인 에셋을 제작할 수 있으며, SVG 최적화를 통해 웹에 적합한 리소스를 직접 만들 수 있습니다.',
    img: illustratorImg,
    category: 'Collaboration / Design Tools',
  },
  {
    name: 'Photoshop',
    description:
      '사진 보정, 합성, 상세페이지, SNS 디자인 등 다양한 실무 디자인을 제작할 수 있습니다.',
    img: photoshopImg,
    category: 'Collaboration / Design Tools',
  },
];

export const skillNames = skillList.map(skill => skill.name);
