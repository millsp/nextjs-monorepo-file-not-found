# Instructions

1. Run these commands
```sh
pnpm install
cd packages/service
pnpm exec next dev
```
2. Open http://localhost:3000/api/test
3. See the not found error
```
Server Error
Error: ENOENT: no such file or directory, open '/nextjs-monorepo-notfound/packages/service/.next/server/pages/api/file.txt'

This error happened while generating the page. Any console logs will be displayed in the terminal window.
```
4. Uncomment workaround in next.config.js
```sh
pnpm install
cd packages/service
pnpm exec next dev
```
5. Works
6. Deploy to Vercel
```sh
npm i -g vercel
vercel
```
