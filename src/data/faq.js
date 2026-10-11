// Foire aux questions (FAQ) Le Secret de Merlie avec support bilingue
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
    question: "Comment passer une commande sur le site Le Secret de Merlie ?",
    question_ht: "Kijan pou m pase yon kòmand sou sit Le Secret de Merlie la ?",
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
    id: "conservation-cassave",
    category: "products",
    question: "Comment conserver les cassaves après ouverture ?",
    question_ht: "Kijan pou m konsève kasav yo apre mwen ouvri sachè a ?",
    answer: "Après ouverture, refermez soigneusement le sachet ou placez vos cassaves dans une boîte hermétique, à l'abri de l'humidité. Respectez les consignes de conservation figurant sur l'emballage de la saveur choisie.",
    answer_ht: "Apre ou ouvri sachè a, fèmen li byen oswa mete kasav yo nan yon bwat ki fèmen byen sere, lwen imidite. Swiv konsèy konsèvasyon ki sou anbalaj gou ou chwazi a."
  },
  {
    id: "duree-conservation-cassave",
    category: "products",
    question: "Combien de temps peut-on conserver les cassaves ?",
    question_ht: "Konbyen tan kasav yo ka konsève ?",
    answer: "Reportez-vous à la date et aux indications figurant sur l'emballage de vos cassaves. Pour connaître la durée de conservation d'une saveur avant de commander, contactez-nous sur WhatsApp.",
    answer_ht: "Gade dat ak enstriksyon ki sou anbalaj kasav ou yo. Pou konnen konbyen tan yon gou ka konsève anvan ou kòmande, kontakte nou sou WhatsApp."
  },
  {
    id: "saveurs-cassave",
    category: "products",
    question: "Quelles saveurs de cassaves proposez-vous ?",
    question_ht: "Ki gou kasav nou genyen ?",
    answer: "Nos cassaves artisanales se déclinent en plusieurs saveurs : nature traditionnelle, fourrée coco/cannelle et fourrée arachide. Contactez-nous pour connaître les saveurs disponibles au moment de votre commande.",
    answer_ht: "Kasav atizanal nou yo genyen plizyè gou : natirèl tradisyonèl, foure ak kokoye/kanèl ak foure ak pistach. Kontakte nou pou konnen ki gou ki disponib lè w ap kòmande."
  },
  {
    id: "formats-disponibles",
    category: "products",
    question: "Quelles sont les variétés et formats de Mamba disponibles ?",
    question_ht: "Ki varyete ak gwosè Mamba ki disponib ?",
    answer: "Nos beurres de cacahuètes Le Secret de Merlie sont disponibles en 4 délicieuses déclinaisons : Pimenté ou Non pimenté, et Sucré ou Salé. Chaque variété est proposée en format standard 16 oz (environ 454g) et en grand format généreux 32 oz (environ 908g).",
    answer_ht: "Bè pistach Le Secret de Merlie yo disponib nan 4 bèl opsyon : Piman bouk oswa San piman, epi Sikre oswa Sale. Chak varyete fèt nan fòma 16 oz (454g) ak gwo fòma 32 oz (908g)."
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
    answer: "Absolument ! Nos Packs Gourmands (Pack Découverte, Pack Mamba Miam’Addict, Pack Saveurs d'Haïti) vous permettent de bénéficier d'une remise allant jusqu'à -18% par rapport à l'achat individuel, le tout livré dans un élégant coffret.",
    answer_ht: "Wi san mank ! Pak Gouman nou yo (Pak Dekouvèt, Pak Mamba Miam’Addict, Pak Prestij) pèmèt ou fè ekonomi jiska -18% konpare ak si w t ap achte yo grenn pa grenn, nan yon bèl bwat kado."
  },
  {
    id: "contacter-le secret de merlie",
    category: "order",
    question: "Comment contacter le service client de Le Secret de Merlie ?",
    question_ht: "Kijan pou m kontakte sèvis kliyan Le Secret de Merlie ?",
    answer: "Notre équipe est disponible 7j/7 ! Vous pouvez nous écrire directement sur WhatsApp au +509 49 09 3613, utiliser le formulaire de la page Contact, ou nous envoyer un message sur Instagram / Facebook @lesecretremerlie.",
    answer_ht: "Ekip nou an disponib 7 jou sou 7 ! Ou ka ekri nou dirèkteman sou WhatsApp nan +509 49 09 3613, sèvi ak fòmilè kontak la, oswa voye yon mesaj sou Instagram / Facebook @lesecretremerlie."
  }
];
