import { useLoaderData } from 'react-router-dom';

import { Experience } from '../../../types/graphql';
import { QueryLoaderResult } from '../../../types/loaders';
import {
  Container,
  Title,
  Grid,
  ExperienceCard,
} from '../../components/experiences/experiences.styled';

export default function Experiences() {
  const { data } = useLoaderData() as QueryLoaderResult<{
    global: {
      experience: string;
    };
    experiences: Experience[];
  }>;

  return (
    <Container>
      <Title>{data.global.experience}</Title>
      <Grid>
        {data.experiences.map(({ documentId, title, year }) => (
          <ExperienceCard key={documentId}>
            <h2>{title}</h2>
            <h3>{year}</h3>
          </ExperienceCard>
        ))}
      </Grid>
    </Container>
  );
}
