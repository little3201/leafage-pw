
// --------------------
// Request: D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/paths.mjs ($id_b534fc0b)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/css.mjs ($id_59589513)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs ($id_0e37f632)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/root-component.mjs ($id_a401080b)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/app-component.mjs ($id_277ce7ef)
// --------------------
const $id_35388f0e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry ($id_35388f0e)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/components.plugin.mjs ($id_d6b01f33)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/about/index.vue?macro=true ($id_abbd4b85)
// - /pages/about/profile.vue?macro=true ($id_9226939a)
// - /pages/about/record.vue?macro=true ($id_13285bcb)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /components/Gallery.vue ($id_c2fdb584)
// - /components/Tab.vue ($id_1787b084)
// - /components/Item.vue ($id_3172b1a7)
// - /components/layout/Aside.vue ($id_fdfe0ef3)
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /components/comment/Form.vue ($id_d8ab6861)
// - /components/comment/Item.vue ($id_b5eb49c9)
// - /components/Preview.vue ($id_ec235e81)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/resource/detail/[code].vue?macro=true ($id_4b4bda4b)
// - /pages/resource/index.vue?macro=true ($id_ca4e9348)
// - /pages/about/index.vue ($id_6141f3ee)
// - /pages/about/profile.vue ($id_4ad98a9f)
// - /pages/about/record.vue ($id_412f35a6)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/resource/detail/[code].vue ($id_a7a7de25)
// - /pages/resource/index.vue ($id_c34e3eb7)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/layout/Header.vue ($id_6cd1cf1e)
// - /components/layout/Drawer.vue ($id_f2aab072)
// - /components/layout/Logo.vue ($id_61e21c70)
// - /components/layout/Footer.vue ($id_6ebd1e8f)
// - /error.vue ($id_5ce9522e)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/layouts.mjs ($id_e70ab973)
// - /layouts/default.vue ($id_7689e89d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry ($id_35388f0e)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/paths.mjs
// Parents: 
// - D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry ($id_35388f0e)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_b534fc0b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/paths.mjs ($id_b534fc0b)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry ($id_35388f0e)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /pages/about/record.vue?macro=true ($id_13285bcb)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /components/layout/Aside.vue ($id_fdfe0ef3)
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /components/comment/Item.vue ($id_b5eb49c9)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/resource/detail/[code].vue?macro=true ($id_4b4bda4b)
// - /pages/resource/index.vue?macro=true ($id_ca4e9348)
// - /pages/about/record.vue ($id_412f35a6)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/resource/detail/[code].vue ($id_a7a7de25)
// - /pages/resource/index.vue ($id_c34e3eb7)
// - /plugins/md.ts ($id_781b912f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.use();
  if (!nuxtAppInstance) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/about/index.vue?macro=true ($id_abbd4b85)
// - /components/Item.vue ($id_3172b1a7)
// - /components/layout/Aside.vue ($id_fdfe0ef3)
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /pages/resource/index.vue?macro=true ($id_ca4e9348)
// - /pages/about/index.vue ($id_6141f3ee)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// - /pages/resource/index.vue ($id_c34e3eb7)
// - /components/layout/Header.vue ($id_6cd1cf1e)
// - /components/layout/Drawer.vue ($id_f2aab072)
// - /components/layout/Logo.vue ($id_61e21c70)
// - /components/layout/Footer.vue ($id_6ebd1e8f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/css.mjs
// Parents: 
// - D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry ($id_35388f0e)
// Dependencies: 
// - /assets/css/tailwind.css ($id_f75548e1)
// --------------------
const $id_59589513 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/css.mjs ($id_59589513)
// Dependencies: 

