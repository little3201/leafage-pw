globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://D:/other/leafage/leafage-pw/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'http';
import { tmpdir } from 'os';
import { join } from 'path';
import { mkdirSync } from 'fs';
import { parentPort, threadId } from 'worker_threads';
import { provider, isWindows } from 'file://D:/other/leafage/leafage-pw/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, createApp, createRouter, lazyEventHandler, useCookies, eventHandler, useQuery } from 'file://D:/other/leafage/leafage-pw/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://D:/other/leafage/leafage-pw/node_modules/ohmyfetch/dist/node.mjs';
import destr from 'file://D:/other/leafage/leafage-pw/node_modules/destr/dist/index.mjs';
import { createRouter as createRouter$1 } from 'file://D:/other/leafage/leafage-pw/node_modules/radix3/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/other/leafage/leafage-pw/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/other/leafage/leafage-pw/node_modules/hookable/dist/index.mjs';
import { hash } from 'file://D:/other/leafage/leafage-pw/node_modules/ohash/dist/index.mjs';
import { parseURL, withQuery, joinURL } from 'file://D:/other/leafage/leafage-pw/node_modules/ufo/dist/index.mjs';
import { createStorage } from 'file://D:/other/leafage/leafage-pw/node_modules/unstorage/dist/index.mjs';
import _unstorage_drivers_fs from 'file://D:/other/leafage/leafage-pw/node_modules/unstorage/dist/drivers/fs.mjs';
import { SitemapStream, streamToPromise } from 'file://D:/other/leafage/leafage-pw/node_modules/sitemap/dist/index.js';
import { createRenderer } from 'file://D:/other/leafage/leafage-pw/node_modules/vue-bundle-renderer/dist/index.mjs';
import devalue from 'file://D:/other/leafage/leafage-pw/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file://D:/other/leafage/leafage-pw/node_modules/vue/server-renderer/index.mjs';
import { snakeCase } from 'file://D:/other/leafage/leafage-pw/node_modules/scule/dist/index.mjs';
import htmlTemplate from 'file://D:/other/leafage/leafage-pw/.nuxt/views/document.template.mjs';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const serverAssets = [{"baseName":"server","dir":"D:/other/leafage/leafage-pw/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, _unstorage_drivers_fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets);

storage.mount('root', _unstorage_drivers_fs({"driver":"fs","base":"D:\\other\\leafage\\leafage-pw","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', _unstorage_drivers_fs({"driver":"fs","base":"D:\\other\\leafage\\leafage-pw\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', _unstorage_drivers_fs({"driver":"fs","base":"D:\\other\\leafage\\leafage-pw\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', _unstorage_drivers_fs({"driver":"fs","base":"D:\\other\\leafage\\leafage-pw\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return decodeURI(parseURL(event.req.originalUrl || event.req.url).pathname).replace(/\/$/, "/index");
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const _lazy_222340 = () => Promise.resolve().then(function () { return check$1; });
const _lazy_132984 = () => Promise.resolve().then(function () { return _code_$5; });
const _lazy_160963 = () => Promise.resolve().then(function () { return resource$1; });
const _lazy_295867 = () => Promise.resolve().then(function () { return record$1; });
const _lazy_296264 = () => Promise.resolve().then(function () { return _code_$3; });
const _lazy_362536 = () => Promise.resolve().then(function () { return posts$1; });
const _lazy_365934 = () => Promise.resolve().then(function () { return _code_$1; });
const _lazy_231425 = () => Promise.resolve().then(function () { return comment$1; });
const _lazy_362490 = () => Promise.resolve().then(function () { return category$1; });
const _lazy_208484 = () => Promise.resolve().then(function () { return sitemap_xml$1; });
const _lazy_936452 = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/check', handler: _lazy_222340, lazy: true, middleware: false, method: undefined },
  { route: '/api/assets/resource/:code', handler: _lazy_132984, lazy: true, middleware: false, method: undefined },
  { route: '/api/assets/resource', handler: _lazy_160963, lazy: true, middleware: false, method: undefined },
  { route: '/api/assets/record', handler: _lazy_295867, lazy: true, middleware: false, method: undefined },
  { route: '/api/assets/posts/:code', handler: _lazy_296264, lazy: true, middleware: false, method: undefined },
  { route: '/api/assets/posts', handler: _lazy_362536, lazy: true, middleware: false, method: undefined },
  { route: '/api/assets/comment/:code', handler: _lazy_365934, lazy: true, middleware: false, method: undefined },
  { route: '/api/assets/comment', handler: _lazy_231425, lazy: true, middleware: false, method: undefined },
  { route: '/api/assets/category', handler: _lazy_362490, lazy: true, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _lazy_208484, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_936452, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_936452, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

const server = new Server(nitroApp.h3App.nodeHandler);
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection]", err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException]", err));
}

const check = defineEventHandler(async (event) => {
  const cookies = useCookies(event);
  return { cookies };
});

const check$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': check
});

const _code_$4 = defineEventHandler(() => {
  return {
    "code": "21C149QZG",
    "modifyTime": "2021-12-15T08:46:39.175",
    "title": "\u6DF1\u5165\u6D45\u51FA Spring Boot 2.x",
    "cover": "https://cdn.leafage.top/springboot.jpg",
    "category": "Technology",
    "type": "E",
    "description": "Spring\u6846\u67B6\u662FJava EE\u5F00\u53D1\u7684\u5F3A\u6709\u529B\u7684\u5DE5\u5177\u548C\u4E8B\u5B9E\u6807\u51C6\uFF0C\u800CSpring Boot\u91C7\u7528\u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201D\u7684\u539F\u5219\u7B80\u5316\u4E86Spring\u7684\u5F00\u53D1\uFF0C\u4ECE\u800C\u6210\u4E3A\u4E1A\u754C\u6D41\u884C\u7684\u5FAE\u670D\u52A1\u5F00\u53D1\u6846\u67B6\uFF0C\u5DF2\u7ECF\u88AB\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u91C7\u7528\u30022018\u5E743\u6708Spring Boot\u7684\u7248\u672C\u6B63\u5F0F\u4ECE1.x\u5347\u7EA7\u5230\u4E862.x\uFF0C\u4E3A\u4E86\u9002\u5E94\u65B0\u6F6E\u6D41\uFF0C\u672C\u4E66\u5C06\u5BF9Spring Boot 2.x\u6280\u672F\u8FDB\u884C\u6DF1\u5165\u8BB2\u89E3\u3002\n\n\n\n\u672C\u4E66\u4ECE\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u5DE5\u7A0B\u5F00\u59CB\u8BB2\u89E3Spring Boot\u4F01\u4E1A\u7EA7\u5F00\u53D1\uFF0C\u5176\u5185\u5BB9\u5305\u542B\u5168\u6CE8\u89E3\u4E0B\u7684Spring IoC\u548CAOP\u3001\u6570\u636E\u5E93\u7F16\u7A0B\uFF08JDBC\u3001JPA\u548CMyBatis\uFF09\u3001\u6570\u636E\u5E93\u4E8B\u52A1\u3001NoSQL\uFF08Redis\u548CMongoDB\uFF09\u6280\u672F\u3001Spring MVC\u3001Spring 5\u65B0\u4E00\u4EE3\u54CD\u5E94\u5F0F\u6846\u67B6WebFlux\u3001\u4E92\u8054\u7F51\u62A2\u8D2D\u4E1A\u52A1\u3001\u90E8\u7F72\u4E0E\u76D1\u63A7\u3001REST\u98CE\u683C\u548CSpring Cloud\u5206\u5E03\u5F0F\u5F00\u53D1\u7B49\u3002\n\n\n\n\u672C\u4E66\u5185\u5BB9\u7D27\u6263\u4E92\u8054\u7F51\u4F01\u4E1A\u7684\u5B9E\u9645\u8981\u6C42\uFF0C\u4ECE\u5168\u6CE8\u89E3\u4E0BSpring\u77E5\u8BC6\u8BB2\u5230Spring Boot\u7684\u4F01\u4E1A\u7EA7\u5F00\u53D1\uFF0C\u5BF9\u4E8EJava\u5F00\u53D1\u4EBA\u5458\uFF0C\u5C24\u5176\u662F\u521D\u5B66Spring Boot\u7684\u4EBA\u5458\u548C\u9700\u8981\u4ECE\u4F20\u7EDFSpring\u8F6C\u5411Spring Boot\u5F00\u53D1\u7684\u6280\u672F\u4EBA\u5458\uFF0C\u5177\u6709\u5F88\u9AD8\u7684\u53C2\u8003\u4EF7\u503C\u3002",
    "downloads": 0,
    "viewed": 0
  };
});

const _code_$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _code_$4
});

