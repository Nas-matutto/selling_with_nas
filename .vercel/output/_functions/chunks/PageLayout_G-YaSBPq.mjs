import { a as createComponent, m as maybeRenderHead, b as renderTemplate, c as createAstro, d as addAttribute, q as renderSlot, s as spreadAttributes, r as renderComponent, F as Fragment, u as unescapeHTML, e as renderScript } from './astro/server_CBZUJhY5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_Dl5sXJ6b.mjs';
import { $ as $$Icon, a as $$ToggleTheme } from './ToggleTheme_kFpIc9ia.mjs';
import 'clsx';
import { twMerge } from 'tailwind-merge';
import { t as trimSlash, a as getHomePermalink, d as getAsset, g as getPermalink } from './permalinks_DWHPIKhn.mjs';
/* empty css                          */

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white">
🚀 Selling with Nas
</span>`;
}, "/Users/nas/Documents/Tech Work/selling_with_nas/src/components/Logo.astro", void 0);

const $$Astro$3 = createAstro("https://sellingwithnas.com");
const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "/Users/nas/Documents/Tech Work/selling_with_nas/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$2 = createAstro("https://sellingwithnas.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "/Users/nas/Documents/Tech Work/selling_with_nas/src/components/ui/Button.astro", void 0);

const $$Astro$1 = createAstro("https://sellingwithnas.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    id = "header",
    links = [],
    actions = [],
    isSticky = false,
    isDark = false,
    isFullWidth = false,
    showToggleTheme = false,
    showRssFeed = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark },
    "top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out"
  ], "class:list")}${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0"></div> <div${addAttribute([
    "relative text-default py-3 px-3 md:px-6 mx-auto w-full",
    {
      "md:flex md:justify-between": position !== "center"
    },
    {
      "md:grid md:grid-cols-3 md:items-center": position === "center"
    },
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")}> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex items-center md:hidden"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> </div> <nav class="items-center w-full md:w-auto hidden md:flex md:mx-5 text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:justify-self-center" aria-label="Main navigation"> <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium md:justify-center"> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button type="button" class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap"> ${text}${" "} ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" })} </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl"> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")}> ${text} </a>`} </li>`)} </ul> </nav> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0 md:justify-self-end"
  ], "class:list")}> <div class="items-center flex justify-between w-full md:w-auto"> <div class="flex"> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block" })}`} ${showRssFeed && renderTemplate`<a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="RSS Feed"${addAttribute(getAsset("/rss.xml"), "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:rss", "class": "w-5 h-5" })} </a>`} </div> ${actions?.length ? renderTemplate`<span class="ml-4 rtl:ml-0 rtl:mr-4"> ${actions.map((btnProps) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...btnProps, "class": "ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto" })}`)} </span>` : ""} </div> </div> </div> </header>`;
}, "/Users/nas/Documents/Tech Work/selling_with_nas/src/components/widgets/Header.astro", void 0);

const headerData = {
  links: [
    {
      text: "About",
      href: "/#hp-expertise"
    },
    {
      text: "Services",
      href: "/#hp-services"
    },
    {
      text: "Building Area",
      links: [
        {
          text: "🌱 LeadLanding",
          href: getPermalink("/tools/leadlanding")
        },
        {
          text: "🧮 E-Commerce Calculator",
          href: getPermalink("/tools/E-commerce_calculator")
        },
        {
          text: "🚀 Launch Cost Estimator",
          href: getPermalink("/tools/launch-cost-estimator")
        },
        {
          text: "🎯 Quizzings",
          href: getPermalink("/tools/quizzings")
        },
        {
          text: "📊 Talk to Me Data",
          href: getPermalink("/tools/talk-to-me-data")
        }
      ]
    },
    {
      text: "Posts",
      href: "/blog"
    }
  ],
  actions: [{ text: "Let's Talk →", href: "/contact" }]
};

