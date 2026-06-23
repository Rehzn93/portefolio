/* =========================================================================
   MOTEUR DU PORTFOLIO — routeur SPA (hash) + rendu des pages
   (en principe tu n'as pas besoin de toucher à ce fichier)
   ========================================================================= */

const app = document.getElementById("app");
const navLinks = document.getElementById("nav-links");
const burger = document.getElementById("nav-burger");

/* ----------------------------------------------------------- Helpers */
const getCompetence = (id) => DATA.competences.find((c) => c.id === id);
const getSae = (id) => DATA.saes.find((s) => s.id === id);

/* Icônes SVG inline (vert via currentColor) */
const ICONS = {
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-5 6 5 6M16 6l5 6-5 6"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13c-2 2-2 6-2 6s4 0 6-2M13 16l-5-5a12 12 0 016-8c3 0 4 1 4 4a12 12 0 01-5 9z"/><circle cx="14.5" cy="9.5" r="1.3"/></svg>',
};
const icon = (n) => ICONS[n] || ICONS.spark;

/* Technos : niveau qualitatif + points (pas de pourcentage) */
const niveauLabel = (n) => (n >= 3 ? "Avancé" : n === 2 ? "Intermédiaire" : "Notions");
const dots = (n) => [1, 2, 3].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("");
const getTechno = (id) => DATA.technos.find((t) => t.id === id);
function groupTechnos() {
  const cats = [];
  DATA.technos.forEach((t) => { if (!cats.includes(t.categorie)) cats.push(t.categorie); });
  return cats.map((cat) => ({ cat, items: DATA.technos.filter((t) => t.categorie === cat) }));
}

const paragraphs = (txt) =>
  (txt || "")
    .split(/\n\s*\n/)
    .map((p) => `<p>${p.trim().replace(/\n/g, "<br>")}</p>`)
    .join("");

const typeBadge = (type) =>
  type === "Solo"
    ? `<span class="badge badge--solo">● Solo</span>`
    : `<span class="badge badge--equipe">● Équipe</span>`;

/* Jauge BUT1 / BUT2 (fiches) :
   - .gauge__but2 = remplissage vert jusqu'au niveau actuel (BUT2)
   - .gauge__but1 = repère (trait blanc) marquant le niveau de départ (BUT1) */
const gauge = (label, but1, but2) => `
  <div class="gauge">
    <div class="gauge__head">
      <span class="gauge__label">${label}</span>
      <span class="gauge__vals">BUT1 ${but1} → <b style="color:var(--green)">BUT2 ${but2}</b></span>
    </div>
    <div class="gauge__track">
      <div class="gauge__but2" data-w="${but2}"></div>
      <div class="gauge__but1" data-w="${but1}"></div>
    </div>
  </div>`;

/* Jauge à bascule : n'affiche qu'un seul niveau (BUT1 ou BUT2) selon `vue` */
const gaugeSingle = (label, but1, but2, vue) => {
  const val = vue === "but1" ? but1 : but2;
  return `
  <div class="gauge">
    <div class="gauge__head">
      <span class="gauge__label">${label}</span>
      <span class="gauge__vals">BUT1 <b class="${vue === "but1" ? "on" : ""}">${but1}</b> → BUT2 <b class="${vue === "but2" ? "on" : ""}">${but2}</b></span>
    </div>
    <div class="gauge__track"><div class="gauge__fill" data-w="${val}"></div></div>
  </div>`;
};

const gaugeLegend = () => `
  <div class="gauge__legend">
    <span class="legend-but2"><i></i>Niveau actuel (BUT2)</span>
    <span class="legend-but1"><i></i>Repère niveau BUT1</span>
  </div>`;

/* Anime les jauges présentes dans le DOM */
function animateGauges() {
  requestAnimationFrame(() => {
    document.querySelectorAll(".gauge__but1, .gauge__but2, .gauge__fill").forEach((el) => {
      el.style.width = el.dataset.w + "%";
    });
  });
}

/* ============================================================ VUES */