const resource = defineEventHandler(async () => {
  return [
    {
      "code": "21C149QZG",
      "modifyTime": "2021-12-15T08:46:39.175",
      "title": "\u6DF1\u5165\u6D45\u51FA Spring Boot 2.x",
      "cover": "https://cdn.leafage.top/springboot.jpg",
      "category": "Technology",
      "type": "E",
      "description": "\u6DF1\u5165\u6D45\u51FA Spring Boot 2.x",
      "downloads": 0,
      "viewed": 0
    },
    {
      "code": "21C143EHF",
      "modifyTime": "2021-02-08T14:24:03",
      "title": "Spring \u5B9E\u6218",
      "cover": "https://cdn.leafage.top/spring-action.jfif",
      "category": "Technology",
      "type": "E",
      "description": null,
      "downloads": 0,
      "viewed": 0
    },
    {
      "code": "21C149SZF",
      "modifyTime": "2020-12-24T09:57:58",
      "title": "\u9AD8\u6027\u80FD MySQL",
      "cover": "https://cdn.leafage.top/mysql.jfif",
      "category": "Technology",
      "type": "E",
      "description": null,
      "downloads": 0,
      "viewed": 0
    },
    {
      "code": "21C14EP3I",
      "modifyTime": "2020-12-23T18:06:44",
      "title": "Java \u7F16\u7A0B\u7684\u903B\u8F91",
      "cover": "https://cdn.leafage.top/java.jfif",
      "category": "Technology",
      "type": "E",
      "description": null,
      "downloads": 0,
      "viewed": 0
    },
    {
      "code": "21C21AKXG",
      "modifyTime": "2021-12-21T08:27:26.159",
      "title": "Effective Java",
      "cover": "https://cdn.leafage.top/effective java.jpg",
      "category": "Technology",
      "type": "P",
      "description": "Effective Java \u4E2D\u6587\u7248\uFF08\u7B2C2\u7248\uFF09",
      "downloads": 0,
      "viewed": 0
    },
    {
      "code": "21C21WEFR",
      "modifyTime": "2021-12-21T08:24:19.948",
      "title": "Spring Boot \u5B9E\u6218",
      "cover": "https://cdn.leafage.top/spring boot\u5B9E\u6218.jpg",
      "category": "Technology",
      "type": "P",
      "description": "Spring Boot \u5B9E\u6218",
      "downloads": 0,
      "viewed": 0
    },
    {
      "code": "21C17B4QX",
      "modifyTime": "2021-12-17T15:29:30.115",
      "title": "\u91CD\u6784 \u6539\u5584\u65E2\u6709\u4EE3\u7801\u7684\u8BBE\u8BA1",
      "cover": "https://cdn.leafage.top/1639636169(1).jpg",
      "category": "Technology",
      "type": "P",
      "description": "\u91CD\u6784 \u6539\u5584\u65E2\u6709\u4EE3\u7801\u7684\u8BBE\u8BA1",
      "downloads": 0,
      "viewed": 0
    },
    {
      "code": "21C141968",
      "modifyTime": "2020-12-24T09:50:50",
      "title": "Kafka \u6743\u5A01\u6307\u5357",
      "cover": "https://cdn.leafage.top/kafka.webp",
      "category": "Technology",
      "type": "E",
      "description": null,
      "downloads": 0,
      "viewed": 0
    },
    {
      "code": "21C140L4B",
      "modifyTime": "2020-12-23T18:09:32",
      "title": "\u6DF1\u5165\u7406\u89E3 Java \u865A\u62DF\u673A",
      "cover": "https://cdn.leafage.top/jvm.jfif",
      "category": "Technology",
      "type": "E",
      "description": null,
      "downloads": 0,
      "viewed": 0
    },
    {
      "code": "21C14L67K",
      "modifyTime": "2020-12-23T18:09:02",
      "title": "Java \u591A\u7EBF\u7A0B\u7F16\u7A0B\u6838\u5FC3\u6280\u672F",
      "cover": "https://cdn.leafage.top/java-juc.jfif",
      "category": "Technology",
      "type": "E",
      "description": null,
      "downloads": 0,
      "viewed": 0
    }
  ];
});

