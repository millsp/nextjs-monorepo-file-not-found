# Instructions

1. Run these commands:
    ```sh
    pnpm install
    cd packages/service && pnpm exec next dev
    ```
1. Open http://localhost:3000/api/file
1. Observe failure.
1. Kill running `next dev`
1. Uncomment workaround in next.config.js, then:
    ```sh
    pnpm exec next dev
    ```
1. Reload http://localhost:3000/api/file
1. Observe success!
1. Deploy to Vercel
    ```sh
    cd ../..
    npm i -g vercel
    vercel
    ```
2. Open `/api/file` on deployment URL that is logged, observe success again.