// --------------------
const $id_f75548e1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*\n! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}::before,\n::after {\n  --tw-content: '';\n}/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/html {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/body {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/hr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}/*\nRemove the default font size and weight for headings.\n*/h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/a {\n  color: inherit;\n  text-decoration: inherit;\n}/*\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n  font-weight: bolder;\n}/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}/*\nAdd the correct font size in all browsers.\n*/small {\n  font-size: 80%;\n}/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}sub {\n  bottom: -0.25em;\n}sup {\n  top: -0.5em;\n}/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/table {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/button,\nselect {\n  text-transform: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/button,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}/*\nUse the modern Firefox focus style for all focusable elements.\n*/:-moz-focusring {\n  outline: auto;\n}/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/:-moz-ui-invalid {\n  box-shadow: none;\n}/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n  vertical-align: baseline;\n}/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n  -webkit-appearance: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}/*\nAdd the correct display in Chrome and Safari.\n*/summary {\n  display: list-item;\n}/*\nRemoves the default spacing and border for appropriate elements.\n*/blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}legend {\n  padding: 0;\n}ol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/*\nPrevent resizing textareas horizontally by default.\n*/textarea {\n  resize: vertical;\n}/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/input::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}input::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}/*\nSet the default cursor for buttons.\n*/button,\n[role=\"button\"] {\n  cursor: pointer;\n}/*\nMake sure disabled buttons don't get the pointer cursor.\n*/:disabled {\n  cursor: default;\n}/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}.prose {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}.prose :where([class~=\"lead\"]):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}.prose :where(a):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}.prose :where(strong):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}.prose :where(ol):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: decimal;\n  padding-left: 1.625em;\n}.prose :where(ol[type=\"A\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-alpha;\n}.prose :where(ol[type=\"a\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-alpha;\n}.prose :where(ol[type=\"A\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-alpha;\n}.prose :where(ol[type=\"a\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-alpha;\n}.prose :where(ol[type=\"I\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-roman;\n}.prose :where(ol[type=\"i\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-roman;\n}.prose :where(ol[type=\"I\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-roman;\n}.prose :where(ol[type=\"i\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-roman;\n}.prose :where(ol[type=\"1\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: decimal;\n}.prose :where(ul):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: disc;\n  padding-left: 1.625em;\n}.prose :where(ol > li):not(:where([class~=\"not-prose\"] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}.prose :where(ul > li):not(:where([class~=\"not-prose\"] *))::marker {\n  color: var(--tw-prose-bullets);\n}.prose :where(hr):not(:where([class~=\"not-prose\"] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}.prose :where(blockquote):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-left-width: 0.25rem;\n  border-left-color: var(--tw-prose-quote-borders);\n  quotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-left: 1em;\n}.prose :where(blockquote p:first-of-type):not(:where([class~=\"not-prose\"] *))::before {\n  content: open-quote;\n}.prose :where(blockquote p:last-of-type):not(:where([class~=\"not-prose\"] *))::after {\n  content: close-quote;\n}.prose :where(h1):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}.prose :where(h1 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 900;\n}.prose :where(h2):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}.prose :where(h2 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 800;\n}.prose :where(h3):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}.prose :where(h3 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 700;\n}.prose :where(h4):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}.prose :where(h4 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 700;\n}.prose :where(figure > *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}.prose :where(figcaption):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}.prose :where(code):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}.prose :where(code):not(:where([class~=\"not-prose\"] *))::before {\n  content: \"`\";\n}.prose :where(code):not(:where([class~=\"not-prose\"] *))::after {\n  content: \"`\";\n}.prose :where(a code):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-links);\n}.prose :where(pre):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-right: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-left: 1.1428571em;\n}.prose :where(pre code):not(:where([class~=\"not-prose\"] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}.prose :where(pre code):not(:where([class~=\"not-prose\"] *))::before {\n  content: none;\n}.prose :where(pre code):not(:where([class~=\"not-prose\"] *))::after {\n  content: none;\n}.prose :where(table):not(:where([class~=\"not-prose\"] *)) {\n  width: 100%;\n  table-layout: auto;\n  text-align: left;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}.prose :where(thead):not(:where([class~=\"not-prose\"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}.prose :where(thead th):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}.prose :where(tbody tr):not(:where([class~=\"not-prose\"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}.prose :where(tbody tr:last-child):not(:where([class~=\"not-prose\"] *)) {\n  border-bottom-width: 0;\n}.prose :where(tbody td):not(:where([class~=\"not-prose\"] *)) {\n  vertical-align: baseline;\n  padding-top: 0.5714286em;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}.prose {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}.prose :where(p):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}.prose :where(img):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}.prose :where(video):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}.prose :where(figure):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}.prose :where(h2 code):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.875em;\n}.prose :where(h3 code):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.9em;\n}.prose :where(li):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}.prose :where(ol > li):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0.375em;\n}.prose :where(ul > li):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0.375em;\n}.prose > :where(ul > li p):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}.prose > :where(ul > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.25em;\n}.prose > :where(ul > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 1.25em;\n}.prose > :where(ol > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.25em;\n}.prose > :where(ol > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 1.25em;\n}.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}.prose :where(hr + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}.prose :where(h2 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}.prose :where(h3 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}.prose :where(h4 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}.prose :where(thead th:first-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0;\n}.prose :where(thead th:last-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-right: 0;\n}.prose :where(tbody td:first-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0;\n}.prose :where(tbody td:last-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-right: 0;\n}.prose > :where(:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}.prose > :where(:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 0;\n}.prose-slate {\n  --tw-prose-body: #334155;\n  --tw-prose-headings: #0f172a;\n  --tw-prose-lead: #475569;\n  --tw-prose-links: #0f172a;\n  --tw-prose-bold: #0f172a;\n  --tw-prose-counters: #64748b;\n  --tw-prose-bullets: #cbd5e1;\n  --tw-prose-hr: #e2e8f0;\n  --tw-prose-quotes: #0f172a;\n  --tw-prose-quote-borders: #e2e8f0;\n  --tw-prose-captions: #64748b;\n  --tw-prose-code: #0f172a;\n  --tw-prose-pre-code: #e2e8f0;\n  --tw-prose-pre-bg: #1e293b;\n  --tw-prose-th-borders: #cbd5e1;\n  --tw-prose-td-borders: #e2e8f0;\n  --tw-prose-invert-body: #cbd5e1;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #94a3b8;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #94a3b8;\n  --tw-prose-invert-bullets: #475569;\n  --tw-prose-invert-hr: #334155;\n  --tw-prose-invert-quotes: #f1f5f9;\n  --tw-prose-invert-quote-borders: #334155;\n  --tw-prose-invert-captions: #94a3b8;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #cbd5e1;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #475569;\n  --tw-prose-invert-td-borders: #334155;\n}.aspect-w-16 {\n  position: relative;\n  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n  --tw-aspect-w: 16;\n}.aspect-w-16 > * {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}.aspect-h-9 {\n  --tw-aspect-h: 9;\n}.aspect-w-3 {\n  position: relative;\n  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n  --tw-aspect-w: 3;\n}.aspect-w-3 > * {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}.aspect-h-2 {\n  --tw-aspect-h: 2;\n}.aspect-w-4 {\n  position: relative;\n  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n  --tw-aspect-w: 4;\n}.aspect-w-4 > * {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}.aspect-h-5 {\n  --tw-aspect-h: 5;\n}.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}.pointer-events-none {\n  pointer-events: none;\n}.pointer-events-auto {\n  pointer-events: auto;\n}.fixed {\n  position: fixed;\n}.absolute {\n  position: absolute;\n}.relative {\n  position: relative;\n}.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}.top-0 {\n  top: 0px;\n}.right-0 {\n  right: 0px;\n}.bottom-0 {\n  bottom: 0px;\n}.left-0 {\n  left: 0px;\n}.top-4 {\n  top: 1rem;\n}.top-48 {\n  top: 12rem;\n}.left-1\\/2 {\n  left: 50%;\n}.z-10 {\n  z-index: 10;\n}.z-0 {\n  z-index: 0;\n}.col-span-2 {\n  grid-column: span 2 / span 2;\n}.float-right {\n  float: right;\n}.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}.mx-6 {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}.mt-4 {\n  margin-top: 1rem;\n}.mr-1 {\n  margin-right: 0.25rem;\n}.-mt-2 {\n  margin-top: -0.5rem;\n}.-mr-2 {\n  margin-right: -0.5rem;\n}.mb-8 {\n  margin-bottom: 2rem;\n}.mt-1 {\n  margin-top: 0.25rem;\n}.mr-3 {\n  margin-right: 0.75rem;\n}.mr-4 {\n  margin-right: 1rem;\n}.mt-2 {\n  margin-top: 0.5rem;\n}.mr-2 {\n  margin-right: 0.5rem;\n}.ml-4 {\n  margin-left: 1rem;\n}.-mt-2\\.5 {\n  margin-top: -0.625rem;\n}.-ml-1 {\n  margin-left: -0.25rem;\n}.mt-8 {\n  margin-top: 2rem;\n}.mb-4 {\n  margin-bottom: 1rem;\n}.ml-10 {\n  margin-left: 2.5rem;\n}.inline-block {\n  display: inline-block;\n}.flex {\n  display: flex;\n}.inline-flex {\n  display: inline-flex;\n}.grid {\n  display: grid;\n}.hidden {\n  display: none;\n}.h-full {\n  height: 100%;\n}.h-12 {\n  height: 3rem;\n}.h-8 {\n  height: 2rem;\n}.h-6 {\n  height: 1.5rem;\n}.h-screen {\n  height: 100vh;\n}.h-3 {\n  height: 0.75rem;\n}.h-96 {\n  height: 24rem;\n}.min-h-screen {\n  min-height: 100vh;\n}.w-full {\n  width: 100%;\n}.w-12 {\n  width: 3rem;\n}.w-8 {\n  width: 2rem;\n}.w-6 {\n  width: 1.5rem;\n}.w-64 {\n  width: 16rem;\n}.w-screen {\n  width: 100vw;\n}.w-3 {\n  width: 0.75rem;\n}.w-72 {\n  width: 18rem;\n}.max-w-2xl {\n  max-width: 42rem;\n}.max-w-none {\n  max-width: none;\n}.max-w-prose {\n  max-width: 65ch;\n}.flex-none {\n  flex: none;\n}.flex-1 {\n  flex: 1 1 0%;\n}.shrink-0 {\n  flex-shrink: 0;\n}.-translate-x-2\\/3 {\n  --tw-translate-x: -66.666667%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.cursor-pointer {\n  cursor: pointer;\n}.list-disc {\n  list-style-type: disc;\n}.list-decimal {\n  list-style-type: decimal;\n}.grid-flow-row {\n  grid-auto-flow: row;\n}.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}.grid-rows-4 {\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n}.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}.flex-col {\n  flex-direction: column;\n}.items-end {\n  align-items: flex-end;\n}.items-center {\n  align-items: center;\n}.justify-end {\n  justify-content: flex-end;\n}.justify-center {\n  justify-content: center;\n}.justify-between {\n  justify-content: space-between;\n}.gap-6 {\n  gap: 1.5rem;\n}.gap-4 {\n  gap: 1rem;\n}.gap-y-8 {\n  row-gap: 2rem;\n}.gap-x-6 {\n  -moz-column-gap: 1.5rem;\n       column-gap: 1.5rem;\n}.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2rem * var(--tw-space-x-reverse));\n  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n}.-space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(-0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}.divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}.divide-gray-300 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-divide-opacity));\n}.overflow-hidden {\n  overflow: hidden;\n}.overflow-x-auto {\n  overflow-x: auto;\n}.overflow-y-auto {\n  overflow-y: auto;\n}.overflow-y-scroll {\n  overflow-y: scroll;\n}.whitespace-nowrap {\n  white-space: nowrap;\n}.rounded-none {\n  border-radius: 0px;\n}.rounded {\n  border-radius: 0.25rem;\n}.rounded-md {\n  border-radius: 0.375rem;\n}.rounded-full {\n  border-radius: 9999px;\n}.rounded-bl-full {\n  border-bottom-left-radius: 9999px;\n}.border {\n  border-width: 1px;\n}.border-2 {\n  border-width: 2px;\n}.border-b-2 {\n  border-bottom-width: 2px;\n}.border-t {\n  border-top-width: 1px;\n}.border-r {\n  border-right-width: 1px;\n}.border-solid {\n  border-style: solid;\n}.border-dotted {\n  border-style: dotted;\n}.border-gray-900 {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 24 39 / var(--tw-border-opacity));\n}.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}.border-transparent {\n  border-color: transparent;\n}.border-gray-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}.bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}.bg-yellow-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\n}.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}.bg-opacity-60 {\n  --tw-bg-opacity: 0.6;\n}.bg-opacity-75 {\n  --tw-bg-opacity: 0.75;\n}.bg-\\[url\\(https\\:\\/\\/play\\.tailwindcss\\.com\\/img\\/grid\\.svg\\)\\] {\n  background-image: url(https://play.tailwindcss.com/img/grid.svg);\n}.bg-top {\n  background-position: top;\n}.fill-sky-400 {\n  fill: #38bdf8;\n}.fill-slate-900 {\n  fill: #0f172a;\n}.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}.object-center {\n  -o-object-position: center;\n     object-position: center;\n}.p-4 {\n  padding: 1rem;\n}.p-3 {\n  padding: 0.75rem;\n}.p-2 {\n  padding: 0.5rem;\n}.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}.py-px {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}.pt-4 {\n  padding-top: 1rem;\n}.pb-20 {\n  padding-bottom: 5rem;\n}.pl-2 {\n  padding-left: 0.5rem;\n}.pb-3 {\n  padding-bottom: 0.75rem;\n}.text-left {\n  text-align: left;\n}.text-center {\n  text-align: center;\n}.align-middle {\n  vertical-align: middle;\n}.align-bottom {\n  vertical-align: bottom;\n}.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}.font-semibold {\n  font-weight: 600;\n}.font-medium {\n  font-weight: 500;\n}.font-bold {\n  font-weight: 700;\n}.uppercase {\n  text-transform: uppercase;\n}.leading-3 {\n  line-height: .75rem;\n}.leading-relaxed {\n  line-height: 1.625;\n}.tracking-wide {\n  letter-spacing: 0.025em;\n}.tracking-widest {\n  letter-spacing: 0.1em;\n}.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}.placeholder-gray-300::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-placeholder-opacity));\n}.placeholder-gray-300::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-placeholder-opacity));\n}.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.shadow-slate-700\\/10 {\n  --tw-shadow-color: rgb(51 65 85 / 0.1);\n  --tw-shadow: var(--tw-shadow-colored);\n}.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.ring-gray-900\\/5 {\n  --tw-ring-color: rgb(17 24 39 / 0.05);\n}.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.transition-colors {\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.duration-200 {\n  transition-duration: 200ms;\n}.duration-500 {\n  transition-duration: 500ms;\n}.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}.\\[mask-image\\:linear-gradient\\(180deg\\2c white\\2c rgba\\(255\\2c 255\\2c 255\\2c 0\\)\\)\\] {\n  -webkit-mask-image: linear-gradient(180deg,white,rgba(255,255,255,0));\n          mask-image: linear-gradient(180deg,white,rgba(255,255,255,0));\n}.hover\\:-translate-x-2:hover {\n  --tw-translate-x: -0.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.hover\\:translate-x-2:hover {\n  --tw-translate-x: 0.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.hover\\:border-gray-600:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}.hover\\:bg-gray-900:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}.hover\\:text-gray-200:hover {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}.hover\\:text-gray-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}.hover\\:text-gray-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}.hover\\:text-gray-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}.hover\\:underline:hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.focus\\:ring-1:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.focus\\:ring-gray-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));\n}.group:hover .group-hover\\:underline {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}.group:hover .group-hover\\:opacity-75 {\n  opacity: 0.75;\n}@media (prefers-color-scheme: dark) {.dark\\:divide-gray-400 > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-divide-opacity));\n  }.dark\\:border-gray-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  }.dark\\:border-gray-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }.dark\\:border-gray-400 {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n  }.dark\\:bg-gray-200 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n  }.dark\\:bg-gray-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n  }.dark\\:bg-gray-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }.dark\\:bg-gray-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n  }.dark\\:bg-gray-300 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n  }.dark\\:text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }.dark\\:text-gray-300 {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n  }.dark\\:text-gray-900 {\n    --tw-text-opacity: 1;\n    color: rgb(17 24 39 / var(--tw-text-opacity));\n  }.dark\\:text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }.dark\\:text-gray-200 {\n    --tw-text-opacity: 1;\n    color: rgb(229 231 235 / var(--tw-text-opacity));\n  }.dark\\:opacity-90 {\n    opacity: 0.9;\n  }.dark\\:invert {\n    --tw-invert: invert(100%);\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  }.dark\\:hover\\:border-gray-200:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  }.dark\\:hover\\:bg-gray-200:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n  }.dark\\:hover\\:bg-gray-300:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n  }.dark\\:hover\\:bg-gray-600:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n  }.dark\\:hover\\:text-gray-900:hover {\n    --tw-text-opacity: 1;\n    color: rgb(17 24 39 / var(--tw-text-opacity));\n  }.dark\\:hover\\:text-gray-300:hover {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n  }.dark\\:hover\\:text-gray-200:hover {\n    --tw-text-opacity: 1;\n    color: rgb(229 231 235 / var(--tw-text-opacity));\n  }\n}@media (min-width: 640px) {.sm\\:block {\n    display: block;\n  }.sm\\:flex {\n    display: flex;\n  }.sm\\:h-screen {\n    height: 100vh;\n  }.sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }.sm\\:items-start {\n    align-items: flex-start;\n  }.sm\\:p-0 {\n    padding: 0px;\n  }.sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }.sm\\:align-middle {\n    vertical-align: middle;\n  }\n}@media (min-width: 768px) {.md\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }.md\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }.md\\:my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }.md\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }.md\\:mb-0 {\n    margin-bottom: 0px;\n  }.md\\:block {\n    display: block;\n  }.md\\:flex {\n    display: flex;\n  }.md\\:inline-flex {\n    display: inline-flex;\n  }.md\\:hidden {\n    display: none;\n  }.md\\:h-10 {\n    height: 2.5rem;\n  }.md\\:w-10 {\n    width: 2.5rem;\n  }.md\\:max-w-lg {\n    max-width: 32rem;\n  }.md\\:max-w-3xl {\n    max-width: 48rem;\n  }.md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }.md\\:grid-rows-1 {\n    grid-template-rows: repeat(1, minmax(0, 1fr));\n  }.md\\:items-center {\n    align-items: center;\n  }.md\\:justify-between {\n    justify-content: space-between;\n  }.md\\:p-6 {\n    padding: 1.5rem;\n  }.md\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }.md\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }.md\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n}@media (min-width: 1024px) {.lg\\:prose-lg {\n    font-size: 1.125rem;\n    line-height: 1.7777778;\n  }.lg\\:prose-lg :where(p):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.3333333em;\n    margin-bottom: 1.3333333em;\n  }.lg\\:prose-lg :where([class~=\"lead\"]):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 1.2222222em;\n    line-height: 1.4545455;\n    margin-top: 1.0909091em;\n    margin-bottom: 1.0909091em;\n  }.lg\\:prose-lg :where(blockquote):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.6666667em;\n    margin-bottom: 1.6666667em;\n    padding-left: 1em;\n  }.lg\\:prose-lg :where(h1):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 2.6666667em;\n    margin-top: 0;\n    margin-bottom: 0.8333333em;\n    line-height: 1;\n  }.lg\\:prose-lg :where(h2):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 1.6666667em;\n    margin-top: 1.8666667em;\n    margin-bottom: 1.0666667em;\n    line-height: 1.3333333;\n  }.lg\\:prose-lg :where(h3):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 1.3333333em;\n    margin-top: 1.6666667em;\n    margin-bottom: 0.6666667em;\n    line-height: 1.5;\n  }.lg\\:prose-lg :where(h4):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.7777778em;\n    margin-bottom: 0.4444444em;\n    line-height: 1.5555556;\n  }.lg\\:prose-lg :where(img):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.7777778em;\n    margin-bottom: 1.7777778em;\n  }.lg\\:prose-lg :where(video):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.7777778em;\n    margin-bottom: 1.7777778em;\n  }.lg\\:prose-lg :where(figure):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.7777778em;\n    margin-bottom: 1.7777778em;\n  }.lg\\:prose-lg :where(figure > *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }.lg\\:prose-lg :where(figcaption):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.8888889em;\n    line-height: 1.5;\n    margin-top: 1em;\n  }.lg\\:prose-lg :where(code):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.8888889em;\n  }.lg\\:prose-lg :where(h2 code):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.8666667em;\n  }.lg\\:prose-lg :where(h3 code):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.875em;\n  }.lg\\:prose-lg :where(pre):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.8888889em;\n    line-height: 1.75;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    border-radius: 0.375rem;\n    padding-top: 1em;\n    padding-right: 1.5em;\n    padding-bottom: 1em;\n    padding-left: 1.5em;\n  }.lg\\:prose-lg :where(ol):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 1.5555556em;\n  }.lg\\:prose-lg :where(ul):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 1.5555556em;\n  }.lg\\:prose-lg :where(li):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0.6666667em;\n    margin-bottom: 0.6666667em;\n  }.lg\\:prose-lg :where(ol > li):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0.4444444em;\n  }.lg\\:prose-lg :where(ul > li):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0.4444444em;\n  }.lg\\:prose-lg > :where(ul > li p):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0.8888889em;\n    margin-bottom: 0.8888889em;\n  }.lg\\:prose-lg > :where(ul > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.3333333em;\n  }.lg\\:prose-lg > :where(ul > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-bottom: 1.3333333em;\n  }.lg\\:prose-lg > :where(ol > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.3333333em;\n  }.lg\\:prose-lg > :where(ol > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-bottom: 1.3333333em;\n  }.lg\\:prose-lg :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0.8888889em;\n    margin-bottom: 0.8888889em;\n  }.lg\\:prose-lg :where(hr):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 3.1111111em;\n    margin-bottom: 3.1111111em;\n  }.lg\\:prose-lg :where(hr + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-lg :where(h2 + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-lg :where(h3 + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-lg :where(h4 + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-lg :where(table):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.8888889em;\n    line-height: 1.5;\n  }.lg\\:prose-lg :where(thead th):not(:where([class~=\"not-prose\"] *)) {\n    padding-right: 0.75em;\n    padding-bottom: 0.75em;\n    padding-left: 0.75em;\n  }.lg\\:prose-lg :where(thead th:first-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0;\n  }.lg\\:prose-lg :where(thead th:last-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-right: 0;\n  }.lg\\:prose-lg :where(tbody td):not(:where([class~=\"not-prose\"] *)) {\n    padding-top: 0.75em;\n    padding-right: 0.75em;\n    padding-bottom: 0.75em;\n    padding-left: 0.75em;\n  }.lg\\:prose-lg :where(tbody td:first-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0;\n  }.lg\\:prose-lg :where(tbody td:last-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-right: 0;\n  }.lg\\:prose-lg > :where(:first-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-lg > :where(:last-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-bottom: 0;\n  }.lg\\:prose-xl {\n    font-size: 1.25rem;\n    line-height: 1.8;\n  }.lg\\:prose-xl :where(p):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n  }.lg\\:prose-xl :where([class~=\"lead\"]):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 1.2em;\n    line-height: 1.5;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }.lg\\:prose-xl :where(blockquote):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.6em;\n    margin-bottom: 1.6em;\n    padding-left: 1.0666667em;\n  }.lg\\:prose-xl :where(h1):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 2.8em;\n    margin-top: 0;\n    margin-bottom: 0.8571429em;\n    line-height: 1;\n  }.lg\\:prose-xl :where(h2):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 1.8em;\n    margin-top: 1.5555556em;\n    margin-bottom: 0.8888889em;\n    line-height: 1.1111111;\n  }.lg\\:prose-xl :where(h3):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 1.5em;\n    margin-top: 1.6em;\n    margin-bottom: 0.6666667em;\n    line-height: 1.3333333;\n  }.lg\\:prose-xl :where(h4):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.8em;\n    margin-bottom: 0.6em;\n    line-height: 1.6;\n  }.lg\\:prose-xl :where(img):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }.lg\\:prose-xl :where(video):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }.lg\\:prose-xl :where(figure):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }.lg\\:prose-xl :where(figure > *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }.lg\\:prose-xl :where(figcaption):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n    margin-top: 1em;\n  }.lg\\:prose-xl :where(code):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n  }.lg\\:prose-xl :where(h2 code):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.8611111em;\n  }.lg\\:prose-xl :where(h3 code):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n  }.lg\\:prose-xl :where(pre):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n    line-height: 1.7777778;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    border-radius: 0.5rem;\n    padding-top: 1.1111111em;\n    padding-right: 1.3333333em;\n    padding-bottom: 1.1111111em;\n    padding-left: 1.3333333em;\n  }.lg\\:prose-xl :where(ol):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 1.6em;\n  }.lg\\:prose-xl :where(ul):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 1.6em;\n  }.lg\\:prose-xl :where(li):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0.6em;\n    margin-bottom: 0.6em;\n  }.lg\\:prose-xl :where(ol > li):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0.4em;\n  }.lg\\:prose-xl :where(ul > li):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0.4em;\n  }.lg\\:prose-xl > :where(ul > li p):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }.lg\\:prose-xl > :where(ul > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.2em;\n  }.lg\\:prose-xl > :where(ul > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-bottom: 1.2em;\n  }.lg\\:prose-xl > :where(ol > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.2em;\n  }.lg\\:prose-xl > :where(ol > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-bottom: 1.2em;\n  }.lg\\:prose-xl :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }.lg\\:prose-xl :where(hr):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 2.8em;\n    margin-bottom: 2.8em;\n  }.lg\\:prose-xl :where(hr + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-xl :where(h2 + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-xl :where(h3 + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-xl :where(h4 + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-xl :where(table):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n  }.lg\\:prose-xl :where(thead th):not(:where([class~=\"not-prose\"] *)) {\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }.lg\\:prose-xl :where(thead th:first-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0;\n  }.lg\\:prose-xl :where(thead th:last-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-right: 0;\n  }.lg\\:prose-xl :where(tbody td):not(:where([class~=\"not-prose\"] *)) {\n    padding-top: 0.8888889em;\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }.lg\\:prose-xl :where(tbody td:first-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0;\n  }.lg\\:prose-xl :where(tbody td:last-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-right: 0;\n  }.lg\\:prose-xl > :where(:first-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }.lg\\:prose-xl > :where(:last-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-bottom: 0;\n  }.lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }.lg\\:mr-4 {\n    margin-right: 1rem;\n  }.lg\\:block {\n    display: block;\n  }.lg\\:flex {\n    display: flex;\n  }.lg\\:w-48 {\n    width: 12rem;\n  }.lg\\:max-w-2xl {\n    max-width: 42rem;\n  }.lg\\:max-w-4xl {\n    max-width: 56rem;\n  }.lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }.lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }.lg\\:grid-rows-2 {\n    grid-template-rows: repeat(2, minmax(0, 1fr));\n  }.lg\\:divide-y > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-y-reverse: 0;\n    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n    border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n  }.lg\\:divide-gray-300 > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-divide-opacity));\n  }.lg\\:border-t {\n    border-top-width: 1px;\n  }.lg\\:border-l {\n    border-left-width: 1px;\n  }.lg\\:border-none {\n    border-style: none;\n  }.lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }.lg\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }.lg\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }.lg\\:pt-16 {\n    padding-top: 4rem;\n  }.lg\\:pb-28 {\n    padding-bottom: 7rem;\n  }.lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }@media (prefers-color-scheme: dark) {.lg\\:dark\\:divide-gray-400 > :not([hidden]) ~ :not([hidden]) {\n      --tw-divide-opacity: 1;\n      border-color: rgb(156 163 175 / var(--tw-divide-opacity));\n    }\n  }\n}@media (min-width: 1280px) {.xl\\:max-w-4xl {\n    max-width: 56rem;\n  }.xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }.xl\\:gap-x-8 {\n    -moz-column-gap: 2rem;\n         column-gap: 2rem;\n  }\n}@media (min-width: 1536px) {.\\32xl\\:max-w-7xl {\n    max-width: 80rem;\n  }.\\32xl\\:max-w-6xl {\n    max-width: 72rem;\n  }.\\32xl\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}";
}


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs
// Parents: 
// - D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry ($id_35388f0e)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/components.plugin.mjs ($id_d6b01f33)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /plugins/md.ts ($id_781b912f)
// --------------------
const $id_0e37f632 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/plugins/md.ts");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs ($id_0e37f632)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs ($id_0e37f632)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_d6b01f33 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs ($id_0e37f632)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs ($id_0e37f632)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/meta.config.mjs ($id_47fd4766)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_47fd4766 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs ($id_0e37f632)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/router.options.mjs ($id_f5ce0791)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/middleware.mjs ($id_7fc04b25)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/about/index.vue?macro=true ($id_abbd4b85)
// - /pages/about/profile.vue?macro=true ($id_9226939a)
// - /pages/about/record.vue?macro=true ($id_13285bcb)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/resource/detail/[code].vue?macro=true ($id_4b4bda4b)
// - /pages/resource/index.vue?macro=true ($id_ca4e9348)
// - /pages/about/index.vue ($id_6141f3ee)
// - /pages/about/profile.vue ($id_4ad98a9f)
// - /pages/about/record.vue ($id_412f35a6)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/resource/detail/[code].vue ($id_a7a7de25)
// - /pages/resource/index.vue ($id_c34e3eb7)
// --------------------
const $id_f543faa8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/about.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/about/index.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/about/profile.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/about/record.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/posts/detail/[code].vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/posts/index.vue?macro=true");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/resource/detail/[code].vue?macro=true");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/resource/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    path: "/about",
    file: "D:/other/leafage/leafage-pw/pages/about.vue",
    children: [
  {
    name: "about",
    path: "",
    file: "D:/other/leafage/leafage-pw/pages/about/index.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/about/index.vue')
  },
  {
    name: "about-profile",
    path: "profile",
    file: "D:/other/leafage/leafage-pw/pages/about/profile.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/about/profile.vue')
  },
  {
    name: "about-record",
    path: "record",
    file: "D:/other/leafage/leafage-pw/pages/about/record.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/about/record.vue')
  }
],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/about.vue')
  },
  {
    name: "index",
    path: "/",
    file: "D:/other/leafage/leafage-pw/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "posts-detail-code",
    path: "/posts/detail/:code",
    file: "D:/other/leafage/leafage-pw/pages/posts/detail/[code].vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/posts/detail/[code].vue')
  },
  {
    name: "posts",
    path: "/posts",
    file: "D:/other/leafage/leafage-pw/pages/posts/index.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/posts/index.vue')
  },
  {
    name: "resource-detail-code",
    path: "/resource/detail/:code",
    file: "D:/other/leafage/leafage-pw/pages/resource/detail/[code].vue",
    children: [],
    meta: __vite_ssr_import_7__.meta,
    alias: __vite_ssr_import_7__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/resource/detail/[code].vue')
  },
  {
    name: "resource",
    path: "/resource",
    file: "D:/other/leafage/leafage-pw/pages/resource/index.vue",
    children: [],
    meta: __vite_ssr_import_8__.meta,
    alias: __vite_ssr_import_8__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/resource/index.vue')
  }
];
}


