import { useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Beranda } from './pages/Beranda';
import { Galeri } from './pages/Galeri';
import { Lokasi } from './pages/Lokasi';
import { Menu } from './pages/Menu';
import { Tentang } from './pages/Tentang';

type Page = 'beranda' | 'menu' | 'galeri' | 'tentang' | 'lokasi';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('beranda');

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda':
        return <Beranda onNavigate={setCurrentPage} />;
      case 'menu':
        return <Menu />;
      case 'galeri':
        return <Galeri />;
      case 'tentang':
        return <Tentang />;
      case 'lokasi':
        return <Lokasi />;
      default:
        return <Beranda onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppFloat />
    </div>
  );
}