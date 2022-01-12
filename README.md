<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
  <a href="https://www.datocms.com/">
    <img src="https://www.datocms.com/images/full_logo.svg" height="60">
  </a>
</p>
<h1 align="center">
  Toby
</h1>

## About

[![Netlify Status]()](https://app.netlify.com/sites/toby-gatsby-forestry/deploys)

Toby is a starter to get you going using [Gatsby v4](https://www.gatsbyjs.org/) with [DatoCMS](https://datocms.com/). Check out the demo [here](https://toby-gatsby-datocms.netlify.app/)

## Features

- Create dynamic pages from DatoCMS using a [block system] (see: `src/components/Sections`)
- Create Blog posts from DatoCMS directly
- Customize easily the theme colors
- Simple Menu managment
- ...

##  Quick Setup


#### *Using the Gatsby CLI*
In your terminal, navigate to where you would like this blog to live, then run
```bash
gatsby new [SITE_DIRECTORY_NAME] https://github.com/mordonez/toby-gatsby-datocms
cd [SITE_DIRECTORY_NAME]
yarn dev
```
#### *Set-up Locally*
```bash
#clone the repo
git clone git@github.com:mordonez/toby-gatsby-datocms.git

#navigate to the directory
cd toby-gatsby-datocms

#install dependencies & run dev server with yarn
yarn install
yarn develop

#or with npm
npm install
npm run develop
```
# Blocks (Sections)

- Page heading `src/components/sections/PageHeading`,
- Image and text' `src/components/sections/ImageAndText`,
- Full Image': `src/components/sections/FullImage`,
- Columns': `src/components/sections/Columns`,
- Contact form': `src/components/sections/ContactForm`
## Prerequisites

- Minimal Node.js version 14.15.0
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
- [Netlify CLI](https://github.com/netlify/cli)

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

