import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SpendingTrajectory from './components/SpendingTrajectory'
import VerticalCAGR from './components/VerticalCAGR'
import IndustryProblems from './components/IndustryProblems'
import Solutions from './components/Solutions'
import ImplementationStrategy from './components/ImplementationStrategy'
import { CTASection, Footer } from './components/CTASection'
import EducationPage from './components/EducationPage'
import AutomationsPage from './components/AutomationsPage'
import WorkforcePage from './components/WorkforcePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="min-h-screen bg-[#050B18] text-slate-100 selection:bg-[#E8B4A0] selection:text-[#050B18] font-sans antialiased">
      <Header page={page} onNavigate={setPage} />
      <main>
        {page === 'home' && (
          <>
            <Hero onNavigate={setPage} />
            <SpendingTrajectory />
            <VerticalCAGR />
            <IndustryProblems />
            <Solutions />
            <ImplementationStrategy />
            <CTASection onNavigate={setPage} />
          </>
        )}
        {page === 'education' && <EducationPage onNavigate={setPage} />}
        {page === 'automations' && <AutomationsPage onNavigate={setPage} />}
        {page === 'workforce' && <WorkforcePage onNavigate={setPage} />}
        {page === 'about' && <AboutPage onNavigate={setPage} />}
        {page === 'contact' && <ContactPage onNavigate={setPage} />}
      </main>
      <Footer onNavigate={setPage} />
    </div>
  )
}
