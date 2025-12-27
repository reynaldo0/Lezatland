/**
 * Konfigurasi Informasi Restoran LEZATLAND
 * 
 * File ini berisi semua informasi penting restoran yang digunakan di seluruh website.
 * Update informasi di sini akan otomatis ter-update di seluruh halaman.
 */

export const restaurantInfo = {
    // Informasi Dasar
    name: 'LEZATLAND',
    tagline: 'Restoran Keluarga dengan Cita Rasa Nusantara',
    description: 'Restoran keluarga dengan cita rasa Nusantara yang lezat dan harga terjangkau.',

    // Lokasi
    address: {
        street: 'Jl. Raya Mangun Jaya No.40-41',
        area: 'Tambun Selatan',
        city: 'Bekasi',
        province: 'Jawa Barat',
        fullAddress: 'Jl. Raya Mangun Jaya No.40-41, Tambun Selatan, Bekasi',
    },

    // Kontak
    contact: {
        phone: '+6281234567890',
        phoneDisplay: '+62 812-3456-7890',
        whatsapp: '6281234567890',
        email: 'info@lezatland.com', // Opsional
    },

    // Social Media
    social: {
        instagram: {
            username: 'lezatland_official',
            url: 'https://www.instagram.com/lezatland_official/',
        },
        facebook: {
            username: '', // Kosongkan jika tidak ada
            url: '', // Kosongkan jika tidak ada
        },
    },

    // Rating & Review
    rating: {
        score: 4.5,
        totalReviews: 222,
        platform: 'Google',
    },

    // Harga
    priceRange: {
        min: 25000,
        max: 50000,
        display: 'Rp 25.000 - 50.000',
    },

    // Jam Operasional
    operatingHours: {
        opening: 'Buka', // atau jam buka spesifik
        closing: '22.00',
        days: 'Setiap Hari',
        isOpen: true, // true jika sedang buka, false jika tutup
    },

    // Layanan
    services: [
        {
            name: 'Dine-in',
            icon: '🍽️',
            description: 'Nikmati hidangan di tempat dengan suasana nyaman',
            available: true,
        },
        {
            name: 'Takeaway',
            icon: '🥡',
            description: 'Pesan dan bawa pulang menu favorit Anda',
            available: true,
        },
        {
            name: 'Delivery',
            icon: '🛵',
            description: 'Pesan antar langsung ke rumah Anda',
            available: true,
        },
    ],

    // Keunggulan
    features: [
        {
            icon: '👨‍👩‍👧‍👦',
            title: 'Ramah Keluarga',
            description: 'Tempat nyaman untuk keluarga',
        },
        {
            icon: '🇮🇩',
            title: 'Rasa Nusantara',
            description: 'Cita rasa Indonesia otentik',
        },
        {
            icon: '💰',
            title: 'Harga Terjangkau',
            description: 'Mulai dari Rp 25.000',
        },
    ],

    // Google Maps
    maps: {
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.00293842822164!3d-6.168650299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b9b5d5c5555%3A0x5555555555555555!2sMangun%20Jaya%2C%20Tambun%20Sel.%2C%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid',
        searchQuery: 'Jl.+Raya+Mangun+Jaya+No.40-41+Tambun+Selatan+Bekasi',
    },
};

// Helper functions
export const getWhatsAppLink = (message?: string) => {
    const defaultMessage = 'Halo LEZATLAND, saya ingin bertanya tentang menu dan reservasi';
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    return `https://wa.me/${restaurantInfo.contact.whatsapp}?text=${encodedMessage}`;
};

export const getPhoneLink = () => {
    return `tel:${restaurantInfo.contact.phone}`;
};

export const getGoogleMapsLink = () => {
    return `https://www.google.com/maps/search/${restaurantInfo.maps.searchQuery}`;
};

export const getInstagramLink = () => {
    return restaurantInfo.social.instagram.url;
};

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);
};
