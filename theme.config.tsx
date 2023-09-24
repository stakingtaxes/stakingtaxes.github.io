import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Staking Taxes</span>,
  project: {
    link: 'https://github.com/stakingtaxes/stakingtaxes.github.io',
  },
  docsRepositoryBase: 'https://github.com/stakingtaxes/stakingtaxes.github.io',
  footer: {
    component: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Staking Taxes'
    }
  }
}

export default config
