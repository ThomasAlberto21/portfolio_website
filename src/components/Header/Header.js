import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href='/'>
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            <DiCssdeck size='3rem' /> <Span>Thomas Alberto</Span>
          </a>
        </Link>
      </Div1>
      <Div3>
        <SocialIcons href='https://github.com/ThomasAlberto21'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/thomasalberto21/'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
        <SocialIcons href='www.linkedin.com/in/thomasalberto21'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
