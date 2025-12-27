export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'ayam' | 'seafood' | 'nasi' | 'minuman' | 'paket';
    image: string;
    popular?: boolean;
}

export const menuData: MenuItem[] = [
    // Ayam
    {
        id: 'ayam-1',
        name: 'Ayam Goreng Kremes',
        description: 'Ayam goreng crispy dengan kremesan renyah khas Nusantara',
        price: 28000,
        category: 'ayam',
        image: 'https://images.unsplash.com/photo-1732185269471-b62b52ca46f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjBjaGlja2VuJTIwYXlhbSUyMGdvcmVuZ3xlbnwxfHx8fDE3NjY4MTMwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        popular: true,
    },
    {
        id: 'ayam-2',
        name: 'Ayam Bakar Madu',
        description: 'Ayam bakar dengan bumbu madu manis pedas',
        price: 30000,
        category: 'ayam',
        image: 'https://images.unsplash.com/photo-1732185269471-b62b52ca46f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjBjaGlja2VuJTIwYXlhbSUyMGdvcmVuZ3xlbnwxfHx8fDE3NjY4MTMwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        popular: true,
    },
    {
        id: 'ayam-3',
        name: 'Ayam Geprek',
        description: 'Ayam crispy digeprek dengan sambal pedas level pilihan',
        price: 25000,
        category: 'ayam',
        image: 'https://images.unsplash.com/photo-1732185269471-b62b52ca46f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjBjaGlja2VuJTIwYXlhbSUyMGdvcmVuZ3xlbnwxfHx8fDE3NjY4MTMwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },

    // Seafood
    {
        id: 'seafood-1',
        name: 'Udang Goreng Tepung',
        description: 'Udang jumbo goreng tepung crispy dengan saus tartar',
        price: 45000,
        category: 'seafood',
        image: 'https://images.unsplash.com/photo-1695606452803-6708a37d3836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGxhdHRlciUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY2ODEzMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        popular: true,
    },
    {
        id: 'seafood-2',
        name: 'Cumi Goreng Tepung',
        description: 'Cumi segar goreng tepung dengan bumbu special',
        price: 38000,
        category: 'seafood',
        image: 'https://images.unsplash.com/photo-1695606452803-6708a37d3836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGxhdHRlciUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY2ODEzMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: 'seafood-3',
        name: 'Ikan Gurame Goreng',
        description: 'Gurame goreng crispy dengan sambal kecap',
        price: 48000,
        category: 'seafood',
        image: 'https://images.unsplash.com/photo-1695606452803-6708a37d3836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGxhdHRlciUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY2ODEzMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },

    // Nasi
    {
        id: 'nasi-1',
        name: 'Nasi Goreng Spesial',
        description: 'Nasi goreng dengan telur, ayam, dan seafood',
        price: 30000,
        category: 'nasi',
        image: 'https://images.unsplash.com/photo-1680674814945-7945d913319c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbmFzaSUyMGdvcmVuZ3xlbnwxfHx8fDE3NjY4MTMwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        popular: true,
    },
    {
        id: 'nasi-2',
        name: 'Nasi Goreng Kampung',
        description: 'Nasi goreng dengan ikan asin dan pete',
        price: 25000,
        category: 'nasi',
        image: 'https://images.unsplash.com/photo-1680674814945-7945d913319c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbmFzaSUyMGdvcmVuZ3xlbnwxfHx8fDE3NjY4MTMwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: 'nasi-3',
        name: 'Nasi Goreng Seafood',
        description: 'Nasi goreng dengan udang, cumi, dan ikan',
        price: 35000,
        category: 'nasi',
        image: 'https://images.unsplash.com/photo-1680674814945-7945d913319c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbmFzaSUyMGdvcmVuZ3xlbnwxfHx8fDE3NjY4MTMwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },

    // Minuman
    {
        id: 'minuman-1',
        name: 'Es Jeruk Peras',
        description: 'Jus jeruk segar dingin',
        price: 8000,
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1666181898487-c57bf1da263f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwZHJpbmtzfGVufDF8fHx8MTc2NjgxMzA5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: 'minuman-2',
        name: 'Es Teh Manis',
        description: 'Teh manis segar dingin',
        price: 5000,
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1666181898487-c57bf1da263f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwZHJpbmtzfGVufDF8fHx8MTc2NjgxMzA5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: 'minuman-3',
        name: 'Jus Alpukat',
        description: 'Jus alpukat segar creamy',
        price: 12000,
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1666181898487-c57bf1da263f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwZHJpbmtzfGVufDF8fHx8MTc2NjgxMzA5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: 'minuman-4',
        name: 'Es Kelapa Muda',
        description: 'Kelapa muda segar dingin',
        price: 10000,
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1666181898487-c57bf1da263f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwZHJpbmtzfGVufDF8fHx8MTc2NjgxMzA5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },

    // Paket
    {
        id: 'paket-1',
        name: 'Paket Hemat A',
        description: 'Ayam Goreng + Nasi + Es Teh',
        price: 30000,
        category: 'paket',
        image: 'https://images.unsplash.com/photo-1732185269471-b62b52ca46f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjBjaGlja2VuJTIwYXlhbSUyMGdvcmVuZ3xlbnwxfHx8fDE3NjY4MTMwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        popular: true,
    },
    {
        id: 'paket-2',
        name: 'Paket Hemat B',
        description: 'Nasi Goreng Spesial + Es Jeruk',
        price: 35000,
        category: 'paket',
        image: 'https://images.unsplash.com/photo-1680674814945-7945d913319c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbmFzaSUyMGdvcmVuZ3xlbnwxfHx8fDE3NjY4MTMwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: 'paket-3',
        name: 'Paket Keluarga',
        description: '2 Ayam Goreng + 2 Nasi + 2 Minuman',
        price: 50000,
        category: 'paket',
        image: 'https://images.unsplash.com/photo-1732185269471-b62b52ca46f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjBjaGlja2VuJTIwYXlhbSUyMGdvcmVuZ3xlbnwxfHx8fDE3NjY4MTMwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        popular: true,
    },
];

export const categoryLabels = {
    ayam: 'Menu Ayam',
    seafood: 'Menu Seafood',
    nasi: 'Menu Nasi',
    minuman: 'Minuman',
    paket: 'Paket Hemat',
};
