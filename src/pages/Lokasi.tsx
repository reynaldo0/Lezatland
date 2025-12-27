import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Lokasi() {
    const address = 'Jl. Raya Mangun Jaya No.40-41, Tambun Selatan, Bekasi';
    const phoneNumber = '+6281234567890';
    const whatsappNumber = '6281234567890';

    const handleDirections = () => {
        window.open('https://www.google.com/maps/search/Jl.+Raya+Mangun+Jaya+No.40-41+Tambun+Selatan+Bekasi', '_blank');
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNumber}?text=Halo%20LEZATLAND,%20saya%20ingin%20bertanya`, '_blank');
    };

    const services = [
        {
            icon: '🍽️',
            title: 'Dine-in',
            description: 'Nikmati hidangan di tempat dengan suasana nyaman'
        },
        {
            icon: '🥡',
            title: 'Takeaway',
            description: 'Pesan dan bawa pulang menu favorit Anda'
        },
        {
            icon: '🛵',
            title: 'Delivery',
            description: 'Pesan antar langsung ke rumah Anda'
        }
    ];

    const contactMethods = [
        {
            icon: Phone,
            label: 'Telepon',
            value: '+62 812-3456-7890',
            action: handleCall,
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '+62 812-3456-7890',
            action: handleWhatsApp,
            color: 'bg-green-600 hover:bg-green-700'
        },
        {
            icon: Navigation,
            label: 'Petunjuk Arah',
            value: 'Google Maps',
            action: handleDirections,
            color: 'bg-orange-600 hover:bg-orange-700'
        }
    ];

    return (
        <div className="py-16 bg-neutral-50 min-h-screen pt-24 md:pt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl text-neutral-900 mb-4">Lokasi & Kontak</h1>
                    <p className="text-xl text-neutral-600">
                        Kunjungi kami atau hubungi untuk reservasi
                    </p>
                </div>

                {/* Map Section */}
                <div className="mb-12">
                    <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                        <div className="aspect-video w-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.00293842822164!3d-6.168650299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b9b5d5c5555%3A0x5555555555555555!2sMangun%20Jaya%2C%20Tambun%20Sel.%2C%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="LEZATLAND Location"
                            />
                        </div>
                        <div className="p-6 bg-linear-to-r from-orange-600 to-red-600 text-white">
                            <div className="flex items-start gap-3 mb-4">
                                <MapPin className="w-6 h-6 shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl mb-1">LEZATLAND Restaurant</h3>
                                    <p className="text-white/90">{address}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleDirections}
                                className="w-full sm:w-auto px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                <Navigation className="w-5 h-5" />
                                Dapatkan Petunjuk Arah
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {contactMethods.map((method, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={method.action}
                            className={`${method.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-left`}
                        >
                            <method.icon className="w-8 h-8 mb-3" />
                            <h3 className="text-xl mb-1">{method.label}</h3>
                            <p className="text-white/90">{method.value}</p>
                        </motion.button>
                    ))}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Operating Hours */}
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <Clock className="w-6 h-6 text-orange-600" />
                            </div>
                            <h2 className="text-2xl text-neutral-900">Jam Operasional</h2>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between py-3 border-b border-neutral-200">
                                <span className="text-neutral-700">Senin - Minggu</span>
                                <span className="text-neutral-900">Tutup jam 22.00</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg">
                                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                                <span>Buka Sekarang</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl text-neutral-900 mb-6">Layanan Tersedia</h2>
                        <div className="space-y-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-orange-50 transition-colors"
                                >
                                    <div className="text-3xl">{service.icon}</div>
                                    <div>
                                        <h3 className="text-lg text-neutral-900 mb-1">{service.title}</h3>
                                        <p className="text-neutral-600 text-sm">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Contact Section */}
                <div className="bg-linear-to-br from-orange-600 to-red-600 rounded-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl mb-4">Siap untuk Memesan?</h2>
                    <p className="text-xl mb-8 text-white/90">
                        Hubungi kami sekarang untuk reservasi atau pemesanan
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-neutral-100 transition-colors inline-flex items-center gap-2 shadow-lg"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat WhatsApp
                        </button>
                        <button
                            onClick={handleCall}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors inline-flex items-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Telepon Sekarang
                        </button>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="text-xl text-blue-900 mb-3">Informasi Penting</h3>
                        <ul className="space-y-2 text-blue-800">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>Area parkir tersedia</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>Cocok untuk keluarga dan anak-anak</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>Pembayaran tunai dan non-tunai</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h3 className="text-xl text-purple-900 mb-3">Follow Us</h3>
                        <div className="space-y-3">
                            <a
                                href="https://www.instagram.com/lezatland_official/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-purple-800 hover:text-purple-600 transition-colors"
                            >
                                <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                    <span className="text-white">📸</span>
                                </div>
                                <span>@lezatland_official</span>
                            </a>
                            <p className="text-purple-700 text-sm">
                                Lihat foto-foto menu terbaru dan promo menarik!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
