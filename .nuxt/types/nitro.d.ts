// Generated by nitro
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/check': Awaited<ReturnType<typeof import('../../server/api/check').default>>
    '/api/assets/resource/:code': Awaited<ReturnType<typeof import('../../server/api/assets/resource/[code]').default>>
    '/api/assets/resource': Awaited<ReturnType<typeof import('../../server/api/assets/resource').default>>
    '/api/assets/record': Awaited<ReturnType<typeof import('../../server/api/assets/record').default>>
    '/api/assets/posts/:code': Awaited<ReturnType<typeof import('../../server/api/assets/posts/[code]').default>>
    '/api/assets/posts': Awaited<ReturnType<typeof import('../../server/api/assets/posts').default>>
    '/api/assets/comment/:code': Awaited<ReturnType<typeof import('../../server/api/assets/comment/[code]').default>>
    '/api/assets/comment': Awaited<ReturnType<typeof import('../../server/api/assets/comment').default>>
    '/api/assets/category': Awaited<ReturnType<typeof import('../../server/api/assets/category').default>>
    '/sitemap.xml': Awaited<ReturnType<typeof import('../../server/routes/sitemap.xml').default>>
    '/__nuxt_error': Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>
  }
}
declare global {
  const appendHeader: typeof import('h3')['appendHeader']
  const assertMethod: typeof import('h3')['assertMethod']
  const cachedEventHandler: typeof import('#internal/nitro')['cachedEventHandler']
  const cachedFunction: typeof import('#internal/nitro')['cachedFunction']
  const createError: typeof import('h3')['createError']
  const defineCachedEventHandler: typeof import('#internal/nitro')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('#internal/nitro')['defineCachedFunction']
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('h3')['defineLazyEventHandler']
  const defineNitroPlugin: typeof import('#internal/nitro')['defineNitroPlugin']
  const deleteCookie: typeof import('h3')['deleteCookie']
  const dynamicEventHandler: typeof import('h3')['dynamicEventHandler']
  const eventHandler: typeof import('h3')['eventHandler']
  const handleCacheHeaders: typeof import('h3')['handleCacheHeaders']
  const isMethod: typeof import('h3')['isMethod']
  const lazyEventHandler: typeof import('h3')['lazyEventHandler']
  const nitroPlugin: typeof import('#internal/nitro')['nitroPlugin']
  const sendRedirect: typeof import('h3')['sendRedirect']
  const setCookie: typeof import('h3')['setCookie']
  const useBody: typeof import('h3')['useBody']
  const useCookie: typeof import('h3')['useCookie']
  const useCookies: typeof import('h3')['useCookies']
  const useMethod: typeof import('h3')['useMethod']
  const useNitroApp: typeof import('#internal/nitro')['useNitroApp']
  const useQuery: typeof import('h3')['useQuery']
  const useRawBody: typeof import('h3')['useRawBody']
  const useRuntimeConfig: typeof import('#internal/nitro')['useRuntimeConfig']
  const useStorage: typeof import('#internal/nitro')['useStorage']
}
export {}