/** @type {import('next').NextConfig} */
const nextConfig = {
    
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: 'empty',
                dgram: 'empty',
                dns: 'empty',
                tls: 'empty',
                net: 'empty',
            }
        }
        return config
    }
};

export default nextConfig;
