import type { LucideIcon } from "lucide-react"
import {
  ArrowUpRight,
  Blocks,
  Braces,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Network,
  PenTool,
  Rocket,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  description: string
  icon: LucideIcon
  items: string[]
}

export type Project = {
  title: string
  type: string
  description: string
  stack: string[]
  impact: string
  href: string
}

export type TimelineItem = {
  period: string
  title: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "A propos", href: "#about" },
  { label: "Competences", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export const heroHighlights = [
  "Conception",
  "Developpement",
  "Architecture",
  "Livraison",
]

export const quickSections = [
  "Hero section",
  "Competences",
  "Portfolio",
  "A propos",
  "Pourquoi moi ?",
  "FAQs",
  "Contact rapide",
]

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces reactives, accessibles et soignees.",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "APIs solides, donnees propres, logique metier claire.",
    icon: Database,
    items: ["Node.js", "REST", "SQL", "Auth"],
  },
  {
    title: "DevOps",
    description: "Deploiement, qualite continue et environnement fiable.",
    icon: TerminalSquare,
    items: ["Git", "CI/CD", "Docker", "Monitoring"],
  },
  {
    title: "Conception",
    description: "Cadrage, parcours utilisateurs et decisions produit.",
    icon: PenTool,
    items: ["UX", "Wireframes", "Design system", "Specs"],
  },
  {
    title: "Architecture",
    description: "Applications maintenables, decoupees et evolutives.",
    icon: Network,
    items: ["Clean code", "Modularite", "Schemas", "Tests"],
  },
]

export const projects: Project[] = [
  {
    title: "Dashboard SaaS",
    type: "Application web",
    description:
      "Un tableau de bord metier pour suivre les indicateurs, filtrer les donnees et accelerer les decisions d'equipe.",
    stack: ["Next.js", "TypeScript", "Charts", "API"],
    impact: "Lecture des donnees plus rapide et parcours decisionnel simplifie.",
    href: "#",
  },
  {
    title: "Plateforme de reservation",
    type: "Produit full-stack",
    description:
      "Un parcours complet de recherche, disponibilite, reservation et confirmation avec logique backend robuste.",
    stack: ["React", "Node.js", "SQL", "Auth"],
    impact: "Tunnel de reservation plus fluide et erreurs utilisateur reduites.",
    href: "#",
  },
  {
    title: "Back-office contenu",
    type: "Outil interne",
    description:
      "Une interface d'administration claire pour gerer contenus, statuts, validations et historique d'actions.",
    stack: ["Next.js", "Forms", "RBAC", "Tests"],
    impact: "Operations quotidiennes centralisees et processus mieux controles.",
    href: "#",
  },
]

export const timeline: TimelineItem[] = [
  {
    period: "Aujourd'hui",
    title: "Concepteur developpeur d'application",
    description:
      "Je transforme un besoin metier en interface utilisable, architecture technique et application livrable.",
  },
  {
    period: "Parcours",
    title: "Du besoin au produit",
    description:
      "Je travaille autant sur la clarification fonctionnelle que sur la qualite du code, les donnees et l'experience finale.",
  },
  {
    period: "Formation",
    title: "Culture projet et technique",
    description:
      "Conception, developpement web, bases de donnees, tests, versioning et methodes agiles.",
  },
  {
    period: "Certifications",
    title: "Progression continue",
    description:
      "Veille, pratique, documentation et amelioration reguliere des outils de livraison.",
  },
]

export const reasons = [
  {
    title: "Je pense systeme",
    description:
      "Je ne code pas une page isolee : je pense flux, donnees, maintenance et evolution du produit.",
    icon: Layers3,
  },
  {
    title: "Je rends clair",
    description:
      "J'aime transformer un besoin flou en parcours lisible, priorise et comprehensible par l'equipe.",
    icon: Blocks,
  },
  {
    title: "Je livre propre",
    description:
      "Structure, typage, composants reutilisables et verification font partie du travail, pas de la decoration.",
    icon: ShieldCheck,
  },
]

export const faqItems: FaqItem[] = [
  {
    question: "Tu travailles plutot frontend ou backend ?",
    answer:
      "Je suis oriente application complete : interface, logique metier, donnees et integration. Je peux me concentrer sur un cote selon le besoin.",
  },
  {
    question: "Peux-tu partir d'une idee non formalisee ?",
    answer:
      "Oui. Je peux aider a clarifier les objectifs, les utilisateurs, les ecrans essentiels et le premier perimetre livrable.",
  },
  {
    question: "Quel type de projet te correspond le mieux ?",
    answer:
      "Les applications utiles, les outils internes, dashboards, plateformes metier et produits web qui demandent de la clarte.",
  },
]

export const contactCards = [
  {
    label: "Email",
    value: "contact@portfolio.dev",
    href: "mailto:contact@portfolio.dev",
    icon: Mail,
  },
  {
    label: "Localisation",
    value: "France / Remote",
    href: "#",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/votre-profil",
    href: "#",
    icon: ArrowUpRight,
  },
  {
    label: "GitHub",
    value: "github.com/votre-profil",
    href: "#",
    icon: GitBranch,
  },
]

export const stackTicker = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "SQL",
  "Tailwind",
  "GSAP",
  "UX",
  "API",
  "Tests",
]

export const visualStats = [
  { value: "03", label: "projets presentes" },
  { value: "05", label: "domaines de competence" },
  { value: "100%", label: "oriente produit utile" },
]

export const heroIcons = [Cpu, Braces, Rocket]
