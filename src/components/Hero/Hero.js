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
            'https://www.cakeresume.com/pdf/s--I_4WpZPYZpHw0wCNPY4v1A--/E8Lox.pdf')
        }
      >
        Download My CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
