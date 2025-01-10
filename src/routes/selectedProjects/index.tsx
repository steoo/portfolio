import { Link, useLoaderData } from 'react-router-dom';

import { Project } from '../../../types/graphql';
import { QueryLoaderResult } from '../../../types/loaders';
import ArrowRight from '../../assets/arrow-right.svg';
import { PageContainer } from '../../components/global/global.styled';
import {
  Project as ProjectComponent,
  ProjectsContainer,
} from '../../components/selectedProjects/selectedProjects.styled';

const SelectedProjects = () => {
  const { data } = useLoaderData() as QueryLoaderResult<{
    projects: Project[];
  }>;

  return (
    <PageContainer>
      <ProjectsContainer as="ol">
        {data.projects.map(({ metadata }) => (
          <ProjectComponent as="li" key={metadata[0]?.id} className="project">
            <img width={15} src={ArrowRight} alt="arrow right" />
            <h2>{metadata[0]?.description}</h2>
            <Link to={metadata[0]?.link as string} target="_blank">
              <h1>{metadata[0]?.title}</h1>
            </Link>
          </ProjectComponent>
        ))}
      </ProjectsContainer>
    </PageContainer>
  );
};

export default SelectedProjects;
