import {
  buildQueryContext,
  QueryFormData,
} from '@superset-ui/core';

export default function buildQuery(formData: QueryFormData) {
  return buildQueryContext(formData, {
    buildQuery: baseQueryObject => {
      return [
        {
          ...baseQueryObject,
          metrics: ['count'],
        },
      ];
    },
  });
}
