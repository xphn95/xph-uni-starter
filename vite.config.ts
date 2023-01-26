import path from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    UnoCSS({
      mode: 'vue-scoped'
    }),
    AutoImport({
      imports: [
        'vue',
        'uni-app'
      ],
      dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    })
  ]
})
