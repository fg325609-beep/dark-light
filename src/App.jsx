import React from 'react'
import Header from './Components/Header/Header'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="hero">
          <div className="hero-text">
            <h2>Dark & Light Mode</h2>
            <p>Toggle the theme to switch between dark and light modes. Your preference is saved automatically!</p>
            <button className="cta-btn">Get Started</button>
          </div>
          <div className="hero-image">
            <div className="theme-preview">
              <div className="preview-card">
                <div className="preview-dot"></div>
                <div className="preview-line"></div>
                <div className="preview-line short"></div>
              </div>
              <div className="preview-card dark-card">
                <div className="preview-dot"></div>
                <div className="preview-line"></div>
                <div className="preview-line short"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎨</span>
              <h3>Beautiful UI</h3>
              <p>Smooth transitions and modern design</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💾</span>
              <h3>Auto Save</h3>
              <p>Your theme preference is saved</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Responsive</h3>
              <p>Works perfectly on all devices</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Fast</h3>
              <p>Lightweight and optimized</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Dark Light Mode. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App