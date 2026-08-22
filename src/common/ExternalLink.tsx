/**
 * 외부 링크 공용 컴포넌트
 *
 * 새 탭에서 안전하게 여는 데 필요한 속성(target="_blank" + rel="noopener noreferrer")을
 * 한 곳에서 고정해서 제공한다. GitHubLink, ResumeLink가 이 컴포넌트를 감싸서
 * 각자의 href/아이콘/문구만 채워 사용한다 — 새 외부 링크 버튼이 필요할 때도 이걸 재사용할 것.
 */
import React from 'react';

interface ExternalLinkProps {
  href: string;
  className: string;
  ariaLabel: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  className,
  ariaLabel,
  onClick,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {children}
  </a>
);

export default ExternalLink;
