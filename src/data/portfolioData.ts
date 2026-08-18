export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  content: string;
  year: string;
  period: string;
  participation: string;
  type: '반응형' | '웹용';
  link: string;
  github_link?: string;
  tech_stack?: { name: string; icon: string }[];
  image: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface ProfessionalProject {
  id: number;
  project_name: string;
  period: string;
  role: string;
  tech_stack: TechItem[];
  description: string;
  image: string;
  view_link?: string;
  github_link?: string;
  demo_link?: string;
  guide_link?: string;
}

export const portfolio_sections: PortfolioItem[] = [
  // groundplace 포트폴리오
  {
    id: 1,
    title: 'Learning Project',
    subtitle: 'Groundplace',
    bgColor: '#fecaca',
    textColor: '#1e293b',
    content:
      'Groundplace 제주도 감성 숙소 공식 홈페이지를 클론 코딩하여, GSAP.js와 React를 활용해 동적인 사용자 경험을 구현했습니다.',
    year: '2024',
    period: '2024.12.16 ~ 2024.12.20',
    participation: '개인 100%',
    type: '웹용',
    link: 'https://yurim-web.github.io/groundplace_clone_page/',
    github_link: 'https://github.com/yurim-web/grandplace_home',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.png` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.png` },
      { name: 'Javascript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javascript.png` },
      { name: 'Gsap.js', icon: `${process.env.PUBLIC_URL}/assets/skill_img/gsap.png` },
      { name: 'React', icon: `${process.env.PUBLIC_URL}/assets/skill_img/react.png` },
    ],
    image: `${process.env.PUBLIC_URL}/assets/portfolio_img/groundplace_img.png`,
  },
  {
    id: 2,
    title: 'Learning Project',
    subtitle: 'IMELE',
    bgColor: '#fed7aa',
    textColor: '#1e293b',
    content:
      'IMELE 공식 쇼핑몰 사이트를 클론 코딩한 프로젝트입니다. 다양한 디바이스 크기에 최적화된 반응형 레이아웃을 구현하고, GSAP.js를 활용해 스크롤 기반 애니메이션 효과를 적용했습니다.',
    year: '2025',
    period: '2025.01.02 ~ 2025.01.06',
    participation: '개인 100%',
    type: '반응형',
    link: 'https://yurim-web.github.io/imele_clone_renew/',
    github_link: 'https://github.com/yurim-web/imele_clone_renew',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.png` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.png` },
      { name: 'Javascript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javascript.png` },
      { name: 'Gsap.js', icon: `${process.env.PUBLIC_URL}/assets/skill_img/gsap.png` },
    ],
    image: `${process.env.PUBLIC_URL}/assets/portfolio_img/imele_img.png`,
  },

  {
    id: 3,
    title: 'Learning Project',
    subtitle: 'SAINT LAURENT',
    bgColor: '#fef3c7',
    textColor: '#1e293b',
    content:
      '입생로랑(YSL) 브랜드 컨셉을 기반으로 새롭게 기획·디자인한 웹사이트입니다. GSAP.js를 활용한 시퀀스 애니메이션과 시차 스크롤로 럭셔리 브랜드의 세련된 분위기를 표현했습니다.',
    year: '2024',
    period: '2024.11.02 ~ 2024.11.15',
    participation: '개인 100%',
    type: '웹용',
    link: 'https://yurim-web.github.io/YSL_portfolio_/',
    github_link: 'https://github.com/yurim-web/YSL_portfolio_',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.png` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.png` },
      { name: 'Javascript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javascript.png` },
      { name: 'Gsap.js', icon: `${process.env.PUBLIC_URL}/assets/skill_img/gsap.png` },
    ],
    image: `${process.env.PUBLIC_URL}/assets/portfolio_img/ysl_img.png`,
  },

  {
    id: 4,
    title: 'Learning Project',
    subtitle: 'Waveyy',
    bgColor: '#dcfce7',
    textColor: '#1e293b',
    content:
      'Next.js 프레임워크와 TMDB API를 연동하여 직접 기획·개발한 영화·드라마 정보 사이트입니다. 서버 사이드 렌더링(SSR)과 동적 라우팅을 적용하고, API 데이터를 활용한 검색·필터링 기능을 구현했습니다.',
    year: '2024',
    period: '2024.12.01 ~ 2024.12.12',
    participation: '개인 100%',
    type: '웹용',
    link: 'https://movie-api-portfolio.vercel.app/',
    github_link: 'https://github.com/yurim-web/movie_api_portfolio',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.png` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.png` },
      { name: 'React', icon: `${process.env.PUBLIC_URL}/assets/skill_img/react.png` },
      { name: 'Next.js', icon: `${process.env.PUBLIC_URL}/assets/skill_img/next.png` },
      { name: 'Javascript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javascript.png` },
      { name: 'API', icon: `${process.env.PUBLIC_URL}/assets/skill_img/api.jpg` },
    ],
    image: `${process.env.PUBLIC_URL}/assets/portfolio_img/waveyy_img.png`,
  },
];

