/* Config del funnel printable-with-lisa. Solo valores REALES — el kit oculta cualquier gatillo sin datos. */
window.FUNNEL = {
  cta: {
    checkout: "#CHECKOUT_URL",        /* PLACEHOLDER: URL real del checkout (Hotmart/Shopify/Stripe/GHL…) */
    accept:   "#UPSELL_ACCEPT_URL",   /* PLACEHOLDER: enlace 1-clic del upsell (plataforma de pago) */
    downsellAccept: "#DOWNSELL_ACCEPT_URL", /* PLACEHOLDER: enlace 1-clic del downsell */
    decline:  "downsell-1.html",
    next:     "thank-you.html"
  },
  bar: { text: "Kit imprimible para niños con TDAH · descarga inmediata" },
  deadline: null,                     /* sin deadline real confirmado → sin countdown */
  proof: { live: [] },                /* sin pedidos reales → sin toast */
  tabAway: { titles: ["👋 ¡Espera! Tu kit sigue aquí", "🧠 Rutinas + cartas de calma", "← Vuelve 💚"] },
  antiCopy: false
};
