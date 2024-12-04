import React, { createRef } from 'react';
import type { PaulzEmbeddedUrlProps } from './types';
import { isValidUrl } from './utils';

export default function PaulzEmbeddedUrl(props: PaulzEmbeddedUrlProps) {
  const { url, height, width } = props;
  const rootElem = createRef<HTMLIFrameElement>();

  return isValidUrl(url) ? (
    <iframe
      ref={rootElem}
      src={`${url}?standalone=1&show_filters=0`}
      width={width}
      height={height}
      frameBorder="0"
      allow="fullscreen"
    >
      <p>Please update your browser to display the content.</p>
    </iframe>
  ) : (
    <p style={{ textAlign: 'center' }}>The specified link is not valid</p>
  );
}
