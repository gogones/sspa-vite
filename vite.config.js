import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import federation from '@originjs/vite-plugin-federation'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // federation({
    // name: "remote_app",
    // filename: "sspa-main.js",
    // exposes: {
    //   './Button': './src/components/Button'
    // },
    // shared: ['react','react-dom']
  // })
  ],
  base: '',
  build: {
    // modulePreload: false,
    // target: 'esnext',
    // minify: false,
    // cssCodeSplit: false,
    rollupOptions: {
      input: 'src/sspa-main.jsx',
      format: 'system',
      preserveEntrySignatures: true
    },
  }
})