// --------------------
// Request: /pages/about.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/about.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2f038ecd)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9ddc318c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Html = __vite_ssr_import_1__.resolveComponent("Html")
  const _component_Head = __vite_ssr_import_1__.resolveComponent("Head")
  const _component_Title = __vite_ssr_import_1__.resolveComponent("Title")
  const _component_NuxtLink = __vite_ssr_import_0__.default
  const _component_NuxtChild = __vite_ssr_import_1__.resolveComponent("NuxtChild")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)} data-v-0a606064>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Html, { lang: 'en' }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`Leafage - About`)
                  } else {
                    return [
                      __vite_ssr_import_1__.createTextVNode("Leafage - About")
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_1__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_1__.withCtx(() => [
                    __vite_ssr_import_1__.createTextVNode("Leafage - About")
                  ]),
                  _: 1 /* STABLE */
                })
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_1__.withCtx(() => [
              __vite_ssr_import_1__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_1__.withCtx(() => [
                  __vite_ssr_import_1__.createTextVNode("Leafage - About")
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="lg:flex lg:border-t border-gray-900 dark:divide-gray-400 dark:border-gray-300" data-v-0a606064><div class="lg:divide-y lg:divide-gray-300 lg:dark:divide-gray-400 text-center lg:mr-4 lg:w-48 lg:py-6 flex border border-gray-900 dark:border-gray-300 lg:border-none lg:block flex-none overflow-x-auto dark:text-gray-300" data-v-0a606064>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    title: "关于网站",
    class: "w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900",
    to: "/about"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`关于网站`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("关于网站")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    title: "关于作者",
    class: "w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900",
    to: "/about/profile"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`关于作者`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("关于作者")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    title: "更新日志",
    class: "w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900",
    to: "/about/record"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`更新日志`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("更新日志")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="my-4 mx-auto w-full lg:border-l" data-v-0a606064><article class="prose dark:text-gray-300 mx-auto" data-v-0a606064>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtChild, null, null, _parent))
  _push(`</article></div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/about.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0a606064"],['__file',"D:/other/leafage/leafage-pw/pages/about.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/about/index.vue?macro=true ($id_abbd4b85)
// - /pages/about/profile.vue?macro=true ($id_9226939a)
// - /pages/about/record.vue?macro=true ($id_13285bcb)
// - /components/Gallery.vue ($id_c2fdb584)
// - /components/Tab.vue ($id_1787b084)
// - /components/Item.vue ($id_3172b1a7)
// - /components/layout/Aside.vue ($id_fdfe0ef3)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /components/comment/Form.vue ($id_d8ab6861)
// - /components/comment/Item.vue ($id_b5eb49c9)
// - /components/Preview.vue ($id_ec235e81)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/resource/detail/[code].vue?macro=true ($id_4b4bda4b)
// - /pages/resource/index.vue?macro=true ($id_ca4e9348)
// - /pages/about/index.vue ($id_6141f3ee)
// - /pages/about/profile.vue ($id_4ad98a9f)
// - /pages/about/record.vue ($id_412f35a6)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/resource/detail/[code].vue ($id_a7a7de25)
// - /pages/resource/index.vue ($id_c34e3eb7)
// - /components/layout/Logo.vue ($id_61e21c70)
// - /components/layout/Drawer.vue ($id_f2aab072)
// - /components/layout/Header.vue ($id_6cd1cf1e)
// - /components/layout/Footer.vue ($id_6ebd1e8f)
// - /error.vue ($id_5ce9522e)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /layouts/default.vue ($id_7689e89d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /pages/about.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/about.vue ($id_a93ccd0b)
// Dependencies: 

// --------------------
const $id_2f038ecd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.router-link-exact-active[data-v-0a606064] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity))\n}\n@media (prefers-color-scheme: dark) {\n.router-link-exact-active[data-v-0a606064] {\n        --tw-bg-opacity: 1;\n        background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n        --tw-text-opacity: 1;\n        color: rgb(17 24 39 / var(--tw-text-opacity))\n}\n}\r\n";
}


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/about/index.vue?macro=true ($id_abbd4b85)
// - /pages/about/profile.vue?macro=true ($id_9226939a)
// - /pages/about/record.vue?macro=true ($id_13285bcb)
// - /components/Gallery.vue ($id_c2fdb584)
// - /components/Tab.vue ($id_1787b084)
// - /components/Item.vue ($id_3172b1a7)
// - /components/layout/Aside.vue ($id_fdfe0ef3)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /components/comment/Form.vue ($id_d8ab6861)
// - /components/comment/Item.vue ($id_b5eb49c9)
// - /components/Preview.vue ($id_ec235e81)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/resource/detail/[code].vue?macro=true ($id_4b4bda4b)
// - /pages/resource/index.vue?macro=true ($id_ca4e9348)
// - /pages/about/index.vue ($id_6141f3ee)
// - /pages/about/profile.vue ($id_4ad98a9f)
// - /pages/about/record.vue ($id_412f35a6)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/resource/detail/[code].vue ($id_a7a7de25)
// - /pages/resource/index.vue ($id_c34e3eb7)
// - /components/layout/Logo.vue ($id_61e21c70)
// - /components/layout/Drawer.vue ($id_f2aab072)
// - /components/layout/Header.vue ($id_6cd1cf1e)
// - /components/layout/Footer.vue ($id_6ebd1e8f)
// - /error.vue ($id_5ce9522e)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /layouts/default.vue ($id_7689e89d)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/about/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_abbd4b85 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}><p> 项目中的接口可以直接替换为自己的服务接口，后端服务： <a href="https://github.com/little3201/leafage-basic" target="_blank">leafage-basic</a>，希望大家使用本项目的同时也能一起学习，分享。另外有一个 <a href="https://console.leafage.top" target="_blank">后台管理</a> 系统。 </p><p class="text-base"> 项目开发秉持整洁、高质量、规范的代码，尽可能的减少代码来实现功能；项目所有样式设置均直接使用 tailwindcss 直接在标签上进性设置， 但尽可能在布局上（页边距、颜色、边框、字体等）采用一致的设置； </p><span class="font-semibold text-lg">本站使用到的一些技术、工具主要有：</span><ol><li>nuxt3 —— 开发框架；</li><li>tailwindcss(plugins: typography、aspect-ratio) —— 样式、排版优化、图片比例；</li><li>marked.js(plugins: marked-extended-tables) —— markdown解析、表格支持；</li><li>hightlight.js —— 代码高亮（使用ir-black）；</li><li>vue-gtag-next —— google tag manager；</li></ol><p class="font-semibold"> 近期更新请查看 `)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    title: "更新日志",
    to: "/about/record"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`更新日志`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("更新日志")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`。 </p></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/other/leafage/leafage-pw/pages/about/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/about/profile.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9226939a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><p>一个 Java 程序员，爱折腾，但不闹腾，</p><p>想法很多，并非全是空想，</p><p>在很多方面，无知，</p><p>但也无畏。</p><br><p>还在脱贫攻坚的路上，</p><p>还在默默地挣扎着、坚持着</p><p>还在周期性吐槽，厌恶着很多的不平，</p><p>但，也还在努力改变着，</p><p>也还向往着诗和远方，</p><p>也还憧憬着大山大河，</p><p>也还相信着很多很多。</p></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about/profile.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/other/leafage/leafage-pw/pages/about/profile.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/about/record.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_13285bcb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "record",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { data: datas } = ([__temp, __restore] = __vite_ssr_import_1__.withAsyncContext(() => __vite_ssr_import_0__.useAsyncData("record", () => $fetch(`/api/assets/record`))), __temp = await __temp, __restore(), __temp);
    const __returned__ = { datas };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "relative my-4" }, _attrs))}><div class="border-r border-dotted border-gray-500 absolute h-full top-4" style="${__vite_ssr_import_3__.ssrRenderStyle({ "left": "5.5px" })}"></div><!--[-->`);
  __vite_ssr_import_3__.ssrRenderList($setup.datas, (record, index) => {
    _push(`<div><div class="flex items-center"><span class="${__vite_ssr_import_3__.ssrRenderClass([{ "bg-green-500": record.type === "features", "bg-yellow-500": record.type === "bugfix" }, "rounded-full h-3 w-3 z-0"])}"></span><span class="ml-4 font-semibold text-base">${__vite_ssr_import_3__.ssrInterpolate(record.date)}</span></div><div class="ml-10"><ol><!--[-->`);
    __vite_ssr_import_3__.ssrRenderList(record.items, (content, idx) => {
      _push(`<li>${__vite_ssr_import_3__.ssrInterpolate(content)}</li>`);
    });
    _push(`<!--]--></ol></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/record.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/about/record.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /components/Gallery.vue ($id_c2fdb584)
// - /components/Tab.vue ($id_1787b084)
// - /components/Item.vue ($id_3172b1a7)
// - /components/layout/Aside.vue ($id_fdfe0ef3)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Gallery.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Tab.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Item.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/layout/Aside.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_6__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const tabs = __vite_ssr_import_0__.ref([
      {
        code: "likes",
        alias: "Trending"
      },
      {
        code: "viewed",
        alias: "Most View"
      },
      {
        code: "comment",
        alias: "Popular"
      }
    ]);
    let sort = __vite_ssr_import_0__.ref("likes");
    let page = __vite_ssr_import_0__.ref(0);
    const [{ data: galleryPosts }, { data: posts, refresh }] = ([__temp, __restore] = __vite_ssr_import_6__.withAsyncContext(() => Promise.all([
      __vite_ssr_import_1__.useFetch(`/api/assets/posts?page=0&size=6`),
      __vite_ssr_import_1__.useFetch(`/api/assets/posts?page=0&size=12&sort=likes`)
    ])), __temp = await __temp, __restore(), __temp);
    const viewMore = async () => {
      page.value = page.value + 1;
      const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&sort=${sort.value}`);
      posts.push(datas);
    };
    const chageParams = async (item) => {
      page.value = 0;
      if (sort.value == item) {
        refresh();
      } else {
        sort.value = item;
        posts.splice(0, -1);
        const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&sort=${sort.value}`);
        posts.push(datas);
      }
    };
    const __returned__ = { tabs, sort, page, galleryPosts, posts, refresh, viewMore, chageParams };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Html = __vite_ssr_import_7__.resolveComponent("Html");
  const _component_Head = __vite_ssr_import_7__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_7__.resolveComponent("Title");
  const _component_Meta = __vite_ssr_import_7__.resolveComponent("Meta");
  const _component_Gallery = __vite_ssr_import_2__.default;
  const _component_Tab = __vite_ssr_import_3__.default;
  const _component_Item = __vite_ssr_import_4__.default;
  const _component_LayoutAside = __vite_ssr_import_5__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Html, { lang: "en" }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_8__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_7__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(__vite_ssr_import_8__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_7__.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Leafage - Home`);
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("Leafage - Home")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(__vite_ssr_import_8__.ssrRenderComponent(_component_Meta, {
                name: "description",
                content: "Leafage \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u535A\u5BA2\u7F51\u7AD9\uFF0C\u8BB0\u5F55\u81EA\u5DF1\u5E73\u65F6\u5B66\u4E60\u603B\u7ED3\u3001\u5DE5\u4F5C\u4E2D\u9047\u5230\u7684\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6CD5\u7684\u4E00\u4E2A\u7ECF\u9A8C\u8BB0\u5F55\u3002"
              }, null, _parent3, _scopeId2));
              _push3(__vite_ssr_import_8__.ssrRenderComponent(_component_Meta, {
                name: "keywords",
                content: "leafage, \u535A\u5BA2, \u7ECF\u9A8C\u8BB0\u5F55, \u5B66\u4E60\u603B\u7ED3, nuxt, vue, ts, tailwindcss, java, js"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                __vite_ssr_import_7__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("Leafage - Home")
                  ]),
                  _: 1
                }),
                __vite_ssr_import_7__.createVNode(_component_Meta, {
                  name: "description",
                  content: "Leafage \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u535A\u5BA2\u7F51\u7AD9\uFF0C\u8BB0\u5F55\u81EA\u5DF1\u5E73\u65F6\u5B66\u4E60\u603B\u7ED3\u3001\u5DE5\u4F5C\u4E2D\u9047\u5230\u7684\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6CD5\u7684\u4E00\u4E2A\u7ECF\u9A8C\u8BB0\u5F55\u3002"
                }),
                __vite_ssr_import_7__.createVNode(_component_Meta, {
                  name: "keywords",
                  content: "leafage, \u535A\u5BA2, \u7ECF\u9A8C\u8BB0\u5F55, \u5B66\u4E60\u603B\u7ED3, nuxt, vue, ts, tailwindcss, java, js"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_7__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_7__.withCtx(() => [
              __vite_ssr_import_7__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("Leafage - Home")
                ]),
                _: 1
              }),
              __vite_ssr_import_7__.createVNode(_component_Meta, {
                name: "description",
                content: "Leafage \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u535A\u5BA2\u7F51\u7AD9\uFF0C\u8BB0\u5F55\u81EA\u5DF1\u5E73\u65F6\u5B66\u4E60\u603B\u7ED3\u3001\u5DE5\u4F5C\u4E2D\u9047\u5230\u7684\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6CD5\u7684\u4E00\u4E2A\u7ECF\u9A8C\u8BB0\u5F55\u3002"
              }),
              __vite_ssr_import_7__.createVNode(_component_Meta, {
                name: "keywords",
                content: "leafage, \u535A\u5BA2, \u7ECF\u9A8C\u8BB0\u5F55, \u5B66\u4E60\u603B\u7ED3, nuxt, vue, ts, tailwindcss, java, js"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="grid lg:grid-rows-2 lg:grid-cols-4 gap-6 mb-8"><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.galleryPosts, (data, index) => {
    _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Gallery, {
      data,
      aspect: index < 4 && index > 1 ? true : false
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="flex justify-between space-x-8 dark:text-gray-300"><div class="w-full">`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Tab, {
    onChageParams: $setup.chageParams,
    datas: $setup.tabs
  }, null, _parent));
  _push(`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-3 my-8"><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.posts, (post) => {
    _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Item, { data: post }, null, _parent));
  });
  _push(`<!--]--></div><div class="text-center my-6 text-gray-400"><button type="button" class="font-semibold hover:text-gray-600 px-2 py-1 rounded focus:outline-none"> View More <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down mx-auto"><polyline points="7 6 12 11 17 6"></polyline></svg></button></div></div>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_LayoutAside, { class: "hidden lg:block" }, null, _parent));
  _push(`</div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/index.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Gallery.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c2fdb584 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "Gallery",
  props: {
    data: {
      type: Object,
      default: {}
    },
    aspect: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = __vite_ssr_import_1__.resolveComponent("RouterLink");
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    class: ["relative", { "lg:col-span-2": $props.aspect }]
  }, _attrs))}>`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_RouterLink, {
    to: "/posts/detail/" + $props.data.code,
    class: "group"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<figure class="${__vite_ssr_import_2__.ssrRenderClass([{ "aspect-w-16 aspect-h-9": $props.aspect }, "h-full bg-gray-300 overflow-hidden"])}"${_scopeId}><img${__vite_ssr_import_2__.ssrRenderAttr("src", $props.data.cover)} class="w-full h-full object-cover object-center group-hover:opacity-75"${__vite_ssr_import_2__.ssrRenderAttr("alt", $props.data.title)}${__vite_ssr_import_2__.ssrRenderAttr("width", $props.aspect ? 596 : 286)} height="335"${_scopeId}></figure><p class="p-4 text-xs uppercase leading-3 text-white absolute top-0 right-0"${_scopeId}>${__vite_ssr_import_2__.ssrInterpolate($props.data.category)}</p><div class="absolute bottom-0 left-0 p-4 md:p-6"${_scopeId}><h2 class="text-lg font-semibold text-white group-hover:underline"${_scopeId}>${__vite_ssr_import_2__.ssrInterpolate($props.data.title)}</h2></div>`);
      } else {
        return [
          __vite_ssr_import_1__.createVNode("figure", {
            class: ["h-full bg-gray-300 overflow-hidden", { "aspect-w-16 aspect-h-9": $props.aspect }]
          }, [
            __vite_ssr_import_1__.createVNode("img", {
              src: $props.data.cover,
              class: "w-full h-full object-cover object-center group-hover:opacity-75",
              alt: $props.data.title,
              width: $props.aspect ? 596 : 286,
              height: "335"
            }, null, 8, ["src", "alt", "width"])
          ], 2),
          __vite_ssr_import_1__.createVNode("p", { class: "p-4 text-xs uppercase leading-3 text-white absolute top-0 right-0" }, __vite_ssr_import_1__.toDisplayString($props.data.category), 1),
          __vite_ssr_import_1__.createVNode("div", { class: "absolute bottom-0 left-0 p-4 md:p-6" }, [
            __vite_ssr_import_1__.createVNode("h2", { class: "text-lg font-semibold text-white group-hover:underline" }, __vite_ssr_import_1__.toDisplayString($props.data.title), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/components/Gallery.vue"]]);
;
}


// --------------------
// Request: /components/Tab.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/resource/index.vue?macro=true ($id_ca4e9348)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/resource/index.vue ($id_c34e3eb7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1787b084 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "Tab",
  props: {
    datas: {
      type: Array,
      default: []
    }
  },
  emits: ["chageParams"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    let checked = __vite_ssr_import_0__.ref(props.datas[0].code);
    const current = (code) => {
      checked.value = code;
      emit("chageParams", code);
    };
    const __returned__ = { props, emit, checked, current };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "flex justify-between items-center border border-gray-900 dark:border-gray-300 overflow-x-auto" }, _attrs))}><!--[-->`);
  __vite_ssr_import_3__.ssrRenderList($props.datas, (data) => {
    _push(`<button${__vite_ssr_import_3__.ssrRenderAttr("title", data.alias)}${__vite_ssr_import_3__.ssrRenderAttr("aria-label", data.alias)} type="button" class="${__vite_ssr_import_3__.ssrRenderClass([{ "bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900": data.code == $setup.checked }, "w-full p-3 text-xs font-bold dark:text-gray-300 uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-gray-900 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"])}">${__vite_ssr_import_3__.ssrInterpolate(data.alias)}</button>`);
  });
  _push(`<!--]--></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/components/Tab.vue"]]);
;
}


