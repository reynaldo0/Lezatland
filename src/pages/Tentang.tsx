import { motion } from 'motion/react';
import { Star, Clock, Users, Heart, Award, Utensils } from 'lucide-react';

export function Tentang() {
    const reviews = [
        {
            name: 'Budi Santoso',
            rating: 5,
            comment: 'Makanannya enak banget! Ayam gorengnya crispy dan bumbunya meresap. Harga terjangkau untuk rasa yang luar biasa.',
            date: '2 minggu yang lalu'
        },
        {
            name: 'Siti Rahmawati',
            rating: 5,
            comment: 'Tempatnya nyaman untuk keluarga. Menu seafood-nya fresh dan porsinya besar. Recommended!',
            date: '1 bulan yang lalu'
        },
        {
            name: 'Ahmad Wijaya',
            rating: 4,
            comment: 'Nasi goreng spesialnya mantap! Pelayanan ramah dan cepat. Pasti balik lagi.',
            date: '3 minggu yang lalu'
        },
        {
            name: 'Dewi Lestari',
            rating: 5,
            comment: 'Restoran favorit keluarga! Harganya sangat terjangkau tapi rasanya tidak kalah dengan restoran mahal.',
            date: '2 bulan yang lalu'
        }
    ];

    const features = [
        {
            icon: Users,
            title: 'Ramah Keluarga',
            description: 'Suasana nyaman dan ramah untuk berkumpul bersama keluarga tercinta'
        },
        {
            icon: Utensils,
            title: 'Rasa Nusantara',
            description: 'Cita rasa Indonesia otentik dengan bumbu tradisional pilihan'
        },
        {
            icon: Award,
            title: 'Kualitas Terjamin',
            description: 'Bahan berkualitas dan higienis, dimasak dengan penuh perhatian'
        },
        {
            icon: Heart,
            title: 'Harga Terjangkau',
            description: 'Menu mulai dari Rp 25.000 dengan porsi yang memuaskan'
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-neutral-300'
                    }`}
            />
        ));
    };

    return (
        <div className="py-16 bg-neutral-50 min-h-screen pt-24 md:pt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl text-neutral-900 mb-4">Tentang LEZATLAND</h1>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                            {renderStars(5)}
                        </div>
                        <span className="text-2xl text-neutral-900">4.5</span>
                        <span className="text-neutral-600">(222 review Google)</span>
                    </div>
                </div>

                {/* About Section */}
                <div className="mb-16 bg-white rounded-xl p-8 md:p-12 shadow-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl text-neutral-900 mb-6">
                            Restoran Keluarga dengan Cita Rasa Nusantara
                        </h2>
                        <p className="text-lg text-neutral-700 mb-4">
                            LEZATLAND adalah restoran keluarga yang berlokasi di Mangun Jaya, Tambun Selatan, Bekasi.
                            Kami hadir untuk memberikan pengalaman kuliner Indonesia yang autentik dengan harga yang terjangkau.
                        </p>
                        <p className="text-lg text-neutral-700 mb-4">
                            Sejak awal berdiri, kami berkomitmen untuk menyajikan hidangan berkualitas dengan bahan-bahan
                            pilihan dan bumbu tradisional yang kaya rasa. Setiap menu dimasak dengan penuh perhatian
                            untuk memastikan kepuasan pelanggan.
                        </p>
                        <p className="text-lg text-neutral-700">
                            Dengan rating 4.5 dari 222 review di Google, LEZATLAND telah menjadi pilihan favorit
                            masyarakat Bekasi untuk makan bersama keluarga.
                        </p>
                    </div>
                </div>

                {/* Operating Hours */}
                <div className="mb-16 bg-linear-to-br from-primary/40 to-primary/30 rounded-xl p-8 border border-primary">
                    <div className="max-w-2xl mx-auto">
                        <div className="flex items-center gap-3 mb-6 justify-center">
                            <Clock className="w-8 h-8 text-primary" />
                            <h2 className="text-2xl text-neutral-900">Jam Operasional</h2>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-lg mb-4">
                                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                                <span>Buka Sekarang</span>
                            </div>
                            <p className="text-xl text-neutral-900 mb-2">Setiap Hari</p>
                            <p className="text-lg text-neutral-700">Tutup jam 22.00</p>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl text-neutral-900 text-center mb-12">Keunggulan Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-full mb-4">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl text-neutral-900 mb-2">{feature.title}</h3>
                                <p className="text-neutral-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Reviews Section */}
                <div>
                    <h2 className="text-3xl text-neutral-900 text-center mb-12">
                        Apa Kata Pelanggan Kami
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 bg-linear-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-neutral-900">{review.name}</h4>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-0.5">
                                                {renderStars(review.rating)}
                                            </div>
                                            <span className="text-sm text-neutral-500">{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-neutral-700">{review.comment}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Google Reviews CTA */}
                    <div className="mt-8 text-center">
                        <a
                            href="https://www.google.com/maps/search/lezatland+tambun+bekasi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                            <Star className="w-5 h-5" />
                            Lihat Semua Review di Google
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
