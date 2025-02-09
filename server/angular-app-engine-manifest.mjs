
export default {
  basePath: 'https://madusha026.github.io/wholesale-retail-store',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
