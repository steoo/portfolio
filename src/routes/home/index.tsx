import { useLoaderData } from 'react-router-dom';

import { AboutPage } from '../../../types/graphql';
import { QueryLoaderResult } from '../../../types/loaders';
import { Container } from '../../components/home/home.styled';

const Home = () => {
  const { data } = useLoaderData() as QueryLoaderResult<{
    aboutPage: AboutPage;
  }>;

  return (
    <Container>
      <p>{data.aboutPage.description}</p>
    </Container>
  );
};

export default Home;
