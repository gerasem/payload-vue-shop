'use client'
import { useForm, useFormFields, useFormModified, useFormProcessing } from '@payloadcms/ui'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

export const SubmissionDataField: React.FC<any> = () => {
  const modified = useFormModified()
  const processing = useFormProcessing()
  const router = useRouter()
  const wasSaving = useRef(false)

  // Get the document data directly from the form state
  const { getData } = useForm()
  const data = getData()
  const submissionData = data.submissionData as any[]
  const read = data.read
  const dispatchField = useFormFields(([fields, dispatch]) => dispatch)

  useEffect(() => {
    if (read === false && dispatchField) {
      dispatchField({
        type: 'UPDATE',
        path: 'read',
        value: true,
      })
    }
  }, [read, dispatchField])

  // Redirect after save
  useEffect(() => {
    if (processing) {
      wasSaving.current = true
    } else if (wasSaving.current && !modified) {
      // Document was saved
      wasSaving.current = false
      router.push('/admin/collections/form-submissions')
    }
  }, [processing, modified, router])

  if (!submissionData || !Array.isArray(submissionData)) {
    return (
      <div style={{ marginBottom: '2rem', padding: '20px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '4px' }}>
        <em>No submission data available.</em>
      </div>
    )
  }

  return (
    <div style={{ 
      marginBottom: '2rem',
      padding: '24px',
      backgroundColor: 'var(--theme-elevation-50)',
      border: '1px solid var(--theme-elevation-150)',
      borderRadius: '6px'
    }}>
      <h4 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem' }}>Submission Data</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {submissionData
          .filter((item: any) => !['recaptchaToken', 'privacyAccepted'].includes(item.field))
          .map((item: any, i: number) => (
            <div key={i} style={{ fontSize: '15px', lineHeight: '1.4' }}>
            <span style={{ color: 'var(--theme-elevation-600)', marginRight: '8px' }}>
              {item.field}:
            </span>
            <strong style={{ color: 'var(--theme-elevation-900)' }}>
              {item.value}
            </strong>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubmissionDataField
