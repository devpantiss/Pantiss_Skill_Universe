import { forwardRef, type ComponentProps } from 'react';
import SlickSlider from 'react-slick';
import { useReducedMotion } from 'framer-motion';
import { useViewportActivity } from '../../hooks/useViewportActivity';

const ViewportSlider = forwardRef<SlickSlider, ComponentProps<typeof SlickSlider>>(function ViewportSlider(props, ref) {
  const { ref: viewportRef, active } = useViewportActivity<HTMLDivElement>();
  const reducedMotion = useReducedMotion();
  return <div ref={viewportRef} className="viewport-slider"><SlickSlider {...props} ref={ref}
    autoplay={Boolean(props.autoplay && active && !reducedMotion)} pauseOnFocus pauseOnHover /></div>;
});
export default ViewportSlider;
