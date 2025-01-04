import { useLoaderData } from 'react-router-dom';

import { Container } from '../../components/home/home.styled';
import { HomeLoaderData } from '../../components/home/home.types';

const Home = () => {
  const { data } = useLoaderData() as HomeLoaderData;

  return (
    <Container>
      <p>{data.aboutPage.description}</p>
    </Container>
  );
};

export default Home;
