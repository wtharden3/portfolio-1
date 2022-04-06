import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello,<br/>
        I'm Whitney Harden
      </SectionTitle>
      <SectionText>
        I am a detail-oriented full stack developer. I am skilled in React and 
        can build projects using 3rd-party APIs, Node.js, SQL and other front 
        end and back end technologies. Not only do I enjoy learning new skills 
        and deepinging my knowlege I learn very quickly. I use my spare time 
        to practice my development skills and enroll in courses in related 
        topics that help me to grow as a developer.
      </SectionText>
      <Button onCLick={() => window.location = 'https://whitneyharden.com/#projects'}>View My Work</Button>
    </LeftSection>
  </Section>
);

export default Hero;