const resource$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': resource
});

const record = defineEventHandler(async () => {
  return [
    {
      date: "2022-03-12",
      type: "features",
      items: [
        "\u6574\u4F53\u5E03\u5C40\u91CD\u6784\uFF0C\u66FF\u6362\u70B9\u8D5E\u56FE\u6807;",
        "\u8BC4\u8BBA\u7EC4\u4EF6\u91CD\u6784\uFF0C\u6DFB\u52A0\u56DE\u590D\u3001\u53CA\u67E5\u770B\u56DE\u590D\u529F\u80FD;",
        "\u6392\u7248\u4F18\u5316\uFF0C\u5B57\u4F53\u5927\u5C0F\u91CD\u8BBE\uFF0C\u66F4\u597D\u7684\u4F53\u9A8C;",
        "\u6DFB\u52A0\u79FB\u52A8\u7AEF\u7684\u62BD\u5C49\u83DC\u5355;"
      ]
    },
    {
      date: "2021-12-02",
      type: "bugfix",
      items: [
        "\u9996\u9875\u5E03\u5C40\u91CD\u6784\uFF0C\u6DFB\u52A0\u8BC4\u8BBA\u529F\u80FD;",
        "\u62BD\u53D6\u91CD\u590D\u90E8\u5206\u7684\u4EE3\u7801\u4F5C\u4E3A\u7EC4\u4EF6\u4F7F\u7528;"
      ]
    },
    {
      date: "2021-10-13",
      type: "features",
      items: [
        "\u5347\u7EA7\u5230 nuxt3\uFF0C\u5E76\u91CD\u6784\u6240\u6709\u9875\u9762;"
      ]
    }
  ];
});