function viewAccueil() {
  const a = DATA.accueil;
  const titre2 = (a.titreLigne2 || "").replace(/\.$/, "");
  return `
    <section class="hero view-enter">
      <div class="hero__left">
        <span class="hero__eyebrow">${DATA.profil.titre} · ${DATA.profil.sousTitre}</span>
        <h1 class="hero__title">${a.titreLigne1}<br>${titre2}<span class="dot">.</span></h1>
        <p class="hero__lead">${a.lead}</p>
        <div class="hero__cta">
          <a href="#/sae" class="btn btn--primary">Voir mes SAÉ →</a>
          <a href="#/competences" class="btn btn--ghost">Mes compétences</a>
        </div>
      </div>
      <div class="hero__cards">
        ${(a.cartes || []).map((c) => `
          <div class="float-card">
            <span class="float-card__icon">${icon(c.icone)}</span>
            <span>
              <span class="float-card__label">${c.label}</span>
              <span class="float-card__value">${c.valeur}</span>
            </span>
          </div>`).join("")}
      </div>
    </section>

    <div class="hero-extra view-enter">
      <div class="hero__stats">
        ${a.stats.map((s) => `<div class="hero__stat"><b>${s.valeur}</b><span>${s.label}</span></div>`).join("")}
      </div>
      <div class="card" style="border-left:3px solid var(--green)">
        <span class="eyebrow">Fil conducteur</span>
        <p class="section__lead" style="margin-top:.8rem;font-size:1.12rem;color:var(--text-soft)">${a.filConducteur}</p>
      </div>
    </div>`;
}