// --------------------
// Request: /components/Item.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/index.vue ($id_763a1eda)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3172b1a7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "Item",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, __vite_ssr_import_2__.mergeProps({
    to: "/posts/detail/" + $props.data.code,
    class: "group"
  }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<figure class="w-full aspect-w-3 aspect-h-2 bg-gray-300 overflow-hidden"${_scopeId}><img${__vite_ssr_import_3__.ssrRenderAttr("src", $props.data.cover + "?imageMogr2/thumbnail/272x182/format/webp/interlace/1/blur/1x0/quality/100")}${__vite_ssr_import_3__.ssrRenderAttr("alt", $props.data.title)} class="w-full h-full object-center object-cover group-hover:opacity-75" height="272" width="182"${_scopeId}></figure><div class="flex justify-between mt-4 text-xs uppercase text-gray-600 dark:text-gray-400"${_scopeId}><span${_scopeId}>${__vite_ssr_import_3__.ssrInterpolate($props.data.category)}</span><span${_scopeId}>${__vite_ssr_import_3__.ssrInterpolate(new Date($props.data.modifyTime).toLocaleDateString())}</span></div><p class="my-2 text-lg font-medium text-gray-800 dark:text-gray-300 group-hover:underline"${_scopeId}>${__vite_ssr_import_3__.ssrInterpolate($props.data.title)}</p><div class="flex justify-between text-xs text-gray-600 dark:text-gray-400"${_scopeId}><div${_scopeId}><div class="inline-flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye mr-1"${_scopeId}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"${_scopeId}></path><circle cx="12" cy="12" r="3"${_scopeId}></circle></svg> ${__vite_ssr_import_3__.ssrInterpolate($props.data.viewed)}</div><div class="inline-flex items-center mx-4"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square mr-1"${_scopeId}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"${_scopeId}></path></svg> ${__vite_ssr_import_3__.ssrInterpolate($props.data.comment)}</div><div class="inline-flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up mr-1"${_scopeId}><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"${_scopeId}></path></svg> ${__vite_ssr_import_3__.ssrInterpolate($props.data.likes)}</div></div></div>`);
      } else {
        return [
          __vite_ssr_import_2__.createVNode("figure", { class: "w-full aspect-w-3 aspect-h-2 bg-gray-300 overflow-hidden" }, [
            __vite_ssr_import_2__.createVNode("img", {
              src: $props.data.cover + "?imageMogr2/thumbnail/272x182/format/webp/interlace/1/blur/1x0/quality/100",
              alt: $props.data.title,
              class: "w-full h-full object-center object-cover group-hover:opacity-75",
              height: "272",
              width: "182"
            }, null, 8, ["src", "alt"])
          ]),
          __vite_ssr_import_2__.createVNode("div", { class: "flex justify-between mt-4 text-xs uppercase text-gray-600 dark:text-gray-400" }, [
            __vite_ssr_import_2__.createVNode("span", null, __vite_ssr_import_2__.toDisplayString($props.data.category), 1),
            __vite_ssr_import_2__.createVNode("span", null, __vite_ssr_import_2__.toDisplayString(new Date($props.data.modifyTime).toLocaleDateString()), 1)
          ]),
          __vite_ssr_import_2__.createVNode("p", { class: "my-2 text-lg font-medium text-gray-800 dark:text-gray-300 group-hover:underline" }, __vite_ssr_import_2__.toDisplayString($props.data.title), 1),
          __vite_ssr_import_2__.createVNode("div", { class: "flex justify-between text-xs text-gray-600 dark:text-gray-400" }, [
            __vite_ssr_import_2__.createVNode("div", null, [
              __vite_ssr_import_2__.createVNode("div", { class: "inline-flex items-center" }, [
                (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-eye mr-1"
                }, [
                  __vite_ssr_import_2__.createVNode("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
                  __vite_ssr_import_2__.createVNode("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                  })
                ])),
                __vite_ssr_import_2__.createTextVNode(" " + __vite_ssr_import_2__.toDisplayString($props.data.viewed), 1)
              ]),
              __vite_ssr_import_2__.createVNode("div", { class: "inline-flex items-center mx-4" }, [
                (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-message-square mr-1"
                }, [
                  __vite_ssr_import_2__.createVNode("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
                ])),
                __vite_ssr_import_2__.createTextVNode(" " + __vite_ssr_import_2__.toDisplayString($props.data.comment), 1)
              ]),
              __vite_ssr_import_2__.createVNode("div", { class: "inline-flex items-center" }, [
                (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-thumbs-up mr-1"
                }, [
                  __vite_ssr_import_2__.createVNode("path", { d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" })
                ])),
                __vite_ssr_import_2__.createTextVNode(" " + __vite_ssr_import_2__.toDisplayString($props.data.likes), 1)
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/components/Item.vue"]]);
;
}


// --------------------
// Request: /components/layout/Aside.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fdfe0ef3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "Aside",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { data: categories } = ([__temp, __restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_0__.useFetch("/api/assets/category")), __temp = await __temp, __restore(), __temp);
    const __returned__ = { categories };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_1__.default;
  _push(`<aside${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "w-64 flex-none dark:text-gray-400" }, _attrs))}><div class="border border-solid border-gray-300 dark:border-gray-400 p-4"><h3 class="font-bold">\u6B22\u8FCE\u5173\u6CE8\u516C\u4F17\u53F7\uFF08Leafage\uFF09</h3><div class="flex items-center mt-4"><figure class="border"><img src="https://cdn.leafage.top/leafage-wechat.jpg?imageMogr2/thumbnail/x128/format/webp/blur/1x0/quality/75" alt="leafage" width="100%" height="100%"></figure><div class="ml-4"><p class="my-2">\u5FAE\u4FE1\u641C\u4E00\u641C</p><input type="text" class="placeholder-gray-300 border border-gray-300 p-2 w-full text-sm" disabled placeholder="Leafage"></div></div></div><div class="border border-solid border-gray-300 dark:border-gray-400 my-8 relative"><h3 class="absolute top-0 -mt-2.5 px-2 ml-4 bg-white dark:bg-gray-900 text-sm font-semibold">\u5E16\u5B50\u5206\u7C7B</h3><ul class="grid grid-cols-1 divide-y divide-gray-300 p-4 text-xs font-semibold list-disc"><!--[-->`);
  __vite_ssr_import_4__.ssrRenderList($setup.categories, (category) => {
    _push(`<li class="py-3 mx-4">`);
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, {
      title: category.alias,
      to: { name: "posts", params: { category: category.alias } },
      class: "hover:underline hover:text-gray-900 text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
    }, {
      default: __vite_ssr_import_3__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${__vite_ssr_import_4__.ssrInterpolate(category.alias)}`);
        } else {
          return [
            __vite_ssr_import_3__.createTextVNode(__vite_ssr_import_3__.toDisplayString(category.alias), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<span class="mr-2 float-right text-gray-400">${__vite_ssr_import_4__.ssrInterpolate(category.count)}</span></li>`);
  });
  _push(`<!--]--></ul></div><div class="my-8 border-2 border-solid border-gray-900 dark:border-gray-400 p-4"><h3>Send Email To Me</h3><div class="mt-2 flex items-center"><input class="w-full text-sm placeholder-gray-300 border border-gray-300 focus:outline-none py-1 pl-2" type="email" placeholder="Email adress"><a aria-label="email" title="email" href="mailto:little3201@163.com?subject=Leafage%20Website%20News" class="bg-gray-900 text-gray-300 dark:bg-gray-300 dark:text-gray-900 p-2 -ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a></div></div><div class="border border-solid border-gray-300 dark:border-gray-400 relative my-8"><h3 class="absolute top-0 -mt-2.5 px-2 ml-4 bg-white dark:bg-gray-900 uppercase text-sm font-semibold">\u53CB\u60C5\u94FE\u63A5</h3><ul class="grid grid-cols-1 divide-y divide-gray-300 p-4 text-xs text-gray-800 dark:text-gray-400 font-semibold list-decimal"><li class="py-3 mx-4"><a title="leafage console" href="https://console.leafage.top" target="_blank" rel="noopener" class="hover:underline hover:text-gray-900 dark:hover:text-gray-300">\u7BA1\u7406\u7AEF\uFF08console.leafage.top\uFF09</a></li><li class="py-3 mx-4"><a title="csdn" href="https://blog.csdn.net/zx110503?spm=1008.2028.3001.5343&amp;type=blog" rel="noopener" target="_blank" class="hover:underline hover:text-gray-900 dark:hover:text-gray-300">csdn\uFF08csdn.net\uFF09</a></li><li class="py-3 mx-4"><a title="oschina" href="https://my.oschina.net/u/4066932" target="_blank" rel="noopener" class="hover:underline hover:text-gray-900 dark:hover:text-gray-300">\u5F00\u6E90\u4E2D\u56FD\uFF08oschina.net\uFF09</a></li><li class="py-3 mx-4"><a title="segmentfault" href="https://segmentfault.com/u/bujidao_5d0c24ce7055e/articles" rel="noopener" target="_blank" class="hover:underline hover:text-gray-900 dark:hover:text-gray-300">\u601D\u5426\uFF08segmentfault.com\uFF09</a></li><li class="py-3 mx-4"><a title="juejin" href="https://juejin.cn/user/184373686838312/posts" rel="noopener" target="_blank" class="hover:underline hover:text-gray-900 dark:hover:text-gray-300">\u6398\u91D1\uFF08juejin.cn\uFF09</a></li></ul></div></aside>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Aside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/components/layout/Aside.vue"]]);
;
}


// --------------------
// Request: /pages/posts/detail/[code].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /utils/ck.ts ($id_181057e1)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// - /components/comment/Form.vue ($id_d8ab6861)
// - /components/comment/Item.vue ($id_b5eb49c9)
// - /components/Preview.vue ($id_ec235e81)
// --------------------
const $id_bc7c70f6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __nuxt_component_1_lazy = __vite_ssr_import_3__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/comment/Form.vue'))
const __nuxt_component_2_lazy = __vite_ssr_import_3__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/comment/Item.vue'))
const __nuxt_component_3_lazy = __vite_ssr_import_3__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Preview.vue'))
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/utils/ck.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "[code]",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { params } = __vite_ssr_import_0__.useRoute();
    const { $marked } = __vite_ssr_import_0__.useNuxtApp();
    const renderedHtmlRef = __vite_ssr_import_1__.ref();
    const isShow = __vite_ssr_import_1__.ref(true);
    let view = __vite_ssr_import_1__.reactive({
      isShow: false,
      url: ""
    });
    const { data } = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_0__.useAsyncData("details", () => $fetch(`/api/assets/posts/${params.code}`))), __temp = await __temp, __restore(), __temp);
    const [{ data: previous }, { data: next }, { data: comments }] = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => Promise.all([
      __vite_ssr_import_0__.useFetch(`/api/assets/posts/${params.code}`),
      __vite_ssr_import_0__.useFetch(`/api/assets/posts/${params.code}`),
      __vite_ssr_import_0__.useFetch(`/api/assets/comment/${params.code}`)
    ])), __temp = await __temp, __restore(), __temp);
    __vite_ssr_import_1__.onMounted(() => {
      addImgClickEvent();
    });
    const renderedHtml = (content) => {
      if (content && content.length > 0) {
        return $marked.parse(content).replace(/href="/gi, 'target="_blank" href="');
      }
      return "";
    };
    const addImgClickEvent = () => {
      if (renderedHtmlRef) {
        let imgs = renderedHtmlRef.value.querySelectorAll("img");
        if (imgs.length > 0) {
          setTimeout(() => {
            for (let i = 0, len = imgs.length; i < len; i++) {
              imgs[i].onclick = () => {
                const src = imgs[i].getAttribute("src");
                previewOperation(true, src);
              };
            }
          }, 600);
        }
      }
    };
    const previewOperation = (show, url) => {
      if (show) {
        view.url = url;
      }
      view.isShow = show;
    };
    const likes = async () => {
      await $fetch(`/api/check`).then(() => {
        const count = $fetch(`/api/assets/posts/${params.code}/like`, {
          method: "PATCH",
          headers: {
            "X-CSRF-TOKEN": __vite_ssr_import_5__.getCookie("XSRF-TOKEN")
          },
          credentials: "include"
        });
        data.value.likes = count;
      });
    };
    const __returned__ = { params, $marked, renderedHtmlRef, isShow, view, data, previous, next, comments, renderedHtml, addImgClickEvent, previewOperation, likes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Html = __vite_ssr_import_6__.resolveComponent("Html");
  const _component_Head = __vite_ssr_import_6__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_6__.resolveComponent("Title");
  const _component_Meta = __vite_ssr_import_6__.resolveComponent("Meta");
  const _component_NuxtLink = __vite_ssr_import_2__.default;
  const _component_LazyCommentForm = __nuxt_component_1_lazy;
  const _component_LazyCommentItem = __nuxt_component_2_lazy;
  const _component_LazyPreview = __nuxt_component_3_lazy;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Html, { lang: "en" }, {
    default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_7__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_6__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(__vite_ssr_import_7__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_6__.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Leafage - ${__vite_ssr_import_7__.ssrInterpolate($setup.data.title)}`);
                  } else {
                    return [
                      __vite_ssr_import_6__.createTextVNode("Leafage - " + __vite_ssr_import_6__.toDisplayString($setup.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(__vite_ssr_import_7__.ssrRenderComponent(_component_Meta, {
                name: "description",
                content: $setup.data.title
              }, null, _parent3, _scopeId2));
              _push3(__vite_ssr_import_7__.ssrRenderComponent(_component_Meta, {
                name: "keywords",
                content: $setup.data.tags.toString()
              }, null, _parent3, _scopeId2));
            } else {
              return [
                __vite_ssr_import_6__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_6__.withCtx(() => [
                    __vite_ssr_import_6__.createTextVNode("Leafage - " + __vite_ssr_import_6__.toDisplayString($setup.data.title), 1)
                  ]),
                  _: 1
                }),
                __vite_ssr_import_6__.createVNode(_component_Meta, {
                  name: "description",
                  content: $setup.data.title
                }, null, 8, ["content"]),
                __vite_ssr_import_6__.createVNode(_component_Meta, {
                  name: "keywords",
                  content: $setup.data.tags.toString()
                }, null, 8, ["content"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_6__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_6__.withCtx(() => [
              __vite_ssr_import_6__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_6__.withCtx(() => [
                  __vite_ssr_import_6__.createTextVNode("Leafage - " + __vite_ssr_import_6__.toDisplayString($setup.data.title), 1)
                ]),
                _: 1
              }),
              __vite_ssr_import_6__.createVNode(_component_Meta, {
                name: "description",
                content: $setup.data.title
              }, null, 8, ["content"]),
              __vite_ssr_import_6__.createVNode(_component_Meta, {
                name: "keywords",
                content: $setup.data.tags.toString()
              }, null, 8, ["content"])
            ]),
            _: 2
          }, 1024)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex space-x-8 border-t border-gray-900 dark:border-gray-300"><div class="my-6 w-full"><article><h2 class="text-3xl text-center dark:text-gray-300">${__vite_ssr_import_7__.ssrInterpolate($setup.data.title)}</h2><div class="my-6 max-w-none prose dark:text-gray-300 lg:prose-lg">${$setup.renderedHtml($setup.data.content)}</div></article><div class="text-sm text-gray-600 dark:text-gray-400 my-2 md:flex"><div class="flex space-x-4 text-sm uppercase"><span>${__vite_ssr_import_7__.ssrInterpolate($setup.data.category)}</span><span>${__vite_ssr_import_7__.ssrInterpolate(new Date($setup.data.modifyTime).toLocaleString())}</span></div><div class="flex space-x-4 my-2 md:my-0 md:mx-4"><div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${__vite_ssr_import_7__.ssrInterpolate($setup.data.viewed)}</div><div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square mr-1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${__vite_ssr_import_7__.ssrInterpolate($setup.data.comment)}</div><div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up mr-1"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg> ${__vite_ssr_import_7__.ssrInterpolate($setup.data.likes)}</div></div></div><div class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300"><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.data.tags, (tag, index) => {
    _push(`<span class="text-sm bg-gray-200 dark:bg-gray-600 rounded-md px-2 py-px">${__vite_ssr_import_7__.ssrInterpolate(tag)}</span>`);
  });
  _push(`<!--]--></div><section class="flex items-center justify-center my-6"><span class="text-gray-400">\u5982\u6709\u5E2E\u52A9\uFF0C\u70B9\u8D5E\u9F13\u52B1\u4E00\u4E0B\u5427\uFF01</span><button type="button" class="rounded-full p-2 border dark:border-gray-400 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:border-gray-600 dark:hover:border-gray-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up cursor-pointer"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></button></section><div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 my-4 p-4 rounded"><ul class="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 text-sm font-bold">`);
  if ($setup.previous && $setup.previous.code) {
    _push(`<li>`);
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
      title: $setup.previous.title,
      to: "/posts/detail/" + $setup.previous.code,
      class: "flex items-center py-2 transform hover:-translate-x-2 transition duration-500"
    }, {
      default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<svg style="${__vite_ssr_import_7__.ssrRenderStyle($setup.previous.code && $setup.previous.code.length > 0 ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"${_scopeId}><polyline points="15 18 9 12 15 6"${_scopeId}></polyline></svg> ${__vite_ssr_import_7__.ssrInterpolate($setup.previous.title)}`);
        } else {
          return [
            __vite_ssr_import_6__.withDirectives((__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-chevron-left"
            }, [
              __vite_ssr_import_6__.createVNode("polyline", { points: "15 18 9 12 15 6" })
            ], 512)), [
              [__vite_ssr_import_6__.vShow, $setup.previous.code && $setup.previous.code.length > 0]
            ]),
            __vite_ssr_import_6__.createTextVNode(" " + __vite_ssr_import_6__.toDisplayString($setup.previous.title), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.next && $setup.next.code) {
    _push(`<li class="flex items-center justify-end">`);
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
      title: $setup.next.title,
      to: "/posts/detail/" + $setup.next.code,
      class: "flex items-center py-2 transform hover:translate-x-2 transition duration-500"
    }, {
      default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${__vite_ssr_import_7__.ssrInterpolate($setup.next.title)} <svg style="${__vite_ssr_import_7__.ssrRenderStyle($setup.next.code && $setup.next.code.length > 0 ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"${_scopeId}><polyline points="9 18 15 12 9 6"${_scopeId}></polyline></svg>`);
        } else {
          return [
            __vite_ssr_import_6__.createTextVNode(__vite_ssr_import_6__.toDisplayString($setup.next.title) + " ", 1),
            __vite_ssr_import_6__.withDirectives((__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-chevron-right"
            }, [
              __vite_ssr_import_6__.createVNode("polyline", { points: "9 18 15 12 9 6" })
            ], 512)), [
              [__vite_ssr_import_6__.vShow, $setup.next.code && $setup.next.code.length > 0]
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div><p class="mt-8 text-lg dark:text-gray-300">\u6DFB\u52A0\u8BC4\u8BBA\uFF1A</p>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_LazyCommentForm, {
    isShow: $setup.isShow,
    code: $setup.data.code
  }, null, _parent));
  _push(`<!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.comments, (comment) => {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_LazyCommentItem, { data: comment }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_LazyPreview, {
    isShow: $setup.view.isShow,
    onCloseAction: $setup.previewOperation
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${__vite_ssr_import_7__.ssrRenderAttr("src", $setup.view.url)} alt="preview" class="w-full h-full" width="1366" height="768"${_scopeId}>`);
      } else {
        return [
          __vite_ssr_import_6__.createVNode("img", {
            src: $setup.view.url,
            alt: "preview",
            class: "w-full h-full",
            width: "1366",
            height: "768"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/detail/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/posts/detail/[code].vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /utils/ck.ts
// Parents: 
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /components/comment/Form.vue ($id_d8ab6861)
// - /pages/resource/detail/[code].vue?macro=true ($id_4b4bda4b)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// - /pages/resource/detail/[code].vue ($id_a7a7de25)
// Dependencies: 

// --------------------
const $id_181057e1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const getCookie = (name) => {
  if (!document.cookie) {
    return null;
  }
  const xsrfCookies = document.cookie.split(";").map((c) => c.trim()).filter((c) => c.startsWith(name + "="));
  if (xsrfCookies.length === 0) {
    return null;
  }
  return decodeURIComponent(xsrfCookies[0].split("=")[1]);
};

Object.defineProperty(__vite_ssr_exports__, "getCookie", { enumerable: true, configurable: true, get(){ return getCookie }});
;
}


// --------------------
// Request: /components/comment/Form.vue
// Parents: 
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /components/comment/Item.vue ($id_b5eb49c9)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /utils/ck.ts ($id_181057e1)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d8ab6861 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/utils/ck.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "Form",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    code: {
      type: String,
      default: void 0
    },
    reply: {
      type: String,
      default: void 0
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    let content = __vite_ssr_import_0__.ref("");
    const onSubmit = async () => {
      let comment = {
        posts: props.code,
        content: content.value,
        replier: props.reply
      };
      await $fetch(`/api/check`).then(() => {
        $fetch(`/api/assets/comment`, {
          method: "POST",
          body: comment,
          headers: {
            "X-CSRF-TOKEN": __vite_ssr_import_2__.getCookie("XSRF-TOKEN")
          },
          credentials: "include"
        }).then(() => {
          content.value = "";
        });
      });
    };
    const __returned__ = { props, content, onSubmit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({
    style: $props.isShow ? null : { display: "none" },
    class: "my-4"
  }, _attrs))}><div class="grid my-4"><label${__vite_ssr_import_4__.ssrRenderAttr("for", "comment+" + $props.code)} class="sr-only">Content</label><textarea${__vite_ssr_import_4__.ssrRenderAttr("id", "comment+" + $props.code)} placeholder="\u8BF7\u8F93\u5165\u8BC4\u8BBA..." class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400">${__vite_ssr_import_4__.ssrInterpolate($setup.content)}</textarea></div><div class="flex justify-end"><button type="submit" class="px-2 py-1 text-sm transition-colors duration-200 transform border border-gray-300 dark:bg-gray-600 dark:text-gray-300 bg-gray-200 rounded-md focus:outline-none">Commit Comment</button></div></form>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comment/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/components/comment/Form.vue"]]);
;
}


