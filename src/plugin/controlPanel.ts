import { t, validateNonEmpty } from '@superset-ui/core';
import { ControlPanelConfig, sections } from '@superset-ui/chart-controls';

const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.legacyRegularTime,
    {
      label: t('URL'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'url',
            config: {
              type: 'TextControl',
              label: t('Embeddable URL'),
              description: t('URL to display content'),
              validators: [validateNonEmpty],
            },
          },
        ],
      ],
    },
  ],
};

export default config;