function viewParcours() {
  const p = DATA.parcours;
  return `
    <section class="section view-enter">
      <div class="section__head">
        <span class="eyebrow">Qui suis-je</span>
        <h1 class="section__title">Mon parcours</h1>
        <p class="section__lead">${DATA.accueil.filConducteur}</p>
      </div>

      <div class="block">
        <h2 class="block__title">Présentation</h2>
        <div class="prose">${paragraphs(p.presentation)}</div>
      </div>

      <div class="block">
        <h2 class="block__title">Pourquoi l'informatique ?</h2>
        <div class="pillars">
          ${p.pourquoiInfo.map((x, i) => `
            <div class="pillar">
              <div class="mono" style="color:var(--green);font-size:.8rem">0${i + 1}.</div>
              <h3>${x.titre}</h3><p>${x.texte}</p>
            </div>`).join("")}
        </div>
      </div>

      <div class="block">
        <h2 class="block__title">Choix d'orientation & ambition</h2>
        <div class="prose">${paragraphs(p.orientation)}</div>
      </div>

      <div class="block">
        <h2 class="block__title">Mes qualités</h2>
        <div class="pillars">
          ${p.qualites.map((q) => `
            <div class="pillar">
              <div class="pillar__icon">${q.icone}</div>
              <h3>${q.titre}</h3><p>${q.texte}</p>
            </div>`).join("")}
        </div>
      </div>

      <div class="block">
        <h2 class="block__title">Soft skills</h2>
        <p class="section__lead" style="margin-bottom:1rem">Illustrés par des exemples concrets de mon parcours SAÉ.</p>
        <div class="grid grid--3">
          ${p.softskills.map((s) => `
            <div class="card"><div class="card__title">${s.titre}</div><p class="card__text">${s.texte}</p></div>`).join("")}
        </div>
      </div>

      <div class="block">
        <h2 class="block__title">Engagements</h2>
        <div class="grid grid--2">
          ${p.engagements.map((e) => `
            <div class="card"><div class="card__title">${e.titre}</div>
            <p class="card__text">${/à compléter/i.test(e.texte) ? `<span class="todo">${e.texte}</span>` : e.texte}</p></div>`).join("")}
        </div>
      </div>

      <div class="block">
        <h2 class="block__title">Évolution BUT1 → BUT2</h2>
        <div class="timeline">
          ${p.evolution.map((e) => `
            <div class="tl-item">
              <span class="mono">${e.periode}</span>
              <h4>${e.titre}</h4>
              <p>${/à compléter/i.test(e.texte) ? `<span class="todo">${e.texte}</span>` : e.texte}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>`;
}

let niveauVue = "but2"; // niveau affiché par les jauges de la page Compétences

function viewCompetences() {
  return `
    <section class="section view-enter">
      <div class="section__head">
        <span class="eyebrow">Référentiel BUT Informatique</span>
        <h1 class="section__title">Mes compétences</h1>
        <p class="section__lead">Les six compétences du référentiel BUT Informatique, avec mes niveaux de BUT1 à BUT2 et mon analyse réflexive.</p>
      </div>

      <div class="level-toggle" role="group" aria-label="Choix du niveau affiché">
        <button data-niveau="but1" class="${niveauVue === "but1" ? "is-active" : ""}">Niveau BUT1</button>
        <button data-niveau="but2" class="${niveauVue === "but2" ? "is-active" : ""}">Niveau BUT2</button>
      </div>
      <p class="toggle-hint">↔ Bascule entre BUT1 et BUT2 pour visualiser ma progression.</p>

      <div class="grid grid--3">
        ${DATA.competences.map((c) => `
          <a class="comp-card" href="#/competence/${c.id}">
            <div class="comp-card__num">${c.num}</div>
            <div class="comp-card__title">${c.titre}</div>
            <p class="comp-card__desc">${c.desc}</p>
            ${gaugeSingle("Niveau", c.niveauBut1, c.niveauBut2, niveauVue)}
            <span class="comp-card__link" aria-hidden="true">→</span>
          </a>`).join("")}
      </div>

      <div class="section__head" style="margin-top:3.6rem">
        <span class="eyebrow">Stack technique</span>
        <h2 class="section__title" style="font-size:clamp(1.5rem,3.5vw,2.2rem)">Technologies &amp; outils</h2>
      </div>
      ${groupTechnos().map((g) => `
        <div class="techno-group">
          <h3 class="techno-group__title">${g.cat}</h3>
          <div class="techno-list">
            ${g.items.map((t) => `
              <a class="techno" href="#/techno/${t.id}" title="${niveauLabel(t.niveau)}">
                <span class="techno__name">${t.nom}</span>
                <span class="techno__level">${dots(t.niveau)}</span>
              </a>`).join("")}
          </div>
        </div>`).join("")}
    </section>`;
}

function viewTechnoDetail(id) {
  const t = getTechno(id);
  if (!t) return viewNotFound();
  return `
    <section class="section view-enter">
      <a class="back-link" href="#/competences">← Toutes les compétences</a>
      <div class="detail__header">
        <span class="eyebrow">${t.categorie}</span>
        <h1 class="section__title">${t.nom}</h1>
        <p class="section__lead">${t.resume}</p>
        <div class="detail__meta">
          <span class="badge badge--blue">${niveauLabel(t.niveau)}</span>
          <span class="techno__level" style="align-self:center">${dots(t.niveau)}</span>
        </div>
      </div>

      <div class="detail__grid">
        <div>
          <div class="block">
            <h2 class="block__title">Où je l'ai mis en œuvre</h2>
            ${(t.experiences || []).length
              ? `<div class="proofs">${t.experiences.map((e) => `
                  <a class="proof" href="${e.href}">
                    <span class="proof__icon">↳</span>
                    <span class="proof__body"><span class="proof__title">${e.label}</span></span>
                  </a>`).join("")}</div>`
              : `<p class="todo">À compléter</p>`}
          </div>
        </div>
        <aside>
          <div class="aside-card">
            <h4>Preuves</h4>
            ${(t.preuves || []).length
              ? `<div class="proofs">${t.preuves.map((p) => `
                  <a class="proof" href="${p.url}" ${p.url !== "#" ? 'target="_blank" rel="noopener"' : ""}>
                    <span class="proof__icon">${(p.type || "•")[0]}</span>
                    <span class="proof__body">
                      <span class="proof__title">${p.titre}</span>
                      <span class="proof__sub">${p.type}${p.url === "#" ? " · lien à ajouter" : ""}</span>
                    </span>
                  </a>`).join("")}</div>`
              : `<p class="proof__sub" style="color:var(--text-mute)">Les expériences ci-contre attestent de cette compétence.</p>`}
          </div>
        </aside>
      </div>
    </section>`;
}

function viewCompetenceDetail(id) {
  const c = getCompetence(id);
  if (!c) return viewNotFound();
  const preuves = (c.preuves || []).map(getSae).filter(Boolean);
  return `
    <section class="section view-enter">
      <a class="back-link" href="#/competences">← Toutes les compétences</a>
      <div class="detail__header">
        <span class="eyebrow">Compétence ${c.num}</span>
        <h1 class="section__title">${c.titre}</h1>
        <p class="section__lead">${c.sousTitre}</p>
      </div>

      <div class="detail__grid">
        <div>
          <div class="block">
            <h2 class="block__title">En quoi consiste cette compétence</h2>
            <div class="prose">${paragraphs(c.detail)}</div>
          </div>

          ${c.pistesAmelioration ? `<div class="block">
            <h2 class="block__title">Ce qu'il me reste à améliorer</h2>
            <div class="prose"><p>${c.pistesAmelioration}</p></div>
          </div>` : ""}

          <div class="block">
            <h2 class="block__title">SAÉ associées</h2>
            ${preuves.length
              ? `<div class="linked-sae">${preuves.map((s) => `
                  <a class="sae-card" href="#/sae/${s.id}" style="cursor:pointer">
                    <div class="sae-card__top">
                      <span class="sae-card__code">${s.code}</span>${typeBadge(s.type)}
                    </div>
                    <div class="sae-card__title">${s.titre}</div>
                    <p class="sae-card__resume">${s.resume}</p>
                  </a>`).join("")}</div>`
              : `<p class="todo">À compléter</p>`}
          </div>
        </div>

        <aside>
          <div class="aside-card">
            <h4>Niveau de maîtrise</h4>
            ${gauge(c.titre, c.niveauBut1, c.niveauBut2)}
            ${gaugeLegend()}
            <div class="aside-row" style="margin-top:1.2rem"><span>Progression</span><b>+${c.niveauBut2 - c.niveauBut1} pts</b></div>
          </div>
        </aside>
      </div>
    </section>`;
}

/* ---- Catalogue SAÉ ---- */
let saeFiltre = "Toutes";
const SAE_FILTRES = ["Toutes", "Phares", "BUT1", "BUT2"];

function saeMatch(s) {
  if (saeFiltre === "Toutes") return true;
  if (saeFiltre === "Phares") return s.important;
  return s.annee === saeFiltre;
}

function viewSae() {
  const list = DATA.saes.filter(saeMatch).sort((a, b) => (b.important ? 1 : 0) - (a.important ? 1 : 0));
  return `
    <section class="section view-enter">
      <div class="section__head">
        <span class="eyebrow">Catalogue · Archive complète</span>
        <h1 class="section__title">Mes SAÉ</h1>
        <p class="section__lead">L'ensemble de mes Situations d'Apprentissage et d'Évaluation, du BUT1 au BUT2. Les SAÉ <strong>phares</strong> font l'objet d'une analyse complète (mission, rôle, difficultés, compétences, preuves).</p>
      </div>

      <div class="filters">
        ${SAE_FILTRES.map((f) => `<button class="filter ${f === saeFiltre ? "is-active" : ""}" data-filter="${f}">${f}</button>`).join("")}
      </div>

      <div class="catalogue">
        ${list.map((s, i) => `
          <a class="sae-card" href="#/sae/${s.id}">
            <div class="sae-card__top">
              <span class="sae-card__code">${String(i + 1).padStart(2, "0")} · ${s.code}</span>
              ${s.important ? `<span class="badge badge--blue">★ Phare</span>` : `<span class="badge">${s.annee}</span>`}
            </div>
            <div class="sae-card__title">${s.titre}</div>
            <p class="sae-card__resume">${s.todo ? `<span class="todo">${s.resume}</span>` : s.resume}</p>
            <div class="sae-card__foot">${typeBadge(s.type)}<span class="badge">${s.semestre}</span>
              ${(s.competences || []).slice(0, 2).map((cid) => { const c = getCompetence(cid); return c ? `<span class="badge badge--blue">${c.titre}</span>` : ""; }).join("")}
            </div>
          </a>`).join("")}
      </div>
    </section>`;
}

function viewSaeDetail(id) {
  const s = getSae(id);
  if (!s) return viewNotFound();

  // SAÉ non encore détaillée
  if (s.todo) {
    return `
      <section class="section view-enter">
        <a class="back-link" href="#/sae">← Retour au catalogue</a>
        <div class="detail__header">
          <span class="eyebrow">${s.code} · ${s.annee}</span>
          <h1 class="section__title">${s.titre}</h1>
          <div class="detail__meta">${typeBadge(s.type)}<span class="badge">${s.semestre}</span></div>
        </div>
        <p class="todo">À compléter</p>
      </section>`;
  }

  const comps = (s.competences || []).map(getCompetence).filter(Boolean);
  return `
    <section class="section view-enter">
      <a class="back-link" href="#/sae">← Retour au catalogue</a>
      <div class="detail__header">
        <span class="eyebrow">${s.code} · ${s.annee} · Semestre ${s.semestre.replace("S", "")}</span>
        <h1 class="section__title">${s.titre}</h1>
        <p class="section__lead">${s.resume}</p>
        <div class="detail__meta">
          ${typeBadge(s.type)}
          ${comps.map((c) => `<a class="comp-tag" href="#/competence/${c.id}">${c.titre} →</a>`).join("")}
        </div>
      </div>

      <div class="detail__grid">
        <div>
          ${block("Objectif", s.objectif)}
          ${block("Ma mission", s.mission)}
          ${block("Organisation", s.organisation)}
          ${block("Mon rôle", s.role)}
          ${block("Difficultés rencontrées", s.difficultes)}
          ${block("Comment je les ai surmontées", s.solution)}

          ${(s.competencesAcquises || []).length ? `<div class="block">
            <h2 class="block__title">Compétences acquises</h2>
            <ul class="list">${s.competencesAcquises.map((c) => `<li>${c}</li>`).join("")}</ul>
          </div>` : ""}

          ${(s.avant || s.apres) ? `<div class="block">
            <h2 class="block__title">Avant / Après</h2>
            <div class="beforeafter">
              <div class="ba ba--avant"><span class="ba__tag">Avant</span><p>${s.avant || ""}</p></div>
              <div class="ba ba--apres"><span class="ba__tag">Après</span><p>${s.apres || ""}</p></div>
            </div>
          </div>` : ""}

          ${s.perspectives ? `<div class="block">
            <h2 class="block__title">Perspectives d'amélioration</h2>
            <div class="prose"><p>${s.perspectives}</p></div>
          </div>` : ""}
        </div>

        <aside>
          <div class="aside-card">
            ${(s.niveaux || []).length ? `<h4>Niveaux de compétence</h4>
            ${s.niveaux.map((n) => gauge(n.comp, n.but1, n.but2)).join("")}
            ${gaugeLegend()}
            <h4 style="margin-top:1.6rem">Preuves</h4>` : `<h4>Preuves</h4>`}
            ${(s.preuves || []).length
              ? `<div class="proofs">${s.preuves.map((p) => `
                  <a class="proof" href="${p.url}" ${p.url !== "#" ? 'target="_blank" rel="noopener"' : ""}>
                    <span class="proof__icon">${(p.type || "•")[0]}</span>
                    <span class="proof__body">
                      <span class="proof__title">${p.titre}</span>
                      <span class="proof__sub">${p.type}${p.url === "#" ? " · lien à ajouter" : ""}</span>
                    </span>
                  </a>`).join("")}</div>`
              : `<p class="todo">À compléter</p>`}
          </div>
        </aside>
      </div>
    </section>`;
}

function block(titre, contenu) {
  if (!contenu) return "";
  const todo = /à compléter/i.test(contenu);
  return `<div class="block"><h2 class="block__title">${titre}</h2>
    <div class="prose">${todo ? `<p class="todo">${contenu}</p>` : paragraphs(contenu)}</div></div>`;
}

function viewStage() {
  const s = DATA.stage;
  const isTodo = (t) => /à compléter/i.test(t || "");
  const txt = (t) => (isTodo(t) ? `<span class="todo">${t}</span>` : t);
  const comps = (s.competencesStage || []).map((cs) => ({ c: getCompetence(cs.id), commentaire: cs.commentaire })).filter((x) => x.c);

  return `
    <section class="section view-enter">
      <div class="section__head">
        <span class="eyebrow">Bilan · BUT2</span>
        <h1 class="section__title">Mon stage</h1>
        <p class="section__lead">${txt(s.intro)}</p>
        <div class="detail__meta" style="margin-top:1.2rem">
          <span class="badge badge--blue">${txt(s.entreprise)}</span>
          <span class="badge">${txt(s.poste)}</span>
          <span class="badge">${txt(s.periode)}</span>
          <span class="badge">Secteur : ${s.secteur}</span>
        </div>
      </div>

      <div class="detail__grid">
        <div>
          <div class="block">
            <h2 class="block__title">Missions accomplies</h2>
            <ul class="list">${s.missions.map((m) => `<li>${txt(m)}</li>`).join("")}</ul>
          </div>
          <div class="block">
            <h2 class="block__title">Découvertes</h2>
            <ul class="list">${s.decouvertes.map((d) => `<li>${txt(d)}</li>`).join("")}</ul>
          </div>
          ${block("Culture d'entreprise & valeurs", s.cultureEntreprise)}
          ${block("Le métier découvert", s.metier)}

          <div class="block">
            <h2 class="block__title">2 compétences mises en avant grâce au stage</h2>
            <div class="grid grid--2">
              ${comps.map(({ c, commentaire }) => `
                <a class="card card--link" href="#/competence/${c.id}">
                  <span class="card__index">${c.num}</span>
                  <div class="card__title">${c.titre}</div>
                  <p class="card__text">${txt(commentaire)}</p>
                  <span class="card__arrow">↗</span>
                </a>`).join("")}
            </div>
          </div>
        </div>

        <aside>
          <div class="aside-card">
            <h4>Objectifs professionnels</h4>
            <div class="block" style="margin-bottom:1rem"><strong>Court terme</strong><p style="margin-top:.3rem">${txt(s.objectifs.court)}</p></div>
            <div class="block" style="margin-bottom:1rem"><strong>Moyen terme</strong><p style="margin-top:.3rem">${txt(s.objectifs.moyen)}</p></div>
            <div class="block" style="margin-bottom:0"><strong>Long terme</strong><p style="margin-top:.3rem">${txt(s.objectifs.long)}</p></div>
          </div>
        </aside>
      </div>

      <div class="block" style="margin-top:1rem">
        <h2 class="block__title">Rapport d'étonnement</h2>
        <div class="grid grid--3">
          ${DATA.rapportEtonnement.map((r) => `
            <div class="card"><div class="card__title">${r.titre}</div>
            <p class="card__text">${txt(r.texte)}</p></div>`).join("")}
        </div>
      </div>
    </section>`;
}

function viewContact() {
  const c = DATA.contact;
  return `
    <section class="section view-enter">
      <div class="section__head">
        <span class="eyebrow">Me contacter</span>
        <h1 class="section__title">Restons en contact</h1>
        <p class="section__lead">${c.intro}</p>
      </div>
      <div class="contact-grid">
        ${c.liens.map((l) => `
          <a class="contact-card" href="${l.url}" ${l.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
            <span class="ic">${l.icone}</span>
            <span><b>${l.label}</b><span>${l.valeur}</span></span>
          </a>`).join("")}
      </div>
    </section>`;
}

function viewNotFound() {
  return `<section class="section view-enter"><h1 class="section__title">Page introuvable</h1>
    <a class="btn btn--primary" href="#/accueil">← Retour à l'accueil</a></section>`;
}

