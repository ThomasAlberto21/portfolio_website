import React from 'react';
import Link from 'next/link';
import { Layout } from '../layout/Layout';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../styles/GlobalComponents';
import { projects } from '../constants/constants';

const Projects = () => {
  return (
    <Layout>
      <Section id='projects'>
        <SectionDivider />
        <SectionTitle>All My Projects</SectionTitle>
        <GridContainer>
          {projects.map(
            ({ id, image, title, description, tags, source, visit }) => (
              <BlogCard key={id}>
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={visit}>Code</ExternalLinks>
                  <ExternalLinks href={source}>Source</ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          )}
        </GridContainer>
      </Section>
    </Layout>
  );
};

export default Projects;
