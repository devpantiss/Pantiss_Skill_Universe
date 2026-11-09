import { Component, type ErrorInfo, type ReactNode } from 'react';

export default class PageErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('Unable to display page', error, info.componentStack); }
  render() {
    return this.state.failed ? <section className="site-message" role="alert"><p className="site-eyebrow">Something interrupted loading</p><h1>Let’s try that again.</h1><p>The page could not be loaded. Reload to retry, or return to the home page.</p><div className="flex flex-wrap gap-3"><button className="site-button" onClick={() => window.location.reload()}>Reload page</button><a className="site-button site-button-secondary" href="/">Return home</a></div></section> : this.props.children;
  }
}
