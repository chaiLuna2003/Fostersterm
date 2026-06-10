import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navbar } from "../components/Navbar";

function useFade(direction: "up" | "left" | "right" = "up", delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform =
      direction === "left" ? "translateX(-30px)"
      : direction === "right" ? "translateX(30px)"
      : "translateY(30px)";
    el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Footer() {
  return (
    <footer className="bg-white border-t" style={{ borderColor: "var(--brand-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="flex flex-col gap-5">
            <ImageWithFallback src="/Fostersterm/LogoFS.png" alt="Foster Stern Group" className="h-24 w-auto object-contain" />
            <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Your success is our success. Transform your clinic with integrated allergy services — no upfront investment, no risk.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z" },
                { label: "Instagram", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map(({ label, path }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: "var(--brand-green)" }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)" }}>Navigation</h4>
            <ul className="space-y-3">
              {[
                ["Home", "/english"],
                ["About Us", "/english/about"],
                ["Blog", "/english/blog"],
                ["Contact", "/english#contacto"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm flex items-center gap-2 hover:opacity-70 transition-opacity" style={{ color: "var(--brand-muted)" }}>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)" }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>7480 SW 40th Street<br />Suite 850<br />Miami, FL 33155</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                </div>
                <span className="text-sm" style={{ color: "var(--brand-muted)" }}>+1 (786) 977-3733</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--brand-light)" }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </div>
                <span className="text-sm" style={{ color: "var(--brand-muted)" }}>info@fosterstern.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "var(--brand-primary)" }}>Business Hours</h4>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--brand-light)" }}>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" style={{ color: "var(--brand-green)" }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" /></svg>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Mon – Fri: 8:00 AM – 6:00 PM</p>
                <p className="text-sm mt-1" style={{ color: "var(--brand-muted)" }}>Office hours support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "var(--brand-secondary)" }}>
          <p className="text-sm" style={{ color: "var(--brand-muted)" }}>© {new Date().getFullYear()} Foster Stern Group. All rights reserved.</p>
          <Link to="/" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "var(--brand-green)" }}>🇲🇽 Ver en Español</Link>
        </div>
      </div>
    </footer>
  );
}