const record$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': record
});

const _code_$2 = defineEventHandler(() => {
  return {
    "code": "2128BXOG",
    "modifyTime": "2021-12-14T16:41:27.804",
    "title": "\u5FAE\u4FE1\u516C\u4F17\u53F7\u7F51\u9875\u6388\u6743\uFF0Credirect_uri\u53C2\u6570\u9519\u8BEF\uFF0C\u89E3\u51B3\u65B9\u6CD5",
    "cover": "https://cdn.leafage.top/railway-gbfdf1d4b1.jpg",
    "tags": [
      "\u57DF\u540D",
      "urlencode",
      "\u516C\u4F17\u53F7",
      "wechat",
      "redirect_uri"
    ],
    "category": "Experience",
    "likes": 2,
    "comment": 1,
    "viewed": 296,
    "content": "\u6700\u8FD1\u5728\u505A\u5FAE\u4FE1\u670D\u52A1\uFF0C\u9047\u5230\u4E00\u4E9B\u95EE\u9898\uFF0C\u6BD4\u5982\uFF1A\u5FAE\u4FE1\u516C\u4F17\u53F7\u7F51\u9875\u6388\u6743\uFF0Credirect_uri\u53C2\u6570\u9519\u8BEF\uFF0C\u4F46\u662F\u7F51\u4E0A\u597D\u591A\u6587\u7AE0\u8BF4\u4E0D\u6E05\u695A\uFF0C\u53CD\u53CD\u590D\u590D\u4FEE\u6539\uFF0C\u8FD8\u662F\u4E0D\u884C\u3002\n\n\u5FAE\u4FE1\u516C\u4F17\u53F7\u91CC\u7684\u56DE\u8C03\u53EA\u80FD\u662F\u5B8C\u6574\u57DF\u540D\uFF0C\u6BD4\u5982\u4F60\u8BBF\u95EE `http://www.xx.com/authorize` \u8FDB\u884C\u8BA4\u8BC1\uFF0C\u4F46\u662F\u56DE\u8C03\u8981\u586B\u5199 `www.xx.com` \uFF0C\u7136\u540E\u8BF7\u6C42\u7684\u65F6\u5019\u53C2\u6570\u662F\u8981\u5C06\u5730\u5740\u8FDB\u884CURLEncode \u4E4B\u540E\u586B\u5199\uFF08\u586B\u5199\uFF1A`http%3a%2f%2fwww.xx.com%2fauthorize` \uFF09\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4E86\u3002"
  };
});

