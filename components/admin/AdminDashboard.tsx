"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Film,
  Layers,
  Quote,
  Image as ImageIcon,
  Inbox,
  Settings,
  ArrowUpRight,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  X,
  Save,
  Upload,
  Calendar,
  Clock,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { sampleProjects, ProjectItem } from "@/data/projects";
import { servicesData } from "@/data/services";
import { sampleTestimonials, Testimonial } from "@/data/testimonials";
import {
  mockAdminStats,
  initialMockEnquiries,
  initialMockMedia,
  MockEnquiry,
  MockMediaItem,
} from "@/data/admin-mock";
import { siteConfig } from "@/data/site-config";

type AdminTab =
  | "dashboard"
  | "projects"
  | "services"
  | "testimonials"
  | "media"
  | "enquiries"
  | "settings";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(sampleProjects);
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(sampleTestimonials);
  const [enquiriesList, setEnquiriesList] = useState<MockEnquiry[]>(initialMockEnquiries);
  const [mediaList, setMediaList] = useState<MockMediaItem[]>(initialMockMedia);

  // Search & Filter State for Projects
  const [projectSearch, setProjectSearch] = useState("");
  const [projectCategoryFilter, setProjectCategoryFilter] = useState("all");

  // Selected Enquiry Drawer
  const [selectedEnquiry, setSelectedEnquiry] = useState<MockEnquiry | null>(null);

  // Edit / Add Project Modal State
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Partial<ProjectItem> | null>(null);

  // Settings State
  const [settingsForm, setSettingsForm] = useState({
    studioName: siteConfig.name,
    tagline: siteConfig.tagline,
    supportingCopy: siteConfig.supportingCopy,
    email: siteConfig.email,
    phone: siteConfig.phone,
    whatsapp: siteConfig.whatsappDisplay,
    instagram: siteConfig.instagram,
    vimeo: siteConfig.vimeo,
    brandGold: "#CB8D44",
    brandTeal: "#183036",
    seoDescription:
      "Australian creative production studio specialising in cinematic documentary filmmaking, visionary music videos, corporate narratives, and commercial films.",
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Filtered projects
  const filteredProjects = projectsList.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(projectSearch.toLowerCase());
    const matchesCategory =
      projectCategoryFilter === "all" || p.category === projectCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Handle Save Project (Create or Edit)
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject?.title || !editingProject?.slug) return;

    if (editingProject.id) {
      // Update
      setProjectsList((prev) =>
        prev.map((item) =>
          item.id === editingProject.id ? ({ ...item, ...editingProject } as ProjectItem) : item
        )
      );
    } else {
      // Add new
      const newItem: ProjectItem = {
        id: `proj-${Date.now()}`,
        slug: editingProject.slug,
        title: editingProject.title,
        subtitle: editingProject.subtitle || "A new cinematic production",
        category: (editingProject.category as any) || "documentary-film",
        categoryLabel: editingProject.categoryLabel || "Documentary & Film",
        year: editingProject.year || "2026",
        client: editingProject.client || "Independent Production",
        location: editingProject.location || "Melbourne, VIC",
        duration: editingProject.duration || "5m 00s",
        aspectRatio: editingProject.aspectRatio || "2.39:1 Anamorphic",
        cameraFormat: editingProject.cameraFormat || "Arri Alexa Mini LF",
        colorGrade: "Kodak 2383 Emulation",
        heroPoster:
          editingProject.heroPoster ||
          "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
        videoPreviewUrl:
          editingProject.videoPreviewUrl ||
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        fullVideoUrl:
          editingProject.fullVideoUrl ||
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        logline: editingProject.logline || "A powerful story captured on location.",
        synopsis: editingProject.synopsis || "Detailed synopsis of this production.",
        creativeChallenge: editingProject.creativeChallenge || "Challenging elements overcome.",
        creativeDirection: editingProject.creativeDirection || "Aesthetic approach.",
        productionNotes: ["Principal photography captured with anamorphic glass."],
        credits: [{ role: "Director", name: "Boitumelo B." }],
        behindTheFrames: [],
        featured: !!editingProject.featured,
      };
      setProjectsList((prev) => [newItem, ...prev]);
    }

    setIsProjectModalOpen(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm("Are you sure you want to remove this project?")) {
      setProjectsList((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleToggleFeatured = (id: string) => {
    setProjectsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-brand-white">
      {/* Top Security & Demo Disclaimer Warning Bar */}
      <aside
        aria-label="Admin Security Notice"
        className="bg-brand-teal-deep border-b border-brand-teal/60 py-2.5 px-4 text-xs font-mono text-brand-gray-light"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <span>
              <strong className="text-brand-gold">STUDIO PORTAL:</strong> Active production dashboard for project catalog, client enquiries, and media assets.
            </span>
          </div>
          <Link
            href="/"
            className="text-[11px] uppercase tracking-wider text-brand-gold hover:underline flex items-center space-x-1"
          >
            <span>Exit to Public Site</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </aside>

      {/* Main Admin Body Shell */}
      <div className="flex flex-grow">
        {/* Left Sidebar Navigation */}
        <aside className="w-64 bg-brand-black-elevated border-r border-brand-teal/30 p-6 flex flex-col justify-between hidden md:flex flex-shrink-0">
          <div className="space-y-8">
            {/* Admin Brand Signature */}
            <div className="space-y-1">
              <span className="font-display font-bold tracking-[0.2em] text-base text-brand-white block">
                BOITUMELO B
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold block font-medium">
                Studio CMS Portal
              </span>
            </div>

            {/* Nav Items */}
            <nav className="space-y-1.5" aria-label="Admin Navigation">
              {[
                { id: "dashboard", label: "Overview", icon: LayoutDashboard },
                { id: "projects", label: "Projects", icon: Film, count: projectsList.length },
                { id: "services", label: "Services", icon: Layers },
                { id: "testimonials", label: "Testimonials", icon: Quote, count: testimonialsList.length },
                { id: "media", label: "Media Library", icon: ImageIcon, count: mediaList.length },
                { id: "enquiries", label: "Enquiries", icon: Inbox, count: enquiriesList.length },
                { id: "settings", label: "Site Settings", icon: Settings },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as AdminTab)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-brand-teal text-brand-gold font-semibold shadow-sm border border-brand-teal-light"
                        : "text-brand-gray-light hover:text-brand-white hover:bg-brand-teal/20"
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      <tab.icon className={`w-4 h-4 ${isActive ? "text-brand-gold" : "text-brand-gray"}`} />
                      <span>{tab.label}</span>
                    </span>
                    {tab.count !== undefined && (
                      <span className="text-xs px-2 py-0.5 rounded bg-brand-black/60 text-slate-300 font-mono">
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-brand-teal/20 space-y-2 text-xs font-mono text-brand-gray">
            <p>Production Suite // Melbourne & Sydney</p>
            <p>Region: Australia (AEDT)</p>
          </div>
        </aside>

        {/* Right Content View Area */}
        <main className="flex-grow p-6 sm:p-10 overflow-y-auto max-w-7xl mx-auto w-full">
          {/* Mobile Tab Selector */}
          <div className="md:hidden mb-6 flex overflow-x-auto space-x-2 pb-2 border-b border-brand-teal/30">
            {["dashboard", "projects", "services", "testimonials", "media", "enquiries", "settings"].map(
              (tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab as AdminTab)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-brand-gold text-brand-black font-semibold"
                      : "bg-brand-black-elevated border border-brand-teal/40 text-brand-gray"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* TAB 01: DASHBOARD OVERVIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-teal/30">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-white">
                    Studio Dashboard Overview
                  </h1>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-brand-gray">
                    Last sync: {mockAdminStats.lastUpdated}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingProject({});
                      setIsProjectModalOpen(true);
                    }}
                    className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-brand-black px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Project</span>
                  </button>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { label: "Total Films in Archive", val: projectsList.length, note: "All categories" },
                  { label: "Featured Showcase", val: projectsList.filter((p) => p.featured).length, note: "Homepage features" },
                  { label: "Pending Enquiries", val: enquiriesList.filter((e) => e.status === "New").length, note: "Requires response" },
                  { label: "Media Assets", val: mediaList.length, note: "Cinema masters & stills" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 bg-brand-black-elevated border border-brand-teal/40 rounded-sm"
                  >
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-gold block font-medium">
                      {stat.label}
                    </span>
                    <span className="text-3xl sm:text-4xl font-display font-bold text-brand-white mt-2 block">
                      {stat.val}
                    </span>
                    <span className="text-xs font-mono text-slate-300 mt-1 block">
                      {stat.note}
                    </span>
                  </div>
                ))}
              </div>

              {/* Recent Enquiries & Fast Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 bg-brand-black-elevated border border-brand-teal/40 p-6 rounded-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-teal/30">
                    <h2 className="font-display font-medium text-base text-brand-white">
                      Recent Inbound Enquiries
                    </h2>
                    <button
                      type="button"
                      onClick={() => setActiveTab("enquiries")}
                      className="text-xs font-mono text-brand-gold hover:underline"
                    >
                      View All ({enquiriesList.length})
                    </button>
                  </div>

                  <div className="divide-y divide-brand-teal/20">
                    {enquiriesList.slice(0, 3).map((enq) => (
                      <div
                        key={enq.id}
                        onClick={() => {
                          setSelectedEnquiry(enq);
                          setActiveTab("enquiries");
                        }}
                        className="py-3 flex items-center justify-between cursor-pointer hover:bg-brand-teal/20 px-2 rounded transition-colors"
                      >
                        <div>
                          <h3 className="text-sm font-medium text-brand-white">
                            {enq.name}
                          </h3>
                          <p className="text-xs font-mono text-brand-gray">
                            {enq.service} • {enq.date}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                            enq.status === "New"
                              ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40"
                              : "bg-brand-teal/40 text-brand-gray-light"
                          }`}
                        >
                          {enq.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="lg:col-span-5 bg-brand-teal/30 border border-brand-teal/50 p-6 rounded-sm space-y-4">
                  <h2 className="font-display font-medium text-base text-brand-white">
                    Production Shortcuts
                  </h2>
                  <div className="space-y-2 text-xs font-mono">
                    <Link
                      href="/work"
                      target="_blank"
                      className="flex items-center justify-between p-3 bg-brand-black/60 rounded border border-brand-teal/40 hover:border-brand-gold text-brand-gray-light hover:text-brand-white transition-all"
                    >
                      <span>Preview Live Portfolio Grid</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold" />
                    </Link>
                    <Link
                      href="/book"
                      target="_blank"
                      className="flex items-center justify-between p-3 bg-brand-black/60 rounded border border-brand-teal/40 hover:border-brand-gold text-brand-gray-light hover:text-brand-white transition-all"
                    >
                      <span>Test Client Booking Flow</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setActiveTab("settings")}
                      className="w-full flex items-center justify-between p-3 bg-brand-black/60 rounded border border-brand-teal/40 hover:border-brand-gold text-brand-gray-light hover:text-brand-white transition-all text-left"
                    >
                      <span>Update SEO & Brand Tokens</span>
                      <Settings className="w-3.5 h-3.5 text-brand-gold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 02: PROJECTS MANAGEMENT */}
          {activeTab === "projects" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-teal/30">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                    Curated Archive
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-white mt-1">
                    Projects Management
                  </h1>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setEditingProject({});
                    setIsProjectModalOpen(true);
                  }}
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-brand-black px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Project</span>
                </button>
              </div>

              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="w-4 h-4 text-brand-gray absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={projectSearch}
                    onChange={(e) => setProjectSearch(e.target.value)}
                    placeholder="Search by project title, client, or keyword..."
                    className="w-full bg-brand-black-elevated border border-brand-teal/40 focus:border-brand-gold pl-10 pr-4 py-2.5 rounded-sm text-xs font-mono text-brand-white placeholder-brand-gray/60 focus:outline-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-brand-gray" />
                  <select
                    value={projectCategoryFilter}
                    onChange={(e) => setProjectCategoryFilter(e.target.value)}
                    className="bg-brand-black-elevated border border-brand-teal/40 focus:border-brand-gold px-3 py-2.5 rounded-sm text-xs font-mono text-brand-white focus:outline-none"
                  >
                    <option value="all">All Disciplines</option>
                    <option value="documentary-film">Documentary & Film</option>
                    <option value="music-videos">Music Videos</option>
                    <option value="corporate-video">Corporate Video</option>
                    <option value="brand-commercials">Brand & Commercial</option>
                  </select>
                </div>
              </div>

              {/* Projects Table */}
              <div className="bg-brand-black-elevated border border-brand-teal/40 rounded-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-brand-teal-deep text-brand-gold uppercase tracking-wider border-b border-brand-teal/40">
                      <tr>
                        <th className="p-4">Cover</th>
                        <th className="p-4">Title & Client</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Year</th>
                        <th className="p-4">Featured</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-teal/20 text-brand-gray-light">
                      {filteredProjects.map((p) => (
                        <tr key={p.id} className="hover:bg-brand-teal/15 transition-colors">
                          <td className="p-4 w-20">
                            <div className="relative w-16 h-10 rounded overflow-hidden border border-brand-teal/40">
                              <Image
                                src={p.heroPoster}
                                alt={p.title}
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            </div>
                          </td>
                          <td className="p-4 font-sans">
                            <span className="font-medium text-sm text-brand-white block">
                              {p.title}
                            </span>
                            <span className="text-xs text-brand-gray font-mono">
                              {p.client} • {p.location}
                            </span>
                          </td>
                          <td className="p-4 uppercase tracking-wider text-[11px] text-brand-gray">
                            {p.categoryLabel}
                          </td>
                          <td className="p-4">{p.year}</td>
                          <td className="p-4">
                            <button
                              type="button"
                              onClick={() => handleToggleFeatured(p.id)}
                              className={`text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded border transition-colors ${
                                p.featured
                                  ? "bg-brand-gold text-brand-black border-brand-gold font-semibold"
                                  : "bg-brand-black/60 border-brand-teal/40 text-brand-gray"
                              }`}
                            >
                              {p.featured ? "Featured" : "Standard"}
                            </button>
                          </td>
                          <td className="p-4 text-right space-x-2">
                            <Link
                              href={`/work/${p.slug}`}
                              target="_blank"
                              className="p-1 text-brand-gray hover:text-brand-white inline-block"
                              title="Preview Live Case Study"
                            >
                              <Eye className="w-4 h-4" />
                            </Link>
                            <button
                              type="button"
                              onClick={() => {
                                setEditingProject(p);
                                setIsProjectModalOpen(true);
                              }}
                              className="p-1 text-brand-gray hover:text-brand-gold inline-block"
                              title="Edit Project"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteProject(p.id)}
                              className="p-1 text-brand-gray hover:text-red-400 inline-block"
                              title="Delete Project"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03: SERVICES MANAGEMENT */}
          {activeTab === "services" && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-6 border-b border-brand-teal/30">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                  Disciplines Content
                </span>
                <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-white mt-1">
                  Services Management
                </h1>
                <p className="text-xs text-brand-gray mt-1 font-mono">
                  Manage copy, capabilities, and visual direction parameters for the four core production disciplines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(servicesData).map((s) => (
                  <div
                    key={s.slug}
                    className="p-6 bg-brand-black-elevated border border-brand-teal/40 rounded-sm space-y-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-brand-teal/20 text-xs font-mono">
                        <span className="text-brand-gold">VERTICAL // {s.number}</span>
                        <Link
                          href={`/services/${s.slug}`}
                          target="_blank"
                          className="hover:text-brand-white flex items-center space-x-1"
                        >
                          <span>Live View</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>

                      <h3 className="text-xl font-display font-medium text-brand-white mt-4">
                        {s.title}
                      </h3>
                      <p className="text-xs text-brand-gray-light mt-2 leading-relaxed">
                        {s.tagline}
                      </p>

                      <div className="mt-4 pt-3 border-t border-brand-teal/20 text-xs font-mono">
                        <span className="text-brand-gold block mb-1">Visual Direction:</span>
                        <p className="text-brand-gray text-[11px] leading-relaxed">
                          {s.visualDirection.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between text-xs font-mono border-t border-brand-teal/20">
                      <span className="text-brand-gray">
                        {s.capabilities.length} Capabilities Configured
                      </span>
                      <button
                        type="button"
                        onClick={() => alert(`Service editor for ${s.title} ready for CMS backend.`)}
                        className="text-brand-gold hover:underline"
                      >
                        Edit Service Spec
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 04: TESTIMONIALS MANAGEMENT */}
          {activeTab === "testimonials" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-teal/30">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                    Endorsement Archive
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-white mt-1">
                    Testimonials Management
                  </h1>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const author = prompt("Client Name:");
                    if (!author) return;
                    const company = prompt("Organisation / Artist:") || "Arts Agency";
                    const quote = prompt("Quotation:") || "Exceptional craft and storytelling.";
                    const newTestimonial: Testimonial = {
                      id: `test-${Date.now()}`,
                      author,
                      role: "Director",
                      company,
                      projectTitle: "Independent Film",
                      serviceCategory: "Documentary & Film",
                      year: "2026",
                      portraitUrl:
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
                      quote,
                    };
                    setTestimonialsList([newTestimonial, ...testimonialsList]);
                  }}
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-brand-black px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonialsList.map((t) => (
                  <div
                    key={t.id}
                    className="p-6 bg-brand-black-elevated border border-brand-teal/40 rounded-sm flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-brand-teal/20 text-xs font-mono text-brand-gray">
                        <span className="text-brand-gold">{t.serviceCategory}</span>
                        <span>{t.year}</span>
                      </div>
                      <p className="text-xs text-brand-gray-light italic mt-3 leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="pt-3 border-t border-brand-teal/20 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-gold/40">
                          <Image src={t.portraitUrl} alt={t.author} fill className="object-cover" />
                        </div>
                        <div className="text-xs font-mono">
                          <span className="text-brand-white font-medium block">{t.author}</span>
                          <span className="text-brand-gray text-[10px]">{t.company}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setTestimonialsList(testimonialsList.filter((item) => item.id !== t.id))
                        }
                        className="p-1 text-brand-gray hover:text-red-400"
                        title="Delete record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 05: MEDIA LIBRARY */}
          {activeTab === "media" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-teal/30">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                    Asset Repository
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-white mt-1">
                    Media Library
                  </h1>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const title = prompt("Asset Title:") || "New Cinema Master Frame";
                    const newItem: MockMediaItem = {
                      id: `med-${Date.now()}`,
                      title,
                      category: "Stills",
                      format: "JPEG",
                      size: "4.2 MB",
                      resolution: "3840 x 2160",
                      uploadedAt: "Just now",
                      thumbnail:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
                    };
                    setMediaList([newItem, ...mediaList]);
                  }}
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-brand-black px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Asset</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mediaList.map((m) => (
                  <div
                    key={m.id}
                    className="group bg-brand-black-elevated border border-brand-teal/40 rounded-sm overflow-hidden flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] bg-brand-black">
                      <Image
                        src={m.thumbnail}
                        alt={m.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-brand-black/80 backdrop-blur-sm text-[9px] font-mono uppercase text-brand-gold rounded border border-brand-teal/40">
                        {m.category}
                      </span>
                    </div>

                    <div className="p-4 space-y-2 font-mono text-xs">
                      <h4 className="text-brand-white font-sans text-xs font-medium line-clamp-1">
                        {m.title}
                      </h4>
                      <div className="flex justify-between text-[10px] text-brand-gray border-t border-brand-teal/20 pt-2">
                        <span>{m.format} • {m.size}</span>
                        <span>{m.resolution}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 06: ENQUIRIES INBOX */}
          {activeTab === "enquiries" && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-6 border-b border-brand-teal/30">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                  Inbound Commissions
                </span>
                <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-white mt-1">
                  Enquiries Inbox
                </h1>
                <p className="text-xs text-brand-gray mt-1 font-mono">
                  Review project commissions, budget scopes, and customer contact requests.
                </p>
              </div>

              <div className="bg-brand-black-elevated border border-brand-teal/40 rounded-sm overflow-hidden">
                <div className="divide-y divide-brand-teal/20">
                  {enquiriesList.map((enq) => (
                    <div
                      key={enq.id}
                      onClick={() => setSelectedEnquiry(enq)}
                      className={`p-6 cursor-pointer hover:bg-brand-teal/15 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        selectedEnquiry?.id === enq.id ? "bg-brand-teal/30 ring-1 ring-inset ring-brand-gold/60" : ""
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-sm font-medium text-brand-white font-sans">
                            {enq.name}
                          </h3>
                          <span className="text-xs font-mono text-brand-gray">
                            ({enq.company})
                          </span>
                        </div>
                        <p className="text-xs text-brand-gray-light font-mono">
                          {enq.service} • Budget: {enq.budget}
                        </p>
                        <p className="text-xs text-brand-gray line-clamp-1 font-light pt-1">
                          {enq.message}
                        </p>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                            enq.status === "New"
                              ? "bg-brand-gold text-brand-black font-semibold"
                              : enq.status === "In Review"
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                              : "bg-brand-teal/40 text-brand-gray"
                          }`}
                        >
                          {enq.status}
                        </span>
                        <span className="text-[10px] font-mono text-brand-gray">
                          {enq.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquiry Detail Drawer */}
              {selectedEnquiry && (
                <div className="p-8 bg-brand-teal rounded-sm border border-brand-teal-light space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between pb-4 border-b border-brand-teal-light/50">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold block">
                        Detail Drawer // ID: {selectedEnquiry.id}
                      </span>
                      <h3 className="text-xl font-display font-medium text-brand-white mt-1">
                        {selectedEnquiry.name} — {selectedEnquiry.company}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedEnquiry(null)}
                      className="p-1 text-brand-gray-light hover:text-brand-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-brand-gray-light block">Email:</span>
                      <span className="text-brand-white">{selectedEnquiry.email}</span>
                    </div>
                    <div>
                      <span className="text-brand-gray-light block">Service:</span>
                      <span className="text-brand-white">{selectedEnquiry.service}</span>
                    </div>
                    <div>
                      <span className="text-brand-gray-light block">Budget:</span>
                      <span className="text-brand-white">{selectedEnquiry.budget}</span>
                    </div>
                    <div>
                      <span className="text-brand-gray-light block">Timeline:</span>
                      <span className="text-brand-white">{selectedEnquiry.timeline}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-brand-teal-light/40">
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-gold block">
                      Enquiry Narrative:
                    </span>
                    <p className="text-sm text-brand-gray-light font-light leading-relaxed">
                      {selectedEnquiry.message}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setEnquiriesList(
                          enquiriesList.map((item) =>
                            item.id === selectedEnquiry.id
                              ? { ...item, status: "Consultation Scheduled" }
                              : item
                          )
                        );
                        setSelectedEnquiry({
                          ...selectedEnquiry,
                          status: "Consultation Scheduled",
                        });
                      }}
                      className="text-xs font-mono uppercase tracking-wider bg-brand-gold text-brand-black px-4 py-2 rounded-sm font-semibold hover:bg-brand-gold-light"
                    >
                      Schedule Consultation
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEnquiriesList(
                          enquiriesList.map((item) =>
                            item.id === selectedEnquiry.id
                              ? { ...item, status: "Archived" }
                              : item
                          )
                        );
                        setSelectedEnquiry(null);
                      }}
                      className="text-xs font-mono uppercase tracking-wider border border-brand-teal-light text-brand-gray-light hover:text-brand-white px-4 py-2 rounded-sm"
                    >
                      Archive Record
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 07: SITE SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6 animate-fade-in max-w-4xl">
              <div className="pb-6 border-b border-brand-teal/30">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                  System Configuration
                </span>
                <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-white mt-1">
                  Site Settings & Tokens
                </h1>
                <p className="text-xs text-brand-gray mt-1 font-mono">
                  Global studio variables, brand contact anchors, and SEO meta defaults.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      value={settingsForm.studioName}
                      onChange={(e) => setSettingsForm({ ...settingsForm, studioName: e.target.value })}
                      className="w-full bg-brand-black-elevated border border-brand-teal/40 focus:border-brand-gold p-3 rounded-sm text-sm text-brand-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                      Proposed Tagline
                    </label>
                    <input
                      type="text"
                      value={settingsForm.tagline}
                      onChange={(e) => setSettingsForm({ ...settingsForm, tagline: e.target.value })}
                      className="w-full bg-brand-black-elevated border border-brand-teal/40 focus:border-brand-gold p-3 rounded-sm text-sm text-brand-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                      Email Anchor
                    </label>
                    <input
                      type="email"
                      value={settingsForm.email}
                      onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                      className="w-full bg-brand-black-elevated border border-brand-teal/40 focus:border-brand-gold p-3 rounded-sm text-xs font-mono text-brand-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                      Telephone
                    </label>
                    <input
                      type="text"
                      value={settingsForm.phone}
                      onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                      className="w-full bg-brand-black-elevated border border-brand-teal/40 focus:border-brand-gold p-3 rounded-sm text-xs font-mono text-brand-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                      WhatsApp Display
                    </label>
                    <input
                      type="text"
                      value={settingsForm.whatsapp}
                      onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp: e.target.value })}
                      className="w-full bg-brand-black-elevated border border-brand-teal/40 focus:border-brand-gold p-3 rounded-sm text-xs font-mono text-brand-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Brand Colors Definition */}
                <div className="p-6 bg-brand-black-elevated border border-brand-teal/40 rounded-sm space-y-4">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold block">
                    Brand Colour Tokens
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                    <div className="p-3 bg-brand-black border border-brand-teal/40 rounded">
                      <span className="block text-brand-gray text-[10px]">Pure Black</span>
                      <span className="text-brand-white">#000000</span>
                    </div>
                    <div className="p-3 bg-brand-teal border border-brand-teal-light rounded">
                      <span className="block text-brand-gray-light text-[10px]">Deep Teal</span>
                      <span className="text-brand-white">{settingsForm.brandTeal}</span>
                    </div>
                    <div className="p-3 bg-brand-gold text-brand-black rounded font-medium">
                      <span className="block text-[10px]">Warm Gold</span>
                      <span>{settingsForm.brandGold}</span>
                    </div>
                    <div className="p-3 bg-brand-white text-brand-black rounded font-medium">
                      <span className="block text-[10px]">Pure White</span>
                      <span>#FFFFFF</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-brand-white">
                    Default Technical SEO Description
                  </label>
                  <textarea
                    rows={3}
                    value={settingsForm.seoDescription}
                    onChange={(e) => setSettingsForm({ ...settingsForm, seoDescription: e.target.value })}
                    className="w-full bg-brand-black-elevated border border-brand-teal/40 focus:border-brand-gold p-3 rounded-sm text-xs text-brand-white font-mono focus:outline-none"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-brand-black px-6 py-3 rounded-sm font-semibold hover:bg-brand-gold-light transition-all"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Site Settings</span>
                  </button>
                  {settingsSaved && (
                    <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1 animate-fade-in">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Settings staged locally!</span>
                    </span>
                  )}
                </div>
              </form>
            </div>
          )}
        </main>
      </div>

      {/* EDIT / CREATE PROJECT MODAL */}
      {isProjectModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="bg-brand-black-elevated border border-brand-teal/50 rounded-sm w-full max-w-2xl p-6 sm:p-8 space-y-6 my-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-brand-teal/30">
              <h3 className="font-display font-medium text-xl text-brand-white">
                {editingProject?.id ? "Edit Film Project" : "Add New Film Project"}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsProjectModalOpen(false);
                  setEditingProject(null);
                }}
                className="p-1 text-brand-gray hover:text-brand-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-brand-white">Title *</label>
                  <input
                    type="text"
                    required
                    value={editingProject?.title || ""}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, title: e.target.value })
                    }
                    placeholder="e.g. Horizon Lights"
                    className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-2.5 rounded text-brand-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-brand-white">Slug (URL Route) *</label>
                  <input
                    type="text"
                    required
                    value={editingProject?.slug || ""}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, slug: e.target.value })
                    }
                    placeholder="e.g. horizon-lights"
                    className="w-full bg-brand-black border border-brand-teal/40 focus:border-brand-gold p-2.5 rounded text-brand-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-brand-white">Category</label>
                  <select
                    value={editingProject?.category || "documentary-film"}
                    onChange={(e) => {
                      const cat = e.target.value as any;
                      const label =
                        cat === "documentary-film"
                          ? "Documentary & Film"
                          : cat === "music-videos"
                          ? "Music Videos"
                          : cat === "corporate-video"
                          ? "Corporate Video"
                          : "Brand & Commercial Films";
                      setEditingProject({
                        ...editingProject,
                        category: cat,
                        categoryLabel: label,
                      });
                    }}
                    className="w-full bg-brand-black border border-brand-teal/40 p-2.5 rounded text-brand-white"
                  >
                    <option value="documentary-film">Documentary & Film</option>
                    <option value="music-videos">Music Videos</option>
                    <option value="corporate-video">Corporate Video</option>
                    <option value="brand-commercials">Brand & Commercial</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-brand-white">Year</label>
                  <input
                    type="text"
                    value={editingProject?.year || "2026"}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, year: e.target.value })
                    }
                    className="w-full bg-brand-black border border-brand-teal/40 p-2.5 rounded text-brand-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-brand-white">Client</label>
                  <input
                    type="text"
                    value={editingProject?.client || "Independent"}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, client: e.target.value })
                    }
                    className="w-full bg-brand-black border border-brand-teal/40 p-2.5 rounded text-brand-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-brand-white">Short Subtitle / Hook</label>
                <input
                  type="text"
                  value={editingProject?.subtitle || ""}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, subtitle: e.target.value })
                  }
                  placeholder="A cinematic exploration of..."
                  className="w-full bg-brand-black border border-brand-teal/40 p-2.5 rounded text-brand-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-brand-white">Logline & Synopsis</label>
                <textarea
                  rows={3}
                  value={editingProject?.logline || ""}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, logline: e.target.value })
                  }
                  placeholder="Logline narrative..."
                  className="w-full bg-brand-black border border-brand-teal/40 p-2.5 rounded text-brand-white"
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="featured-check"
                  checked={!!editingProject?.featured}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, featured: e.target.checked })
                  }
                  className="accent-brand-gold w-4 h-4"
                />
                <label htmlFor="featured-check" className="text-brand-white cursor-pointer">
                  Feature this film prominently on the Homepage Showcase
                </label>
              </div>

              <div className="pt-4 border-t border-brand-teal/30 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsProjectModalOpen(false);
                    setEditingProject(null);
                  }}
                  className="px-4 py-2 border border-brand-teal/40 text-brand-gray-light hover:text-brand-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-brand-gold text-brand-black font-semibold rounded hover:bg-brand-gold-light"
                >
                  Save Project Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

