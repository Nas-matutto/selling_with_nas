import { c as createAstro, a as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CBZUJhY5.mjs';
import 'kleur/colors';
import { a as $$PageLayout } from '../../chunks/PageLayout_G-YaSBPq.mjs';
/* empty css                                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sellingwithnas.com");
const $$LaunchCostEstimator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LaunchCostEstimator;
  const metadata = {
    title: "E-commerce Launch Cost Estimator - Budget Calculator",
    description: "Calculate estimated costs for launching your e-commerce brand. Get cost breakdowns for product sourcing, inventory, marketing, and total launch costs.",
    keywords: "e-commerce launch cost, startup cost calculator, business launch budget, e-commerce cost estimator",
    canonical: "https://www.sellingwithnas.com/tools/launch-cost-estimator"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata, "data-astro-cid-axqx5hcn": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", `<div class="calculator-page" style="background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 40%, #fed7aa 100%); min-height: 100vh; color: #0f172a; overflow-x: hidden; padding-top: 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; transition: all 0.3s ease;" data-astro-cid-axqx5hcn> <div class="floating-elements" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: -1;" data-astro-cid-axqx5hcn> <div class="floating-circle" style="position: absolute; border-radius: 50%; background: linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1)); animation: float 6s ease-in-out infinite; width: 80px; height: 80px; top: 20%; left: 10%; animation-delay: 0s;" data-astro-cid-axqx5hcn></div> <div class="floating-circle" style="position: absolute; border-radius: 50%; background: linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1)); animation: float 6s ease-in-out infinite; width: 120px; height: 120px; top: 60%; right: 15%; animation-delay: 2s;" data-astro-cid-axqx5hcn></div> <div class="floating-circle" style="position: absolute; border-radius: 50%; background: linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1)); animation: float 6s ease-in-out infinite; width: 60px; height: 60px; bottom: 20%; left: 20%; animation-delay: 4s;" data-astro-cid-axqx5hcn></div> </div> <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 20px;" data-astro-cid-axqx5hcn> <div class="header" style="text-align: center; margin-bottom: 40px; position: relative;" data-astro-cid-axqx5hcn> <h1 style="font-size: 3rem; font-weight: 700; background: linear-gradient(45deg, #f97316, #ef4444, #a855f7); background-size: 200% 200%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradientShift 3s ease-in-out infinite; text-shadow: 0 0 30px rgba(249, 115, 22, 0.3); margin: 0;" data-astro-cid-axqx5hcn>E-commerce Brand Launch Cost Estimator</h1> <p style="font-size: 1.2rem; color: #475569; margin-top: 10px;" data-astro-cid-axqx5hcn>Calculate estimated costs for launching your e-commerce brand</p> </div> <div class="calculator-sections" style="display: flex; flex-direction: column; gap: 30px;" data-astro-cid-axqx5hcn> <!-- INPUT SECTION --> <div class="input-section" style="background: rgba(255, 255, 255, 0.9); border-radius: 20px; padding: 40px; backdrop-filter: blur(10px); border: 1px solid rgba(249, 115, 22, 0.2); box-shadow: 0 20px 40px rgba(249, 115, 22, 0.1); transition: all 0.3s ease;" data-astro-cid-axqx5hcn> <h2 class="section-title" style="font-size: 1.8rem; margin-bottom: 25px; color: #f97316; text-align: center; position: relative; font-weight: 600;" data-astro-cid-axqx5hcn>Product Information</h2> <div class="input-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; align-items: end;" data-astro-cid-axqx5hcn> <div class="input-group" data-astro-cid-axqx5hcn> <label for="productType" style="display: block; margin-bottom: 8px; font-weight: 600; color: #0f172a; font-size: 0.95rem;" data-astro-cid-axqx5hcn>Product Category</label> <select id="productType" style="width: 100%; padding: 15px 20px; border: 2px solid rgba(249, 115, 22, 0.2); border-radius: 12px; background: rgba(255, 255, 255, 0.7); color: #0f172a; font-size: 1rem; transition: all 0.3s ease; backdrop-filter: blur(5px);" data-astro-cid-axqx5hcn> <option value="" data-astro-cid-axqx5hcn>Select a category</option> <option value="electronics" data-astro-cid-axqx5hcn>Electronics & Tech</option> <option value="fashion" data-astro-cid-axqx5hcn>Fashion & Apparel</option> <option value="beauty" data-astro-cid-axqx5hcn>Beauty & Skincare</option> <option value="fitness" data-astro-cid-axqx5hcn>Fitness & Sports</option> <option value="home" data-astro-cid-axqx5hcn>Home & Garden</option> <option value="jewelry" data-astro-cid-axqx5hcn>Jewelry & Accessories</option> <option value="books" data-astro-cid-axqx5hcn>Books & Media</option> <option value="toys" data-astro-cid-axqx5hcn>Toys & Games</option> <option value="food" data-astro-cid-axqx5hcn>Food & Beverages</option> <option value="other" data-astro-cid-axqx5hcn>Other</option> </select> </div> <div class="input-group" data-astro-cid-axqx5hcn> <label for="targetPrice" style="display: block; margin-bottom: 8px; font-weight: 600; color: #0f172a; font-size: 0.95rem;" data-astro-cid-axqx5hcn>Target Product Price ($)</label> <input type="number" id="targetPrice" placeholder="e.g., 29" min="5" max="500" style="width: 100%; padding: 15px 20px; border: 2px solid rgba(249, 115, 22, 0.2); border-radius: 12px; background: rgba(255, 255, 255, 0.7); color: #0f172a; font-size: 1rem; transition: all 0.3s ease; backdrop-filter: blur(5px);" data-astro-cid-axqx5hcn> </div> <div class="input-group" data-astro-cid-axqx5hcn> <label for="businessScale" style="display: block; margin-bottom: 8px; font-weight: 600; color: #0f172a; font-size: 0.95rem;" data-astro-cid-axqx5hcn>Launch Strategy</label> <select id="businessScale" style="width: 100%; padding: 15px 20px; border: 2px solid rgba(249, 115, 22, 0.2); border-radius: 12px; background: rgba(255, 255, 255, 0.7); color: #0f172a; font-size: 1rem; transition: all 0.3s ease; backdrop-filter: blur(5px);" data-astro-cid-axqx5hcn> <option value="small" data-astro-cid-axqx5hcn>Conservative Start ($3K-8K)</option> <option value="medium" data-astro-cid-axqx5hcn>Balanced Growth ($5K-15K)</option> <option value="large" data-astro-cid-axqx5hcn>Aggressive Launch ($8K-25K)</option> </select> </div> <button class="calculate-btn" id="analyze-button" style="grid-column: 1 / -1; padding: 18px 30px; background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); color: white; border: none; border-radius: 12px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; margin-top: 20px; max-width: 300px; justify-self: center;" data-astro-cid-axqx5hcn>
Calculate Launch Costs
</button> </div> <div class="loading" id="loading" style="display: none; text-align: center; color: #f97316; margin-top: 20px;" data-astro-cid-axqx5hcn> <div class="spinner" style="border: 3px solid #f3f3f3; border-top: 3px solid #f97316; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin: 0 auto 10px;" data-astro-cid-axqx5hcn></div> <p data-astro-cid-axqx5hcn>Calculating your launch costs...</p> </div> <div class="error" id="error" style="background: rgba(254, 242, 242, 0.9); color: #dc2626; padding: 15px; border-radius: 8px; margin-top: 20px; display: none; border: 1px solid #fca5a5;" data-astro-cid-axqx5hcn> <p id="errorMessage" data-astro-cid-axqx5hcn></p> </div> </div> <!-- RESULTS SECTION --> <div class="results-section" style="background: rgba(255, 255, 255, 0.9); border-radius: 20px; padding: 40px; backdrop-filter: blur(10px); border: 1px solid rgba(249, 115, 22, 0.2); box-shadow: 0 20px 40px rgba(249, 115, 22, 0.1); transition: all 0.3s ease;" data-astro-cid-axqx5hcn> <h2 class="section-title" style="font-size: 1.8rem; margin-bottom: 25px; color: #f97316; text-align: center; position: relative; font-weight: 600;" data-astro-cid-axqx5hcn>Launch Cost Analysis</h2> <div class="results" id="results" style="display: none;" data-astro-cid-axqx5hcn> <div class="summary-grid" id="summaryGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; margin-bottom: 30px;" data-astro-cid-axqx5hcn> <!-- Summary stats will be populated here --> </div> <div class="cost-breakdown" style="background: rgba(255, 255, 255, 0.6); border-radius: 16px; padding: 30px; margin-bottom: 30px; border: 1px solid rgba(249, 115, 22, 0.1); box-shadow: 0 4px 15px rgba(249, 115, 22, 0.08);" data-astro-cid-axqx5hcn> <h3 style="margin-bottom: 25px; color: #f97316; font-size: 1.3rem; text-align: center; font-weight: 600;" data-astro-cid-axqx5hcn>Cost Breakdown</h3> <div id="costTableContainer" data-astro-cid-axqx5hcn> <!-- Cost table will be populated here --> </div> </div> <div id="totalSection" data-astro-cid-axqx5hcn> <!-- Total investment will be populated here --> </div> <div class="considerations" style="background: rgba(254, 243, 199, 0.8); border: 1px solid #f59e0b; border-radius: 12px; padding: 25px;" data-astro-cid-axqx5hcn> <h3 style="color: #92400e; margin-bottom: 18px; font-size: 1.25rem; font-weight: 600;" data-astro-cid-axqx5hcn>Key Considerations</h3> <div id="considerationsContent" data-astro-cid-axqx5hcn> <!-- Considerations will be populated here --> </div> </div> </div> <div class="placeholder" id="placeholder" style="text-align: center; color: #6c757d; margin-top: 30px;" data-astro-cid-axqx5hcn> <div class="placeholder-icon" style="font-size: 3rem; margin-bottom: 16px;" data-astro-cid-axqx5hcn>\u{1F4CA}</div> <h3 style="font-size: 1.5rem; font-weight: 600; color: #374151; margin-bottom: 8px;" data-astro-cid-axqx5hcn>Ready to Calculate</h3> <p style="font-size: 1rem; line-height: 1.6;" data-astro-cid-axqx5hcn>Enter your product details above to see detailed cost estimates for launching your e-commerce brand</p> </div> </div> </div> <!-- Back to home button --> <div style="text-align: center; margin: 40px 0;" data-astro-cid-axqx5hcn> <a href="/" style="display: inline-block; padding: 12px 24px; border-radius: 12px; text-decoration: none; font-weight: 600; text-align: center; transition: all 0.3s ease; backdrop-filter: blur(10px); background: transparent; color: #f97316; border: 2px solid #f97316;" data-astro-cid-axqx5hcn>\u2190 Back to Home</a> </div> </div> </div> <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "E-commerce Launch Cost Calculator",
  "description": "Free calculator to determine e-commerce launch costs, budget planning, and investment requirements for new brands",
  "url": "https://www.sellingwithnas.com/tools/launch-cost-estimator",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Person",
    "name": "Nas",
    "url": "https://www.sellingwithnas.com"
  },
  "featureList": [
    "Calculate total launch costs",
    "Product category-specific estimates",
    "Marketing budget planning",
    "Break-even analysis",
    "Investment requirement planning"
  ]
}
<\/script> `])), maybeRenderHead()) })}  ${renderScript($$result, "/Users/nas/Documents/Tech Work/selling_with_nas/src/pages/tools/launch-cost-estimator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nas/Documents/Tech Work/selling_with_nas/src/pages/tools/launch-cost-estimator.astro", void 0);

const $$file = "/Users/nas/Documents/Tech Work/selling_with_nas/src/pages/tools/launch-cost-estimator.astro";
const $$url = "/tools/launch-cost-estimator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LaunchCostEstimator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