// --------------------
// Request: /components/comment/Item.vue
// Parents: 
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /components/comment/Item.vue ($id_b5eb49c9)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /components/comment/Item.vue ($id_b5eb49c9)
// - /components/comment/Form.vue ($id_d8ab6861)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b5eb49c9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/comment/Item.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/comment/Form.vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "Item",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props, { expose }) {
    expose();
    let isShow = __vite_ssr_import_0__.ref(false);
    let isOpen = __vite_ssr_import_0__.ref(false);
    let replies = __vite_ssr_import_0__.ref([]);
    const operation = async (show, code) => {
      isShow.value = show;
      if (show) {
        const { data: datas } = await __vite_ssr_import_1__.useFetch(`/api/assets/comment/${code}/replies`);
        replies.value = datas;
      }
    };
    const onSubmit = () => {
      alert("\u63D0\u4EA4\u4E86");
    };
    const __returned__ = { isShow, isOpen, replies, operation, onSubmit, CommentForm: __vite_ssr_import_4__.default };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommentItem = __vite_ssr_import_2__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "flex my-4" }, _attrs))}><figure class="shrink-0 mr-3 w-8 h-8 md:w-10 md:h-10"><img class="mt-4 rounded-full w-full h-full object-cover"${__vite_ssr_import_6__.ssrRenderAttr("src", `/svg/${$props.data.country ? $props.data.country : "china"}.svg`)}${__vite_ssr_import_6__.ssrRenderAttr("alt", $props.data.location)} height="32" width="32"><figcaption class="text-gray-400 text-xs text-center my-2">${__vite_ssr_import_6__.ssrInterpolate($props.data.country ? $props.data.country.replace($props.data.country.substr(0, 1), $props.data.country.substr(0, 1).toUpperCase()) : "")}</figcaption></figure><div class="flex-1 border rounded px-4 py-2 md:px-6 md:py-4 leading-relaxed dark:text-gray-300 dark:border-gray-400"><span class="text-xs text-gray-400 mr-4">${__vite_ssr_import_6__.ssrInterpolate($props.data.location ? $props.data.location : "\u672A\u77E5")}</span><span class="text-xs text-gray-400">${__vite_ssr_import_6__.ssrInterpolate(new Date($props.data.modifyTime).toLocaleString())}</span><p class="text-sm">${__vite_ssr_import_6__.ssrInterpolate($props.data.content)}</p><div class="flex items-center justify-between mt-2"><div class="text-sm text-gray-400 font-semibold"><button type="button" class="inline-flex items-center focus:outline-none"><span>${__vite_ssr_import_6__.ssrInterpolate($setup.isOpen ? "\u53D6\u6D88" : "\u56DE\u590D")}</span></button></div>`);
  if ($props.data.count > 0) {
    _push(`<div class="inline-flex items-center"><!-- <div class="flex -space-x-2 mr-2">
            <img
              v-for="reply in data.replies"
              class="rounded-full w-6 h-6 border border-gray-300"
              :src="\`/svg/\${data.country}.svg\`"
              :alt="reply.location"
            />
          </div>--><div class="text-sm text-gray-400 font-semibold">${__vite_ssr_import_6__.ssrInterpolate($props.data.count)} Replies <button type="button" class="ml-4 focus:outline-none">${__vite_ssr_import_6__.ssrInterpolate($setup.isShow ? "\u6536\u8D77\u8BC4\u8BBA" : "\u67E5\u770B\u8BC4\u8BBA")}</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent($setup["CommentForm"], {
    isShow: $setup.isOpen,
    code: $props.data.posts,
    reply: $props.data.code
  }, null, _parent));
  _push(`<div style="${__vite_ssr_import_6__.ssrRenderStyle($setup.isShow ? null : { display: "none" })}"><span class="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</span>`);
  if ($props.data.count > 0) {
    _push(`<div class="space-y-4"><!--[-->`);
    __vite_ssr_import_6__.ssrRenderList($setup.replies, (reply) => {
      _push(__vite_ssr_import_6__.ssrRenderComponent(_component_CommentItem, { data: reply }, null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comment/Item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/components/comment/Item.vue"]]);
;
}


// --------------------
// Request: /components/Preview.vue
// Parents: 
// - /pages/posts/detail/[code].vue?macro=true ($id_bc7c70f6)
// - /pages/posts/detail/[code].vue ($id_21dbc687)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/Preview.vue?vue&type=style&index=0&scoped=true&lang.css ($id_98422c06)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ec235e81 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "Preview",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeAction"],
  setup(__props, { expose, emit }) {
    expose();
    const closeOperation = () => {
      emit("closeAction", false);
    };
    const __returned__ = { emit, closeOperation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    style: $props.isShow ? null : { display: "none" },
    class: "fixed inset-0 overflow-y-auto z-10",
    role: "dialog",
    "aria-modal": "true"
  }, _attrs))} data-v-b020cf86><div class="flex items-end justify-center bg-black bg-opacity-60 min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-v-b020cf86><span class="inline-block align-middle sm:h-screen" aria-hidden="true" data-v-b020cf86>\u200B</span><div class="inline-block align-bottom bg-white text-left overflow-hidden sm:align-middle md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl" data-v-b020cf86><button type="button" class="inline-flex items-center justify-center rounded-bl-full bg-gray-400 bg-opacity-60 absolute top-0 right-0 w-12 h-12" data-v-b020cf86><span class="sr-only" data-v-b020cf86>Close</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x -mt-2 -mr-2" data-v-b020cf86><line x1="18" y1="6" x2="6" y2="18" data-v-b020cf86></line><line x1="6" y1="6" x2="18" y2="18" data-v-b020cf86></line></svg></button><div class="sm:flex sm:items-start overflow-x-auto" data-v-b020cf86>`);
  __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Preview.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b020cf86"], ["__file", "D:/other/leafage/leafage-pw/components/Preview.vue"]]);
;
}


// --------------------
// Request: /components/Preview.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/Preview.vue ($id_ec235e81)
// Dependencies: 

// --------------------
const $id_98422c06 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.preview-enter-active[data-v-b020cf86],\r\n.preview-leave-active[data-v-b020cf86] {\r\n    transition: opacity 0.3s ease;\n}\n.preview-enter-from[data-v-b020cf86],\r\n.preview-leave-to[data-v-b020cf86] {\r\n    opacity: 0;\n}\r\n";
}


// --------------------
// Request: /pages/posts/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Tab.vue ($id_1787b084)
// - /components/Item.vue ($id_3172b1a7)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9751f318 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Tab.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Item.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const route = __vite_ssr_import_0__.useRoute();
    const [{ data: categories }, { data: posts, refresh }] = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => Promise.all([
      __vite_ssr_import_0__.useFetch(`/api/assets/category`),
      __vite_ssr_import_0__.useFetch(`/api/assets/posts?page=0&size=12&sort=likes`)
    ])), __temp = await __temp, __restore(), __temp);
    let page = __vite_ssr_import_1__.ref(0);
    let category = __vite_ssr_import_1__.ref(route.params.category || categories[0]);
    const viewMore = async () => {
      page.value = page.value + 1;
      const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&category=${category.value}`);
      posts.push(datas);
    };
    const chageParams = async (item) => {
      page.value = 0;
      if (category.value == item) {
        refresh();
      } else {
        category.value = item;
        posts.splice(0, -1);
        const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&category=${category.value}`);
        posts.push(datas);
      }
    };
    const __returned__ = { route, categories, posts, refresh, page, category, viewMore, chageParams };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Html = __vite_ssr_import_5__.resolveComponent("Html");
  const _component_Head = __vite_ssr_import_5__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_5__.resolveComponent("Title");
  const _component_Tab = __vite_ssr_import_2__.default;
  const _component_Item = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Html, { lang: "en" }, {
    default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_6__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_5__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(__vite_ssr_import_6__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_5__.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Leafage - Posts`);
                  } else {
                    return [
                      __vite_ssr_import_5__.createTextVNode("Leafage - Posts")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                __vite_ssr_import_5__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createTextVNode("Leafage - Posts")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_5__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createTextVNode("Leafage - Posts")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Tab, {
    onChageParams: $setup.chageParams,
    datas: $setup.categories
  }, null, _parent));
  _push(`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-8"><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList($setup.posts, (post) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Item, { data: post }, null, _parent));
  });
  _push(`<!--]--></div><div class="text-center my-6 text-gray-400"><button type="button" class="font-semibold hover:text-gray-600 px-2 py-1 rounded focus:outline-none"> View More <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down mx-auto"><polyline points="7 6 12 11 17 6"></polyline></svg></button></div></div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/posts/index.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/resource/detail/[code].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /utils/ck.ts ($id_181057e1)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4b4bda4b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/utils/ck.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "[code]",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { params } = __vite_ssr_import_0__.useRoute();
    const { data } = ([__temp, __restore] = __vite_ssr_import_1__.withAsyncContext(() => __vite_ssr_import_0__.useAsyncData("details", () => $fetch(`/api/assets/resource/${params.code}`))), __temp = await __temp, __restore(), __temp);
    const download = async () => {
      await $fetch(`/api/assets/posts/${params.code}/like`, {
        method: "GET",
        headers: {
          "X-CSRF-TOKEN": __vite_ssr_import_2__.getCookie("XSRF-TOKEN")
        },
        credentials: "include"
      });
    };
    const downloadFile = (blob, fileName) => {
      const anchor = document.createElement("a");
      anchor.href = URL.createObjectURL(blob);
      anchor.download = fileName || "";
      let event;
      if (window.MouseEvent) {
        event = new MouseEvent("click");
      } else {
        event = document.createEvent("MouseEvents");
      }
      anchor.dispatchEvent(event);
    };
    const __returned__ = { params, data, download, downloadFile };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "border-t border-gray-900 dark:border-gray-300 my-6" }, _attrs))}><article class="my-6"><h2 class="my-4 text-3xl font-semibold text-center dark:text-gray-300">${__vite_ssr_import_4__.ssrInterpolate($setup.data.title)}</h2><div class="dark:text-gray-300"><figure class="w-72 h-96 mx-auto border"><img${__vite_ssr_import_4__.ssrRenderAttr("src", $setup.data.cover)}${__vite_ssr_import_4__.ssrRenderAttr("alt", $setup.data.title)} class="w-72 h-96" height="350" width="278"></figure><div class="text-sm text-gray-600 dark:text-gray-400 my-2 md:flex justify-center"><span class="my-2">${__vite_ssr_import_4__.ssrInterpolate(new Date($setup.data.modifyTime).toLocaleString())}</span><div class="flex space-x-4 my-2 md:my-0 md:mx-4"><span class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${__vite_ssr_import_4__.ssrInterpolate($setup.data.viewed)}</span><span class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud mr-1"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg> ${__vite_ssr_import_4__.ssrInterpolate($setup.data.downloads)}</span></div></div><p class="prose mx-auto lg:prose-lg dark:text-gray-300">${__vite_ssr_import_4__.ssrInterpolate($setup.data.description)}</p></div></article><section class="flex items-center justify-center my-6"><button type="button" class="rounded-md px-4 py-2 border border-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-100">Download</button></section></div>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resource/detail/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/resource/detail/[code].vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/resource/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Tab.vue ($id_1787b084)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ca4e9348 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Tab.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const [{ data: categories }, { data: resources, refresh }] = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => Promise.all([
      __vite_ssr_import_0__.useFetch(`/api/assets/category`),
      __vite_ssr_import_0__.useFetch(`/api/assets/resource?page=0&size=12&sort=likes`)
    ])), __temp = await __temp, __restore(), __temp);
    let page = __vite_ssr_import_1__.ref(0);
    let category = __vite_ssr_import_1__.ref(categories[0]);
    const viewMore = async () => {
      page.value = page.value + 1;
      const datas = await $fetch(`/api/assets/resource?page=${page.value}&size=12&category=${category.value}`);
      resources.push(datas);
    };
    const chageParams = async (item) => {
      page.value = 0;
      if (category.value == item) {
        refresh();
      } else {
        category.value = item;
        resources.splice(0, -1);
        const datas = await $fetch(`/api/assets/resource?page=${page.value}&size=12&category=${category.value}`);
        resources.push(datas);
      }
    };
    const __returned__ = { categories, resources, refresh, page, category, viewMore, chageParams };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Html = __vite_ssr_import_5__.resolveComponent("Html");
  const _component_Head = __vite_ssr_import_5__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_5__.resolveComponent("Title");
  const _component_Tab = __vite_ssr_import_2__.default;
  const _component_NuxtLink = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Html, { lang: "en" }, {
    default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_6__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_5__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(__vite_ssr_import_6__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_5__.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Leafage - Resource`);
                  } else {
                    return [
                      __vite_ssr_import_5__.createTextVNode("Leafage - Resource")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                __vite_ssr_import_5__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createTextVNode("Leafage - Resource")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_5__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createTextVNode("Leafage - Resource")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Tab, {
    onChageParams: $setup.chageParams,
    datas: $setup.categories
  }, null, _parent));
  _push(`<div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList($setup.resources, (data) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_NuxtLink, {
      to: "/resource/detail/" + data.code,
      class: "w-full group"
    }, {
      default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="w-full aspect-w-4 aspect-h-5 bg-gray-300 overflow-hidden border"${_scopeId}><img${__vite_ssr_import_6__.ssrRenderAttr("src", data.cover)}${__vite_ssr_import_6__.ssrRenderAttr("alt", data.title)} class="w-full h-full object-center group-hover:opacity-75" height="100%" width="100%"${_scopeId}></div><p class="my-2 text-base font-medium text-gray-800 dark:text-gray-300 group-hover:underline"${_scopeId}>${__vite_ssr_import_6__.ssrInterpolate(data.title)}</p><div class="flex justify-between text-sm text-gray-600 dark:text-gray-400"${_scopeId}><span${_scopeId}>${__vite_ssr_import_6__.ssrInterpolate(new Date(data.modifyTime).toLocaleDateString())}</span><div${_scopeId}><div class="inline-flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye mr-1"${_scopeId}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"${_scopeId}></path><circle cx="12" cy="12" r="3"${_scopeId}></circle></svg> ${__vite_ssr_import_6__.ssrInterpolate(data.viewed)}</div><div class="inline-flex items-center mx-4"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud mr-1"${_scopeId}><polyline points="8 17 12 21 16 17"${_scopeId}></polyline><line x1="12" y1="12" x2="12" y2="21"${_scopeId}></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"${_scopeId}></path></svg> ${__vite_ssr_import_6__.ssrInterpolate(data.downloads)}</div></div></div>`);
        } else {
          return [
            __vite_ssr_import_5__.createVNode("div", { class: "w-full aspect-w-4 aspect-h-5 bg-gray-300 overflow-hidden border" }, [
              __vite_ssr_import_5__.createVNode("img", {
                src: data.cover,
                alt: data.title,
                class: "w-full h-full object-center group-hover:opacity-75",
                height: "100%",
                width: "100%"
              }, null, 8, ["src", "alt"])
            ]),
            __vite_ssr_import_5__.createVNode("p", { class: "my-2 text-base font-medium text-gray-800 dark:text-gray-300 group-hover:underline" }, __vite_ssr_import_5__.toDisplayString(data.title), 1),
            __vite_ssr_import_5__.createVNode("div", { class: "flex justify-between text-sm text-gray-600 dark:text-gray-400" }, [
              __vite_ssr_import_5__.createVNode("span", null, __vite_ssr_import_5__.toDisplayString(new Date(data.modifyTime).toLocaleDateString()), 1),
              __vite_ssr_import_5__.createVNode("div", null, [
                __vite_ssr_import_5__.createVNode("div", { class: "inline-flex items-center" }, [
                  (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "feather feather-eye mr-1"
                  }, [
                    __vite_ssr_import_5__.createVNode("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
                    __vite_ssr_import_5__.createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "3"
                    })
                  ])),
                  __vite_ssr_import_5__.createTextVNode(" " + __vite_ssr_import_5__.toDisplayString(data.viewed), 1)
                ]),
                __vite_ssr_import_5__.createVNode("div", { class: "inline-flex items-center mx-4" }, [
                  (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "feather feather-download-cloud mr-1"
                  }, [
                    __vite_ssr_import_5__.createVNode("polyline", { points: "8 17 12 21 16 17" }),
                    __vite_ssr_import_5__.createVNode("line", {
                      x1: "12",
                      y1: "12",
                      x2: "12",
                      y2: "21"
                    }),
                    __vite_ssr_import_5__.createVNode("path", { d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" })
                  ])),
                  __vite_ssr_import_5__.createTextVNode(" " + __vite_ssr_import_5__.toDisplayString(data.downloads), 1)
                ])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="text-center my-6 text-gray-400"><button type="button" class="font-semibold hover:text-gray-600 px-2 py-1 rounded focus:outline-none"> View More <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down mx-auto"><polyline points="7 6 12 11 17 6"></polyline></svg></button></div></div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resource/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/resource/index.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/about/index.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6141f3ee = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}><p> 项目中的接口可以直接替换为自己的服务接口，后端服务： <a href="https://github.com/little3201/leafage-basic" target="_blank">leafage-basic</a>，希望大家使用本项目的同时也能一起学习，分享。另外有一个 <a href="https://console.leafage.top" target="_blank">后台管理</a> 系统。 </p><p class="text-base"> 项目开发秉持整洁、高质量、规范的代码，尽可能的减少代码来实现功能；项目所有样式设置均直接使用 tailwindcss 直接在标签上进性设置， 但尽可能在布局上（页边距、颜色、边框、字体等）采用一致的设置； </p><span class="font-semibold text-lg">本站使用到的一些技术、工具主要有：</span><ol><li>nuxt3 —— 开发框架；</li><li>tailwindcss(plugins: typography、aspect-ratio) —— 样式、排版优化、图片比例；</li><li>marked.js(plugins: marked-extended-tables) —— markdown解析、表格支持；</li><li>hightlight.js —— 代码高亮（使用ir-black）；</li><li>vue-gtag-next —— google tag manager；</li></ol><p class="font-semibold"> 近期更新请查看 `)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    title: "更新日志",
    to: "/about/record"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`更新日志`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("更新日志")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`。 </p></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/other/leafage/leafage-pw/pages/about/index.vue"]]);
}


// --------------------
// Request: /pages/about/profile.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4ad98a9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><p>一个 Java 程序员，爱折腾，但不闹腾，</p><p>想法很多，并非全是空想，</p><p>在很多方面，无知，</p><p>但也无畏。</p><br><p>还在脱贫攻坚的路上，</p><p>还在默默地挣扎着、坚持着</p><p>还在周期性吐槽，厌恶着很多的不平，</p><p>但，也还在努力改变着，</p><p>也还向往着诗和远方，</p><p>也还憧憬着大山大河，</p><p>也还相信着很多很多。</p></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about/profile.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/other/leafage/leafage-pw/pages/about/profile.vue"]]);
}


// --------------------
// Request: /pages/about/record.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_412f35a6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "record",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { data: datas } = ([__temp, __restore] = __vite_ssr_import_1__.withAsyncContext(() => __vite_ssr_import_0__.useAsyncData("record", () => $fetch(`/api/assets/record`))), __temp = await __temp, __restore(), __temp);
    const __returned__ = { datas };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "relative my-4" }, _attrs))}><div class="border-r border-dotted border-gray-500 absolute h-full top-4" style="${__vite_ssr_import_3__.ssrRenderStyle({ "left": "5.5px" })}"></div><!--[-->`);
  __vite_ssr_import_3__.ssrRenderList($setup.datas, (record, index) => {
    _push(`<div><div class="flex items-center"><span class="${__vite_ssr_import_3__.ssrRenderClass([{ "bg-green-500": record.type === "features", "bg-yellow-500": record.type === "bugfix" }, "rounded-full h-3 w-3 z-0"])}"></span><span class="ml-4 font-semibold text-base">${__vite_ssr_import_3__.ssrInterpolate(record.date)}</span></div><div class="ml-10"><ol><!--[-->`);
    __vite_ssr_import_3__.ssrRenderList(record.items, (content, idx) => {
      _push(`<li>${__vite_ssr_import_3__.ssrInterpolate(content)}</li>`);
    });
    _push(`<!--]--></ol></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/record.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/about/record.vue"]]);
;
}


// --------------------
// Request: /pages/about.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/about.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2f038ecd)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a93ccd0b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Html = __vite_ssr_import_1__.resolveComponent("Html")
  const _component_Head = __vite_ssr_import_1__.resolveComponent("Head")
  const _component_Title = __vite_ssr_import_1__.resolveComponent("Title")
  const _component_NuxtLink = __vite_ssr_import_0__.default
  const _component_NuxtChild = __vite_ssr_import_1__.resolveComponent("NuxtChild")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)} data-v-0a606064>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Html, { lang: 'en' }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`Leafage - About`)
                  } else {
                    return [
                      __vite_ssr_import_1__.createTextVNode("Leafage - About")
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_1__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_1__.withCtx(() => [
                    __vite_ssr_import_1__.createTextVNode("Leafage - About")
                  ]),
                  _: 1 /* STABLE */
                })
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_1__.withCtx(() => [
              __vite_ssr_import_1__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_1__.withCtx(() => [
                  __vite_ssr_import_1__.createTextVNode("Leafage - About")
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="lg:flex lg:border-t border-gray-900 dark:divide-gray-400 dark:border-gray-300" data-v-0a606064><div class="lg:divide-y lg:divide-gray-300 lg:dark:divide-gray-400 text-center lg:mr-4 lg:w-48 lg:py-6 flex border border-gray-900 dark:border-gray-300 lg:border-none lg:block flex-none overflow-x-auto dark:text-gray-300" data-v-0a606064>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    title: "关于网站",
    class: "w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900",
    to: "/about"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`关于网站`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("关于网站")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    title: "关于作者",
    class: "w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900",
    to: "/about/profile"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`关于作者`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("关于作者")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    title: "更新日志",
    class: "w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900",
    to: "/about/record"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`更新日志`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("更新日志")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="my-4 mx-auto w-full lg:border-l" data-v-0a606064><article class="prose dark:text-gray-300 mx-auto" data-v-0a606064>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtChild, null, null, _parent))
  _push(`</article></div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/about.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0a606064"],['__file',"D:/other/leafage/leafage-pw/pages/about.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /components/Gallery.vue ($id_c2fdb584)
// - /components/Tab.vue ($id_1787b084)
// - /components/Item.vue ($id_3172b1a7)
// - /components/layout/Aside.vue ($id_fdfe0ef3)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Gallery.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Tab.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Item.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/layout/Aside.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_6__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const tabs = __vite_ssr_import_0__.ref([
      {
        code: "likes",
        alias: "Trending"
      },
      {
        code: "viewed",
        alias: "Most View"
      },
      {
        code: "comment",
        alias: "Popular"
      }
    ]);
    let sort = __vite_ssr_import_0__.ref("likes");
    let page = __vite_ssr_import_0__.ref(0);
    const [{ data: galleryPosts }, { data: posts, refresh }] = ([__temp, __restore] = __vite_ssr_import_6__.withAsyncContext(() => Promise.all([
      __vite_ssr_import_1__.useFetch(`/api/assets/posts?page=0&size=6`),
      __vite_ssr_import_1__.useFetch(`/api/assets/posts?page=0&size=12&sort=likes`)
    ])), __temp = await __temp, __restore(), __temp);
    const viewMore = async () => {
      page.value = page.value + 1;
      const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&sort=${sort.value}`);
      posts.push(datas);
    };
    const chageParams = async (item) => {
      page.value = 0;
      if (sort.value == item) {
        refresh();
      } else {
        sort.value = item;
        posts.splice(0, -1);
        const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&sort=${sort.value}`);
        posts.push(datas);
      }
    };
    const __returned__ = { tabs, sort, page, galleryPosts, posts, refresh, viewMore, chageParams };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Html = __vite_ssr_import_7__.resolveComponent("Html");
  const _component_Head = __vite_ssr_import_7__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_7__.resolveComponent("Title");
  const _component_Meta = __vite_ssr_import_7__.resolveComponent("Meta");
  const _component_Gallery = __vite_ssr_import_2__.default;
  const _component_Tab = __vite_ssr_import_3__.default;
  const _component_Item = __vite_ssr_import_4__.default;
  const _component_LayoutAside = __vite_ssr_import_5__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Html, { lang: "en" }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_8__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_7__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(__vite_ssr_import_8__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_7__.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Leafage - Home`);
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("Leafage - Home")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(__vite_ssr_import_8__.ssrRenderComponent(_component_Meta, {
                name: "description",
                content: "Leafage \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u535A\u5BA2\u7F51\u7AD9\uFF0C\u8BB0\u5F55\u81EA\u5DF1\u5E73\u65F6\u5B66\u4E60\u603B\u7ED3\u3001\u5DE5\u4F5C\u4E2D\u9047\u5230\u7684\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6CD5\u7684\u4E00\u4E2A\u7ECF\u9A8C\u8BB0\u5F55\u3002"
              }, null, _parent3, _scopeId2));
              _push3(__vite_ssr_import_8__.ssrRenderComponent(_component_Meta, {
                name: "keywords",
                content: "leafage, \u535A\u5BA2, \u7ECF\u9A8C\u8BB0\u5F55, \u5B66\u4E60\u603B\u7ED3, nuxt, vue, ts, tailwindcss, java, js"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                __vite_ssr_import_7__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("Leafage - Home")
                  ]),
                  _: 1
                }),
                __vite_ssr_import_7__.createVNode(_component_Meta, {
                  name: "description",
                  content: "Leafage \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u535A\u5BA2\u7F51\u7AD9\uFF0C\u8BB0\u5F55\u81EA\u5DF1\u5E73\u65F6\u5B66\u4E60\u603B\u7ED3\u3001\u5DE5\u4F5C\u4E2D\u9047\u5230\u7684\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6CD5\u7684\u4E00\u4E2A\u7ECF\u9A8C\u8BB0\u5F55\u3002"
                }),
                __vite_ssr_import_7__.createVNode(_component_Meta, {
                  name: "keywords",
                  content: "leafage, \u535A\u5BA2, \u7ECF\u9A8C\u8BB0\u5F55, \u5B66\u4E60\u603B\u7ED3, nuxt, vue, ts, tailwindcss, java, js"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_7__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_7__.withCtx(() => [
              __vite_ssr_import_7__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("Leafage - Home")
                ]),
                _: 1
              }),
              __vite_ssr_import_7__.createVNode(_component_Meta, {
                name: "description",
                content: "Leafage \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u535A\u5BA2\u7F51\u7AD9\uFF0C\u8BB0\u5F55\u81EA\u5DF1\u5E73\u65F6\u5B66\u4E60\u603B\u7ED3\u3001\u5DE5\u4F5C\u4E2D\u9047\u5230\u7684\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6CD5\u7684\u4E00\u4E2A\u7ECF\u9A8C\u8BB0\u5F55\u3002"
              }),
              __vite_ssr_import_7__.createVNode(_component_Meta, {
                name: "keywords",
                content: "leafage, \u535A\u5BA2, \u7ECF\u9A8C\u8BB0\u5F55, \u5B66\u4E60\u603B\u7ED3, nuxt, vue, ts, tailwindcss, java, js"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="grid lg:grid-rows-2 lg:grid-cols-4 gap-6 mb-8"><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.galleryPosts, (data, index) => {
    _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Gallery, {
      data,
      aspect: index < 4 && index > 1 ? true : false
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="flex justify-between space-x-8 dark:text-gray-300"><div class="w-full">`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Tab, {
    onChageParams: $setup.chageParams,
    datas: $setup.tabs
  }, null, _parent));
  _push(`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-3 my-8"><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.posts, (post) => {
    _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Item, { data: post }, null, _parent));
  });
  _push(`<!--]--></div><div class="text-center my-6 text-gray-400"><button type="button" class="font-semibold hover:text-gray-600 px-2 py-1 rounded focus:outline-none"> View More <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down mx-auto"><polyline points="7 6 12 11 17 6"></polyline></svg></button></div></div>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_LayoutAside, { class: "hidden lg:block" }, null, _parent));
  _push(`</div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/index.vue"]]);
;
}


// --------------------
// Request: /pages/posts/detail/[code].vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /utils/ck.ts ($id_181057e1)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// - /components/comment/Form.vue ($id_d8ab6861)
// - /components/comment/Item.vue ($id_b5eb49c9)
// - /components/Preview.vue ($id_ec235e81)
// --------------------
const $id_21dbc687 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __nuxt_component_1_lazy = __vite_ssr_import_3__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/comment/Form.vue'))
const __nuxt_component_2_lazy = __vite_ssr_import_3__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/comment/Item.vue'))
const __nuxt_component_3_lazy = __vite_ssr_import_3__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Preview.vue'))
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/utils/ck.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "[code]",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { params } = __vite_ssr_import_0__.useRoute();
    const { $marked } = __vite_ssr_import_0__.useNuxtApp();
    const renderedHtmlRef = __vite_ssr_import_1__.ref();
    const isShow = __vite_ssr_import_1__.ref(true);
    let view = __vite_ssr_import_1__.reactive({
      isShow: false,
      url: ""
    });
    const { data } = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_0__.useAsyncData("details", () => $fetch(`/api/assets/posts/${params.code}`))), __temp = await __temp, __restore(), __temp);
    const [{ data: previous }, { data: next }, { data: comments }] = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => Promise.all([
      __vite_ssr_import_0__.useFetch(`/api/assets/posts/${params.code}`),
      __vite_ssr_import_0__.useFetch(`/api/assets/posts/${params.code}`),
      __vite_ssr_import_0__.useFetch(`/api/assets/comment/${params.code}`)
    ])), __temp = await __temp, __restore(), __temp);
    __vite_ssr_import_1__.onMounted(() => {
      addImgClickEvent();
    });
    const renderedHtml = (content) => {
      if (content && content.length > 0) {
        return $marked.parse(content).replace(/href="/gi, 'target="_blank" href="');
      }
      return "";
    };
    const addImgClickEvent = () => {
      if (renderedHtmlRef) {
        let imgs = renderedHtmlRef.value.querySelectorAll("img");
        if (imgs.length > 0) {
          setTimeout(() => {
            for (let i = 0, len = imgs.length; i < len; i++) {
              imgs[i].onclick = () => {
                const src = imgs[i].getAttribute("src");
                previewOperation(true, src);
              };
            }
          }, 600);
        }
      }
    };
    const previewOperation = (show, url) => {
      if (show) {
        view.url = url;
      }
      view.isShow = show;
    };
    const likes = async () => {
      await $fetch(`/api/check`).then(() => {
        const count = $fetch(`/api/assets/posts/${params.code}/like`, {
          method: "PATCH",
          headers: {
            "X-CSRF-TOKEN": __vite_ssr_import_5__.getCookie("XSRF-TOKEN")
          },
          credentials: "include"
        });
        data.value.likes = count;
      });
    };
    const __returned__ = { params, $marked, renderedHtmlRef, isShow, view, data, previous, next, comments, renderedHtml, addImgClickEvent, previewOperation, likes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Html = __vite_ssr_import_6__.resolveComponent("Html");
  const _component_Head = __vite_ssr_import_6__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_6__.resolveComponent("Title");
  const _component_Meta = __vite_ssr_import_6__.resolveComponent("Meta");
  const _component_NuxtLink = __vite_ssr_import_2__.default;
  const _component_LazyCommentForm = __nuxt_component_1_lazy;
  const _component_LazyCommentItem = __nuxt_component_2_lazy;
  const _component_LazyPreview = __nuxt_component_3_lazy;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Html, { lang: "en" }, {
    default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_7__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_6__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(__vite_ssr_import_7__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_6__.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Leafage - ${__vite_ssr_import_7__.ssrInterpolate($setup.data.title)}`);
                  } else {
                    return [
                      __vite_ssr_import_6__.createTextVNode("Leafage - " + __vite_ssr_import_6__.toDisplayString($setup.data.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(__vite_ssr_import_7__.ssrRenderComponent(_component_Meta, {
                name: "description",
                content: $setup.data.title
              }, null, _parent3, _scopeId2));
              _push3(__vite_ssr_import_7__.ssrRenderComponent(_component_Meta, {
                name: "keywords",
                content: $setup.data.tags.toString()
              }, null, _parent3, _scopeId2));
            } else {
              return [
                __vite_ssr_import_6__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_6__.withCtx(() => [
                    __vite_ssr_import_6__.createTextVNode("Leafage - " + __vite_ssr_import_6__.toDisplayString($setup.data.title), 1)
                  ]),
                  _: 1
                }),
                __vite_ssr_import_6__.createVNode(_component_Meta, {
                  name: "description",
                  content: $setup.data.title
                }, null, 8, ["content"]),
                __vite_ssr_import_6__.createVNode(_component_Meta, {
                  name: "keywords",
                  content: $setup.data.tags.toString()
                }, null, 8, ["content"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_6__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_6__.withCtx(() => [
              __vite_ssr_import_6__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_6__.withCtx(() => [
                  __vite_ssr_import_6__.createTextVNode("Leafage - " + __vite_ssr_import_6__.toDisplayString($setup.data.title), 1)
                ]),
                _: 1
              }),
              __vite_ssr_import_6__.createVNode(_component_Meta, {
                name: "description",
                content: $setup.data.title
              }, null, 8, ["content"]),
              __vite_ssr_import_6__.createVNode(_component_Meta, {
                name: "keywords",
                content: $setup.data.tags.toString()
              }, null, 8, ["content"])
            ]),
            _: 2
          }, 1024)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex space-x-8 border-t border-gray-900 dark:border-gray-300"><div class="my-6 w-full"><article><h2 class="text-3xl text-center dark:text-gray-300">${__vite_ssr_import_7__.ssrInterpolate($setup.data.title)}</h2><div class="my-6 max-w-none prose dark:text-gray-300 lg:prose-lg">${$setup.renderedHtml($setup.data.content)}</div></article><div class="text-sm text-gray-600 dark:text-gray-400 my-2 md:flex"><div class="flex space-x-4 text-sm uppercase"><span>${__vite_ssr_import_7__.ssrInterpolate($setup.data.category)}</span><span>${__vite_ssr_import_7__.ssrInterpolate(new Date($setup.data.modifyTime).toLocaleString())}</span></div><div class="flex space-x-4 my-2 md:my-0 md:mx-4"><div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${__vite_ssr_import_7__.ssrInterpolate($setup.data.viewed)}</div><div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square mr-1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${__vite_ssr_import_7__.ssrInterpolate($setup.data.comment)}</div><div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up mr-1"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg> ${__vite_ssr_import_7__.ssrInterpolate($setup.data.likes)}</div></div></div><div class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300"><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.data.tags, (tag, index) => {
    _push(`<span class="text-sm bg-gray-200 dark:bg-gray-600 rounded-md px-2 py-px">${__vite_ssr_import_7__.ssrInterpolate(tag)}</span>`);
  });
  _push(`<!--]--></div><section class="flex items-center justify-center my-6"><span class="text-gray-400">\u5982\u6709\u5E2E\u52A9\uFF0C\u70B9\u8D5E\u9F13\u52B1\u4E00\u4E0B\u5427\uFF01</span><button type="button" class="rounded-full p-2 border dark:border-gray-400 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:border-gray-600 dark:hover:border-gray-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up cursor-pointer"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></button></section><div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 my-4 p-4 rounded"><ul class="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 text-sm font-bold">`);
  if ($setup.previous && $setup.previous.code) {
    _push(`<li>`);
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
      title: $setup.previous.title,
      to: "/posts/detail/" + $setup.previous.code,
      class: "flex items-center py-2 transform hover:-translate-x-2 transition duration-500"
    }, {
      default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<svg style="${__vite_ssr_import_7__.ssrRenderStyle($setup.previous.code && $setup.previous.code.length > 0 ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"${_scopeId}><polyline points="15 18 9 12 15 6"${_scopeId}></polyline></svg> ${__vite_ssr_import_7__.ssrInterpolate($setup.previous.title)}`);
        } else {
          return [
            __vite_ssr_import_6__.withDirectives((__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-chevron-left"
            }, [
              __vite_ssr_import_6__.createVNode("polyline", { points: "15 18 9 12 15 6" })
            ], 512)), [
              [__vite_ssr_import_6__.vShow, $setup.previous.code && $setup.previous.code.length > 0]
            ]),
            __vite_ssr_import_6__.createTextVNode(" " + __vite_ssr_import_6__.toDisplayString($setup.previous.title), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.next && $setup.next.code) {
    _push(`<li class="flex items-center justify-end">`);
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
      title: $setup.next.title,
      to: "/posts/detail/" + $setup.next.code,
      class: "flex items-center py-2 transform hover:translate-x-2 transition duration-500"
    }, {
      default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${__vite_ssr_import_7__.ssrInterpolate($setup.next.title)} <svg style="${__vite_ssr_import_7__.ssrRenderStyle($setup.next.code && $setup.next.code.length > 0 ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"${_scopeId}><polyline points="9 18 15 12 9 6"${_scopeId}></polyline></svg>`);
        } else {
          return [
            __vite_ssr_import_6__.createTextVNode(__vite_ssr_import_6__.toDisplayString($setup.next.title) + " ", 1),
            __vite_ssr_import_6__.withDirectives((__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-chevron-right"
            }, [
              __vite_ssr_import_6__.createVNode("polyline", { points: "9 18 15 12 9 6" })
            ], 512)), [
              [__vite_ssr_import_6__.vShow, $setup.next.code && $setup.next.code.length > 0]
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div><p class="mt-8 text-lg dark:text-gray-300">\u6DFB\u52A0\u8BC4\u8BBA\uFF1A</p>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_LazyCommentForm, {
    isShow: $setup.isShow,
    code: $setup.data.code
  }, null, _parent));
  _push(`<!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.comments, (comment) => {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_LazyCommentItem, { data: comment }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_LazyPreview, {
    isShow: $setup.view.isShow,
    onCloseAction: $setup.previewOperation
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${__vite_ssr_import_7__.ssrRenderAttr("src", $setup.view.url)} alt="preview" class="w-full h-full" width="1366" height="768"${_scopeId}>`);
      } else {
        return [
          __vite_ssr_import_6__.createVNode("img", {
            src: $setup.view.url,
            alt: "preview",
            class: "w-full h-full",
            width: "1366",
            height: "768"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/detail/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/posts/detail/[code].vue"]]);
;
}


// --------------------
// Request: /pages/posts/index.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Tab.vue ($id_1787b084)
// - /components/Item.vue ($id_3172b1a7)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_763a1eda = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Tab.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Item.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const route = __vite_ssr_import_0__.useRoute();
    const [{ data: categories }, { data: posts, refresh }] = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => Promise.all([
      __vite_ssr_import_0__.useFetch(`/api/assets/category`),
      __vite_ssr_import_0__.useFetch(`/api/assets/posts?page=0&size=12&sort=likes`)
    ])), __temp = await __temp, __restore(), __temp);
    let page = __vite_ssr_import_1__.ref(0);
    let category = __vite_ssr_import_1__.ref(route.params.category || categories[0]);
    const viewMore = async () => {
      page.value = page.value + 1;
      const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&category=${category.value}`);
      posts.push(datas);
    };
    const chageParams = async (item) => {
      page.value = 0;
      if (category.value == item) {
        refresh();
      } else {
        category.value = item;
        posts.splice(0, -1);
        const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&category=${category.value}`);
        posts.push(datas);
      }
    };
    const __returned__ = { route, categories, posts, refresh, page, category, viewMore, chageParams };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Html = __vite_ssr_import_5__.resolveComponent("Html");
  const _component_Head = __vite_ssr_import_5__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_5__.resolveComponent("Title");
  const _component_Tab = __vite_ssr_import_2__.default;
  const _component_Item = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Html, { lang: "en" }, {
    default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_6__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_5__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(__vite_ssr_import_6__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_5__.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Leafage - Posts`);
                  } else {
                    return [
                      __vite_ssr_import_5__.createTextVNode("Leafage - Posts")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                __vite_ssr_import_5__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createTextVNode("Leafage - Posts")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_5__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createTextVNode("Leafage - Posts")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Tab, {
    onChageParams: $setup.chageParams,
    datas: $setup.categories
  }, null, _parent));
  _push(`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-8"><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList($setup.posts, (post) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Item, { data: post }, null, _parent));
  });
  _push(`<!--]--></div><div class="text-center my-6 text-gray-400"><button type="button" class="font-semibold hover:text-gray-600 px-2 py-1 rounded focus:outline-none"> View More <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down mx-auto"><polyline points="7 6 12 11 17 6"></polyline></svg></button></div></div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/posts/index.vue"]]);
;
}


// --------------------
// Request: /pages/resource/detail/[code].vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /utils/ck.ts ($id_181057e1)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a7a7de25 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/utils/ck.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "[code]",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { params } = __vite_ssr_import_0__.useRoute();
    const { data } = ([__temp, __restore] = __vite_ssr_import_1__.withAsyncContext(() => __vite_ssr_import_0__.useAsyncData("details", () => $fetch(`/api/assets/resource/${params.code}`))), __temp = await __temp, __restore(), __temp);
    const download = async () => {
      await $fetch(`/api/assets/posts/${params.code}/like`, {
        method: "GET",
        headers: {
          "X-CSRF-TOKEN": __vite_ssr_import_2__.getCookie("XSRF-TOKEN")
        },
        credentials: "include"
      });
    };
    const downloadFile = (blob, fileName) => {
      const anchor = document.createElement("a");
      anchor.href = URL.createObjectURL(blob);
      anchor.download = fileName || "";
      let event;
      if (window.MouseEvent) {
        event = new MouseEvent("click");
      } else {
        event = document.createEvent("MouseEvents");
      }
      anchor.dispatchEvent(event);
    };
    const __returned__ = { params, data, download, downloadFile };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "border-t border-gray-900 dark:border-gray-300 my-6" }, _attrs))}><article class="my-6"><h2 class="my-4 text-3xl font-semibold text-center dark:text-gray-300">${__vite_ssr_import_4__.ssrInterpolate($setup.data.title)}</h2><div class="dark:text-gray-300"><figure class="w-72 h-96 mx-auto border"><img${__vite_ssr_import_4__.ssrRenderAttr("src", $setup.data.cover)}${__vite_ssr_import_4__.ssrRenderAttr("alt", $setup.data.title)} class="w-72 h-96" height="350" width="278"></figure><div class="text-sm text-gray-600 dark:text-gray-400 my-2 md:flex justify-center"><span class="my-2">${__vite_ssr_import_4__.ssrInterpolate(new Date($setup.data.modifyTime).toLocaleString())}</span><div class="flex space-x-4 my-2 md:my-0 md:mx-4"><span class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${__vite_ssr_import_4__.ssrInterpolate($setup.data.viewed)}</span><span class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud mr-1"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg> ${__vite_ssr_import_4__.ssrInterpolate($setup.data.downloads)}</span></div></div><p class="prose mx-auto lg:prose-lg dark:text-gray-300">${__vite_ssr_import_4__.ssrInterpolate($setup.data.description)}</p></div></article><section class="flex items-center justify-center my-6"><button type="button" class="rounded-md px-4 py-2 border border-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-100">Download</button></section></div>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resource/detail/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/resource/detail/[code].vue"]]);
;
}


// --------------------
// Request: /pages/resource/index.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs ($id_f543faa8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Tab.vue ($id_1787b084)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c34e3eb7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Tab.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const [{ data: categories }, { data: resources, refresh }] = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => Promise.all([
      __vite_ssr_import_0__.useFetch(`/api/assets/category`),
      __vite_ssr_import_0__.useFetch(`/api/assets/resource?page=0&size=12&sort=likes`)
    ])), __temp = await __temp, __restore(), __temp);
    let page = __vite_ssr_import_1__.ref(0);
    let category = __vite_ssr_import_1__.ref(categories[0]);
    const viewMore = async () => {
      page.value = page.value + 1;
      const datas = await $fetch(`/api/assets/resource?page=${page.value}&size=12&category=${category.value}`);
      resources.push(datas);
    };
    const chageParams = async (item) => {
      page.value = 0;
      if (category.value == item) {
        refresh();
      } else {
        category.value = item;
        resources.splice(0, -1);
        const datas = await $fetch(`/api/assets/resource?page=${page.value}&size=12&category=${category.value}`);
        resources.push(datas);
      }
    };
    const __returned__ = { categories, resources, refresh, page, category, viewMore, chageParams };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Html = __vite_ssr_import_5__.resolveComponent("Html");
  const _component_Head = __vite_ssr_import_5__.resolveComponent("Head");
  const _component_Title = __vite_ssr_import_5__.resolveComponent("Title");
  const _component_Tab = __vite_ssr_import_2__.default;
  const _component_NuxtLink = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Html, { lang: "en" }, {
    default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_6__.ssrRenderComponent(_component_Head, null, {
          default: __vite_ssr_import_5__.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(__vite_ssr_import_6__.ssrRenderComponent(_component_Title, null, {
                default: __vite_ssr_import_5__.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Leafage - Resource`);
                  } else {
                    return [
                      __vite_ssr_import_5__.createTextVNode("Leafage - Resource")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                __vite_ssr_import_5__.createVNode(_component_Title, null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createTextVNode("Leafage - Resource")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_5__.createVNode(_component_Head, null, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode(_component_Title, null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createTextVNode("Leafage - Resource")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Tab, {
    onChageParams: $setup.chageParams,
    datas: $setup.categories
  }, null, _parent));
  _push(`<div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList($setup.resources, (data) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_NuxtLink, {
      to: "/resource/detail/" + data.code,
      class: "w-full group"
    }, {
      default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="w-full aspect-w-4 aspect-h-5 bg-gray-300 overflow-hidden border"${_scopeId}><img${__vite_ssr_import_6__.ssrRenderAttr("src", data.cover)}${__vite_ssr_import_6__.ssrRenderAttr("alt", data.title)} class="w-full h-full object-center group-hover:opacity-75" height="100%" width="100%"${_scopeId}></div><p class="my-2 text-base font-medium text-gray-800 dark:text-gray-300 group-hover:underline"${_scopeId}>${__vite_ssr_import_6__.ssrInterpolate(data.title)}</p><div class="flex justify-between text-sm text-gray-600 dark:text-gray-400"${_scopeId}><span${_scopeId}>${__vite_ssr_import_6__.ssrInterpolate(new Date(data.modifyTime).toLocaleDateString())}</span><div${_scopeId}><div class="inline-flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye mr-1"${_scopeId}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"${_scopeId}></path><circle cx="12" cy="12" r="3"${_scopeId}></circle></svg> ${__vite_ssr_import_6__.ssrInterpolate(data.viewed)}</div><div class="inline-flex items-center mx-4"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud mr-1"${_scopeId}><polyline points="8 17 12 21 16 17"${_scopeId}></polyline><line x1="12" y1="12" x2="12" y2="21"${_scopeId}></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"${_scopeId}></path></svg> ${__vite_ssr_import_6__.ssrInterpolate(data.downloads)}</div></div></div>`);
        } else {
          return [
            __vite_ssr_import_5__.createVNode("div", { class: "w-full aspect-w-4 aspect-h-5 bg-gray-300 overflow-hidden border" }, [
              __vite_ssr_import_5__.createVNode("img", {
                src: data.cover,
                alt: data.title,
                class: "w-full h-full object-center group-hover:opacity-75",
                height: "100%",
                width: "100%"
              }, null, 8, ["src", "alt"])
            ]),
            __vite_ssr_import_5__.createVNode("p", { class: "my-2 text-base font-medium text-gray-800 dark:text-gray-300 group-hover:underline" }, __vite_ssr_import_5__.toDisplayString(data.title), 1),
            __vite_ssr_import_5__.createVNode("div", { class: "flex justify-between text-sm text-gray-600 dark:text-gray-400" }, [
              __vite_ssr_import_5__.createVNode("span", null, __vite_ssr_import_5__.toDisplayString(new Date(data.modifyTime).toLocaleDateString()), 1),
              __vite_ssr_import_5__.createVNode("div", null, [
                __vite_ssr_import_5__.createVNode("div", { class: "inline-flex items-center" }, [
                  (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "feather feather-eye mr-1"
                  }, [
                    __vite_ssr_import_5__.createVNode("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
                    __vite_ssr_import_5__.createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "3"
                    })
                  ])),
                  __vite_ssr_import_5__.createTextVNode(" " + __vite_ssr_import_5__.toDisplayString(data.viewed), 1)
                ]),
                __vite_ssr_import_5__.createVNode("div", { class: "inline-flex items-center mx-4" }, [
                  (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "feather feather-download-cloud mr-1"
                  }, [
                    __vite_ssr_import_5__.createVNode("polyline", { points: "8 17 12 21 16 17" }),
                    __vite_ssr_import_5__.createVNode("line", {
                      x1: "12",
                      y1: "12",
                      x2: "12",
                      y2: "21"
                    }),
                    __vite_ssr_import_5__.createVNode("path", { d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" })
                  ])),
                  __vite_ssr_import_5__.createTextVNode(" " + __vite_ssr_import_5__.toDisplayString(data.downloads), 1)
                ])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="text-center my-6 text-gray-400"><button type="button" class="font-semibold hover:text-gray-600 px-2 py-1 rounded focus:outline-none"> View More <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down mx-auto"><polyline points="7 6 12 11 17 6"></polyline></svg></button></div></div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resource/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/pages/resource/index.vue"]]);
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_f5ce0791 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_7fc04b25 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /plugins/md.ts
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs ($id_0e37f632)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/marked/lib/marked.esm.js ($id_9daa9720)
// - /node_modules/marked-extended-tables/src/index.js ($id_9fcb6550)
// - /node_modules/highlight.js/es/core.js ($id_ad272523)
// - /node_modules/highlight.js/styles/ir-black.css ($id_200166cb)
// - /node_modules/highlight.js/es/languages/bash.js ($id_76d8b95f)
// - /node_modules/highlight.js/es/languages/dockerfile.js ($id_bf4f1622)
// - /node_modules/highlight.js/es/languages/javascript.js ($id_c5fb8ca0)
// - /node_modules/highlight.js/es/languages/handlebars.js ($id_5226de98)
// - /node_modules/highlight.js/es/languages/java.js ($id_07ae5a7a)
// - /node_modules/highlight.js/es/languages/json.js ($id_b8b3ff38)
// - /node_modules/highlight.js/es/languages/nginx.js ($id_77d4d755)
// - /node_modules/highlight.js/es/languages/shell.js ($id_99470532)
// - /node_modules/highlight.js/es/languages/sql.js ($id_a45313c3)
// - /node_modules/highlight.js/es/languages/typescript.js ($id_18274d27)
// - /node_modules/highlight.js/es/languages/xml.js ($id_27b123e2)
// - /node_modules/highlight.js/es/languages/yaml.js ($id_cf80de99)
// --------------------
const $id_781b912f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/marked/lib/marked.esm.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/marked-extended-tables/src/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/highlight.js/es/core.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/highlight.js/styles/ir-black.css");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/bash.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/dockerfile.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/javascript.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/handlebars.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/java.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/json.js");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/nginx.js");

const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/shell.js");

const __vite_ssr_import_13__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/sql.js");

const __vite_ssr_import_14__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/typescript.js");

const __vite_ssr_import_15__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/xml.js");

const __vite_ssr_import_16__ = await __vite_ssr_import__("/node_modules/highlight.js/es/languages/yaml.js");

__vite_ssr_import_3__.default.registerLanguage("bash", __vite_ssr_import_5__.default);
__vite_ssr_import_3__.default.registerLanguage("dockerfile", __vite_ssr_import_6__.default);
__vite_ssr_import_3__.default.registerLanguage("js", __vite_ssr_import_7__.default);
__vite_ssr_import_3__.default.registerLanguage("json", __vite_ssr_import_10__.default);
__vite_ssr_import_3__.default.registerLanguage("nginx", __vite_ssr_import_11__.default);
__vite_ssr_import_3__.default.registerLanguage("html", __vite_ssr_import_8__.default);
__vite_ssr_import_3__.default.registerLanguage("ts", __vite_ssr_import_14__.default);
__vite_ssr_import_3__.default.registerLanguage("java", __vite_ssr_import_9__.default);
__vite_ssr_import_3__.default.registerLanguage("yaml", __vite_ssr_import_16__.default);
__vite_ssr_import_3__.default.registerLanguage("sql", __vite_ssr_import_13__.default);
__vite_ssr_import_3__.default.registerLanguage("sh", __vite_ssr_import_12__.default);
__vite_ssr_import_3__.default.registerLanguage("xml", __vite_ssr_import_15__.default);
__vite_ssr_import_1__.marked.setOptions({
  renderer: new __vite_ssr_import_1__.marked.Renderer(),
  highlight: function(code, lang) {
    const language = __vite_ssr_import_3__.default.getLanguage(lang) ? lang : "sh";
    return __vite_ssr_import_3__.default.highlight(code, { language }).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  smartLists: true,
  xhtml: true
}).use(__vite_ssr_import_2__.default());
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("marked", __vite_ssr_import_1__.marked);
});
;
}


