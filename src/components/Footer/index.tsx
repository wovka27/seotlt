import React from 'react'
import '@/components/Footer/footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
