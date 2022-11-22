# Production image, copy all the files and run next
FROM node:alpine AS runner

ENV NODE_ENV production

COPY public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY .next/standalone ./
COPY .next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]