# Instructions

1. Run these commands:
    ```sh
    pnpm install
    cd packages/service
    npx next dev
    ```
1. Open http://localhost:3000/api/test
1. Observe failure:
    ```
    Server Error
    Error: ENOENT: no such file or directory, open '/nextjs-monorepo-notfound/packages/service/.next/server/pages/api/file.txt'
    ```
1. Kill running `next dev`
1. Uncomment workaround in `next.config.js`, then:
    ```sh
    npx next dev
    ```
1. Reload http://localhost:3000/api/test
1. Observe success:
    ```
    {"data":"Hello world, from a file!"}
    ```
1. Deploy to Vercel
    ```sh
    cd ../..
    npm i -g vercel
    vercel
    ```
1. Open `/api/test` on deployment URL that is logged, observe success again.