// ── Blog posts data ───────────────────────────────────────────────
const blogs = [
  {
    id: 1, title: "New Treatments for Allergic Rhinitis", date: "May 15, 2026", category: "Treatments",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Discover the latest medical alternatives to improve quality of life for patients with respiratory allergies.",
    content: [
      { type: "intro", text: "Allergic rhinitis affects millions of people worldwide, impacting their daily quality of life and productivity." },
      { type: "heading", text: "What Is Allergic Rhinitis?" },
      { type: "paragraph", text: "Allergic rhinitis is an inflammation of the nasal mucosa caused by an immune reaction to allergens such as pollen, dust mites, or pet dander. It is characterized by frequent sneezing, nasal discharge, congestion, and itching." },
      { type: "heading", text: "Modern Treatments Available" },
      { type: "paragraph", text: "Current treatments have evolved significantly — from next-generation antihistamines that don't cause drowsiness, to subcutaneous and sublingual immunotherapy that targets the root cause of the allergy." },
      { type: "highlight", text: "Immunotherapy can reduce symptoms by up to 85% in correctly selected patients, offering long-term relief." },
    ],
  },
  {
    id: 2, title: "How to Detect Food Allergies", date: "May 10, 2026", category: "Diagnosis",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Learn to identify the most common symptoms and when to see a specialist.",
    content: [
      { type: "intro", text: "Food allergies can manifest in many different ways, from mild digestive discomfort to severe anaphylactic reactions." },
      { type: "heading", text: "Main Symptoms" },
      { type: "paragraph", text: "Symptoms can appear minutes to hours after consuming the food. The most common include hives, swelling, abdominal pain, and in severe cases, difficulty breathing." },
      { type: "highlight", text: "Early and accurate diagnosis can prevent serious reactions and significantly improve the patient's quality of life." },
    ],
  },
  {
    id: 3, title: "The Importance of Immunotherapy", date: "May 5, 2026", category: "Immunotherapy",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Immunotherapy can help reduce allergic reactions progressively over time.",
    content: [
      { type: "intro", text: "Immunotherapy is the only treatment capable of modifying the natural course of allergic diseases." },
      { type: "highlight", text: "Clinical studies show that immunotherapy can prevent the development of new sensitizations." },
    ],
  },
  {
    id: 4, title: "Seasonal Allergies and How to Prevent Them", date: "April 28, 2026", category: "Prevention",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Practical tips to reduce symptoms during critical allergy seasons.",
    content: [{ type: "intro", text: "Seasonal allergies affect millions of people each year during specific periods." }],
  },
  {
    id: 5, title: "Children's Respiratory Health", date: "April 20, 2026", category: "Pediatrics",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
    excerpt: "How to protect children's respiratory health from allergies and pollutants.",
    content: [{ type: "intro", text: "Respiratory health in childhood is essential for healthy development." }],
  },
  {
    id: 6, title: "What Is Allergic Asthma?", date: "April 12, 2026", category: "Asthma",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Discover the most common causes and recommended treatments.",
    content: [{ type: "intro", text: "Allergic asthma is the most common form of asthma and is directly related to allergen exposure." }],
  },
  {
    id: 7, title: "Factors That Increase Allergies", date: "April 4, 2026", category: "Prevention",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Understand the environmental elements that affect your health daily.",
    content: [{ type: "intro", text: "The environment we live in has a direct impact on the frequency and intensity of allergic reactions." }],
  },
  {
    id: 8, title: "Benefits of Early Diagnosis", date: "March 29, 2026", category: "Diagnosis",
    image: "https://images.unsplash.com/photo-1516549655669-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Detecting allergies early can significantly improve treatment outcomes.",
    content: [{ type: "intro", text: "Early diagnosis allows treatment to begin before symptoms become chronic." }],
  },
  {
    id: 9, title: "The Link Between Stress and Allergies", date: "March 20, 2026", category: "Wellness",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Stress can intensify allergic symptoms in unexpected ways.",
    content: [{ type: "intro", text: "There is a bidirectional relationship between stress and allergies that deserves special attention." }],
  },
  {
    id: 10, title: "Most Common Allergy Tests", date: "March 11, 2026", category: "Diagnosis",
    image: "https://images.unsplash.com/photo-1580281657527-47b6351c0dcc?q=80&w=1200&auto=format&fit=crop",
    excerpt: "We explore the most common medical tests used to detect allergies.",
    content: [{ type: "intro", text: "Knowing the diagnostic tools available helps choose the most appropriate one for each patient." }],
  },
  {
    id: 11, title: "Allergies During Cold Weather", date: "March 2, 2026", category: "Seasonal",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Tips for avoiding complications during cold weather seasons.",
    content: [{ type: "intro", text: "Winter brings conditions that can aggravate existing allergies." }],
  },
  {
    id: 12, title: "Improving Indoor Air Quality", date: "February 24, 2026", category: "Home",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Small changes at home can make a big difference for allergy sufferers.",
    content: [{ type: "intro", text: "Your home can be either an ally or an enemy for those who suffer from allergies." }],
  },
];

