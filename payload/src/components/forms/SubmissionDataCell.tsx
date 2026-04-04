'use client'
import React from 'react'

export const SubmissionDataCell: React.FC<any> = ({ cellData }) => {
  if (!cellData || !Array.isArray(cellData)) return null

  return (
    <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.6)', lineHeight: '1.4', pointerEvents: 'none' }}>
      {cellData
        .filter((item: any) => !['recaptchaToken', 'privacyAccepted'].includes(item.field))
        .slice(0, 2)
        .map((item: any, i: number) => (
          <div key={i} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <strong>{item.field}:</strong> {item.value}
        </div>
      ))}
      {cellData.length > 2 && <div style={{ opacity: 0.5 }}>...</div>}
    </div>
  )
}

export default SubmissionDataCell