const _code_$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _code_$2
});

const posts = defineEventHandler(async () => {
  return [
    {
      "code": "2128BXOG",
      "modifyTime": "2021-12-14T16:41:27.804",
      "title": "\u5FAE\u4FE1\u516C\u4F17\u53F7\u7F51\u9875\u6388\u6743\uFF0Credirect_uri\u53C2\u6570\u9519\u8BEF\uFF0C\u89E3\u51B3\u65B9\u6CD5",
      "cover": "https://cdn.leafage.top/railway-gbfdf1d4b1.jpg",
      "tags": [
        "\u57DF\u540D",
        "urlencode",
        "\u516C\u4F17\u53F7",
        "wechat",
        "redirect_uri"
      ],
      "category": "Experience",
      "likes": 2,
      "comment": 1,
      "viewed": 296
    },
    {
      "code": "21C9GRTU",
      "modifyTime": "2021-12-09T15:02:56.064",
      "title": "MongoDB \u4E3B\u4ECE\u914D\u7F6E\u53CA\u539F\u7406",
      "cover": "https://cdn.leafage.top/bicycle-g238b39ea3.jpg",
      "tags": [
        "replication",
        "mongodb",
        "\u4E3B\u4ECE\u590D\u5236"
      ],
      "category": "Technology",
      "likes": 0,
      "comment": 1,
      "viewed": 206
    },
    {
      "code": "21A133QUD",
      "modifyTime": "2021-10-15T09:38:11.123",
      "title": "JVM - \u7C7B\u7684\u751F\u547D\u5468\u671F",
      "cover": "https://cdn.leafage.top/dna-gc901094a3.jpg",
      "tags": [
        "jvm",
        "\u751F\u547D\u5468\u671F",
        "\u8FDE\u63A5",
        "\u52A0\u8F7D",
        "\u521D\u59CB\u5316"
      ],
      "category": "Technology",
      "likes": 2,
      "comment": 0,
      "viewed": 448
    },
    {
      "code": "21918I8M5",
      "modifyTime": "2021-10-13T20:36:27.577",
      "title": "SecurityRandom\u7684getInstanceStrong() \u963B\u585E\u95EE\u9898",
      "cover": "https://cdn.leafage.top/field-6558125.jpg",
      "tags": [
        "\u963B\u585E",
        "\u968F\u673A\u6570",
        "getInstanceStrong",
        "SecurityRandom"
      ],
      "category": "Experience",
      "likes": 2,
      "comment": 0,
      "viewed": 507
    },
    {
      "code": "21A13YXCB",
      "modifyTime": "2021-10-13T20:14:49.719",
      "title": "JVM - \u5783\u573E\u56DE\u6536\u5668",
      "cover": "https://cdn.leafage.top/building-g78a154db4.jpg",
      "tags": [
        "jvm",
        "ParNew",
        "Serial",
        "\u5783\u573E\u56DE\u6536\u5668",
        "Parallel",
        "GC"
      ],
      "category": "Technology",
      "likes": 0,
      "comment": 0,
      "viewed": 259
    },
    {
      "code": "21A138W45",
      "modifyTime": "2021-10-13T20:04:52.577",
      "title": "JVM - \u5783\u573E\u56DE\u6536\u7B97\u6CD5",
      "cover": "https://cdn.leafage.top/background-g43c1a8308.jpg",
      "tags": [
        "jvm",
        "\u7B97\u6CD5",
        "\u5783\u573E\u56DE\u6536",
        "GC"
      ],
      "category": "Technology",
      "likes": 0,
      "comment": 0,
      "viewed": 249
    },
    {
      "code": "21A12SGK3",
      "modifyTime": "2021-10-12T08:48:14.58",
      "title": "\u5173\u4E8E\u5F00\u6E90\u9879\u76EE\u7684\u89C4\u5212",
      "cover": "https://cdn.leafage.top/road-g13dfc2295.jpg",
      "tags": [
        "leafage",
        "\u60F3\u6CD5",
        "\u89C4\u5212"
      ],
      "category": "Thinking",
      "likes": 1,
      "comment": 0,
      "viewed": 290
    },
    {
      "code": "20C25YW6T",
      "modifyTime": "2021-09-26T08:28:26.3",
      "title": "nginx \u5982\u4F55\u914D\u7F6E\u8BE6\u89E3",
      "cover": "https://cdn.leafage.top/proxy-5301801_640.jpg",
      "tags": [
        "server",
        "\u914D\u7F6E",
        "nginx",
        "nginx.conf",
        "http",
        "location",
        "events"
      ],
      "category": "Technology",
      "likes": 7,
      "comment": 0,
      "viewed": 1050
    },
    {
      "code": "20815YW6T",
      "modifyTime": "2021-09-23T16:38:35.761",
      "title": "Mybatis\u6279\u91CF\u64CD\u4F5Csql\u5199\u6CD5",
      "cover": "https://cdn.leafage.top/data-4404730_640.jpg",
      "tags": [
        "mybatis",
        "batch",
        "insert",
        "update",
        "\u6279\u91CF",
        "sql"
      ],
      "category": "Technology",
      "likes": 12,
      "comment": 2,
      "viewed": 2159
    },
    {
      "code": "21414BX0U",
      "modifyTime": "2021-09-18T09:05:12.981",
      "title": "vue3+typescript\u4E0A\u4F20\u6587\u4EF6\u5230\u4E03\u725B\u4E91",
      "cover": "https://cdn.leafage.top/snowdrop.jpg",
      "tags": [
        "qiniu-js",
        "\u524D\u7AEF\u4E0A\u4F20",
        "vue.js",
        "vue3",
        "\u4E03\u725B\u4E91",
        "\u4E0A\u4F20"
      ],
      "category": "Technology",
      "likes": 4,
      "comment": 1,
      "viewed": 701
    },
    {
      "code": "21818P30W",
      "modifyTime": "2021-08-18T10:35:28.134",
      "title": "JVM\u8FD0\u884C\u65F6\u6570\u636E\u533A",
      "cover": "https://cdn.leafage.top/a-candle-g7930a4d11.jpg",
      "tags": [
        "JVM",
        "\u6808\u5E27",
        "\u65B9\u6CD5\u533A",
        "\u5806",
        "\u7A0B\u5E8F\u8BA1\u6570\u5668",
        "\u6808"
      ],
      "category": "Technology",
      "likes": 4,
      "comment": 1,
      "viewed": 393
    },
    {
      "code": "21811W1F6",
      "modifyTime": "2021-08-13T10:12:40.483",
      "title": "Activiti7\u4E8B\u4EF6\u76D1\u542C",
      "cover": "https://cdn.leafage.top/godfather.jpg",
      "tags": [
        "\u5DE5\u4F5C\u6D41",
        "\u76D1\u542C\u5668",
        "listener",
        "activiti7"
      ],
      "category": "Technology",
      "likes": 2,
      "comment": 1,
      "viewed": 623
    }
  ];
});

