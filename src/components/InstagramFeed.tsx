import { useState, useEffect } from 'react';
import { Instagram, ExternalLink, Loader2, AlertCircle } from 'lucide-react';

interface InstagramPost {
    id: string;
    permalink: string;
    media_url: string;
    caption: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    timestamp: string;
}

export function InstagramFeed() {
    const [posts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Simulasi fetch Instagram posts
        // Dalam production, ini akan menggunakan Instagram Graph API atau Instagram oEmbed
        const fetchInstagramPosts = async () => {
            try {
                setLoading(true);
                setError(false);

                // PRODUCTION IMPLEMENTATION:
                // Gunakan Instagram Graph API dengan access token
                // const response = await fetch(
                //   `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,timestamp&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
                // );
                // const data = await response.json();
                // setPosts(data.data);

                // Untuk saat ini, gunakan fallback ke embed widget Instagram
                // User perlu setup Instagram Graph API untuk feed otomatis

                // Simulasi delay untuk UX yang lebih baik
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Set error untuk menampilkan Instagram embed fallback
                setError(true);
            } catch (err) {
                console.error('Error fetching Instagram posts:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchInstagramPosts();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-16">
                <Loader2 className="w-12 h-12 text-orange-600 animate-spin mb-4" />
                <p className="text-neutral-600">Memuat postingan Instagram...</p>
            </div>
        );
    }

    // Jika ada error atau tidak ada data, gunakan Instagram Embed Widget
    if (error || posts.length === 0) {
        return <InstagramEmbedFallback />;
    }

    // Jika berhasil fetch dari API
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-100 hover:shadow-xl transition-shadow"
                >
                    <img
                        src={post.media_url}
                        alt={post.caption?.substring(0, 100) || 'Instagram post'}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white text-sm line-clamp-3">
                                {post.caption}
                            </p>
                            <div className="flex items-center gap-2 mt-2 text-white/80 text-sm">
                                <ExternalLink className="w-4 h-4" />
                                <span>Lihat di Instagram</span>
                            </div>
                        </div>
                    </div>
                    {post.media_type === 'VIDEO' && (
                        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            Video
                        </div>
                    )}
                    {post.media_type === 'CAROUSEL_ALBUM' && (
                        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            Album
                        </div>
                    )}
                </a>
            ))}
        </div>
    );
}

function InstagramEmbedFallback() {
    const instagramUsername = 'lezatland_official';

    return (
        <div className="space-y-8">
            {/* Info Box */}
            <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-start gap-4">
                    <div className="bg-linear-to-br from-purple-600 to-pink-600 rounded-full p-3">
                        <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl text-neutral-900 mb-2">
                            Follow Instagram Kami
                        </h3>
                        <p className="text-neutral-700 mb-4">
                            Lihat foto-foto menu terbaru, promo menarik, dan aktivitas restoran kami di Instagram @{instagramUsername}
                        </p>
                        <a
                            href={`https://www.instagram.com/${instagramUsername}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl"
                        >
                            <Instagram className="w-5 h-5" />
                            Buka Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Instagram Embed Widget - Official Method */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Embed Profile */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl text-neutral-900 mb-4 flex items-center gap-2">
                        <Instagram className="w-6 h-6 text-pink-600" />
                        Feed Instagram Terbaru
                    </h3>
                    <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
                        <iframe
                            src={`https://www.instagram.com/${instagramUsername}/embed/`}
                            className="w-full h-full border-0"
                            scrolling="no"
                            title="Instagram Profile"
                        />
                    </div>
                </div>

                {/* Manual Grid - Sample Posts */}
                <div className="space-y-6">
                    <h3 className="text-xl text-neutral-900">Postingan Terkini</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <a
                                key={i}
                                href={`https://www.instagram.com/${instagramUsername}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group aspect-square rounded-lg overflow-hidden bg-neutral-100 relative hover:shadow-xl transition-shadow"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/40 group-hover:to-pink-600/40 transition-all flex items-center justify-center">
                                    <Instagram className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="absolute bottom-2 left-2 right-2">
                                    <div className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        Lihat di Instagram
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <a
                        href={`https://www.instagram.com/${instagramUsername}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-colors"
                    >
                        Lihat Semua Postingan
                    </a>
                </div>
            </div>

            {/* Setup Instructions */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <div className="flex-1 text-sm">
                        <h4 className="text-blue-900 mb-2">
                            Untuk Administrator: Cara Setup Instagram Feed Otomatis
                        </h4>
                        <ol className="text-blue-800 space-y-2 list-decimal list-inside">
                            <li>Buat Instagram Business Account atau Creator Account</li>
                            <li>Hubungkan ke Facebook Page</li>
                            <li>Buat Facebook App di developers.facebook.com</li>
                            <li>Generate Instagram Graph API Access Token</li>
                            <li>Tambahkan token ke environment variable: <code className="bg-blue-100 px-2 py-0.5 rounded">INSTAGRAM_ACCESS_TOKEN</code></li>
                            <li>Feed akan otomatis update dari API Instagram</li>
                        </ol>
                        <p className="mt-3 text-blue-700">
                            <strong>Catatan:</strong> Saat ini menggunakan Instagram Embed Widget sebagai fallback yang aman dan resmi dari Meta.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
