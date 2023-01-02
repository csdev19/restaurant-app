# Personal Web site

## next steps

- expand the skills section
- add a text editor
- implement SWR and a service layer to fetch the data

## Features

  - [x] [Nextjs](https://nextjs.org/)
  - [x] [TypeScript](https://www.typescriptlang.org/)
  - [x] [ESLint](https://eslint.org/)
  - [x] [Prettier](https://prettier.io/)
  - [x] [Tailwind CSS](https://tailwindcss.com/)
  - [x] [next-i18next](https://github.com/isaachinman/next-i18next)
  - [x] [Jest](https://facebook.github.io/jest/)
  - [x] [React Testing Library](https://testing-library.com/react/)
  - [x] [Docker](https://www.docker.com/)
  - [x] [Storybook](https://storybook.js.org/)
  - [] [SWR](https://swr.vercel.app)

## Architecture

For this project I used the atomic design pattern (here is my [documentation](https://github.com/csdev19/front-research/blob/main/sections/atomic-design.md)). So I will structure the code in the following way:

- Atoms
- Molecules
- Organisms
- Templates
- Pages

## Component structure

I made the component structure like:

```
project
└─── <component>
    │-  index.ts (required, the provider of the component utilities for the rest of the project)
    │- <component>.tsx (required component file)
    │- <component>.spec.ts (required, in the future)
    │- <component>.module.css (optional)
    │- <component>.types.ts (optional)
    │- <component>.constants.ts (optional)
```

## Notes

- https://notiz.dev/blog/floating-form-field-with-tailwindcss
- https://unicode.org/emoji/charts/full-emoji-list.html#1f468_200d_1f3eb

## Things that I want to implement

- Nextjs [built-is-css](https://nextjs.org/docs/basic-features/built-in-css-support)
- [JSS](https://cssinjs.org/?v=v10.9.1-alpha.2)

## Getting Started

First, install dependencies:

```bash
npm i
```

Second, run the docker development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Documentation

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [God like Docker tutorial](https://youtu.be/9zUHg7xjIqQ)
- [Docker images article: Talk about hot reloading](https://medium.com/nerd-for-tech/bigger-dockerignore-smaller-docker-images-49fa22e51c7)
- [Docker documentation multiple compose files](https://docs.docker.com/compose/reference/#specifying-multiple-compose-files)
- [Docker compose file](https://docs.docker.com/compose/compose-file/#compose-file)
- [Docker compose useful commands](https://medium.com/bb-tutorials-and-thoughts/next-js-local-development-with-docker-compose-7b1954292a1f)
- [Setting up Jest (with the Rust Compiler) on Next.js](https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler)
- [Upgrade React to v18](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html): Because I get some problems installing the `@testing-library/react` package.
- [Update Next.js to v12](https://nextjs.org/docs/upgrading): Because I get some problems installing the `react@18.2.0` package.
- [Test with i18next and Jest](https://react.i18next.com/misc/testing): Because I get some problems with the translation instance.
- [Getting started](https://jestjs.io/docs/getting-started#using-typescript)
- [tailwind and css variables](https://levelup.gitconnected.com/tailwindcss-with-css-variables-513abe2e9a5)
- [css variable using js](https://davidwalsh.name/css-variables-javascript#:~:text=Setting%20a%20CSS%20Variable's%20Value,style%20)
- [Adding stortbook on nextjs](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/)
- [Nextjs, tailwind and storybook](https://theodorusclarence.com/blog/nextjs-storybook-tailwind)
- [Storybook addon to nextjs](https://storybook.js.org/addons/storybook-addon-next#csssassscss-modules)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