const posts$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': posts
});

const _code_ = defineEventHandler(async () => {
  return {
    "posts": "124",
    "country": "china",
    "location": "\u9655\u897F\u7701\u897F\u5B89\u5E02",
    "content": "\u5728\u5F00\u53D1\u4E2D\u5E38\u5E38\u4F1A\u9700\u8981\u622A\u53D6\u5B57\u7B26\u4E32\uFF0C\u800C JavaScript \u63D0\u4F9B\u4E86\u5F88\u591A\u79CD\u65B9\u6CD5\u5B9E\u73B0\u622A\u53D6\u64CD\u4F5C\u3002\u672C\u6587\u5BF9\u5404\u79CD\u65B9\u6CD5\u505A\u4E2A\u6574\u7406\uFF0C\u4F9B\u5927\u5BB6\u53C2\u8003.",
    "modifyTime": "2022-03-11T13:41:26.495",
    "count": 0
  };
});

const _code_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _code_
});

const comment = defineEventHandler(async () => {
  return [
    {
      "posts": "124",
      "country": "china",
      "location": "\u9655\u897F\u7701\u897F\u5B89\u5E02",
      "content": "\u5728\u5F00\u53D1\u4E2D\u5E38\u5E38\u4F1A\u9700\u8981\u622A\u53D6\u5B57\u7B26\u4E32\uFF0C\u800C JavaScript \u63D0\u4F9B\u4E86\u5F88\u591A\u79CD\u65B9\u6CD5\u5B9E\u73B0\u622A\u53D6\u64CD\u4F5C\u3002\u672C\u6587\u5BF9\u5404\u79CD\u65B9\u6CD5\u505A\u4E2A\u6574\u7406\uFF0C\u4F9B\u5927\u5BB6\u53C2\u8003.",
      "modifyTime": "2022-03-11T13:41:26.495",
      "count": 0
    },
    {
      "posts": "124",
      "country": "canada",
      "location": "\u591A\u4F26\u591A",
      "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      "modifyTime": "2022-03-11T13:41:26.495",
      "count": 2
    },
    {
      "posts": "124",
      "country": "canada",
      "location": "\u591A\u4F26\u591A",
      "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      "modifyTime": "2022-03-11T13:41:26.495",
      "count": 2
    }
  ];
});

