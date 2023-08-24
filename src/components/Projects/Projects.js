import React from 'react';
import Link from 'next/link';
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
  Button,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const limitedProject = projects.slice(0, 4);

  return (
    <Section id='projects'>
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {limitedProject.map(
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
      <Button>
        <Link href='/projects'>
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <span>See All My Project</span>
          </a>
        </Link>
      </Button>
    </Section>
  );
};

export default Projects;
