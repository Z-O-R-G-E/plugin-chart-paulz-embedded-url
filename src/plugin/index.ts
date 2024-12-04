import { t, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import thumbnail from '../images/thumbnail.png';

export default class PluginChartEmbeddedUrl extends ChartPlugin {
  constructor() {
    const metadata = new ChartMetadata({
      description:
        'A container (iFrame) that allows you to insert any HTML document from another source',
      name: t('Embedded URL'),
      thumbnail,
    });

    super({
      metadata,
      loadChart: () => import('../PluginChartEmbeddedUrl'),
      controlPanel,
      buildQuery,
      transformProps,
    });
  }
}