const comment$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': comment
});

const category = defineEventHandler(() => {
  return [
    {
      "code": "20C3ID6W",
      "modifyTime": "2021-07-25T10:18:51.802",
      "alias": "Technology",
      "count": 21,
      "description": "\u6280\u672F"
    },
    {
      "code": "20C329QX",
      "modifyTime": "2020-12-03T15:08:01",
      "alias": "Lifestyle",
      "count": 1,
      "description": "\u751F\u6D3B"
    },
    {
      "code": "2128O0TW",
      "modifyTime": "2021-02-08T15:14:56.769",
      "alias": "Travel",
      "count": 0,
      "description": "\u65C5\u884C"
    },
    {
      "code": "21317DTNP",
      "modifyTime": "2021-03-17T08:44:31.446",
      "alias": "Experience",
      "count": 4,
      "description": "\u7ECF\u9A8C"
    },
    {
      "code": "21412YAAR",
      "modifyTime": "2021-04-12T12:47:14.065",
      "alias": "Photograph",
      "count": 0,
      "description": "\u6444\u5F71"
    },
    {
      "code": "21628R2XX",
      "modifyTime": "2021-06-28T18:59:55.663",
      "alias": "Thinking",
      "count": 1,
      "description": "\u601D\u8003"
    },
    {
      "code": "21A12D87Z",
      "modifyTime": "2021-10-12T08:18:43.145",
      "alias": "Other",
      "count": 0,
      "description": "\u5176\u5B83"
    }
  ];
});

