/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query GetContacts {\n    contactLinks {\n      title\n      url\n    }\n  }\n": types.GetContactsDocument,
    "\n  query GetDirectory {\n    directoryEntries {\n      documentId\n      metadata {\n        title\n        description\n        link\n      }\n    }\n  }\n": types.GetDirectoryDocument,
    "\n  query GetExperiences {\n    global {\n      experience\n    }\n    experiences {\n      documentId\n      title\n      year\n    }\n  }\n": types.GetExperiencesDocument,
    "\n  query GetHOME {\n    aboutPage {\n      description\n    }\n  }\n": types.GetHomeDocument,
    "\n  query GetRoot {\n    global {\n      about\n      contacts\n      directory\n      experience\n      selectedProjects\n    }\n  }\n": types.GetRootDocument,
    "\n  query GetProjects {\n    projects {\n      metadata {\n        description\n        id\n        link\n        title\n      }\n    }\n  }\n": types.GetProjectsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetContacts {\n    contactLinks {\n      title\n      url\n    }\n  }\n"): (typeof documents)["\n  query GetContacts {\n    contactLinks {\n      title\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDirectory {\n    directoryEntries {\n      documentId\n      metadata {\n        title\n        description\n        link\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDirectory {\n    directoryEntries {\n      documentId\n      metadata {\n        title\n        description\n        link\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetExperiences {\n    global {\n      experience\n    }\n    experiences {\n      documentId\n      title\n      year\n    }\n  }\n"): (typeof documents)["\n  query GetExperiences {\n    global {\n      experience\n    }\n    experiences {\n      documentId\n      title\n      year\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetHOME {\n    aboutPage {\n      description\n    }\n  }\n"): (typeof documents)["\n  query GetHOME {\n    aboutPage {\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRoot {\n    global {\n      about\n      contacts\n      directory\n      experience\n      selectedProjects\n    }\n  }\n"): (typeof documents)["\n  query GetRoot {\n    global {\n      about\n      contacts\n      directory\n      experience\n      selectedProjects\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProjects {\n    projects {\n      metadata {\n        description\n        id\n        link\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProjects {\n    projects {\n      metadata {\n        description\n        id\n        link\n        title\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;