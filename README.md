# Instructions

1. Run these commands:
    ```sh
    pnpm install
    cd packages/service
    pnpm exec next dev
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
    pnpm exec next dev
    ```
5. See the compilation error
    ```
    Server Error
    SyntaxError: Cannot use import statement outside a module

    This error happened while generating the page. Any console logs will be displayed in the terminal window.

    /nextjs-monorepo-notfound/packages/file-reader/index.ts:1
    import path from 'path'
    ^^^^^^

    SyntaxError: Cannot use import statement outside a module
        at Object.compileFunction (node:vm:360:18)
    ```
6. Try to set `transpilePackages` in `next.config.js`
    ```sh
    transpilePackages: ['file-reader'] // has no effect
    ```