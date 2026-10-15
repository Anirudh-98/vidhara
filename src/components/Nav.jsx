import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { LeadFormModal } from './LeadFormModal'

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Our Services', '/services'],
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const { pathname, hash } = useLocation()

  // Handle scroll detection for shadow/border effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route or hash changes
  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  // Close mobile menu when screen resizes to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed top-3 sm:top-5 inset-x-0 z-40 flex justify-center px-3 sm:px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto h-[56px] sm:h-[64px] w-full max-w-[960px] px-3 sm:px-5 flex items-center justify-between transition-all duration-300 rounded-full bg-white border ${
            isScrolled
              ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-gray-200'
              : 'shadow-md border-gray-100'
          }`}
        >
          {/* Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/navlogo.png"
              alt="Vidhara Logo"
              className="h-[20px] sm:h-[24px] w-auto invert transition-transform hover:scale-105"
            />
            <span className="text-[17px] sm:text-[19px] tracking-tight font-bold text-gray-900 wordmark">
              VIDHARA
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1 text-[13px] lg:text-[14px] font-medium text-gray-600">
            {links.map(([name, href]) => {
              const isActive =
                href === '/'
                  ? pathname === '/' && !hash
                  : href.startsWith('/#')
                  ? hash === href.replace('/', '')
                  : pathname === href

              return (
                <Link
                  key={name}
                  to={href}
                  className={`px-3 lg:px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gray-100 text-gray-900 font-semibold'
                      : 'hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>

          {/* Right Actions: CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center bg-[#350c32] hover:bg-[#280926] active:scale-95 text-white text-[13px] lg:text-[14px] font-medium px-4 lg:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex md:hidden items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 cursor-pointer transition-colors active:scale-95"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      {open && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs md:hidden transition-opacity"
            onClick={() => setOpen(false)}
          />

          {/* Mobile Menu Card */}
          <div className="fixed z-50 top-[72px] sm:top-[88px] inset-x-3 sm:inset-x-4 max-w-[480px] mx-auto rounded-3xl bg-white border border-gray-200 shadow-2xl p-4 sm:p-5 flex flex-col gap-1 text-[15px] font-medium text-gray-700 animate-in fade-in slide-in-from-top-3 duration-200 md:hidden">
            {links.map(([name, href]) => {
              const isActive =
                href === '/'
                  ? pathname === '/' && !hash
                  : href.startsWith('/#')
                  ? hash === href.replace('/', '')
                  : pathname === href

              return (
                <Link
                  key={name}
                  to={href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-2xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gray-100 text-gray-900 font-semibold'
                      : 'hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span>{name}</span>
                </Link>
              )
            })}

            <div className="pt-2 mt-2 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full bg-[#350c32] hover:bg-[#280926] active:scale-[0.99] text-white font-medium text-[15px] py-3 rounded-2xl transition-all shadow-sm cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="Performance Marketing"
      />
    </>
  )
}

