// Foire aux questions (FAQ) Miam'cieuse avec support bilingue
export const faqCategories = [
  { id: "all", name: "Toutes les questions", name_ht: "Tout Kesyon yo" },
  { id: "order", name: "Commandes & WhatsApp", name_ht: "Kòmand & WhatsApp" },
  { id: "delivery", name: "Livraison & Expédition", name_ht: "Livrezon & Transpò" },
  { id: "products", name: "Produits & Conservation", name_ht: "Pwodui & Konsèvasyon" },
  { id: "packs", name: "Packs & Cadeaux", name_ht: "Pak & Kado" }
];

export const faqItems = [
  {
    id: "comment-passer-commande",
    category: "order",
    question: "Comment passer une commande sur le site Miam'cieuse ?",
    question_ht: "Kijan pou m pase yon kòmand sou sit Miam'cieuse la ?",
    answer: "Vous pouvez commander directement en ligne en ajoutant vos produits au panier et en validant votre paiement sécurisé (CB/Stripe ou PayPal). Vous pouvez également commander en 1 clic via WhatsApp grâce au bouton présent sur chaque fiche produit : un message pré-rempli avec votre sélection est généré automatiquement.",
    answer_ht: "Ou ka kòmande dirèkteman sou sit la lè w ajoute pwodui yo nan panyen w lan epi peye an sekirite (Kat labank/Stripe oswa PayPal). Ou ka kòmande tou an 1 klik sou WhatsApp ak bouton ki sou paj pwodui a : yon mesaj otomatik ap prepare pou ou touswit."
  },
  {
    id: "delais-livraison",
    category: "delivery",
    question: "Quels sont les délais et zones de livraison ?",
    question_ht: "Ki delè ak zòn livrezon nou genyen ?",
    answer: "Toutes nos commandes sont préparées et expédiées sous 24 à 48h ouvrées. Nous livrons en France métropolitaine, dans les DOM-TOM, en Europe et en Amérique du Nord (Canada & États-Unis). La livraison est suivie avec numéro de tracking fourni par email et SMS.",
    answer_ht: "Nou prepare epi voye tout kòmand yo nan 24 a 48 èdtan. Nou livre an Frans, nan zòn DOM-TOM, an Ewòp ak nan Amerik di Nò (Kanada & Etazini). W ap resevwa yon nimewo swivi pa imèl ak SMS."
  },
  {
    id: "livraison-gratuite",
    category: "delivery",
    question: "Proposez-vous la livraison gratuite ?",
    question_ht: "Èske livrezon an ka gratis ?",
    answer: "Oui ! La livraison en point relais ou à domicile est offerte dès 45 € d'achats. Une jauge dynamique dans votre panier vous indique en direct le montant restant pour en bénéficier.",
    answer_ht: "Wi ! Livrezon an gratis depi kòmand ou rive nan 45 € oswa plis. Yon ti ba nan panyen an ap montre w konbyen ki manke w pou w gen livrezon gratis la."
  },
  {
    id: "conservation-mamba",
    category: "products",
    question: "Comment conserver le Mamba et quelle est sa durée de conservation ?",
    question_ht: "Kijan pou m konsève Mamba a e konbyen tan li ka fè ?",
    answer: "Notre Mamba se conserve à température ambiante dans un endroit sec et tempéré, à l'abri du soleil direct. Il n'a absolument pas besoin d'être placé au réfrigérateur. Une légère couche d'huile naturelle de cacahuète peut remonter à la surface : c'est un gage de pureté 100% naturelle ! Il suffit de remuer délicatement avant de déguster. Il se conserve 12 mois.",
    answer_ht: "Mamba nou an konsève nan tanperati chanm nan yon kote ki sèk, lwen solèy. Li pa bezwen mete nan frijidè ditou. Si w wè yon ti lwil natirèl pistach monte anwo, se prèv li 100% natirèl san chimik ! Jis brase l avan w manje. Li ka fè 12 mwa."
  },
  {
    id: "formats-disponibles",
    category: "products",
    question: "Quels sont les formats de Mamba disponibles ?",
    question_ht: "Ki gwosè Mamba ki disponib ?",
    answer: "Nous proposons deux formats pratiques : le format standard 16 oz (environ 454g), idéal pour les gourmands réguliers, et le format familial généreux 32 oz (environ 908g), parfait pour les grandes familles ou les véritables amoureux du Mamba.",
    answer_ht: "Nou gen 2 bèl fòma: fòma nòmal 16 oz (454g) pou moun k ap manje regilyèman, ak gwo fòma familyal 32 oz (908g) pou tout fanmi an oswa gwo fanatik mamba."
  },
  {
    id: "mamba-pimente-degre",
    category: "products",
    question: "Le Mamba pimenté est-il très fort ?",
    question_ht: "Èske Mamba piman bouk la twò pike ?",
    answer: "Notre Mamba pimenté offre un équilibre parfait : le piment habanero haïtien (piman bouk) apporte une chaleur aromatique chaleureuse qui réveille les papilles sans jamais brûler ou masquer le délicieux goût de la cacahuète torréfiée.",
    answer_ht: "Mamba pike nou an gen yon bon balans: piman bouk ayisyen an pote yon bèl ti chalè ak bon sant san li pa boule bouch ou ni kache bon gou pistach griye a."
  },
  {
    id: "packs-gourmands-economies",
    category: "packs",
    question: "Puis-je commander plusieurs produits sous forme de packs ?",
    question_ht: "Èske m ka kòmande plizyè pwodui nan yon sèl pak ?",
    answer: "Absolument ! Nos Packs Gourmands (Pack Découverte, Pack Mamba Lover, Pack Saveurs d'Haïti) vous permettent de bénéficier d'une remise allant jusqu'à -18% par rapport à l'achat individuel, le tout livré dans un élégant coffret.",
    answer_ht: "Wi san mank ! Pak Gouman nou yo (Pak Dekouvèt, Pak Mamba Lover, Pak Prestij) pèmèt ou fè ekonomi jiska -18% konpare ak si w t ap achte yo grenn pa grenn, nan yon bèl bwat kado."
  },
  {
    id: "contacter-miamcieuse",
    category: "order",
    question: "Comment contacter le service client de Miam'cieuse ?",
    question_ht: "Kijan pou m kontakte sèvis kliyan Miam'cieuse ?",
    answer: "Notre équipe est disponible 7j/7 ! Vous pouvez nous écrire directement sur WhatsApp au +509 39 42 4419, utiliser le formulaire de la page Contact, ou nous envoyer un message sur Instagram / Facebook @miamcieuse.",
    answer_ht: "Ekip nou an disponib 7 jou sou 7 ! Ou ka ekri nou dirèkteman sou WhatsApp nan +509 39 42 4419, sèvi ak fòmilè kontak la, oswa voye yon mesaj sou Instagram / Facebook @miamcieuse."
  }
];
