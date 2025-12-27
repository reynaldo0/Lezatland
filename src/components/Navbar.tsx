'use client'

import { Menu as MenuIcon, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Page = 'beranda' | 'menu' | 'galeri' | 'tentang' | 'lokasi'

interface NavbarProps {
    currentPage: Page
    onNavigate: (page: Page) => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const lastScrollY = useRef(0)

    const menuItems: { label: string; page: Page }[] = [
        { label: 'Beranda', page: 'beranda' },
        { label: 'Menu', page: 'menu' },
        { label: 'Galeri', page: 'galeri' },
        { label: 'Tentang', page: 'tentang' },
        { label: 'Lokasi', page: 'lokasi' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setScrolled(currentY > 10)

            if (currentY > lastScrollY.current && currentY > 80) {
                setHidden(true)
            } else {
                setHidden(false)
            }

            lastScrollY.current = currentY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavigate = (page: Page) => {
        onNavigate(page)
        setIsMenuOpen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <motion.nav
            role="navigation"
            aria-label="Main Navigation"

            /* START sedikit di atas, bukan jauh */
            initial={{ y: -40, opacity: 0 }}

            animate={{
                y: hidden ? -90 : 0,
                opacity: 1,
            }}

            transition={{
                type: 'spring',
                stiffness: 120,
                damping: 28,
                mass: 1.1,
            }}

            className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4"
        >


            {/* ================= NAVBAR GLASS ================= */}
            <div
                className={`
          flex items-center justify-between
          rounded-2xl px-6 py-3
          backdrop-blur-xl
          ring-1 transition-all duration-300
          ${scrolled
                        ? 'bg-white/80 shadow-lg ring-black/5'
                        : 'bg-white/60 ring-black/5'
                    }
        `}
            >
                {/* Logo */}
                <button
                    onClick={() => handleNavigate('beranda')}
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md overflow-hidden">
                        <img
                            src="/logo.png" 
                            alt="Lezatland Restaurant Logo"
                            width={28}
                            height={28}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:text-primary transition">
                            LEZATLAND
                        </span>
                        <span className="text-xs text-neutral-500">Restaurant</span>
                    </div>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => {
                        const active = currentPage === item.page
                        return (
                            <button
                                key={item.page}
                                onClick={() => handleNavigate(item.page)}
                                className={`relative text-sm font-medium transition-colors
                  ${active
                                        ? 'text-primary'
                                        : 'text-neutral-700 hover:text-primary'
                                    }
                `}
                            >
                                {item.label}
                                {active && (
                                    <motion.span
                                        layoutId="nav-active"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6 text-neutral-700" />
                    ) : (
                        <MenuIcon className="w-6 h-6 text-neutral-700" />
                    )}
                </button>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden mt-3 rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl ring-1 ring-black/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-3">
                            {menuItems.map((item) => {
                                const active = currentPage === item.page
                                return (
                                    <button
                                        key={item.page}
                                        onClick={() => handleNavigate(item.page)}
                                        className={`w-full text-left rounded-xl px-4 py-3 text-sm transition
                      ${active
                                                ? 'bg-primarytext-primary'
                                                : 'text-neutral-700 hover:bg-neutral-100'
                                            }
                    `}
                                    >
                                        {item.label}
                                    </button>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
