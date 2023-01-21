import React, { useState, useRef, useEffect } from 'react';

import { List, ListContainer, ListItem, ListParagraph } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {

  return (
    <Section id ="about">
      <SectionDivider />
      < br/>
      <SectionTitle>Abou Me</SectionTitle>
      <SectionText>
      I am 10th semester computer science student. I have knowledge in the areas of software development and data science. 
      I'm excited to contribute the knowledge that I have acquired during my academic training and work experience.
      </SectionText>
      <SectionSubTitle>Soft Skills</SectionSubTitle>
      <List>
      <ListItem>
        <ListContainer>
          <ListParagraph>
            Teamwork <br />
            Organization
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListParagraph>
            Communication <br />
            Proactive 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListParagraph>
            Analytics Skills <br />
            Leadirship
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionSubTitle>Languages</SectionSubTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListParagraph>
            Spanish
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListParagraph>
            English
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </Section>
  );
};

export default Timeline;
