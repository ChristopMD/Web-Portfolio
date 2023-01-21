import React from 'react';
import { DiDjango, DiFirebase, DiLaravel, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've work with a range of techologies for web development from work and college.
      From Back-end to Fronted and Databases.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript <br />
            React.js <br />
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiLaravel size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            PHP <br />
            Python <br />
            Laravel <br />
            Django
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL <br />
            PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
