This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy (self-hosted, Cloudflare Tunnel)

The site runs on the same NUC as [pte.edzoro.com](https://github.com/lordlokion/pte),
behind the existing `cloudflared` tunnel — no inbound ports, TLS terminates at
Cloudflare.

1. **Container** — the `Dockerfile` builds a Next.js standalone server
   (`output: "standalone"` in `next.config.ts`); `compose.yml` publishes it on
   `127.0.0.1:8081` (loopback only).
2. **Cloudflare** — under *Zero Trust → Networks → Tunnels → nuc → Public
   Hostname*, add `edzoro.com` and `www.edzoro.com`, each with service
   `http://localhost:8081`. Cloudflare creates the DNS records (the apex CNAME
   is flattened automatically).
3. **Boot** — from the server:

   ```bash
   git clone https://github.com/lordlokion/edzoro /srv/edzoro
   cd /srv/edzoro && podman compose up -d --build
   sudo install -m 644 deploy/edzoro.service /etc/systemd/system/edzoro.service
   sudo systemctl daemon-reload && sudo systemctl enable --now edzoro
   ```

4. **Updates** — `cd /srv/edzoro && git pull && podman compose up -d --build`.

### Live status

| URL | Route | Status |
|---|---|---|
| <https://edzoro.com> | tunnel `nuc` → `http://localhost:8081` | ✅ live |
| <https://www.edzoro.com> | tunnel `nuc` → `http://localhost:8081` | ✅ live |
| <https://pte.edzoro.com> | tunnel `nuc` → `http://localhost:8080` (other repo) | ✅ live |

DNS notes: the apex and `pte` CNAMEs were auto-created by the tunnel routes;
`www` had leftover A/AAAA records pointing at Cloudflare IPs (Error 1000) that
blocked auto-creation — they were deleted and replaced with a proxied CNAME to
`8ea2f0fd-6356-476c-a6e4-5c7a850808f9.cfargotunnel.com`.
