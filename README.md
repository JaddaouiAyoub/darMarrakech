# Dar Marrakech

Site vitrine premium pour **Dar Marrakech**, restaurant de cuisine marocaine authentique.

> « Une expérience culinaire inoubliable. »

Le site est en français, les prix sont affichés en MAD, et le développement suit une approche **mobile first**.

## Stack technique

| Technologie | Rôle |
|---|---|
| Next.js 16 (App Router) | Framework applicatif |
| React 19 + TypeScript | Interface et typage |
| Tailwind CSS 4 | Styles |
| Lucide React | Icônes |
| Motion | Animations |
| React Hook Form + Zod | Formulaires et validation |
| Sonner | Notifications |
| next/image | Optimisation des images |

Aucune base de données ni backend : les données (menu, galerie, avis) sont des fichiers TypeScript statiques.

## Démarrage

Prérequis : Node.js 20.9+ et npm.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Lance le build de production |
| `npm run lint` | ESLint |
| `npm run typecheck` | Génère les types Next.js puis lance `tsc --noEmit` |

## Pages prévues

`/` · `/menu` · `/restaurant` · `/galerie` · `/avis` · `/contact` · `/reservation`

## Documentation

La spécification du projet et la maquette visuelle approuvée sont conservées localement dans `docs/` (non versionné).

## Avancement

- [x] Phase 1 — Initialisation
- [x] Phase 2 — Fondations du design system
- [ ] Phase 3 — Composants partagés (header, navigation, footer)
- [ ] Phase 4 — Page d'accueil
- [ ] Phase 5 — Pages internes
- [ ] Phase 6 — Qualité finale (accessibilité, SEO, performance)

## Informations à fournir

Les coordonnées réelles (adresse, téléphone, email, horaires), les avis clients vérifiés et les liens réseaux sociaux ne sont pas encore connus. Le site utilise des **placeholders clairement identifiés** jusqu'à leur fourniture.
