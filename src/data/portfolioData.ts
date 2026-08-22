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
  link?: string;
  link_label?: string; // link 버튼 문구 커스텀 (미지정 시 'LINK'). 배포 사이트가 없어 시연영상 등으로 연결할 때 사용.
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
  manager_view_link?: string; // 유저/파트너 화면과 관리자 화면 URL이 분리된 프로젝트용 (예: ReviewX)
  github_link?: string;
  demo_link?: string;
  guide_link?: string;
}

// Learning Projects — 냉부(Training Project)를 첫 번째로, 이어서 Waveyy, Groundplace 노출
export const portfolio_sections: PortfolioItem[] = [
  {
    id: 5,
    title: 'Training Project',
    subtitle: '냉부 | Recipe Community',
    bgColor: '#e0e7ff',
    textColor: '#1e293b',
    content:
      '레시피와 요리 꿀팁을 등록·공유하고 사용자를 팔로우하며 소통할 수 있는 요리 커뮤니티 플랫폼으로, 백엔드 교육 수강 후 진행한 4인 팀 프로젝트입니다. Spring Boot와 JdbcTemplate 기반으로 Controller·Service·Repository 구조의 게시판 및 메인페이지 백엔드 기능을 구현하고, 다중 JOIN 쿼리로 추천·최신순·팔로우 데이터를 조회했습니다. CRUD·검색·페이지네이션·조회수 처리, TOAST UI Editor 이미지 업로드를 구현했으며, 서비스 전체 HTML/CSS UI 구성도 함께 담당했습니다.',
    year: '2026',
    period: '2026.07.24 ~ 2026.08.07',
    participation: '팀 프로젝트 4인 · Backend Development · UI Implementation',
    type: '웹용',
    tech_stack: [
      { name: 'Java', icon: `${process.env.PUBLIC_URL}/assets/skill_img/java.svg` },
      { name: 'Spring Boot', icon: `${process.env.PUBLIC_URL}/assets/skill_img/springboot.svg` },
      { name: 'JdbcTemplate', icon: `${process.env.PUBLIC_URL}/assets/skill_img/jdbctemplate.svg` },
      { name: 'Thymeleaf', icon: `${process.env.PUBLIC_URL}/assets/skill_img/thymeleaf.svg` },
      { name: 'H2', icon: `${process.env.PUBLIC_URL}/assets/skill_img/h2.svg` },
      { name: 'AWS EC2', icon: `${process.env.PUBLIC_URL}/assets/skill_img/aws.svg` },
      { name: 'Git', icon: `${process.env.PUBLIC_URL}/assets/skill_img/git.svg` },
    ],
    image: `${process.env.PUBLIC_URL}/assets/professional_projects/naengbu_banner.png`,
    link: 'https://youtu.be/ARfLNAwP01c',
    link_label: 'DEMO VIDEO',
    github_link: 'https://github.com/yurim-web/bootcamp_project_recipecommunity',
  },
  {
    id: 4,
    title: 'Learning Project',
    subtitle: 'Waveyy',
    bgColor: '#dcfce7',
    textColor: '#1e293b',
    content:
      'Next.js 프레임워크와 TMDB API를 연동하여 직접 기획·개발한 영화·드라마 정보 사이트입니다. Next.js 기반 라우팅 및 API 연동을 적용하고, API 데이터를 활용한 검색·필터링 기능을 구현했습니다.',
    year: '2024',
    period: '2024.12.01 ~ 2024.12.12',
    participation: '개인 100%',
    type: '웹용',
    link: 'https://movie-api-portfolio.vercel.app/',
    github_link: 'https://github.com/yurim-web/movie_api_portfolio',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.svg` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.svg` },
      { name: 'React', icon: `${process.env.PUBLIC_URL}/assets/skill_img/react.svg` },
      { name: 'Next.js', icon: `${process.env.PUBLIC_URL}/assets/skill_img/nextjs.svg` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javscript.svg` },
      { name: 'API', icon: `${process.env.PUBLIC_URL}/assets/skill_img/api.jpg` },
    ],
    image: `${process.env.PUBLIC_URL}/assets/portfolio_img/waveyy_img.png`,
  },
  // groundplace 포트폴리오
  {
    id: 1,
    title: 'Learning Project',
    subtitle: 'Groundplace',
    bgColor: '#fecaca',
    textColor: '#1e293b',
    content:
      'Groundplace 제주도 감성 숙소 공식 홈페이지를 클론 코딩하여, GSAP와 React를 활용해 동적인 사용자 경험을 구현했습니다.',
    year: '2024',
    period: '2024.12.16 ~ 2024.12.20',
    participation: '개인 100%',
    type: '웹용',
    link: 'https://yurim-web.github.io/groundplace_clone_page/',
    github_link: 'https://github.com/yurim-web/grandplace_home',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.svg` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.svg` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javscript.svg` },
      { name: 'GSAP', icon: `${process.env.PUBLIC_URL}/assets/skill_img/gsap.png` },
      { name: 'React', icon: `${process.env.PUBLIC_URL}/assets/skill_img/react.svg` },
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
      'IMELE 공식 쇼핑몰 사이트를 클론 코딩한 프로젝트입니다. 다양한 디바이스 크기에 최적화된 반응형 레이아웃을 구현하고, GSAP를 활용해 스크롤 기반 애니메이션 효과를 적용했습니다.',
    year: '2025',
    period: '2025.01.02 ~ 2025.01.06',
    participation: '개인 100%',
    type: '반응형',
    link: 'https://yurim-web.github.io/imele_clone_renew/',
    github_link: 'https://github.com/yurim-web/imele_clone_renew',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.svg` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.svg` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javscript.svg` },
      { name: 'GSAP', icon: `${process.env.PUBLIC_URL}/assets/skill_img/gsap.png` },
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
      '입생로랑(YSL) 브랜드 컨셉을 기반으로 새롭게 기획·디자인한 웹사이트입니다. GSAP를 활용한 시퀀스 애니메이션과 시차 스크롤로 럭셔리 브랜드의 세련된 분위기를 표현했습니다.',
    year: '2024',
    period: '2024.11.02 ~ 2024.11.15',
    participation: '개인 100%',
    type: '웹용',
    link: 'https://yurim-web.github.io/YSL_portfolio_/',
    github_link: 'https://github.com/yurim-web/YSL_portfolio_',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.svg` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.svg` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javscript.svg` },
      { name: 'GSAP', icon: `${process.env.PUBLIC_URL}/assets/skill_img/gsap.png` },
    ],
    image: `${process.env.PUBLIC_URL}/assets/portfolio_img/ysl_img.png`,
  },
];

