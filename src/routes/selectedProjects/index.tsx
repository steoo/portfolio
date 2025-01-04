import { useLoaderData } from 'react-router-dom';

import { Project } from '../../../types/graphql';
import { QueryLoaderResult } from '../../../types/loaders';
import { PageContainer } from '../../components/global/global.styled';

const SelectedProjects = () => {
  const { data } = useLoaderData() as QueryLoaderResult<{
    project: Project[];
  }>;

  console.log(data);

  return <PageContainer>yo</PageContainer>;
};

export default SelectedProjects;
