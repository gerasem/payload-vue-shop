'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'

export const DeployButton: React.FC = () => {
  const [isDeploying, setIsDeploying] = useState(false)

  const handleDeploy = async () => {
    // Usually, you should proxy this through a custom API route if the webhook URL shouldn't be public.
    // Given the admin panel is protected, and we can use a server action or simple fetch, we will fetch directly
    // since Vercel hooks don't have CORS by default, but to avoid exposing the URL to the client,
    // we should ideally call an internal Next.js route. We will build that route in the next step.
    
    setIsDeploying(true)

    try {
      const res = await fetch('/api/custom/deploy-frontend', {
        method: 'POST',
      })

      if (!res.ok) {
        throw new Error('Deployment request failed')
      }

      toast.success('Frontend deployment started successfully!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to trigger deployment. Please check your configuration.')
    } finally {
      setIsDeploying(false)
    }
  }

  return (
    <button
      onClick={handleDeploy}
      disabled={isDeploying}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'var(--theme-elevation-150)',
        color: 'var(--theme-elevation-800)',
        boxShadow: 'none',
        border: 'none',
        padding: '0.2rem 0.75rem',
        borderRadius: '4px',
        cursor: isDeploying ? 'not-allowed' : 'pointer',
        fontSize: '13px',
        transition: 'all 0.2s',
        opacity: isDeploying ? 0.7 : 1,
      }}
      className="btn btn--style-secondary btn--size-medium payload-deploy-button"
    >
      {isDeploying ? 'Deploying...' : 'Deploy Frontend'}
    </button>
  )
}