/* ============================================================ ROUTEUR */
const routes = {
  accueil: viewAccueil,
  parcours: viewParcours,
  competences: viewCompetences,
  competence: (id) => viewCompetenceDetail(id),
  sae: viewSae,
  stage: viewStage,
  contact: viewContact,
};

function render() {
  const hash = location.hash.replace(/^#\//, "") || "accueil";
  const [route, param] = hash.split("/");

  let html;
  if (route === "competence") html = viewCompetenceDetail(param);
  else if (route === "techno") html = viewTechnoDetail(param);
  else if (route === "sae" && param) html = viewSaeDetail(param);
  else if (routes[route]) html = routes[route]();
  else html = viewNotFound();

  app.innerHTML = html;

  // état actif de la navigation
  const base = route === "competence" || route === "techno" ? "competences" : route;
  navLinks.querySelectorAll("a").forEach((a) =>
    a.classList.toggle("is-active", a.dataset.route === base)
  );

  // filtres du catalogue
  app.querySelectorAll(".filter").forEach((btn) =>
    btn.addEventListener("click", () => { saeFiltre = btn.dataset.filter; render(); })
  );

  // bascule niveau BUT1 / BUT2 (page Compétences)
  app.querySelectorAll(".level-toggle button").forEach((btn) =>
    btn.addEventListener("click", () => { niveauVue = btn.dataset.niveau; render(); })
  );

  animateGauges();
  navLinks.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

/* Menu mobile */
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});

/* Année du footer */
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
render();
