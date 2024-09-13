/** @type {import('next').NextConfig} */
const nextConfig = {
    
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                dgram: false,
                dns: false,
                tls: false,
                net: false,
            }
        }
        return config
    }
};

export default nextConfig;
