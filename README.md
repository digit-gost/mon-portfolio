# Portfolio — Serigne Abdou Khadre Mbacké SANKHARE

React 19 + Vite + Tailwind CSS v4 (JSX).

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production -> dist/
npm run preview  # prévisualiser le build
```

## Architecture

```
src/
├── main.jsx / App.jsx        Point d'entrée et assemblage des sections
├── index.css                 Thème Tailwind v4 : couleurs, polices, breakpoints, @keyframes
├── data/                     Contenu : site, navigation, socials, experiences, education, projects, technologies
├── hooks/                    useCustomCursor · useAvatarInteraction
├── components/               Composants réutilisables
│   ├── ui/                   Link, Heading, Section
│   ├── icons/                ArrowIcon, GithubIcon, LinkedinIcon, ...
│   └── Header/  Footer/  CustomCursor/  Avatar/  SectionIntro/  TagList/
└── sections/                 Une section de page = un dossier
    └── Hero/  About/  Experience/  Education/  Projects/  Technologies/  Contact/
```

## Styles : Tailwind CSS v4

Tout le style est écrit en classes utilitaires dans le JSX. Il n'y a plus de fichiers `.css` par composant.
`src/index.css` contient uniquement le thème :

- **Couleurs** : `bg-night`, `text-ink`, `text-muted`, `border-line`, `text-acid`, `text-aqua`, `bg-iris`, `bg-coral`, `bg-surface`
- **Polices** : `font-sans` (Space Grotesk) et `font-mono` (DM Mono)
- **Breakpoints** (max-width) : `tablet:` (≤ 1050px) et `phone:` (≤ 720px)
- **Animations** : les `@keyframes` (avatar, grille, halo des projets…) sont déclarés dans `@theme`
- **Accessibilité** : les animations sont coupées si `prefers-reduced-motion` est activé

⚠️ Tailwind ne détecte que les classes écrites **en entier** dans le code. N'écris pas
`` `bg-${color}` `` : utilise une table de correspondance avec les classes complètes (voir `ProjectVisual.jsx`).

Pour modifier le contenu (expériences, projets, stack, coordonnées), éditer les fichiers de `src/data/`.
L'alias `@` pointe vers `src/` (ex. `import Link from "@/components/ui/Link"`).

## Portrait du Hero

Le portrait est intégré dans `public/images/avatar.png`. Il s'agit d'un PNG RGBA avec transparence : ne lui ajoutez pas de fond. Le composant `src/components/Avatar/Avatar.jsx` ajoute uniquement un halo bleu derrière l'image et un fondu discret en bas pour la raccorder au fond du Hero.

Pour remplacer le portrait, conservez le nom `avatar.png` et placez le nouveau PNG transparent dans `public/images/`.
