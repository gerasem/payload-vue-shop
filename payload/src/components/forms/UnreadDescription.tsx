'use client'
import React, { useEffect, useState } from 'react'

export const UnreadDescription: React.FC = () => {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const fetchUnreadCount = async () => {
      try {
        const response = await fetch('/api/form-submissions?where[read][equals]=false&limit=0')
        const data = await response.json()
        setCount(data.totalDocs)
      } catch (error) {
        console.error('Failed to fetch unread submissions count:', error)
      }
    }

    fetchUnreadCount()
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchUnreadCount, 30000)
    return () => clearInterval(interval)
  }, [])

  if (count === null) return null
  if (count === 0) return <div style={{ color: '#666', fontSize: '14px' }}>All submissions read</div>

  return (
    <div style={{ 
      display: 'inline-block',
      padding: '4px 12px',
      backgroundColor: '#ff9800',
      color: 'white',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginBottom: '10px'
    }}>
      {count} unread submissions
    </div>
  )
}

export default UnreadDescription
