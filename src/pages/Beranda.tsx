import {
    Clock,
    DollarSign,
    Instagram,
    MapPin,
    Navigation,
    Phone,
    Star
} from 'lucide-react'
import { motion } from 'motion/react'

type Page = 'beranda' | 'menu' | 'galeri' | 'tentang' | 'lokasi'

interface BerandaProps {
    onNavigate: (page: Page) => void
}

/* =====================
   Motion Variants
===================== */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

export function Beranda({ onNavigate }: BerandaProps) {
    const handleWhatsApp = () => {
        window.open(
            'https://wa.me/6281234567890?text=Halo%20LEZATLAND,%20saya%20ingin%20bertanya%20tentang%20menu',
            '_blank'
        )
    }

    const features = [
        { icon: '🍽️', title: 'Dine-in', desc: 'Nikmati di tempat' },
        { icon: '🥡', title: 'Takeaway', desc: 'Bawa pulang' },
        { icon: '🛵', title: 'Delivery', desc: 'Pesan antar' },
    ]

    const highlights = [
        {
            icon: '👨‍👩‍👧‍👦',
            title: 'Ramah Keluarga',
            desc: 'Tempat nyaman untuk keluarga',
        },
        {
            icon: '🇮🇩',
            title: 'Rasa Nusantara',
            desc: 'Cita rasa Indonesia otentik',
        },
        {
            icon: '💰',
            title: 'Harga Terjangkau',
            desc: 'Mulai dari Rp 25.000',
        },
    ]

    return (
        <div>
            {/* =====================
          HERO SECTION
      ====================== */}
            <section className="relative h-screnn md:h-150 py-24 md:py-0 bg-neutral-900 overflow-hidden">

                <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    src="https://images.unsplash.com/photo-1732185269471-b62b52ca46f9"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="LEZATLAND"
                />
                <div className="absolute inset-0 bg-linear-to-b from-neutral-900 via-neutral-900/50 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/50 via-neutral-900/20 to-transparent" />

                <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.7 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-6xl text-white mb-4">
                            Selamat Datang di <br />
                            <span className="text-primary">LEZATLAND</span>
                        </h1>

                        <p className="text-xl text-neutral-200 mb-6">
                            Restoran keluarga dengan cita rasa Nusantara
                        </p>

                        {/* Info Cards */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                        >
                            {[1, 2, 3].map((_, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
                                >
                                    {i === 0 && (
                                        <>
                                            <div className="flex items-center gap-2 text-primary">
                                                <Star className="w-5 h-5 fill-current" />
                                                <span>4.5</span>
                                            </div>
                                            <p className="text-sm text-neutral-300">
                                                222 review Google
                                            </p>
                                        </>
                                    )}
                                    {i === 1 && (
                                        <>
                                            <div className="flex items-center gap-2 text-green-400">
                                                <DollarSign className="w-5 h-5" />
                                                <span>Rp 25K - 50K</span>
                                            </div>
                                            <p className="text-sm text-neutral-300">
                                                Harga terjangkau
                                            </p>
                                        </>
                                    )}
                                    {i === 2 && (
                                        <>
                                            <div className="flex items-center gap-2 text-primary">
                                                <Clock className="w-5 h-5" />
                                                <span>Buka</span>
                                            </div>
                                            <p className="text-sm text-neutral-300">
                                                Tutup jam 22.00
                                            </p>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.95 }}
                                className="
    px-8 py-3 
    bg-primary 
    text-neutral-900 
    font-semibold 
    rounded-xl 
    shadow-md
    hover:shadow-lg
    transition-all
  "
                            >
                                Lihat Menu
                            </motion.button>


                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleWhatsApp}
                                className="px-8 py-3 bg-green-600 text-white rounded-lg flex items-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                WhatsApp
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================
          FEATURES
      ====================== */}
            <section className="py-16 bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl text-neutral-900 mb-4">Layanan Kami</h2>
                    <p className="text-neutral-600">Berbagai pilihan untuk kenyamanan Anda</p>
                </div>
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6"
                >

                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="p-8 text-center bg-neutral-50 rounded-xl border"
                        >
                            <motion.div
                                whileHover={{ rotate: 5, scale: 1.2 }}
                                className="text-5xl mb-4"
                            >
                                {f.icon}
                            </motion.div>
                            <h3 className="text-xl mb-2">{f.title}</h3>
                            <p className="text-neutral-600">{f.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* =====================
          HIGHLIGHTS
      ====================== */}
            <section className="py-16 bg-linear-to-br from-primary/20 to-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl text-neutral-900 mb-4">Mengapa Memilih LEZATLAND?</h2>
                    <p className="text-neutral-600">Pengalaman kuliner terbaik untuk keluarga Indonesia</p>
                </div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6"
                >
                    {highlights.map((h, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 20px 40px rgba(0,0,0,0.15)',
                            }}
                            className="bg-white p-8 rounded-xl"
                        >
                            <div className="text-5xl mb-4">{h.icon}</div>
                            <h3 className="text-xl mb-2">{h.title}</h3>
                            <p className="text-neutral-600">{h.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Instagram CTA */}
            <section className="py-16 bg-linear-to-r from-purple-600 to-pink-600 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    {/* Icon Pulse */}
                    <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        className="inline-block"
                    >
                        <Instagram className="w-16 h-16 text-white mx-auto mb-6" />
                    </motion.div>

                    <h2 className="text-3xl text-white mb-4">
                        Ikuti Kami di Instagram
                    </h2>

                    <p className="text-xl text-white/90 mb-8">
                        Lihat foto-foto menu terbaru dan promo menarik @lezatland_official
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.a
                            href="https://www.instagram.com/lezatland_official/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white text-purple-600 rounded-lg inline-flex items-center gap-2"
                        >
                            <Instagram className="w-5 h-5" />
                            Buka Instagram
                        </motion.a>

                        <motion.button
                            onClick={() => onNavigate('galeri')}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20"
                        >
                            Lihat Galeri
                        </motion.button>
                    </div>
                </motion.div>
            </section>
            {/* Location Preview */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl text-neutral-900 mb-4">
                                Temukan Kami
                            </h2>

                            <div className="space-y-4 mb-8">
                                <motion.div
                                    whileHover={{ x: 6 }}
                                    className="flex items-start gap-3"
                                >
                                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="text-neutral-900">
                                            Jl. Raya Mangun Jaya No.40-41
                                        </p>
                                        <p className="text-neutral-600">
                                            Tambun Selatan, Bekasi
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-3"
                                >
                                    <Clock className="w-6 h-6 text-primary shrink-0" />
                                    <p className="text-neutral-900">
                                        Buka · Tutup jam 22.00
                                    </p>
                                </motion.div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    onClick={() => onNavigate('lokasi')}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-primary text-neutral-900 font-semibold rounded-lg inline-flex items-center gap-2"
                                >
                                    <Navigation className="w-5 h-5" />
                                    Lihat Peta
                                </motion.button>

                                <motion.button
                                    onClick={handleWhatsApp}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-green-600 text-white rounded-lg inline-flex items-center gap-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    Hubungi Kami
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.04 }}
                            className="relative h-100 rounded-xl overflow-hidden shadow-xl"
                        >
                            <motion.img
                                src="https://images.unsplash.com/photo-1736005035888-aa701b8e4a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                alt="LEZATLAND Restaurant Interior"
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
