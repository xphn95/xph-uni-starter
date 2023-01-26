import { defineConfig } from 'unocss'
import transformerAttributify from '@unocss-applet/transformer-attributify'
import presetApplet from '@unocss-applet/preset-applet'

export default defineConfig({
  presets: [
    presetApplet()
  ],
  transformers: [
    transformerAttributify()
  ],
  shortcuts: [
    [/^descendant-([^>S]+)$/, ([, c]) => {
      return `[&>${c.trim().replace('-', ']:')}`
    }]
  ]
})