// --------------------
// Request: /node_modules/marked/lib/marked.esm.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_9daa9720 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

/**
 * @param {string} html
 */
function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;

/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

/**
 * @param {string} base
 * @param {string} href
 */
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function merge(obj) {
  let i = 1,
    target,
    key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) { cells.shift(); }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) { cells.pop(); }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
/**
 * @param {string} pattern
 * @param {number} count
 */
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  let result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];

  return text
    .split('\n')
    .map(node => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }

      const [indentInNode] = matchIndentInNode;

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    })
    .join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic
          ? rtrim(text, '\n')
          : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');

      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');

      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine,
        line, nextLine, rawLine, itemContents, endEarly;

      let bull = cap[1].trim();
      const isordered = bull.length > 1;

      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };

      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);

        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^( {0,${Math.min(3, indent - 1)}})(\`\`\`|~~~)`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found code fences
            if (fencesBeginRegex.test(line)) {
              break;
            }

            // End list item if found start of new heading
            if (this.rules.block.heading.test(line)) {
              break;
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(line)) {
              break;
            }

            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) { // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) { // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else { // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) { // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });

        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();

      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
        const hasMultipleLineBreaks = spacers.every(t => {
          const chars = t.raw.split('');
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = 'paragraph';
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => { return { text: c }; }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];

        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => { return { text: c }; });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inline(item.header[j].text, item.header[j].tokens);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inline(row[k].text, row[k].tokens);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: 'paragraph',
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize
          ? 'text'
          : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : escape(cap[0]))
          : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!(/>$/.test(trimmedUrl))) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src))
        || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;

    const nextChar = match[1] || match[2] || '';

    if (!nextChar || (nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;

      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];

        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) { // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) { // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;

        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = src.slice(1, lLength + match.index + rLength);
          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});

