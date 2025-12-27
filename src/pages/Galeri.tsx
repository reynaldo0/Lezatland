import { Camera, Instagram } from 'lucide-react';
import { InstagramFeed } from '../components/InstagramFeed';

export function Galeri() {
    return (
        <div className="py-16 bg-neutral-50 min-h-screen pt-24 md:pt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-full mb-4">
                        <Camera className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl text-neutral-900 mb-4">Galeri & Instagram</h1>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                        Lihat foto-foto menu lezat, suasana restoran, dan aktivitas terbaru dari LEZATLAND
                    </p>
                </div>

                {/* Instagram Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <Instagram className="w-6 h-6 text-pink-600" />
                        <h2 className="text-2xl text-neutral-900">@lezatland_official</h2>
                    </div>

                    <InstagramFeed />
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-linear-to-r from-primary to-primary rounded-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl mb-4 text-black font-bold">Tag Kami di Foto Anda!</h2>
                    <p className="text-xl mb-6 text-black/90">
                        Bagikan pengalaman kuliner Anda dengan tag <strong>@lezatland_official</strong> dan <strong>#LEZATLAND</strong>
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://www.instagram.com/lezatland_official/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-neutral-100 transition-colors inline-flex items-center gap-2"
                        >
                            <Instagram className="w-5 h-5" />
                            Follow Instagram
                        </a>
                        <a
                            href="https://wa.me/6281234567890?text=Halo%20LEZATLAND,%20saya%20ingin%20bertanya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white/30 backdrop-blur-md hover:bg-white/40 text-black rounded-lg border border-white/50 transition-colors"
                        >
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
