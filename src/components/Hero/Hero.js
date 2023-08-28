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
            'https://drive.google.com/file/d/1q88xkPPnDi8mzwt3wgiGl0J40FrWxCJl/view?usp=sharing')
        }
      >
        Download My CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
