import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  rootDir: './src',
  transform: {},
  extensionsToTreatAsEsm: ['.ts'],
}

export default config
