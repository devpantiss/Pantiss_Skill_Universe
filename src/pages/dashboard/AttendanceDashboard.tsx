import React from 'react'
import AttendanceRow1 from '../../components/dashboard/attendance/AttendanceRow1'
import AttendanceRow2 from '../../components/dashboard/attendance/AttendanceRow2'

const AttendanceDashboard: React.FC = () => {
  return (
    <div>
        <AttendanceRow1 />
        <AttendanceRow2 />
    </div>
  )
}

export default AttendanceDashboard