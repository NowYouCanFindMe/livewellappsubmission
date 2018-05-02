import React from 'react';
import { Container, Content, Text, H1, H2, H3, Button } from 'native-base';
import Spacer from './Spacer';

const About = () => (
  <Container>
    <Content padder>
      <Spacer size={30} />
      <H2>Record your memories</H2>
      <Spacer size={10} />
      <Text>Using your devices camera you can record a video, and save to your collections</Text>

      <Spacer size={30} />
      <H2>Organize your Memories</H2>
      <Spacer size={10} />
      <Text>Organize your memories to categories and events, to quickly reference</Text>

      <Spacer size={30} />
      <H2>Share with loved ones </H2>
      <Spacer size={10} />
      <Text>Share your memories to loved ones using the mobile device app or web browser</Text>
    </Content>
  </Container>
);

export default About;