block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;

inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();

inline.emStrong.lDelim = edit(inline.emStrong.lDelim)
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('ref', block._label)
  .getRegex();

inline.nolink = edit(inline.nolink)
  .replace('ref', block._label)
  .getRegex();

inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * smartypants text replacement
 * @param {string} text
 */
function smartypants(text) {
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 * @param {string} text
 */
function mangle(text) {
  let out = '',
    i,
    ch;

  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };

    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n');

    this.blockTokens(src, this.tokens);

    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions
        && this.options.extensions.block
        && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = (cutSrc.length !== src.length);
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped em & strong delimiters
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions
        && this.options.extensions.inline
        && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : escape(code, true))
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + escape(lang, true)
      + '">'
      + (escaped ? code : escape(code, true))
      + '</code></pre>\n';
  }

  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html) {
    return html;
  }

  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>\n`;
  }

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  }

  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }

  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  }

  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? `<${type} align="${flags.align}">`
      : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }

  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }

  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }

  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * @param {string} value
   */
  serialize(value) {
    return value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space': {
          continue;
        }
        case 'hr': {
          out += this.renderer.hr();
          continue;
        }
        case 'heading': {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger);
          continue;
        }
        case 'code': {
          out += this.renderer.code(token.text,
            token.lang,
            token.escaped);
          continue;
        }
        case 'table': {
          header = '';

          // header
          cell = '';
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);

          body = '';
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];

            cell = '';
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case 'blockquote': {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case 'list': {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;

          body = '';
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;

            itemBody = '';
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                  item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                    item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: 'text',
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }

            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }

          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case 'html': {
          // TODO parse inline content if parameter markdown=1
          out += this.renderer.html(token.text);
          continue;
        }
        case 'paragraph': {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case 'text': {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === 'text') {
            token = tokens[++i];
            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }

        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }

    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape': {
          out += renderer.text(token.text);
          break;
        }
        case 'html': {
          out += renderer.html(token.text);
          break;
        }
        case 'link': {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case 'image': {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case 'strong': {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'em': {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'codespan': {
          out += renderer.codespan(token.text);
          break;
        }
        case 'br': {
          out += renderer.br();
          break;
        }
        case 'del': {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'text': {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    const highlight = opt.highlight;
    let tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    const done = function(err) {
      let out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!tokens.length) return done();

    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;

  args.forEach((pack) => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) { // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function(...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) { // Tokenizer Extensions
          if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) { // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) { // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case 'table': {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case 'list': {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) { // Walk any extensions
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};

/**
 * Parse Inline
 * @param {string} src
 */
marked.parseInline = function(src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;

const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = marked;
const parser = Parser.parse;
const lexer = Lexer.lex;


Object.defineProperty(__vite_ssr_exports__, "Lexer", { enumerable: true, configurable: true, get(){ return Lexer }});
Object.defineProperty(__vite_ssr_exports__, "Parser", { enumerable: true, configurable: true, get(){ return Parser }});
Object.defineProperty(__vite_ssr_exports__, "Renderer", { enumerable: true, configurable: true, get(){ return Renderer }});
Object.defineProperty(__vite_ssr_exports__, "Slugger", { enumerable: true, configurable: true, get(){ return Slugger }});
Object.defineProperty(__vite_ssr_exports__, "TextRenderer", { enumerable: true, configurable: true, get(){ return TextRenderer }});
Object.defineProperty(__vite_ssr_exports__, "Tokenizer", { enumerable: true, configurable: true, get(){ return Tokenizer }});
Object.defineProperty(__vite_ssr_exports__, "defaults", { enumerable: true, configurable: true, get(){ return defaults }});
Object.defineProperty(__vite_ssr_exports__, "getDefaults", { enumerable: true, configurable: true, get(){ return getDefaults }});
Object.defineProperty(__vite_ssr_exports__, "lexer", { enumerable: true, configurable: true, get(){ return lexer }});
Object.defineProperty(__vite_ssr_exports__, "marked", { enumerable: true, configurable: true, get(){ return marked }});
Object.defineProperty(__vite_ssr_exports__, "options", { enumerable: true, configurable: true, get(){ return options }});
Object.defineProperty(__vite_ssr_exports__, "parse", { enumerable: true, configurable: true, get(){ return parse }});
Object.defineProperty(__vite_ssr_exports__, "parseInline", { enumerable: true, configurable: true, get(){ return parseInline }});
Object.defineProperty(__vite_ssr_exports__, "parser", { enumerable: true, configurable: true, get(){ return parser }});
Object.defineProperty(__vite_ssr_exports__, "setOptions", { enumerable: true, configurable: true, get(){ return setOptions }});
Object.defineProperty(__vite_ssr_exports__, "use", { enumerable: true, configurable: true, get(){ return use }});
Object.defineProperty(__vite_ssr_exports__, "walkTokens", { enumerable: true, configurable: true, get(){ return walkTokens }});
;
}


// --------------------
// Request: /node_modules/marked-extended-tables/src/index.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_9fcb6550 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/marked-extended-tables/src/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/marked-extended-tables/src/index.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/core.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_ad272523 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/core.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/core.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/styles/ir-black.css
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_200166cb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#000;color:#f8f8f8}.hljs-comment,.hljs-meta,.hljs-quote{color:#7c7c7c}.hljs-keyword,.hljs-name,.hljs-selector-tag,.hljs-tag{color:#96cbfe}.hljs-attribute,.hljs-selector-id{color:#ffffb6}.hljs-addition,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-string{color:#a8ff60}.hljs-subst{color:#daefa3}.hljs-link,.hljs-regexp{color:#e9c062}.hljs-doctag,.hljs-section,.hljs-title,.hljs-type{color:#ffffb6}.hljs-bullet,.hljs-literal,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#c6c5fe}.hljs-deletion,.hljs-number{color:#ff73fd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}";
}


// --------------------
// Request: /node_modules/highlight.js/es/languages/bash.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_76d8b95f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/bash.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/bash.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/dockerfile.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_bf4f1622 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/dockerfile.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/dockerfile.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/javascript.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_c5fb8ca0 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/javascript.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/javascript.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/handlebars.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_5226de98 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/handlebars.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/handlebars.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/java.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_07ae5a7a = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/java.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/java.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/json.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_b8b3ff38 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/json.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/json.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/nginx.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_77d4d755 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/nginx.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/nginx.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/shell.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_99470532 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/shell.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/shell.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/sql.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_a45313c3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/sql.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/sql.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/typescript.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_18274d27 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/typescript.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/typescript.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/xml.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_27b123e2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/xml.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/xml.js\".")
  })


// --------------------
// Request: /node_modules/highlight.js/es/languages/yaml.js
// Parents: 
// - /plugins/md.ts ($id_781b912f)
// Dependencies: 

// --------------------
const $id_cf80de99 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/yaml.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/other/leafage/leafage-pw/node_modules/highlight.js/es/languages/yaml.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/root-component.mjs
// Parents: 
// - D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry ($id_35388f0e)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_a401080b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/root-component.mjs ($id_a401080b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/error-component.mjs ($id_098925f8)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /error.vue ($id_5ce9522e)
// --------------------
const $id_098925f8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/error.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /error.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/error-component.mjs ($id_098925f8)
// Dependencies: 
// - /components/layout/Header.vue ($id_6cd1cf1e)
// - /components/layout/Logo.vue ($id_61e21c70)
// - /components/layout/Footer.vue ($id_6ebd1e8f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5ce9522e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/layout/Header.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/layout/Logo.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/layout/Footer.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "error",
  props: {
    error: Object
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LayoutHeader = __vite_ssr_import_0__.default;
  const _component_LayoutLogo = __vite_ssr_import_1__.default;
  const _component_LayoutFooter = __vite_ssr_import_2__.default;
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "dark:bg-gray-900" }, _attrs))}><header class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">`);
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_LayoutHeader, { class: "hidden sm:flex border-gray-900 dark:border-gray-300 border-b-2" }, null, _parent));
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_LayoutLogo, null, null, _parent));
  _push(`</header><main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="lg:flex items-center justify-center text-center lg:text-left border-t border-black"><img alt="error" class="w-full my-4" src="/svg/error.svg" width="840" height="720"><div><h2 class="text-6xl font-medium my-4">${__vite_ssr_import_5__.ssrInterpolate($props.error.statusCode)}</h2><p class="text-xl lg:text-3xl font-medium">Oops. ${__vite_ssr_import_5__.ssrInterpolate($props.error.statusMessage)}</p><p class="text-lg mt-4 mb-8">You may have mistyped the address or the page may have moved.</p></div></div></main>`);
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/error.vue"]]);
;
}


