import { AboutPage } from '../../../types/graphql';
import { GenericLoaderData } from '../../../types/loaders';

export interface HomeLoaderData extends GenericLoaderData {
  data: {
    aboutPage: AboutPage;
  };
}
