import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppFloat() {
    const handleWhatsApp = () => {
        window.open(
            'https://wa.me/6281234567890?text=Halo%20LEZATLAND,%20saya%20ingin%20bertanya%20tentang%20menu%20dan%20reservasi',
            '_blank'
        );
    };

    return (
        <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            onClick={handleWhatsApp}
            className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all group"
            aria-label="Chat WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat via WhatsApp
            </span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
        </motion.button>
    );
}
