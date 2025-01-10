import { useLoaderData } from 'react-router-dom';

import { DirectoryEntry, DirectoryPage } from '../../../types/graphql';
import { QueryLoaderResult } from '../../../types/loaders';
import {
  DirectoryContainer,
  DirectoryItem,
} from '../../components/directory/directory.styled';
import { PageContainer } from '../../components/global/global.styled';

export default function Directory() {
  const { data } = useLoaderData() as QueryLoaderResult<{
    directoryPage: DirectoryPage;
    directoryEntries: DirectoryEntry[];
  }>;

  return (
    <PageContainer>
      <DirectoryContainer>
        <h1>{data.directoryPage.description}</h1>
        {data.directoryEntries.map(({ documentId, metadata }) => (
          <DirectoryItem key={documentId} rel="noopener noreferrer">
            <a
              href={metadata[0]?.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {metadata[0]?.title}
            </a>
            <p>{metadata[0]?.description}</p>
          </DirectoryItem>
        ))}
      </DirectoryContainer>
    </PageContainer>
  );
}
