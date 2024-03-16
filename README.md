This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# What is next.js?

next.js is a React Framwork for building full stack web application,it's based on server side rendering

# server side rendering vs client side rendring

SSR➡ content of your site is generated on the server, then sent to the browser.
CSR➡ It renders the content in the browser using JavaScript,

# Why Next.js?

-Built in routing
-Server side rendering
-Static Site Generation (SSG)
-File-based Routing
-React’s absence of native routing necessitates third-party solutions, whereas NextJS provides seamless routing functionality.

# App Routing(New version) and Page Routing(Old version)

- App Routing provides ➡ Server Components and Streaming.
- Pages Router allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.

## Next.js Project Structure

It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.

# Routing File Convention(pre built)

- layout,page,loading,not-found,error,route(server-side-endpoint)
