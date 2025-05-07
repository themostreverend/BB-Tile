
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/addin-hello-world"
  },
  {
    "renderMode": 2,
    "route": "/addin-hello-world/my-tile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 499, hash: '82ed38be25d7a71a1c125487988e948fd6da12df4068413fd8b541860fb0ce69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '8653f33b6d5af809c089d192d0f6bded6590fbd8a930bd3499946bce241e07bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'addin-hello-world/my-tile/index.html': {size: 17176, hash: '71a1abc1caa1b355306772d6c3a94080ac6144b668029a37f20655090e29c948', text: () => import('./assets-chunks/addin-hello-world_my-tile_index_html.mjs').then(m => m.default)},
    'addin-hello-world/index.html': {size: 17176, hash: '71a1abc1caa1b355306772d6c3a94080ac6144b668029a37f20655090e29c948', text: () => import('./assets-chunks/addin-hello-world_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
