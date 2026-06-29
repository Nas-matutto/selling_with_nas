import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CBZUJhY5.mjs';
import 'kleur/colors';
import { a as $$PageLayout } from '../chunks/PageLayout_G-YaSBPq.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Guides = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Free AI Guides - Selling with Nas",
    description: "Download free PDF guides on AI agents, Claude, prompt engineering, and AI automation for business. Drop your email and the guide lands in your inbox instantly.",
    keywords: "free AI guide, Claude guide PDF, AI agent guide, prompt engineering guide, AI automation for business, free AI resources, Nas AI guides",
    canonical: "https://www.sellingwithnas.com/guides"
  };
  const guides = [
    {
      id: "best-claude-skills",
      emoji: "\u26A1",
      tag: "Claude",
      title: "Best Claude Skills",
      description: "A curated guide to the most powerful Claude Skills available right now, including what they do and how to install them.",
      gradientClass: "gg-orange",
      subject: "Your Best Claude Skills Guide"
    },
    {
      id: "claude-code-setup",
      emoji: "\u{1F4BB}",
      tag: "Claude Code",
      title: "Claude Code Setup Guide",
      description: "A step-by-step guide to installing and setting up Claude Code so you can start building real apps without writing a single line of code.",
      gradientClass: "gg-purple",
      subject: "Your Claude Code Setup Guide"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata, "data-astro-cid-aza7rbfb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="guides-page" data-astro-cid-aza7rbfb> <div class="guides-ambient" aria-hidden="true" data-astro-cid-aza7rbfb> <div class="guides-blob gb-1" data-astro-cid-aza7rbfb></div> <div class="guides-blob gb-2" data-astro-cid-aza7rbfb></div> </div> <!-- ── HERO ── --> <section class="guides-hero" data-astro-cid-aza7rbfb> <div class="guides-container" data-astro-cid-aza7rbfb> <span class="guides-eyebrow" data-astro-cid-aza7rbfb>Free Resources</span> <h1 class="guides-title" data-astro-cid-aza7rbfb>
Free AI Guides<br data-astro-cid-aza7rbfb> <span class="guides-gradient" data-astro-cid-aza7rbfb>delivered to your inbox</span> </h1> <p class="guides-sub" data-astro-cid-aza7rbfb>
Practical PDF guides on Claude, AI agents, prompting, and automation.
        Drop your email on any guide below and I'll send it straight to you.
</p> </div> </section> <!-- ── GUIDES GRID ── --> <section class="guides-section" data-astro-cid-aza7rbfb> <div class="guides-container" data-astro-cid-aza7rbfb> <div class="guides-grid" data-astro-cid-aza7rbfb> ${guides.map((guide) => renderTemplate`<a class="guide-card guide-card-link"${addAttribute(guide.id, "id")}${addAttribute(`/${guide.id}`, "href")} data-astro-cid-aza7rbfb> <div${addAttribute(`guide-card-top ${guide.gradientClass}`, "class")} data-astro-cid-aza7rbfb></div> <div class="guide-card-body" data-astro-cid-aza7rbfb> <div class="guide-meta-row" data-astro-cid-aza7rbfb> <span class="guide-emoji" data-astro-cid-aza7rbfb>${guide.emoji}</span> <span class="guide-tag" data-astro-cid-aza7rbfb>${guide.tag}</span> </div> <h2 class="guide-title" data-astro-cid-aza7rbfb>${guide.title}</h2> <p class="guide-desc" data-astro-cid-aza7rbfb>${guide.description}</p> <div class="guide-card-footer" data-astro-cid-aza7rbfb> <span${addAttribute(`guide-btn ${guide.gradientClass}`, "class")} data-astro-cid-aza7rbfb>Get the Free Guide →</span> <p class="guide-privacy" data-astro-cid-aza7rbfb>Free · No spam · Instant delivery</p> </div> </div> </a>`)} </div> </div> </section> <!-- ── CTA STRIP ── --> <section class="guides-cta-strip" data-astro-cid-aza7rbfb> <div class="guides-container guides-cta-inner" data-astro-cid-aza7rbfb> <div data-astro-cid-aza7rbfb> <p class="guides-cta-label" data-astro-cid-aza7rbfb>Want to go deeper?</p> <p class="guides-cta-text" data-astro-cid-aza7rbfb>Join my live AI Masterclass and build real workflows in 90 minutes.</p> </div> <a href="/ai-masterclass-with-nas" class="guides-cta-btn" data-astro-cid-aza7rbfb>See the Masterclass →</a> </div> </section> </div>  ` })}`;
}, "/Users/nas/Documents/Tech Work/selling_with_nas/src/pages/guides.astro", void 0);

const $$file = "/Users/nas/Documents/Tech Work/selling_with_nas/src/pages/guides.astro";
const $$url = "/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Guides,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
