import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useLoaderData } from 'react-router-dom';

import { AboutPage } from '../../../types/graphql';
import { QueryLoaderResult } from '../../../types/loaders';
import { HomeContainer } from '../../components/home/home.styled';

const Home = () => {
  const { data } = useLoaderData() as QueryLoaderResult<{
    aboutPage: AboutPage;
  }>;

  return (
    <HomeContainer>
      {/* <p>{data.aboutPage.description}</p>
       */}
      <BlocksRenderer content={data.aboutPage.richDescription} />
    </HomeContainer>
  );
};

export default Home;
