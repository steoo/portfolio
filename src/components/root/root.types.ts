import { Global } from '../../../types/graphql';
import { GenericLoaderData } from '../../../types/loaders';

export interface RootLoaderData extends GenericLoaderData {
  data: {
    global: Global;
  };
}
