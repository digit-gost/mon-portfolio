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
├── styles/                   base.css (variables, reset, polices) · layout.css (.page-section)
├── data/                     Contenu : site, navigation, socials, experiences, education, projects, technologies
├── hooks/                    useCustomCursor · useAvatarInteraction
├── components/               Composants réutilisables (chacun avec son CSS)
│   ├── ui/                   Link, Heading
│   ├── icons/                ArrowIcon, GithubIcon, LinkedinIcon, ...
│   ├── Header/  Footer/  CustomCursor/  Avatar/  SectionIntro/  TagList/
└── sections/                 Une section de page = un dossier
    ├── Hero/  About/  Experience/  Education/  Projects/  Technologies/  Contact/
```

Pour modifier le contenu (expériences, projets, stack, coordonnées), éditer les fichiers de `src/data/`.
L'alias `@` pointe vers `src/` (ex. `import Link from "@/components/ui/Link"`).
