import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionHiText } from './HeroStyles';
import Link from 'next/link';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionHiText main>
      Hi there, I'm
      </SectionHiText>
      <SectionTitle >
        Christopher Mendoza
      </SectionTitle>
      <SectionText>
        I'm a full stack developer. Always learning new technologies to improve as a developer. Check my projects and technical knoledge below.
      </SectionText>
      <Link href='/#projects' scroll={false}>
        <Button>Learn more</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;