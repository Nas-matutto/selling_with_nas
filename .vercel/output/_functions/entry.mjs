import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CpmYSc-1.mjs';
import { manifest } from './manifest_CvplUs61.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/ai-masterclass-with-nas.astro.mjs');
const _page3 = () => import('./pages/api/analyze-product.astro.mjs');
const _page4 = () => import('./pages/api/send-guide.astro.mjs');
const _page5 = () => import('./pages/best-claude-skills.astro.mjs');
const _page6 = () => import('./pages/claude-code-setup.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/guides.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/tools/e-commerce_calculator.astro.mjs');
const _page11 = () => import('./pages/tools/launch-cost-estimator.astro.mjs');
const _page12 = () => import('./pages/tools/leadlanding.astro.mjs');
const _page13 = () => import('./pages/tools/quizzings.astro.mjs');
const _page14 = () => import('./pages/tools/talk-to-me-data.astro.mjs');
const _page15 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page16 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page17 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const _page19 = () => import('./pages/_---blog_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/ai-masterclass-with-nas.astro", _page2],
    ["src/pages/api/analyze-product.js", _page3],
    ["src/pages/api/send-guide.ts", _page4],
    ["src/pages/best-claude-skills.astro", _page5],
    ["src/pages/claude-code-setup.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/guides.astro", _page8],
    ["src/pages/rss.xml.ts", _page9],
    ["src/pages/tools/E-commerce_calculator.astro", _page10],
    ["src/pages/tools/launch-cost-estimator.astro", _page11],
    ["src/pages/tools/leadlanding.astro", _page12],
    ["src/pages/tools/quizzings.astro", _page13],
    ["src/pages/tools/talk-to-me-data.astro", _page14],
    ["src/pages/[...blog]/[category]/[...page].astro", _page15],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page16],
    ["src/pages/[...blog]/[...page].astro", _page17],
    ["src/pages/index.astro", _page18],
    ["src/pages/[...blog]/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "81c5a9a0-0cdc-434c-8c58-f653cf45cf32",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
