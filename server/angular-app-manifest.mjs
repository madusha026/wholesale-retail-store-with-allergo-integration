
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://madusha026.github.io/wholesale-retail-store/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https:/madusha026.github.io/wholesale-retail-store"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 648, hash: '637b2ca240c5fb13085ec881c1dc8490f8722ca3a7e4d5c370518403875c6088', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1161, hash: '1383626f4495460e1b0935ba513b9a8f90ec9e92a22fe006180d1551d7705789', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'https:/madusha026.github.io/wholesale-retail-store/index.html': {size: 4057, hash: '37db418e51cc249a5d608402ece583e1b3653f6663db8b264bc5d73a7fe5cc97', text: () => import('./assets-chunks/https:_madusha026_github_io_wholesale-retail-store_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
