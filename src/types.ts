import { QueryFormData } from '@superset-ui/core';

export interface PaulzEmbeddedUrlStylesProps {
  height: number;
  width: number;
}

interface PaulzEmbeddedUrlCustomizeProps {}

export type PaulzEmbeddedUrlQueryFormData = QueryFormData &
  PaulzEmbeddedUrlStylesProps &
  PaulzEmbeddedUrlCustomizeProps;

export type PaulzEmbeddedUrlProps = PaulzEmbeddedUrlStylesProps &
  PaulzEmbeddedUrlCustomizeProps & {
    url: string;
  };
