// ─────────────────────────────────────────────────────────────
// Single source of truth for the Build-It Pack's price and checkout.
//
// Previously these lived as page-local consts in ai-masterclass-with-nas.astro,
// which stopped being a single source of truth the moment a second page needed
// to quote the price (src/pages/learn-ai-101.astro). Import from here instead.
// ─────────────────────────────────────────────────────────────

/** The one Stripe Payment Link every CTA on the site points at. */
export const CHECKOUT_LINK = 'https://buy.stripe.com/5kQdR865m1fiaO25fpeEo1c';

export const PRICE_WAS = 150;
export const PRICE_NOW = 97;

/**
 * The reward for finishing a module of Learn AI 101.
 *
 * Deliberately a promotion code on the EXISTING payment link rather than a
 * second link: src/pages/api/stripe-webhook.ts only fulfils sessions whose
 * `payment_link` id appears in STRIPE_PAYMENT_LINK_IDS, and never inspects
 * `amount_total`. Same link = fulfilment keeps working with no env change and
 * no redeploy, and the discounted `amount_total` is reported to Meta correctly
 * for free.
 *
 * Requires "Allow promotion codes" to be enabled on the payment link in Stripe,
 * otherwise `prefilled_promo_code` is silently ignored and the buyer pays full
 * price after being promised a discount.
 */
export const REWARD = {
  /** The Stripe promotion code. Public by design - the discount is the marketing. */
  code: 'STARTER',
  price: 77,
  /** ?from=ai101 - what Learn AI 101 appends when handing the visitor over. */
  param: 'ai101',
  /**
   * Set on <html> before first paint so CSS can pick the discounted price.
   * Deliberately never persisted: it applies to the one page view that carries
   * ?from=ai101 (or where the popup is claimed), not to every later visit.
   */
  flagClass: 'mc-promo',
} as const;

/** The checkout URL with the discount already applied - nothing to paste. */
export const CHECKOUT_LINK_PROMO = `${CHECKOUT_LINK}?prefilled_promo_code=${REWARD.code}`;

export const SAVING_REGULAR = PRICE_WAS - PRICE_NOW;
export const SAVING_PROMO = PRICE_WAS - REWARD.price;
/** What finishing a module is worth, in dollars off the normal price. */
export const REWARD_SAVING = PRICE_NOW - REWARD.price;
