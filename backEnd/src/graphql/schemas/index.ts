import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { join } from 'path';

// 모든 .graphql 파일을 로드하여 하나의 스키마로 병합
export const typeDefs = loadSchemaSync(join(__dirname, '*.graphql'), {
  loaders: [new GraphQLFileLoader()]
});