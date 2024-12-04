import {
  buildQueryContext,
  ensureIsArray,
  QueryFormData,
} from '@superset-ui/core';

export default function buildQuery(formData: QueryFormData) {
  return buildQueryContext(formData, {
    buildQuery: baseQueryObject => {
      const { metrics, columns, groupby } = formData;
      const metricsHandle = () =>
        ensureIsArray(metrics).length === 0 &&
        ensureIsArray(columns).length === 0 &&
        ensureIsArray(groupby).length === 0
          ? ['count']
          : metrics;

      return [
        {
          ...baseQueryObject,
          metrics: metricsHandle(),
        },
      ];
    },
  });
}
