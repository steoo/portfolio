import { MaybeMasked } from '@apollo/client';

export interface GenericLoaderData {
  loading: boolean;
  error?: string;
}

export interface QueryLoaderResult<T> {
  loading: boolean;
  data: NonNullable<MaybeMasked<T>>;
  error?: string;
}