// Professional Projects
export const professional_projects: ProfessionalProject[] = [
  {
    id: 1,
    project_name: 'Herzion Shop',
    period: '2025.04 – 2025.07',
    role: 'Frontend Developer',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.png` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.png` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javascript.png` },
      { name: 'Cafe24', icon: `${process.env.PUBLIC_URL}/assets/skill_img/cafe24.png` },
      { name: 'EmailJS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/api.jpg` },
    ],
    description:
      'Cafe24 플랫폼을 활용한 광고주 홈페이지의 프론트엔드 개발 및 유지보수를 담당했습니다. EmailJS를 연동한 문의 폼을 직접 구현하며 실무 프론트엔드 개발 역량을 발휘했습니다.',
    image: `${process.env.PUBLIC_URL}/assets/professional_projects/herzion_banner.jpg`,
    view_link: 'https://herzionshop.cafe24.com/',
    github_link: 'https://github.com/yurim-web/aribio_final_kor',
  },
  {
    id: 2,
    project_name: 'ReportingX.',
    period: '2025.05 – 2025.08',
    role: 'Frontend Developer',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.png` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.png` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javascript.png` },
    ],
    description:
      '마케터를 위한 멀티채널 데이터 자동 수집·레포팅 SaaS 서비스로, 랜딩페이지, 웹 페이지(반응형), 가이드 페이지의 프론트엔드를 100% 단독 담당했습니다. 차트·타임블럭 등 외부 라이브러리를 활용해 대시보드, 성과 분석, 체험단 관리 등 다양한 UI와 인터랙션을 구현했습니다.',
    image: `${process.env.PUBLIC_URL}/assets/professional_projects/rx_banner.png`,
    view_link: 'https://reportingx-web.onrender.com/account/login',
    demo_link: 'https://markx-web.onrender.com/intro',
    guide_link: 'https://markx-web.onrender.com/guide_main',
  },
  {
    id: 3,
    project_name: '스웨디시 뉴트라',
    period: '2024.07 – 2024.08',
    role: 'Frontend Developer',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.png` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.png` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javascript.png` },
      { name: 'Cafe24', icon: `${process.env.PUBLIC_URL}/assets/skill_img/cafe24.png` },
    ],
    description:
      'Cafe24 템플릿을 기반으로 광고주 쇼핑몰을 제작한 프로젝트로, 프론트엔드 커스텀 개발을 100% 단독 담당했습니다. 기본 템플릿에서 벗어나 HTML·CSS·JavaScript로 디자인과 기능을 전면 커스텀하여 브랜드에 맞는 쇼핑몰을 구현했습니다.',
    image: `${process.env.PUBLIC_URL}/assets/professional_projects/swedish_banner.jpg`,
    view_link: 'https://swedishnutra.kr/',
    github_link: 'https://github.com/yurim-web/swedishnutra_code',
  },
];
