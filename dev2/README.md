# Via Ferrata Device 2

Website will be used on the tables and the via ferrata
2160-by-1620-pixel resolution

### Getting Started

```shell
cp client/env.example.ts client/env.ts
npx npm@8.5.4 install
npx npm@8.5.4 start # http://localhost:8080
```

### Production/UAT Deployments

```shell
cp client/env.example.ts client/env.ts
npx npm@8.5.4 install
npx npm@8.5.4 run build

# Install PM2 globally to manage the server process
npx npm@8.5.4 add -g pm2

# Start the server process with pm2
pm2 start --name app server/build/index.js
```