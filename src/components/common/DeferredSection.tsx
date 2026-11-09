import { Suspense, type ReactNode } from 'react';
import LazyMount from './LazyMount';

/** Preserve the section's footprint while keeping expensive modules off the critical path. */
export default function DeferredSection({ children, height = 'min-h-[480px]', id }: {
  children: ReactNode;
  height?: string;
  id?: string;
}) {
  return (
    <div id={id} className="deferred-section">
      <LazyMount rootMargin="800px 0px" fallbackHeight={height}>
        <Suspense fallback={<div className={`section-placeholder ${height}`} role="status"><span className="sr-only">Loading section</span></div>}>
          {children}
        </Suspense>
      </LazyMount>
    </div>
  );
}
