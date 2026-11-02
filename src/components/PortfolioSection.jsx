import React, { useState } from 'react';
import goodrhImg from '../images/goodrh.png';
import vipCoiffureImg from '../images/VipCoiffure.png';
import alluwaKidsImg from '../images/AlluwaKids.png';
import samaciteImg from '../images/SamaCite.png';
import iteaSchoolImg from '../images/IteaSchool.png';

const portfolioItems = [
  {
    cat: 'saas',
    img: goodrhImg,
    title: 'GoodRH',
    desc: "Plateforme SaaS complète de gestion des ressources humaines (SIRH) pour les organisations d'Afrique de l'Ouest. Multi-tenant avec contrôle d'accès basé sur les rôles.",
    tags: ['Laravel 12', 'React 19', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/Noe06-t/SIRH-ATAABA',
    site: 'https://goodrh.com/',
  },
  {
    cat: 'client',
    img: vipCoiffureImg,
    title: 'Vip Coiffure',
    desc: "Site de gestion des rendez-vous pour un salon de coiffure. Développé lors d'un stage chez TerangaDev.",
    tags: ['WordPress'],
    site: 'https://www.vip-coiffure.terangadev.com/',
  },
  {
    cat: 'product',
    img: alluwaKidsImg,
    title: 'AlluwaKids',
    desc: "Plateforme d'apprentissage interactive pour enfants, combinant jeux éducatifs, exercices ludiques et suivi de progression. Conçue pour rendre l'apprentissage engageant dès le plus jeune âge.",
    tags: ['Laravel', 'React', 'Vite'],
    github: 'https://github.com/idy-00/edukids',
    site: 'https://alluwakids.com/',
  },
  {
    cat: 'product',
    img: samaciteImg,
    title: 'Samacité',
    desc: "Application de signalement et de gestion des problèmes urbains à Dakar. Réalisée lors du concours Gov'athon — backend conçu par Alpha Diallo.",
    tags: ['Laravel', 'React', 'Flutter'],
    github: 'https://github.com/Froxy-13/Samacite',
    site: 'https://samacite.artist-dev.com/',
  },
  {
    cat: 'mobile',
    title: 'Rizen',
    desc: "Application mobile de vente et d'achat d'articles de seconde main au Sénégal. Projet de fin de cycle.",
    tags: ['Flutter', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/Froxy-13/Rizen',
  },
  {
    cat: 'mobile',
    img: iteaSchoolImg,
    title: 'ITEA School Mobile',
    desc: "Application mobile d'apprentissage couvrant le développement web, mobile, Excel, Word et d'autres compétences numériques.",
    tags: ['Flutter'],
    site: 'https://iteaschool.sn',
  },
];

const portfolioFilters = [
  { value: 'all',     label: 'Tous' },
  { value: 'saas',    label: 'SaaS' },
  { value: 'client',  label: 'Sites clients' },
  { value: 'mobile',  label: 'Mobile' },
  { value: 'product', label: 'Autres projets' },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="portfolio">
      <div className="container lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="max-w-3xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
          <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
            <iconify-icon icon="solar:gallery-linear" width="14" height="14" class="text-white-400"></iconify-icon>
            <span className="text-xs text-white/70">Projets sélectionnés</span>
          </div>
          <h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
            Mes réalisations
          </h2>
          <p className="text-base md:text-lg text-white/70 mt-4">
            Une sélection de projets web et mobiles conçus pour répondre à de vrais besoins.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-10 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both' }}>
          {portfolioFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-btn px-4 py-2 rounded-full border border-white/10 text-sm transition ${activeFilter === filter.value ? 'active bg-white/10 text-white/80' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
              aria-pressed={activeFilter === filter.value}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {portfolioItems.map((item, idx) => {
            const isVisible = activeFilter === 'all' || activeFilter === item.cat;
            return (
              <div
                key={idx}
                className={`portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0 hidden'}`}
                style={{ animation: `fadeSlideIn 0.5s ease-in-out ${0.2 + idx * 0.05}s both` }}
              >
                {item.img ? (
                  <img src={item.img} alt={item.title} className="w-full aspect-square object-cover object-top" loading="lazy" decoding="async" />
                ) : (
                  <div className="w-full aspect-square bg-gradient-to-br from-sky-500/30 to-indigo-600/30 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white/10 select-none tracking-tight">{item.title.slice(0, 2).toUpperCase()}</span>
                  </div>
                )}
                <div className="portfolio-overlay">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20 flex gap-2 flex-wrap">
                    {item.site && (
                      <a href={item.site} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition inline-flex items-center gap-1">
                        <iconify-icon icon="solar:arrow-right-up-linear" width="14" height="14"></iconify-icon>
                        Voir le site
                      </a>
                    )}
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition inline-flex items-center gap-1">
                        <iconify-icon icon="simple-icons:github" width="14" height="14"></iconify-icon>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both' }}>
          <a href="https://github.com/Froxy-13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3">
            Voir tout le portfolio
            <iconify-icon icon="simple-icons:github" width="16" height="16"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
}
