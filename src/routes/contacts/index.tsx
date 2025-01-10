import { useLoaderData } from 'react-router-dom';

import { ContactLink } from '../../../types/graphql';
import { QueryLoaderResult } from '../../../types/loaders';
import {
  ContactLinksContainer,
  ContactLink as ContactLinkStyled,
} from '../../components/contacts/contacts.styled';
import { PageContainer } from '../../components/global/global.styled';

export default function Contacts() {
  const { data } = useLoaderData() as QueryLoaderResult<{
    contactLinks: ContactLink[];
  }>;

  return (
    <PageContainer>
      <ContactLinksContainer>
        {data.contactLinks.map(({ documentId, title, url }) => (
          <ContactLinkStyled
            key={documentId}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </ContactLinkStyled>
        ))}
      </ContactLinksContainer>
    </PageContainer>
  );
}
