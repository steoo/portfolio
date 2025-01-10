import { useLoaderData } from 'react-router-dom';

import { Experience } from '../../../types/graphql';
import { QueryLoaderResult } from '../../../types/loaders';
import {
  ExperienceCard,
  ExperiencesContainer,
} from '../../components/experiences/experiences.styled';
import { PageContainer } from '../../components/global/global.styled';

export default function Experiences() {
  const { data } = useLoaderData() as QueryLoaderResult<{
    global: {
      experience: string;
    };
    experiences: Experience[];
  }>;

  return (
    <PageContainer>
      <ExperiencesContainer as="ol">
        {data.experiences.map(({ documentId, title, year }) => (
          <li key={documentId}>
            <ExperienceCard>
              <h2>{title}</h2>
              <h3>{year}</h3>
            </ExperienceCard>
          </li>
        ))}
      </ExperiencesContainer>
    </PageContainer>
  );
}
