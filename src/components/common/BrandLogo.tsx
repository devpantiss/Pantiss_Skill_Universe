import type { ImgHTMLAttributes } from 'react';
import { BRAND_LOGO, BRAND_NAME } from '../../constants/brand';

export default function BrandLogo(props: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>) {
  return <img width={220} height={96} decoding="async" {...props} src={BRAND_LOGO} alt={BRAND_NAME} />;
}
