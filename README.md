# Portfolio — Rehan · BUT Informatique

Portfolio personnel, style sobre et sombre (noir / bleu), construit en **HTML / CSS / JS pur** (aucune installation, aucun build).

## ▶️ Prévisualiser

- **Le plus simple :** double-clique sur `index.html`.
- **Avec un petit serveur local :** `python3 server.py` puis ouvre http://127.0.0.1:4321

## ✏️ Remplir / modifier le contenu

**Tout le contenu est dans un seul fichier : [`assets/js/data.js`](assets/js/data.js).**
Tu n'as pas besoin de toucher au HTML, au CSS ni à `app.js`.

Repères dans `data.js` :
- Texte déjà écrit = repris de ton portfolio **BUT1** (à relire / ajuster).
- `À COMPLÉTER` = à remplir pour le **BUT2** (stage, nouvelles SAÉ, engagements…).
- Les jauges vont de `0` à `100` (`niveauBut1` / `niveauBut2`).
- Pour relier une SAÉ à une compétence : mettre le même identifiant
  (ex. `"realiser"`) dans le champ `competences` de la SAÉ **et** ajouter la
  SAÉ dans le champ `preuves` de la compétence.

### Sections (onglets)
| Onglet | Où le modifier dans `data.js` |
|---|---|
| Accueil + fil conducteur | `accueil` |
| Parcours (présentation, qualités, soft skills, engagements, évolution) | `parcours` |
| Compétences (6 compétences BUT, jauges, preuves) | `competences` |
| SAÉ (catalogue + fiches détaillées) | `saes` |
| Stage + rapport d'étonnement | `stage`, `rapportEtonnement` |
| Contact | `contact` |

### Ajouter une preuve cliquable
Dans une SAÉ, remplace les `url: "#"` par un vrai lien (GitHub, PDF, image…) :
```js
preuves: [
  { titre: "Code source", type: "GitHub", url: "https://github.com/..." },
]
```
Tu peux déposer tes fichiers (images, PDF) dans `assets/img/` et y faire référence.

## 🚀 Mettre en ligne (GitHub Pages)
1. Crée un dépôt GitHub et pousse ce dossier.
2. Settings → Pages → Branch `main` / `root`.
3. Ton portfolio sera disponible sur `https://<ton-pseudo>.github.io/<depot>/`.

## ✅ Reste à compléter (BUT2)
- [ ] Nom complet + lien LinkedIn (`data.js` → `profil`)
- [ ] Détails du bénévolat (mosquée) et de l'association (`parcours.engagements`)
- [ ] Évolution BUT1 → BUT2 (`parcours.evolution`)
- [ ] Bilan de stage complet (`stage`) et rapport d'étonnement (`rapportEtonnement`)
- [ ] Résumés/fiches des SAÉ marquées « À COMPLÉTER » (`saes`)
- [ ] Vérifier/ajuster les niveaux des jauges et ajouter les liens de preuves
