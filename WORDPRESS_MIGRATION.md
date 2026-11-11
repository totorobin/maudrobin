# Migration CSS WordPress → maudrobin.fr (Vue)

Objectif : supprimer tous les `style="..."` inline des pages WordPress et les
remplacer par des classes CSS définies dans `src/assets/wordpress.css`.

---

## Classes disponibles

| Classe            | Usage                                              |
|-------------------|----------------------------------------------------|
| `maud-wrapper`    | Conteneur principal de page                        |
| `maud-section-header` | Bloc d'en-tête centré                         |
| `maud-narrow`     | Conteneur étroit centré (≤ 720px)                  |
| `maud-title-xl`   | Titre principal H1 (30px, bleu)                    |
| `maud-title-lg`   | Titre de section H2 (25px, bleu)                   |
| `maud-title-md`   | Titre de carte H3 (22px, bleu)                     |
| `maud-title-sm`   | Titre secondaire H4 (20px, bleu)                   |
| `maud-subtitle`   | Sous-titre italique gris (17px)                    |
| `maud-intro`      | Texte d'intro plus grand (18px, bleu, gras)        |
| `maud-quote`      | Texte italique de citation                         |
| `maud-caption`    | Mention fine / légende (14px, italique, gris)      |
| `maud-img-caption`| Légende d'image sous photo (centrée, bleue)        |
| `maud-divider`    | Ligne dorée décorative (45×2px)                    |
| `maud-card`       | Carte fond crème + bordure gauche dorée            |
| `maud-card-blue`  | Carte fond bleu-gris + bordure gauche dorée        |
| `maud-card-rounded` / `maud-card-blue-rounded` | Variante arrondie droite |
| `maud-cta-block`  | Bloc CTA fond bleu foncé                           |
| `maud-cta-text`   | Texte blanc dans un bloc CTA                       |
| `maud-btn`        | Bouton principal bleu plein                        |
| `maud-btn-outline`| Bouton secondaire contour bleu                     |
| `maud-video`      | Wrapper vidéo responsive 16:9                      |
| `maud-row-sep`    | Ligne avec séparation inférieure                   |
| `maud-timeline-item` | Élément avec bordure gauche dorée fine          |

---

## Pages à traiter

### ✅ À faire sur chaque page

Pour chaque page listée ci-dessous, ouvrir l'éditeur HTML de WordPress
(onglet "Code source" dans le bloc HTML personnalisé) et remplacer les
`style="..."` inline par les classes correspondantes.

---

### Page : `presentation`

| Style inline actuel | Classe à utiliser |
|---|---|
| `max-width:900px; margin:0 auto; padding:...; color:#444444; font-size:16px; line-height:1.75;` | `maud-wrapper` |
| `text-align:center; padding:20px 20px 35px;` | `maud-section-header` |
| `color:#183a63; font-size:30px; line-height:1.25; font-weight:500; margin:0 0 18px;` | `maud-title-xl` |
| `font-size:16px; line-height:1.6; color:#555555; margin:0 0 25px;` | `maud-quote` |
| `max-width:850px; margin:0 auto; padding:5px 20px;` | `maud-narrow` |
| `text-align:center; color:#183a63; font-size:25px; font-weight:500; margin:0 0 12px;` | `maud-title-lg` (+ `text-align:center`) |
| `width:45px; height:2px; background-color:#b89a5a; margin:0 auto 30px;` | `maud-divider` |
| `padding:24px 30px; background-color:#faf9f6; border-left:3px solid #b89a5a; margin:0 0 22px;` | `maud-card` |
| `padding:24px 30px; background-color:#f2f5f8; border-left:3px solid #b89a5a; margin:0 0 22px;` | `maud-card-blue` |
| `color:#183a63; font-size:22px; font-weight:500; margin:0 0 10px;` | `maud-title-md` |
| `font-style:italic; font-size:16px; color:#555555; line-height:1.7; margin:0 0 20px;` | `maud-quote` |
| `display:inline-flex !important; ... background-color:#183a63; color:#ffffff !important; ...` | `maud-btn` |
| `max-width:780px; margin:0 auto; padding:10px 25px 25px; text-align:center;` | `maud-narrow` |