const $$Astro = createAstro("https://sellingwithnas.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  const isMasterclassPage = Astro2.url.pathname.includes("ai-masterclass-with-nas");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="nas-announce" role="region" aria-label="Site announcement"> <div id="nas-announce-track"> <a href="/ai-masterclass-with-nas" class="nas-announce-msg nas-announce-active">
Master AI with me. Book a 1-on-1 session today <span class="nas-announce-arrow">→</span> </a> <a href="/guides" class="nas-announce-msg">
Download a free AI guide <span class="nas-announce-arrow">→</span> </a> </div> <button id="nas-announce-close" aria-label="Close announcement">&times;</button> </div> ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "links": headerData.links, "actions": headerData.actions, "isSticky": true, "showToggleTheme": true })} `)} <main> ${renderSlot($$result2, $$slots["default"])} </main>  <footer id="site-footer"> <div id="site-footer-inner"> <div id="site-footer-top"> <!-- Brand column --> <div id="site-footer-brand"> <a href="/" id="site-footer-logo">Selling with Nas</a> <p id="site-footer-tagline">Helping founders and brands move faster with AI, automation, and GTM strategy that ships.</p> <div id="site-footer-socials"> <a href="https://www.youtube.com/@sellingwithnas" target="_blank" rel="noopener noreferrer" class="site-footer-social" aria-label="YouTube"> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg> </a> <a href="https://www.linkedin.com/in/nasser-mansurali-659145102/" target="_blank" rel="noopener noreferrer" class="site-footer-social" aria-label="LinkedIn"> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> </a> <a href="https://www.tiktok.com/@sellingwithnas" target="_blank" rel="noopener noreferrer" class="site-footer-social" aria-label="TikTok"> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"></path></svg> </a> <a href="https://www.instagram.com/sellingwithnas/" target="_blank" rel="noopener noreferrer" class="site-footer-social" aria-label="Instagram"> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg> </a> </div> </div> <!-- Content column --> <div class="site-footer-col"> <h3 class="site-footer-col-title">Content</h3> <ul class="site-footer-links"> <li><a href="/blog">Blog Posts</a></li> <li><a href="/guides">Guides</a></li> </ul> </div> <!-- Work with Me column --> <div class="site-footer-col"> <h3 class="site-footer-col-title">Work with Me</h3> <ul class="site-footer-links"> <li><a href="/#hp-services">Services</a></li> <li><a href="/ai-masterclass-with-nas">AI Masterclass</a></li> <li><a href="/contact">Contact</a></li> </ul> </div> <!-- Products column --> <div class="site-footer-col"> <h3 class="site-footer-col-title">Products</h3> <ul class="site-footer-links"> <li><a href="/tools/talk-to-me-data">Talk to Me Data</a></li> <li><a href="/tools/leadlanding">LeadLanding</a></li> </ul> </div> </div> <div id="site-footer-bottom"> <span>© 2026 Selling with Nas. All rights reserved.</span> </div> </div> </footer>  ${!isMasterclassPage && renderTemplate`<div id="mc-popup" role="dialog" aria-modal="true" aria-label="AI Masterclass popup" style="display:none;"> <div id="mc-popup-backdrop"></div> <div id="mc-popup-card"> <button id="mc-popup-close" aria-label="Close">&times;</button> <div id="mc-popup-icon">🎓</div> <p id="mc-popup-eyebrow">1-on-1 Live Session</p> <h2 id="mc-popup-title">Master AI in 1 hour</h2> <p id="mc-popup-body">We will deep dive into Claude Skills, Claude Code and AI Agents</p> <div id="mc-popup-actions"> <a href="/ai-masterclass-with-nas" id="mc-popup-cta">Learn more →</a> <button id="mc-popup-dismiss">Not interested</button> </div> </div> </div>`}` })}  ${renderScript($$result, "/Users/nas/Documents/Tech Work/selling_with_nas/src/layouts/PageLayout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nas/Documents/Tech Work/selling_with_nas/src/layouts/PageLayout.astro", void 0);

export { $$Button as $, $$PageLayout as a };
