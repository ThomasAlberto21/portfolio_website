import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: 555-555-5555'>555-555-5555</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:tomasalberto527@gmail.com'>
            tomasalberto527@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning and Growing</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/ThomasAlberto21'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/thomasalberto21/'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
        <SocialIcons href='www.linkedin.com/in/thomasalberto21'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
