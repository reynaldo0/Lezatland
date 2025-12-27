import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Star } from 'lucide-react';
import { categoryLabels, menuData, type MenuItem } from '../lib/data/menu';
type Category = 'semua' | 'ayam' | 'seafood' | 'nasi' | 'minuman' | 'paket';

export function Menu() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('semua');
    const [searchQuery, setSearchQuery] = useState('');

    const categories: { value: Category; label: string }[] = [
        { value: 'semua', label: 'Semua Menu' },
        { value: 'ayam', label: 'Ayam' },
        { value: 'seafood', label: 'Seafood' },
        { value: 'nasi', label: 'Nasi' },
        { value: 'minuman', label: 'Minuman' },
        { value: 'paket', label: 'Paket Hemat' },
    ];

    const filteredMenu = menuData.filter((item) => {
        const matchesCategory = selectedCategory === 'semua' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="py-16 bg-neutral-50 min-h-screen pt-24 md:pt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl text-neutral-900 mb-4">Menu LEZATLAND</h1>
                    <p className="text-xl text-neutral-600">
                        Nikmati berbagai hidangan lezat dengan harga terjangkau
                    </p>
                </div>

                {/* Search */}
                <div className="mb-8 max-w-md mx-auto">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Cari menu..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category.value)}
                                className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category.value
                                        ? 'bg-orange-600 text-white shadow-lg'
                                        : 'bg-white text-neutral-700 hover:bg-orange-50 border border-neutral-200'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Grid */}
                {filteredMenu.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-neutral-500">Tidak ada menu yang ditemukan</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMenu.map((item, index) => (
                            <MenuCard key={item.id} item={item} index={index} formatPrice={formatPrice} />
                        ))}
                    </div>
                )}

                {/* Info Box */}
                <div className="mt-16 bg-linear-to-r from-orange-50 to-red-50 rounded-xl p-8 text-center border border-orange-200">
                    <h3 className="text-2xl text-neutral-900 mb-4">Pesan Sekarang!</h3>
                    <p className="text-neutral-700 mb-6">
                        Tersedia layanan Dine-in, Takeaway, dan Delivery
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://wa.me/6281234567890?text=Halo%20LEZATLAND,%20saya%20ingin%20memesan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                        >
                            Pesan via WhatsApp
                        </a>
                        <a
                            href="tel:+6281234567890"
                            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                        >
                            Telepon Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MenuCard({
    item,
    index,
    formatPrice,
}: {
    item: MenuItem;
    index: number;
    formatPrice: (price: number) => string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {item.popular && (
                    <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">Popular</span>
                    </div>
                )}
            </div>
            <div className="p-5">
                <h3 className="text-xl text-neutral-900 mb-2">{item.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-orange-600">{formatPrice(item.price)}</span>
                    <span className="text-xs px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                        {categoryLabels[item.category]}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
