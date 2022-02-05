import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { FooterComponent } from './style';

export default function Footer() {
  return (
    <FooterComponent>
      <p>by @fernanda</p>

      <div>
        <a
          href="http://github.com/Fekleite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#fff" size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/fcleite19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#fff" size={24} />
        </a>
      </div>
    </FooterComponent>
  )
}