// ── Article view ──────────────────────────────────────────────────
function ArticleView({ blog, onBack }: { blog: typeof blogs[0]; onBack: () => void }) {
  const titleRef = useFade("up", 0);
  const metaRef  = useFade("up", 0.1);
  const imgRef   = useFade("up", 0.2);
  const bodyRef  = useFade("up", 0.3);
  const relRef   = useFade("up", 0.1);
  const related  = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      <Navbar lang="en" />
      <div className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={titleRef} className="mb-6">
            <span className="inline-block text-xs px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl leading-tight font-bold" style={{ color: "var(--brand-primary)" }}>
              {blog.title}
            </h1>
          </div>

          <div ref={metaRef} className="flex items-center gap-4 mb-10 pb-6 border-b" style={{ borderColor: "var(--brand-secondary)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: "var(--brand-green)" }}>FS</div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>Foster Stern Group</p>
              <p className="text-xs" style={{ color: "var(--brand-muted)" }}>{blog.date} · 5 min read</p>
            </div>
            <button onClick={onBack} className="ml-auto text-sm flex items-center gap-1 hover:underline" style={{ color: "var(--brand-green)" }}>
              ← Back to Blog
            </button>
          </div>

          <div ref={imgRef} className="rounded-2xl overflow-hidden mb-10 shadow-md" style={{ maxHeight: 420 }}>
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" style={{ maxHeight: 420 }} />
          </div>

          <div ref={bodyRef} className="max-w-3xl mx-auto">
            {blog.content.map((block, i) => {
              if (block.type === "intro") return (
                <p key={i} className="text-xl leading-relaxed mb-8 font-medium" style={{ color: "var(--brand-primary)" }}>{block.text}</p>
              );
              if (block.type === "heading") return (
                <h2 key={i} className="text-2xl font-bold mt-10 mb-4" style={{ color: "var(--brand-primary)" }}>{block.text}</h2>
              );
              if (block.type === "paragraph") return (
                <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "var(--brand-muted)" }}>{block.text}</p>
              );
              if (block.type === "highlight") return (
                <div key={i} className="rounded-xl p-5 my-8 border-l-4" style={{ backgroundColor: "var(--brand-light)", borderColor: "var(--brand-green)" }}>
                  <p className="text-base font-semibold" style={{ color: "var(--brand-primary)" }}>{block.text}</p>
                </div>
              );
              return null;
            })}
          </div>

          {/* Related articles */}
          <div ref={relRef} className="mt-20 pt-12 border-t" style={{ borderColor: "var(--brand-secondary)" }}>
            <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--brand-primary)" }}>Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <div key={r.id} onClick={() => { onBack(); setTimeout(() => {}, 100); }} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group" style={{ border: "1px solid var(--brand-secondary)" }}>
                  <div className="h-36 overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>{r.category}</span>
                    <p className="text-sm font-bold mt-2" style={{ color: "var(--brand-primary)" }}>{r.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ── Main Blog component ───────────────────────────────────────────
export default function BlogEn() {
  const [selected, setSelected] = useState<typeof blogs[0] | null>(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const heroRef    = useFade("up", 0);
  const filterRef  = useFade("up", 0.1);
  const gridRef    = useFade("up", 0.15);

  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

  const filtered = blogs.filter((b) => {
    const matchCat = category === "All" || b.category === category;
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  if (selected) return <ArticleView blog={selected} onBack={() => setSelected(null)} />;

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <header className="relative overflow-hidden" style={{ minHeight: "52vh", display: "flex", flexDirection: "column" }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
            alt="Blog Foster Stern"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,74,91,0.90) 0%, rgba(0,102,67,0.55) 100%)" }} />
        </div>

        <Navbar lang="en" />

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center w-full">
            <div ref={heroRef}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{ backgroundColor: "rgba(0,129,84,0.25)", color: "#6EE7B7", border: "1px solid rgba(110,231,183,0.4)" }}>
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Insights & <span style={{ color: "#6EE7B7" }}>Resources</span>
              </h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
                Expert knowledge on allergy care, clinic management, and patient health — brought to you by the Foster Stern team.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">

        {/* ── Search & Filters ── */}
        <div ref={filterRef} className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
          <div className="relative w-full md:w-80">
            <svg viewBox="0 0 24 24" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "var(--brand-muted)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ border: "1px solid var(--brand-secondary)", color: "var(--brand-primary)", fontFamily: "'Nunito Sans', sans-serif" }}
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={
                  category === cat
                    ? { backgroundColor: "var(--brand-green)", color: "white" }
                    : { backgroundColor: "var(--brand-light)", color: "var(--brand-primary)", border: "1px solid var(--brand-secondary)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center py-20" style={{ color: "var(--brand-muted)" }}>No articles found matching your search.</p>
        ) : (
          <>
            {/* ── Featured article ── */}
            {featured && (
              <div
                ref={gridRef}
                onClick={() => setSelected(featured)}
                className="rounded-3xl overflow-hidden mb-12 cursor-pointer group shadow-md hover:shadow-2xl transition-all"
                style={{ border: "1px solid var(--brand-secondary)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block text-xs px-3 py-1 rounded-full mb-4 w-fit" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>{featured.category}</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:opacity-80 transition-opacity" style={{ color: "var(--brand-primary)" }}>{featured.title}</h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--brand-muted)" }}>{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "var(--brand-muted)" }}>{featured.date} · 5 min read</span>
                      <span className="text-sm font-bold flex items-center gap-1" style={{ color: "var(--brand-green)" }}>
                        Read more
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {rest.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => setSelected(blog)}
                  className="rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-all"
                  style={{ border: "1px solid var(--brand-secondary)" }}
                >
                  <div className="h-48 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs px-2.5 py-0.5 rounded-full mb-3" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-green)" }}>{blog.category}</span>
                    <h3 className="text-base font-bold mb-2 group-hover:opacity-80 transition-opacity line-clamp-2" style={{ color: "var(--brand-primary)" }}>{blog.title}</h3>
                    <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--brand-muted)" }}>{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "var(--brand-muted)" }}>{blog.date}</span>
                      <span className="text-xs font-bold" style={{ color: "var(--brand-green)" }}>Read →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}