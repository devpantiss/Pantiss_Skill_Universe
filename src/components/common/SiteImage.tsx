import { useState, type ImgHTMLAttributes } from 'react';

/** Keep image failures local to their slot instead of retrying broken remote URLs. */
export default function SiteImage({ src, alt = '', onError, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failedSource, setFailedSource] = useState<string>();
  const failed = Boolean(src && failedSource === src);
  return <img {...props} src={failed ? '/image-unavailable.svg' : src} alt={failed && alt ? `Image unavailable: ${alt}` : alt}
    decoding={props.decoding ?? 'async'} onError={event => {
      if (failed) return;
      onError?.(event);
      setFailedSource(src);
    }} />;
}
