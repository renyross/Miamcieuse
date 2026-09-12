// Générateur de messages WhatsApp contextuels pour Miam'cieuse
export const WHATSAPP_NUMBER = "50939424419"; // Numéro officiel Miam'cieuse

export function getGeneralWhatsAppUrl(lang = 'fr') {
  const message = lang === 'ht'
    ? "Bonjou Miam'cieuse 👋\nMwen ta renmen gen kèk enfòmasyon sou pwodui nou yo tanpri."
    : "Bonjour Miam'cieuse 👋\nJe souhaite avoir des informations concernant vos produits.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(product, format = null, variant = null, lang = 'fr') {
  const productName = lang === 'ht' ? (product.name_ht || product.name) : product.name;
  const formatStr = format ? ` (Format : ${format.name})` : '';
  const variantStr = variant ? ` (Variante : ${lang === 'ht' ? (variant.name_ht || variant.name) : variant.name})` : '';

  const message = lang === 'ht'
    ? `Bonjou Miam'cieuse 👋\nMwen ta renmen kòmande :\n📦 ${productName}${formatStr}${variantStr}\nPri : ${product.price.toFixed(2)} €\nÈske li disponib tanpri ?`
    : `Bonjour Miam'cieuse 👋\nJe souhaite commander :\n📦 ${productName}${formatStr}${variantStr}\nPrix : ${product.price.toFixed(2)} €\nEst-il disponible pour livraison s'il vous plaît ?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getCartWhatsAppUrl(cartItems, total, lang = 'fr') {
  let itemsList = cartItems.map(item => {
    const name = lang === 'ht' ? (item.name_ht || item.name) : item.name;
    const format = item.format ? ` [${item.format.name}]` : '';
    const variant = item.variant ? ` [${lang === 'ht' ? (item.variant.name_ht || item.variant.name) : item.variant.name}]` : '';
    return `- ${item.quantity}x ${name}${format}${variant} (${(item.price * item.quantity).toFixed(2)} €)`;
  }).join('\n');

  const message = lang === 'ht'
    ? `Bonjou Miam'cieuse 👋\nMwen ta renmen pase kòmand sa a dirèkteman sou WhatsApp :\n\n${itemsList}\n\n💰 Total : ${total.toFixed(2)} €\n\nKi enfòmasyon nou bezwen pou livrezon an tanpri ?`
    : `Bonjour Miam'cieuse 👋\nJe souhaite finaliser ma commande directement avec vous sur WhatsApp :\n\n${itemsList}\n\n💰 Total : ${total.toFixed(2)} €\n\nQuelles sont les modalités pour la livraison et le paiement s'il vous plaît ?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
