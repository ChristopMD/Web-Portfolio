
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionHiText } from './HeroStyles';

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
        I'm a full stack developer and SAP Fiori/ABAP Consultant. Always learning new technologies to improve as a developer. Check my projects and technical knowledge below.
      </SectionText>
      <Link href='/#projects' scroll={false}>
        <Button>Learn more</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;