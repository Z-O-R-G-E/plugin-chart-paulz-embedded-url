import { ChartProps } from '@superset-ui/core';

export default function transformProps(chartProps: ChartProps) {
  const { width, height, formData } = chartProps;
  const url = formData.url;

  return {
    width,
    height,
    url,
  };
}
