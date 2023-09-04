import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a student at Bina Sarana Informatika University, Pontianak City.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://www.cakeresume.com/pdf/s--lmD9c1FaVP6K5n4V9equ8A--/DnxkB.pdf')
        }
      >
        Download My CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