// Professional Projects — 01. ReviewX, 02. ReportingX, 03. Herzion Shop
export const professional_projects: ProfessionalProject[] = [
  {
    id: 1,
    project_name: 'ReviewX',
    period: '2026.01 – 2026.04',
    role: 'Frontend Developer · 프론트엔드 1인 담당',
    tech_stack: [
      { name: 'React', icon: `${process.env.PUBLIC_URL}/assets/skill_img/react.svg` },
      { name: 'Next.js', icon: `${process.env.PUBLIC_URL}/assets/skill_img/nextjs.svg` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javscript.svg` },
      { name: 'Chart.js', icon: `${process.env.PUBLIC_URL}/assets/skill_img/chartjs.svg` },
      { name: 'Git', icon: `${process.env.PUBLIC_URL}/assets/skill_img/git.svg` },
    ],
    description:
      '리뷰어와 파트너를 연결해 캠페인 참여부터 콘텐츠 등록, 포인트 및 정산까지 관리할 수 있는 참여 기반 캠페인 플랫폼입니다. 리뷰어·파트너·일반관리자·최고관리자 역할별 화면과 라우팅 구조를 구현하고, 공통 컴포넌트를 구성해 반복 UI를 효율적으로 관리했습니다.',
    image: `${process.env.PUBLIC_URL}/assets/professional_projects/reviewx_banner.png`,
    view_link: 'https://reviewx-front-backup.vercel.app/',
    manager_view_link: 'https://reviewx-front-backup.vercel.app/manager_ga',
    github_link: 'https://github.com/yurim-web/reviewx-front-backup',
  },
  {
    id: 2,
    project_name: 'ReportingX.',
    period: '2025.05 – 2025.08',
    role: 'Frontend Developer · 프론트엔드 1인 담당',
    tech_stack: [
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.svg` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.svg` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javscript.svg` },
      { name: 'Chart.js', icon: `${process.env.PUBLIC_URL}/assets/skill_img/chartjs.svg` },
      { name: 'Git', icon: `${process.env.PUBLIC_URL}/assets/skill_img/git.svg` },
    ],
    description:
      '여러 마케팅 채널의 데이터를 통합해 대시보드와 리포트 형태로 확인할 수 있도록 구성한 마케팅 데이터 분석 SaaS 플랫폼입니다. 프론트엔드 1인 담당으로 대시보드·성과 분석·체험단 관리·일정 관리 등 서비스 전반의 반응형 UI와 사용자 인터랙션을 구현했습니다.',
    image: `${process.env.PUBLIC_URL}/assets/professional_projects/rx_banner.png`,
    view_link: 'https://reportingx-web.onrender.com/account/login',
    demo_link: 'https://markx-web.onrender.com/intro',
    guide_link: 'https://markx-web.onrender.com/guide_main',
  },
  {
    id: 3,
    project_name: 'Herzion Shop',
    period: '2025.04 – 2025.06',
    role: 'Frontend Developer · 프론트엔드 1인 담당',
    tech_stack: [
      { name: 'Cafe24', icon: `${process.env.PUBLIC_URL}/assets/skill_img/cafe24.png` },
      { name: 'HTML', icon: `${process.env.PUBLIC_URL}/assets/skill_img/html.svg` },
      { name: 'CSS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/css.svg` },
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/assets/skill_img/javscript.svg` },
      { name: 'EmailJS', icon: `${process.env.PUBLIC_URL}/assets/skill_img/api.jpg` },
    ],
    description:
      'Cafe24 플랫폼을 기반으로 광고주 웹사이트의 전체 프론트엔드 화면과 반응형 UI를 구현했습니다. EmailJS 문의 폼을 개발하고, 광고주 요구사항 반영과 사이트 오픈 이후 유지보수를 담당했습니다.',
    image: `${process.env.PUBLIC_URL}/assets/professional_projects/herzion_banner.jpg`,
    view_link: 'https://herzionshop.cafe24.com/new_subpage/product_page/product.html',
    github_link: 'https://github.com/yurim-web/aribio_final_kor',
  },
];
