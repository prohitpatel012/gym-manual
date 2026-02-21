import LandingPage from '@/components/LandingPage'
import PublicHeader from '@/components/PublicHeader'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      <PublicHeader />
      <LandingPage />
    </div>
  )
}

export default Home