/**
 * 경력기술서 PDF 링크 공용 컴포넌트
 *
 * Header(데스크톱/모바일)와 Contact 섹션에서 공통으로 사용됩니다.
 * public/assets/resume/ 아래의 PDF를 새 탭에서 엽니다.
 */
import React from 'react';

import ExternalLink from './ExternalLink';

const RESUME_PDF_PATH = `${process.env.PUBLIC_URL}/assets/resume/경력기술서_이유림.pdf`;

interface ResumeLinkProps {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const ResumeLink: React.FC<ResumeLinkProps> = ({ className, onClick, children }) => (
  <ExternalLink
    href={RESUME_PDF_PATH}
    className={className}
    ariaLabel="경력기술서 PDF 새 탭에서 열기"
    onClick={onClick}
  >
    {children}
  </ExternalLink>
);

export default ResumeLink;
