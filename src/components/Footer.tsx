import { Clock, Instagram, MapPin, Phone } from 'lucide-react';

type Page = 'beranda' | 'menu' | 'galeri' | 'tentang' | 'lokasi';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
    return (
        <footer className="bg-neutral-900 text-neutral-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl">🍽️</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl text-white">LEZATLAND</span>
                                <span className="text-xs text-neutral-400">Restaurant</span>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-400 mb-4">
                            Restoran keluarga dengan cita rasa Nusantara yang lezat dan harga terjangkau.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                            <span className="text-sm">4.5 (222 review)</span>
                        </div>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="text-white mb-4">Hubungi Kami</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <p className="text-sm">
                                    Jl. Raya Mangun Jaya No.40-41<br />
                                    Tambun Selatan, Bekasi
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                                <p className="text-sm">Buka · Tutup jam 22.00</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                                <a href="tel:+6281234567890" className="text-sm hover:text-orange-500 transition-colors">
                                    +62 812-3456-7890
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Instagram className="w-5 h-5 text-orange-500 shrink-0" />
                                <a
                                    href="https://www.instagram.com/lezatland_official/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:text-orange-500 transition-colors"
                                >
                                    @lezatland_official
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Menu Cepat */}
                    <div>
                        <h3 className="text-white mb-4">Menu Cepat</h3>
                        <div className="space-y-2">
                            {[
                                { label: 'Beranda', page: 'beranda' as Page },
                                { label: 'Menu Makanan', page: 'menu' as Page },
                                { label: 'Galeri & Instagram', page: 'galeri' as Page },
                                { label: 'Tentang Kami', page: 'tentang' as Page },
                                { label: 'Lokasi & Kontak', page: 'lokasi' as Page },
                            ].map((item) => (
                                <button
                                    key={item.page}
                                    onClick={() => {
                                        onNavigate(item.page);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="block text-sm hover:text-orange-500 transition-colors text-left"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-500">
                    <p>&copy; 2025 LEZATLAND Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
