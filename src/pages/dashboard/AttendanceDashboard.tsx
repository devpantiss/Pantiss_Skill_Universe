import DeferredSection from "../../components/common/DeferredSection";
import React from 'react'
const AttendanceRow1 = React.lazy(() => import("../../components/dashboard/attendance/AttendanceRow1"));
const AttendanceRow2 = React.lazy(() => import("../../components/dashboard/attendance/AttendanceRow2"));

const AttendanceDashboard: React.FC = () => {
  return (
    <div>
        <DeferredSection><AttendanceRow1 /></DeferredSection>
        <DeferredSection><AttendanceRow2 /></DeferredSection>
    </div>
  )
}

export default React.memo(AttendanceDashboard)
