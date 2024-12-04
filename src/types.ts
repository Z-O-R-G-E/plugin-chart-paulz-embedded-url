import { QueryFormData } from '@superset-ui/core';

export interface PluginChartEmbeddedUrlStylesProps {
  height: number;
  width: number;
}

interface PluginChartEmbeddedUrlCustomizeProps {}

export type PluginChartEmbeddedUrlQueryFormData = QueryFormData &
  PluginChartEmbeddedUrlStylesProps &
  PluginChartEmbeddedUrlCustomizeProps;

export type PluginChartEmbeddedUrlProps = PluginChartEmbeddedUrlStylesProps &
  PluginChartEmbeddedUrlCustomizeProps & {
    url: string;
  };