---

### Page : `particuliers`

| Style inline actuel | Classe à utiliser |
|---|---|
| `max-width:850px; margin:0 auto; padding:25px 20px 50px; ...` | `maud-wrapper` |
| `text-align:center; padding:15px 10px 35px;` | `maud-section-header` |
| `color:#183a63; font-size:30px; font-weight:500; margin:0 0 12px;` | `maud-title-xl` |
| `font-size:17px; color:#666666; font-style:italic; margin:0 0 30px;` | `maud-subtitle` |
| `width:45px; height:2px; background-color:#b89a5a; margin:0 auto 32px;` | `maud-divider` |
| `color:#183a63; font-size:24px; font-weight:500; margin:0 auto 15px; max-width:720px;` | `maud-title-md maud-narrow` |
| `background-color:#faf9f6; border-left:3px solid #b89a5a; padding:30px; margin:...` | `maud-card` |
| `background-color:#f2f5f8; border-left:3px solid #b89a5a; padding:30px; margin:...` | `maud-card-blue` |
| `color:#183a63; font-size:25px; font-weight:500; margin:0 0 25px;` | `maud-title-lg` |
| `text-align:center; background-color:#faf9f6; padding:30px 25px; margin:...` | `maud-card` (+ `text-align:center`) |
| `display:inline-flex !important; ... background-color:#183a63; ...` | `maud-btn` |
| `display:inline-flex !important; ... border:1px solid #183a63; color:#183a63; ...` | `maud-btn-outline` |
| `background-color:#f2f5f8; padding:32px 30px; margin:0 0 35px;` | `maud-card-blue` |
| `font-size:14px; font-style:italic; color:#777777; margin:0;` | `maud-caption` |
| `border-bottom:1px solid #dddddd; padding:13px 0; margin:0;` | `maud-row-sep` |

---

### Page : `entreprises`

| Style inline actuel | Classe à utiliser |
|---|---|
| `max-width:900px; margin:0 auto; padding:25px 20px 55px; ...` | `maud-wrapper` |
| `text-align:center; padding:18px 10px 42px;` | `maud-section-header` |
| `color:#183a63; font-size:30px; font-weight:500; margin:0 0 12px;` | `maud-title-xl` |
| `color:#183a63; font-size:22px; font-weight:500; margin:0 0 14px;` | `maud-title-md` |
| `font-size:16px; color:#666666; margin:0 0 28px;` | `maud-subtitle` |
| `width:45px; height:2px; background-color:#b89a5a; margin:0 auto 30px;` | `maud-divider` |
| `max-width:790px; margin:0 auto 45px;` | `maud-narrow` |
| `background-color:#faf9f6; border-left:3px solid #b89a5a; padding:32px; margin:...` | `maud-card` |
| `background-color:#f2f5f8; padding:32px; margin:...` | `maud-card-blue` |
| `max-width:650px; margin:0 auto; color:#183a63; font-size:20px; font-style:italic;` | `maud-narrow maud-intro` |
| `border-left:2px solid #b89a5a; padding-left:24px;` | `maud-timeline-item` |
| `text-align:center; background-color:#183a63; padding:38px 30px; margin:...` | `maud-cta-block` |
| `color:#ffffff; font-size:20px; font-style:italic; margin:0 auto 25px; max-width:680px;` | `maud-cta-text` |
| `color:#ffffff; text-decoration:underline;` | *(géré via `.maud-cta-block a`)* |
| `font-style:italic; color:#666666; margin:22px 0 0;` | `maud-caption` |
| `border-bottom:1px solid #dddddd; padding:13px 0; margin:0;` | `maud-row-sep` |

---

### Page : `avec-les-chevaux`

