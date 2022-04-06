import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AcomplishmentsData } from '../../constants/constants'


const Acomplishments = () => (
  <Section id="accomplishments">
    <SectionDivider />
    <SectionTitle main>Personal Accomplishments</SectionTitle>
    <Boxes>
      {AcomplishmentsData.map(({number, text},index) =>(
        <Box key={index}>
          <BoxNum>{number}+</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
