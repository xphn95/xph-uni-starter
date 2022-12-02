import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'node:path'
import Uno from 'unocss/vite'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Uno({
      mode: 'vue-scoped'
    }),
    AutoImport({
      imports: [
        'vue',
        'uni-app',
        'vue/macros'
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
