
import { TimeLineData } from '../../constants/constants';
import { Section, SectionDivider, SectionSubTitle, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph } from './TimeLineStyles';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {

  return (
    <Section id ="about">
      <SectionDivider />
      < br/>
      <SectionTitle>Abou Me</SectionTitle>
      <SectionText>
      I am bachelor in Computer Science and a SAP Fiori/ABAP Consultant. Also I have knowledge in the areas of data science and software development. 
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
