import React from 'react';

interface LogoProps {
  className: string;
  onClick: React.MouseEventHandler<SVGSVGElement>;
}

const LogoTernoa: React.FC<LogoProps> = ({ className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    fill="none"
    viewBox="0 0 161 46"
  >
  <img src="https://i.imgur.com/cR3tERM.png" width="100" height="100"></img>
  </svg>
);

export default LogoTernoa;