// --------------------
// Request: /components/layout/Header.vue
// Parents: 
// - /error.vue ($id_5ce9522e)
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/layout/Drawer.vue ($id_f2aab072)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6cd1cf1e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/layout/Drawer.vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "Header",
  setup(__props, { expose }) {
    expose();
    const isSearch = __vite_ssr_import_2__.ref(false);
    const isDark = __vite_ssr_import_2__.ref(false);
    const isShow = __vite_ssr_import_2__.ref(false);
    const theme = () => {
      isDark.value = !isDark.value;
      if (isDark.value) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.removeItem("theme");
        document.documentElement.classList.remove("dark");
      }
    };
    __vite_ssr_import_2__.onBeforeMount(() => {
      if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        isDark.value = true;
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
    const drawerOperation = (show) => {
      isShow.value = show;
    };
    const __returned__ = { isSearch, isDark, isShow, theme, drawerOperation, Drawer: __vite_ssr_import_3__.default };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "flex justify-between items-center mx-4 md:mx-0 py-3 md:py-5 text-gray-900 dark:text-gray-300" }, _attrs))}><button type="button" aria-label="openMenu" class="focus:outline-none md:hidden"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>`);
  _push(__vite_ssr_import_5__.ssrRenderComponent($setup["Drawer"], {
    isShow: $setup.isShow,
    onCloseAction: $setup.drawerOperation
  }, null, _parent));
  _push(`<nav class="hidden md:inline-flex items-center space-x-6 tracking-wide font-semibold text-xs uppercase">`);
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
    title: "home",
    to: "/"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
    title: "posts",
    to: "/posts"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Posts`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("Posts")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
    title: "resource",
    to: "/resource"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Resource`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("Resource")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
    title: "about",
    to: "/about"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><div class="inline-flex items-center"><button title="Toggle Theme" class="hidden md:block relative focus:outline-none transition-colors duration-500 ease-in border-transparent">`);
  if ($setup.isDark) {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`);
  } else {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`);
  }
  _push(`</button><a title="contact me" class="hidden md:flex items-center uppercase text-xs font-bold tracking-wide mx-6" href="mailto:little3201@163.com" rel="noopener" aria-label="contact me"><svg style="${__vite_ssr_import_5__.ssrRenderStyle({ "display": "unset" })}" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Contact Me </a><button type="button" title="search" class="focus:outline-none" aria-label="searchOpen"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button></div></div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/components/layout/Header.vue"]]);
;
}


// --------------------
// Request: /components/layout/Drawer.vue
// Parents: 
// - /components/layout/Header.vue ($id_6cd1cf1e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /components/layout/Logo.vue ($id_61e21c70)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f2aab072 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/layout/Logo.vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "Drawer",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeAction"],
  setup(__props, { expose, emit }) {
    expose();
    const isDark = __vite_ssr_import_0__.ref(false);
    const theme = () => {
      isDark.value = !isDark.value;
      if (isDark.value) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.removeItem("theme");
        document.documentElement.classList.remove("dark");
      }
    };
    const closeOperation = () => {
      emit("closeAction", false);
    };
    const __returned__ = { isDark, theme, emit, closeOperation, Logo: __vite_ssr_import_3__.default };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_1__.default;
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({
    style: $props.isShow ? null : { display: "none" },
    class: "fixed inset-0 overflow-hidden z-10",
    "aria-labelledby": "slide-over-title",
    role: "dialog",
    "aria-modal": "true"
  }, _attrs))}><div class="absolute inset-0 overflow-hidden"><div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div><div class="pointer-events-none fixed inset-y-0 right-0 flex w-full"><div class="pointer-events-auto w-screen"><div class="flex h-screen flex-col overflow-y-scroll bg-white dark:bg-gray-900"><div class="flex justify-between items-center p-4"><button type="button" class="rounded-md dark:text-white focus:outline-none"><span class="sr-only">Close</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><button title="Toggle Theme" class="relative focus:outline-none transition-colors duration-500 ease-in border-transparent">`);
  if ($setup.isDark) {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`);
  } else {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`);
  }
  _push(`</button></div><div>`);
  _push(__vite_ssr_import_5__.ssrRenderComponent($setup["Logo"], null, null, _parent));
  _push(`<nav class="grid grid-rows-4 gap-4 text-base uppercase font-semibold text-center mt-8">`);
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
    title: "home",
    class: "py-2",
    to: "/"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
    title: "posts",
    class: "py-2",
    to: "/posts"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Posts`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("Posts")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
    title: "resource",
    class: "py-2",
    to: "/resource"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Resource`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("Resource")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
    title: "about",
    class: "py-2",
    to: "/about"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><a title="contact me" class="flex items-center justify-center text-base uppercase font-semibold mt-4 py-2" href="mailto:little3201@163.com" rel="noopener" aria-label="contact me">Contact Me</a></div></div></div></div></div></div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Drawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/other/leafage/leafage-pw/components/layout/Drawer.vue"]]);
;
}


// --------------------
// Request: /components/layout/Logo.vue
// Parents: 
// - /components/layout/Drawer.vue ($id_f2aab072)
// - /error.vue ($id_5ce9522e)
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_61e21c70 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "flex justify-center items-center my-6" }, _attrs))}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    title: "leafage",
    class: "text-gray-900 dark:text-gray-300 text-center"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<figure class="inline-flex justify-center"${
          _scopeId
        }><img src="https://cdn.leafage.top/logo-only.png" alt="Leafage" width="64" height="64" class="filter dark:invert dark:opacity-90"${
          _scopeId
        }></figure><h1 class="text-4xl tracking-widest font-gray-900 uppercase font-semibold"${
          _scopeId
        }>Leafage</h1>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("figure", { class: "inline-flex justify-center" }, [
            __vite_ssr_import_1__.createVNode("img", {
              src: "https://cdn.leafage.top/logo-only.png",
              alt: "Leafage",
              width: "64",
              height: "64",
              class: "filter dark:invert dark:opacity-90"
            })
          ]),
          __vite_ssr_import_1__.createVNode("h1", { class: "text-4xl tracking-widest font-gray-900 uppercase font-semibold" }, "Leafage")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/layout/Logo.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/other/leafage/leafage-pw/components/layout/Logo.vue"]]);
}


// --------------------
// Request: /components/layout/Footer.vue
// Parents: 
// - /error.vue ($id_5ce9522e)
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6ebd1e8f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<footer${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "bg-gray-900" }, _attrs))}><section class="max-w-2xl mx-auto sm:px-6 lg:max-w-4xl 2xl:max-w-6xl lg:px-8"><div class="md:flex md:justify-between md:items-center text-gray-300"><div class="flex justify-center">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    class: "text-2xl tracking-widest font-gray-900 uppercase my-6",
    title: "leafage",
    to: "/"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Leafage`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Leafage")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="flex text-xl justify-center md:justify-between space-x-6 mb-4 md:mb-0 uppercase"><a title="github" href="https://github.com/little3201" rel="noopener" target="_blank">Github</a><a title="gitee" href="https://gitee.com/little3201" rel="noopener" target="_blank">Gitee</a></div></div><div class="pb-3 text-xs text-center text-gray-400"><p class="border-t border-gray-600 py-3"> Copyright © ${__vite_ssr_import_2__.ssrInterpolate(new Date().getFullYear())} All Rights Reserved. Created by <a href="https://github.com/little3201" rel="noopener" target="_blank" class="hover:underline">little3201</a></p><p><a href="https://beian.miit.gov.cn" rel="noopener" target="_blank" class="hover:underline">陕ICP备19017836号-2</a></p></div></section></footer>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/layout/Footer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/other/leafage/leafage-pw/components/layout/Footer.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/app-component.mjs
// Parents: 
// - D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry ($id_35388f0e)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_277ce7ef = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/app-component.mjs ($id_277ce7ef)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Html = __vite_ssr_import_1__.resolveComponent("Html")
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Html, { lang: 'en' }, null, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, null, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/other/leafage/leafage-pw/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/layouts.mjs ($id_e70ab973)
// --------------------
const $id_39003883 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_e70ab973 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/default.vue'))
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/layouts.mjs ($id_e70ab973)
// Dependencies: 
// - /components/layout/Header.vue ($id_6cd1cf1e)
// - /components/layout/Logo.vue ($id_61e21c70)
// - /components/layout/Footer.vue ($id_6ebd1e8f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/layout/Header.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/layout/Logo.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/layout/Footer.vue");

const _sfc_main = {}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader = __vite_ssr_import_0__.default
  const _component_LayoutLogo = __vite_ssr_import_1__.default
  const _component_LayoutFooter = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "dark:bg-gray-900" }, _attrs))}><header class="max-w-2xl mx-auto sm:px-6 lg:max-w-4xl 2xl:max-w-6xl lg:px-8">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_LayoutHeader, { class: "flex border-gray-900 dark:border-gray-300 border-b-2" }, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_LayoutLogo, null, null, _parent))
  _push(`</header><main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-4xl 2xl:max-w-6xl lg:px-8" style="${__vite_ssr_import_4__.ssrRenderStyle({"min-height":"calc(100vh - 23rem)"})}">`)
  __vite_ssr_import_4__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</main>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_LayoutFooter, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/other/leafage/leafage-pw/layouts/default.vue"]]);
}


const __modules__ = {
  "D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry": $id_35388f0e,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/paths.mjs": $id_b534fc0b,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/css.mjs": $id_59589513,
  "/assets/css/tailwind.css": $id_f75548e1,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/plugins/server.mjs": $id_0e37f632,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/components.plugin.mjs": $id_d6b01f33,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/meta.config.mjs": $id_47fd4766,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/routes.mjs": $id_f543faa8,
  "/pages/about.vue?macro=true": $id_9ddc318c,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/pages/about.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2f038ecd,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/about/index.vue?macro=true": $id_abbd4b85,
  "/pages/about/profile.vue?macro=true": $id_9226939a,
  "/pages/about/record.vue?macro=true": $id_13285bcb,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/components/Gallery.vue": $id_c2fdb584,
  "/components/Tab.vue": $id_1787b084,
  "/components/Item.vue": $id_3172b1a7,
  "/components/layout/Aside.vue": $id_fdfe0ef3,
  "/pages/posts/detail/[code].vue?macro=true": $id_bc7c70f6,
  "/utils/ck.ts": $id_181057e1,
  "/components/comment/Form.vue": $id_d8ab6861,
  "/components/comment/Item.vue": $id_b5eb49c9,
  "/components/Preview.vue": $id_ec235e81,
  "/components/Preview.vue?vue&type=style&index=0&scoped=true&lang.css": $id_98422c06,
  "/pages/posts/index.vue?macro=true": $id_9751f318,
  "/pages/resource/detail/[code].vue?macro=true": $id_4b4bda4b,
  "/pages/resource/index.vue?macro=true": $id_ca4e9348,
  "/pages/about/index.vue": $id_6141f3ee,
  "/pages/about/profile.vue": $id_4ad98a9f,
  "/pages/about/record.vue": $id_412f35a6,
  "/pages/about.vue": $id_a93ccd0b,
  "/pages/index.vue": $id_cca58e97,
  "/pages/posts/detail/[code].vue": $id_21dbc687,
  "/pages/posts/index.vue": $id_763a1eda,
  "/pages/resource/detail/[code].vue": $id_a7a7de25,
  "/pages/resource/index.vue": $id_c34e3eb7,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/router.options.mjs": $id_f5ce0791,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/middleware.mjs": $id_7fc04b25,
  "/plugins/md.ts": $id_781b912f,
  "/node_modules/marked/lib/marked.esm.js": $id_9daa9720,
  "/node_modules/marked-extended-tables/src/index.js": $id_9fcb6550,
  "/node_modules/highlight.js/es/core.js": $id_ad272523,
  "/node_modules/highlight.js/styles/ir-black.css": $id_200166cb,
  "/node_modules/highlight.js/es/languages/bash.js": $id_76d8b95f,
  "/node_modules/highlight.js/es/languages/dockerfile.js": $id_bf4f1622,
  "/node_modules/highlight.js/es/languages/javascript.js": $id_c5fb8ca0,
  "/node_modules/highlight.js/es/languages/handlebars.js": $id_5226de98,
  "/node_modules/highlight.js/es/languages/java.js": $id_07ae5a7a,
  "/node_modules/highlight.js/es/languages/json.js": $id_b8b3ff38,
  "/node_modules/highlight.js/es/languages/nginx.js": $id_77d4d755,
  "/node_modules/highlight.js/es/languages/shell.js": $id_99470532,
  "/node_modules/highlight.js/es/languages/sql.js": $id_a45313c3,
  "/node_modules/highlight.js/es/languages/typescript.js": $id_18274d27,
  "/node_modules/highlight.js/es/languages/xml.js": $id_27b123e2,
  "/node_modules/highlight.js/es/languages/yaml.js": $id_cf80de99,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/root-component.mjs": $id_a401080b,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/error-component.mjs": $id_098925f8,
  "/error.vue": $id_5ce9522e,
  "/components/layout/Header.vue": $id_6cd1cf1e,
  "/components/layout/Drawer.vue": $id_f2aab072,
  "/components/layout/Logo.vue": $id_61e21c70,
  "/components/layout/Footer.vue": $id_6ebd1e8f,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/app-component.mjs": $id_277ce7ef,
  "/app.vue": $id_2b46e842,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_39003883,
  "/@id/virtual:nuxt:D:/other/leafage/leafage-pw/.nuxt/layouts.mjs": $id_e70ab973,
  "/layouts/default.vue": $id_7689e89d
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("D:/other/leafage/leafage-pw/node_modules/nuxt/dist/app/entry")