| Style inline actuel | Classe à utiliser |
|---|---|
| `max-width:900px; margin:0 auto; padding:25px 20px 55px; ...` | `maud-wrapper` |
| `text-align:center; padding:15px 10px 42px;` | `maud-section-header` |
| `color:#183a63; font-size:30px; font-weight:500; margin:0 0 14px;` | `maud-title-xl` |
| `max-width:720px; margin:0 auto 28px; font-size:18px; color:#666666;` | `maud-narrow maud-subtitle` |
| `width:45px; height:2px; background-color:#b89a5a; margin:0 auto 30px;` | `maud-divider` |
| `display:block; max-width:100%; height:auto; margin:0 auto 28px;` | *(géré via `.wp-content img`)* |
| `background-color:#faf9f6; border-left:3px solid #b89a5a; border-radius:0 12px 12px 0; padding:28px 24px; margin-bottom:24px;` | `maud-card maud-card-rounded` |
| `background-color:#f2f5f8; border-left:3px solid #b89a5a; border-radius:0 12px 12px 0; padding:28px 24px; margin-bottom:24px;` | `maud-card-blue maud-card-blue-rounded` |
| `color:#183a63; font-family:Georgia,...; font-size:28px; font-weight:400; margin:0 0 16px;` | `maud-title-xl` (+ font Georgia si besoin) |
| `text-align:center; background-color:#183a63; padding:25px 28px;` | `maud-cta-block` |
| `color:#ffffff; font-size:16px; line-height:1.7; margin:0;` | `maud-cta-text` |
| `position:relative; width:100%; padding-bottom:56.25%; height:0; overflow:hidden;` | `maud-video` |
| `position:absolute; top:0; left:0; width:100%; height:100%; border:0;` | *(géré via `.maud-video iframe`)* |
| `text-align:center; color:#183a63; font-size:15px; font-style:italic; margin:12px 0 0;` | `maud-img-caption` |

---

### Page : `contact`

| Style inline actuel | Classe à utiliser |
|---|---|
| `max-width:820px; margin:0 auto; padding:35px 20px 60px; ...` | `maud-wrapper` |
| `text-align:center; margin-bottom:40px;` | `maud-section-header` |
| `color:#183a63; font-size:30px; font-weight:500; margin:0 0 12px;` | `maud-title-xl` |
| `width:45px; height:2px; background-color:#b89a5a; margin:0 auto 26px;` | `maud-divider` |
| `max-width:680px; margin:0 auto 14px; font-size:17px; color:#555555;` | `maud-narrow maud-subtitle` |
| `background-color:#faf9f6; border-left:3px solid #b89a5a; padding:30px 32px; margin-bottom:28px;` | `maud-card` |
| `color:#183a63; font-size:22px; font-weight:500; margin:0 0 10px;` | `maud-title-md` |
| `background-color:#f2f5f8; border-left:3px solid #b89a5a; padding:30px 32px;` | `maud-card-blue` |
| `color:#183a63; text-decoration:none;` | *(lien standard)* |

---

## Méthode de modification dans WordPress

1. Aller dans **WordPress admin → Pages**
2. Ouvrir la page à modifier
3. Cliquer sur le bloc HTML → passer en vue **"Éditeur de code"** (icône `<>`)
4. Remplacer chaque `style="..."` par `class="maud-..."` correspondant
5. Si un élément a déjà une `class`, ajouter la nouvelle classe :  
   `class="existing-class maud-card"`
6. **Supprimer** l'attribut `style="..."` une fois la classe ajoutée
7. Enregistrer et prévisualiser sur maudrobin.fr

---

## Notes importantes

- Les **images** n'ont rien à changer : `.wp-content img` les centre automatiquement.
- Les liens dans `.maud-cta-block` sont automatiquement blancs soulignés.
- Sur **mobile** (< 600px), les tailles de titres et paddings se réduisent automatiquement.
- Les pages non listées ici (`avis`, `a-propos`, `equicoaching-en-bretagne`) suivent les mêmes patterns — identifier le style inline et choisir la classe la plus proche.