const category$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': category
});

const sitemap_xml = defineEventHandler(async () => {
  const sitemap = new SitemapStream({
    hostname: "https://www.leafage.top"
  });
  const { data } = await useFetch(`https://www.leafage.top/api/assets/posts?page=0&size=999`);
  for (const doc of data.content) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly"
    });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});

const sitemap_xml$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': sitemap_xml
});

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const getClientManifest = () => import('file://D:/other/leafage/leafage-pw/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r);
const getServerEntry = () => import('file://D:/other/leafage/leafage-pw/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const clientManifest = await getClientManifest();
  if (!clientManifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const renderToString$1 = async (input, context) => {
    const html = await renderToString(input, context);
    return `<div id="__nuxt">${html}</div>`;
  };
  return createRenderer(createSSRApp, {
    clientManifest,
    renderToString: renderToString$1,
    publicPath: buildAssetsURL()
  });
});
const getSPARenderer = lazyCachedFunction(async () => {
  const clientManifest = await getClientManifest();
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      }
    };
    let entryFiles = Object.values(clientManifest).filter((fileValue) => fileValue.isEntry);
    if ("all" in clientManifest && "initial" in clientManifest) {
      entryFiles = clientManifest.initial.map((file) => ({ file }));
    }
    return Promise.resolve({
      html: '<div id="__nuxt"></div>',
      renderResourceHints: () => "",
      renderStyles: () => entryFiles.flatMap(({ css }) => css).filter((css) => css != null).map((file) => `<link rel="stylesheet" href="${buildAssetsURL(file)}">`).join(""),
      renderScripts: () => entryFiles.map(({ file }) => {
        const isMJS = !file.endsWith(".js");
        return `<script ${isMJS ? 'type="module"' : ""} src="${buildAssetsURL(file)}"><\/script>`;
      }).join("")
    });
  };
  return { renderToString };
});
const renderer = eventHandler(async (event) => {
  const ssrError = event.req.url?.startsWith("/__nuxt_error") ? useQuery(event) : null;
  const url = ssrError?.url || event.req.url;
  const ssrContext = {
    url,
    event,
    req: event.req,
    res: event.res,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.req.headers["x-nuxt-no-ssr"],
    error: ssrError,
    nuxt: void 0,
    payload: void 0
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const rendered = await renderer.renderToString(ssrContext).catch((e) => {
    if (!ssrError) {
      throw e;
    }
  });
  if (!rendered) {
    return;
  }
  if (event.res.writableEnded) {
    return;
  }
  if (ssrContext.error && !ssrError) {
    throw ssrContext.error;
  }
  if (ssrContext.nuxt?.hooks) {
    await ssrContext.nuxt.hooks.callHook("app:rendered");
  }
  const html = await renderHTML(ssrContext.payload, rendered, ssrContext);
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  return html;
});
async function renderHTML(payload, rendered, ssrContext) {
  const state = `<script>window.__NUXT__=${devalue(payload)}<\/script>`;
  rendered.meta = rendered.meta || {};
  if (ssrContext.renderMeta) {
    Object.assign(rendered.meta, await ssrContext.renderMeta());
  }
  return htmlTemplate({
    HTML_ATTRS: rendered.meta.htmlAttrs || "",
    HEAD_ATTRS: rendered.meta.headAttrs || "",
    HEAD: (rendered.meta.headTags || "") + rendered.renderResourceHints() + rendered.renderStyles() + (ssrContext.styles || ""),
    BODY_ATTRS: rendered.meta.bodyAttrs || "",
    BODY_PREPEND: ssrContext.teleports?.body || "",
    APP: (rendered.meta.bodyScriptsPrepend || "") + rendered.html + state + rendered.renderScripts() + (rendered.meta.bodyScripts || "")
  });
}
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': renderer
});
//# sourceMappingURL=index.mjs.map
