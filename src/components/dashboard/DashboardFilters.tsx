import { lazy, Suspense, useRef, useState, type KeyboardEvent } from 'react';
const DashboardOverviewPage = lazy(() => import('../../pages/dashboard/DashboardOverviewPage'));
const AttendanceDashboard = lazy(() => import('../../pages/dashboard/AttendanceDashboard'));
const DistrictwiseDashboardPage = lazy(() => import('../../pages/dashboard/DistrictwiseDashboardPage'));
const PlacementsDashboard = lazy(() => import('../../pages/dashboard/PlacementsDashboard'));
const tabs = [{key:'overview',label:'Overview',component:DashboardOverviewPage},{key:'attendance',label:'Attendance',component:AttendanceDashboard},{key:'district-analytics',label:'District analytics',component:DistrictwiseDashboardPage},{key:'placements',label:'Placements',component:PlacementsDashboard}];
export default function DashboardFilters() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement|null)[]>([]);
  const Content = tabs[active].component;
  const onKey = (event:KeyboardEvent<HTMLButtonElement>, index:number) => {
    let next=index;
    if(event.key==='ArrowRight') next=(index+1)%tabs.length;
    else if(event.key==='ArrowLeft') next=(index+tabs.length-1)%tabs.length;
    else if(event.key==='Home') next=0;
    else if(event.key==='End') next=tabs.length-1;
    else return;
    event.preventDefault();setActive(next);refs.current[next]?.focus();
  };
  return <section className="dashboard-surface"><header className="site-shell dashboard-heading"><p className="site-eyebrow">Training & outcomes</p><h1>Skill dashboard</h1><p>Programme performance, attendance, and district-level insights.</p></header>
    <div className="dashboard-tabbar"><div className="site-shell"><div role="tablist" aria-label="Skill dashboard views">{tabs.map((tab,index)=><button key={tab.key} id={`dashboard-tab-${tab.key}`} role="tab" aria-selected={index===active} aria-controls="dashboard-panel" tabIndex={index===active?0:-1} ref={el=>{refs.current[index]=el;}} onKeyDown={event=>onKey(event,index)} onClick={()=>setActive(index)}>{tab.label}</button>)}</div></div></div>
    <div id="dashboard-panel" role="tabpanel" tabIndex={0} aria-labelledby={`dashboard-tab-${tabs[active].key}`} className="site-shell dashboard-content"><Suspense fallback={<div className="section-placeholder min-h-[500px]" role="status"><span className="sr-only">Loading dashboard view</span></div>}><Content /></Suspense></div>
  </section>;
}
