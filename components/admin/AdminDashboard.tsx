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
  FolderArchive,
  Menu,
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

  // Mobile Navigation Drawer State
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Shared Admin Navigation Items with Live Counts & Icons
  const adminNavTabs = [
    { id: "dashboard" as AdminTab, label: "Overview", icon: LayoutDashboard },
    { id: "projects" as AdminTab, label: "Projects", icon: Film, count: projectsList.length },
    { id: "services" as AdminTab, label: "Services", icon: Layers },
    { id: "testimonials" as AdminTab, label: "Testimonials", icon: Quote, count: testimonialsList.length },
    { id: "media" as AdminTab, label: "Media Library", icon: ImageIcon, count: mediaList.length },
    { id: "enquiries" as AdminTab, label: "Enquiries", icon: Inbox, count: enquiriesList.length },
    { id: "settings" as AdminTab, label: "Site Settings", icon: Settings },
  ];

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
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] text-brand-teal">
      {/* Top Security & Demo Disclaimer Warning Bar */}
      <aside
        aria-label="Admin Security Notice"
        className="bg-brand-teal text-white border-b border-brand-teal-light py-2 px-3 sm:py-2.5 sm:px-4 text-[11px] sm:text-xs font-mono"
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
            className="hidden sm:flex text-[11px] uppercase tracking-wider text-brand-gold hover:underline items-center space-x-1"
          >
            <span>Exit to Public Site</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </aside>

      {/* Mobile Top App Bar (Sticky) */}
      <header className="md:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-teal/20 px-3.5 py-2.5 flex items-center justify-between shadow-sm text-brand-teal">
        {/* Brand identity */}
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded bg-brand-teal flex items-center justify-center border border-brand-gold/60 text-brand-gold font-display font-bold text-xs shadow-sm">
            BB
          </div>
          <div>
            <span className="font-display font-bold tracking-[0.16em] text-xs text-brand-teal block leading-tight">
              BOITUMELO B
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gold block font-medium">
              Studio Portal
            </span>
          </div>
        </div>

        {/* Right Action Icons: Public Site Link + Menu Trigger */}
        <div className="flex items-center space-x-1.5">
          <Link
            href="/"
            className="p-2 text-brand-teal/70 hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Exit to public website"
            aria-label="Exit to public site"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center space-x-1.5 px-3 py-1.5 rounded-sm bg-[#F8F9FA] border border-brand-teal/20 text-brand-teal hover:border-brand-gold hover:text-brand-gold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileNavOpen}
          >
            {isMobileNavOpen ? <X className="w-4 h-4 text-brand-gold" /> : <Menu className="w-4 h-4 text-brand-gold" />}
            <span className="text-xs font-mono uppercase tracking-wider">Menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Sticky Quick Segmented Bar (Horizontal Scroll with Icons and Badges) */}
      <div
        role="tablist"
        aria-label="Mobile Navigation Tabs"
        className="md:hidden sticky top-[53px] z-30 bg-white/95 backdrop-blur-md border-b border-brand-teal/20 px-3 py-2 flex items-center space-x-2 overflow-x-auto no-scrollbar"
      >
        {adminNavTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all shrink-0 min-h-[44px] ${
                isActive
                  ? "bg-brand-teal text-brand-gold font-semibold shadow-sm"
                  : "bg-[#F8F9FA] border border-brand-teal/20 text-brand-teal hover:text-brand-gold hover:border-brand-gold/40"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-brand-gold" : "text-brand-teal/70"}`} />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive
                      ? "bg-brand-gold/20 text-brand-gold font-bold"
                      : "bg-brand-teal/10 text-brand-teal font-semibold"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile Full Slide-Down Navigation Sheet / Drawer */}
      {isMobileNavOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Admin Navigation Menu"
          className="fixed inset-0 top-[53px] z-50 bg-white/98 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 overflow-y-auto animate-fade-in md:hidden text-brand-teal"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-brand-teal/20">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold font-medium">
                Admin Navigation Menu
              </span>
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(false)}
                className="text-brand-teal hover:text-brand-gold p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-2">
              {adminNavTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMobileNavOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all min-h-[48px] ${
                      isActive
                        ? "bg-brand-teal text-brand-gold font-semibold border border-brand-gold/60 shadow-md"
                        : "bg-[#F8F9FA] border border-brand-teal/20 text-brand-teal hover:bg-white hover:border-brand-gold/40"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-sm ${isActive ? "bg-brand-teal-deep text-brand-gold" : "bg-brand-teal/10 text-brand-teal"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className={`block font-medium text-sm ${isActive ? "text-brand-gold" : "text-brand-teal"}`}>{tab.label}</span>
                        <span className="text-[10px] text-brand-teal/70 block tracking-normal lowercase">
                          Manage studio {tab.label.toLowerCase()}
                        </span>
                      </div>
                    </div>
                    {tab.count !== undefined ? (
                      <span className="text-xs px-2.5 py-1 rounded bg-brand-gold/15 text-brand-teal font-mono border border-brand-gold/40 font-semibold">
                        {tab.count}
                      </span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-brand-teal/40" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 mt-6 border-t border-brand-teal/20 space-y-3">
            <Link
              href="/"
              onClick={() => setIsMobileNavOpen(false)}
              className="w-full min-h-[44px] flex items-center justify-center space-x-2 p-3 bg-brand-gold text-white rounded-sm text-xs font-mono uppercase tracking-wider font-semibold hover:bg-brand-gold-light transition-all shadow-md"
            >
              <span>Exit to Public Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <div className="text-center text-[10px] font-mono text-brand-teal/60 space-y-1">
              <p>Production Suite // Melbourne & Sydney</p>
              <p>Region: Australia (AEDT) • Secure Session</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Admin Body Shell */}
      <div className="flex flex-grow">
        {/* Left Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-brand-teal/15 p-6 flex flex-col justify-between hidden md:flex flex-shrink-0 text-brand-teal">
          <div className="space-y-8">
            {/* Admin Brand Signature */}
            <div className="space-y-1">
              <span className="font-display font-bold tracking-[0.2em] text-base text-brand-teal block">
                BOITUMELO B
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold block font-medium">
                Studio CMS Portal
              </span>
            </div>

            {/* Nav Items */}
            <nav role="tablist" className="space-y-1.5" aria-label="Admin Navigation">
              {adminNavTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id as AdminTab)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-brand-teal text-brand-gold font-semibold shadow-sm border border-brand-gold/30"
                        : "text-brand-teal hover:text-brand-gold hover:bg-brand-teal/5"
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      <tab.icon className={`w-4 h-4 ${isActive ? "text-brand-gold" : "text-brand-teal/70"}`} />
                      <span>{tab.label}</span>
                    </span>
                    {tab.count !== undefined && (
                      <span className={`text-xs px-2.5 py-1 rounded font-mono ${
                        isActive
                          ? "bg-brand-gold/20 text-brand-gold font-bold"
                          : "bg-[#F8F9FA] text-brand-teal font-semibold border border-brand-teal/15"
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-brand-teal/15 space-y-2 text-xs font-mono text-brand-teal/60">
            <p>Production Suite // Melbourne & Sydney</p>
            <p>Region: Australia (AEDT)</p>
          </div>
        </aside>

        {/* Right Content View Area */}
        <main className="flex-grow p-3.5 sm:p-6 lg:p-10 overflow-y-auto max-w-7xl mx-auto w-full text-brand-teal">

          {/* TAB 01: DASHBOARD OVERVIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-teal/15">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal">
                    Studio Dashboard Overview
                  </h1>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-brand-teal/70">
                    Last sync: {mockAdminStats.lastUpdated}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingProject({});
                      setIsProjectModalOpen(true);
                    }}
                    className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-white px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-sm font-medium"
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
                    className="p-4 sm:p-6 bg-white border border-brand-teal/15 rounded-sm shadow-sm"
                  >
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-gold block font-semibold">
                      {stat.label}
                    </span>
                    <span className="text-3xl sm:text-4xl font-display font-bold text-brand-teal mt-2 block">
                      {stat.val}
                    </span>
                    <span className="text-xs font-mono text-brand-teal/70 mt-1 block">
                      {stat.note}
                    </span>
                  </div>
                ))}
              </div>

              {/* Recent Enquiries & Fast Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 bg-white border border-brand-teal/15 p-6 rounded-sm space-y-4 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-teal/15">
                    <h2 className="font-display font-medium text-base text-brand-teal">
                      Recent Inbound Enquiries
                    </h2>
                    <button
                      type="button"
                      onClick={() => setActiveTab("enquiries")}
                      className="text-xs font-mono text-brand-gold hover:underline font-medium"
                    >
                      View All ({enquiriesList.length})
                    </button>
                  </div>

                  <div className="divide-y divide-brand-teal/15">
                    {enquiriesList.slice(0, 3).map((enq) => (
                      <div
                        key={enq.id}
                        onClick={() => {
                          setSelectedEnquiry(enq);
                          setActiveTab("enquiries");
                        }}
                        className="py-3 flex items-center justify-between cursor-pointer hover:bg-brand-teal/5 px-2 rounded transition-colors"
                      >
                        <div>
                          <h3 className="text-sm font-medium text-brand-teal">
                            {enq.name}
                          </h3>
                          <p className="text-xs font-mono text-brand-teal/70">
                            {enq.service} • {enq.date}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded ${
                            enq.status === "New"
                              ? "bg-brand-gold/15 text-brand-gold border border-brand-gold/40 font-semibold"
                              : "bg-brand-teal/10 text-brand-teal font-medium"
                          }`}
                        >
                          {enq.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="lg:col-span-5 bg-white border border-brand-teal/15 p-6 rounded-sm space-y-4 shadow-sm">
                  <h2 className="font-display font-medium text-base text-brand-teal">
                    Production Shortcuts
                  </h2>
                  <div className="space-y-2 text-xs font-mono">
                    <Link
                      href="/work"
                      target="_blank"
                      className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded border border-brand-teal/20 hover:border-brand-gold text-brand-teal hover:bg-white transition-all"
                    >
                      <span>Preview Live Portfolio Grid</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold" />
                    </Link>
                    <Link
                      href="/book"
                      target="_blank"
                      className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded border border-brand-teal/20 hover:border-brand-gold text-brand-teal hover:bg-white transition-all"
                    >
                      <span>Test Client Booking Flow</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setActiveTab("settings")}
                      className="w-full flex items-center justify-between p-3 bg-[#F8F9FA] rounded border border-brand-teal/20 hover:border-brand-gold text-brand-teal hover:bg-white transition-all text-left"
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-teal/15">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold font-semibold">
                    Curated Archive
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal mt-1">
                    Projects Management
                  </h1>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setEditingProject({});
                    setIsProjectModalOpen(true);
                  }}
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-white px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-sm font-medium"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Project</span>
                </button>
              </div>

              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="w-4 h-4 text-brand-teal/60 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={projectSearch}
                    onChange={(e) => setProjectSearch(e.target.value)}
                    placeholder="Search by project title, client, or keyword..."
                    className="w-full bg-white border border-brand-teal/20 focus:border-brand-gold pl-10 pr-4 py-2.5 rounded-sm text-xs font-mono text-brand-teal placeholder-slate-400 focus:outline-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-brand-teal/60" />
                  <select
                    value={projectCategoryFilter}
                    onChange={(e) => setProjectCategoryFilter(e.target.value)}
                    className="bg-white border border-brand-teal/20 focus:border-brand-gold px-3 py-2.5 rounded-sm text-xs font-mono text-brand-teal focus:outline-none"
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
              <div className="bg-white border border-brand-teal/15 rounded-sm overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-xs font-mono">
                    <thead className="bg-[#F0F4F5] text-brand-teal uppercase tracking-wider border-b border-brand-teal/20 font-semibold">
                      <tr>
                        <th className="p-4">Cover</th>
                        <th className="p-4">Title & Client</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Year</th>
                        <th className="p-4">Featured</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-teal/15 text-brand-teal">
                      {filteredProjects.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="p-12 text-center text-brand-teal/70">
                            <Film className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                            <p className="text-sm font-sans text-brand-teal">No film projects matched your current search or filter.</p>
                            <p className="text-xs font-mono text-brand-teal/60 mt-1">Try resetting the category filter or adding a new production record.</p>
                          </td>
                        </tr>
                      ) : (
                        filteredProjects.map((p) => (
                        <tr key={p.id} className="hover:bg-brand-teal/5 transition-colors">
                          <td className="p-4 w-20">
                            <div className="relative w-16 h-10 rounded overflow-hidden border border-brand-teal/20">
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
                            <span className="font-medium text-sm text-brand-teal block">
                              {p.title}
                            </span>
                            <span className="text-xs text-brand-teal/70 font-mono">
                              {p.client} • {p.location}
                            </span>
                          </td>
                          <td className="p-4 uppercase tracking-wider text-[11px] text-brand-teal/70 font-mono">
                            {p.categoryLabel}
                          </td>
                          <td className="p-4 font-mono">{p.year}</td>
                          <td className="p-4">
                            <button
                              type="button"
                              onClick={() => handleToggleFeatured(p.id)}
                              aria-label={p.featured ? `Remove ${p.title} from featured projects` : `Mark ${p.title} as featured project`}
                              className={`text-xs uppercase font-mono tracking-wider px-2.5 py-1 rounded border transition-colors ${
                                p.featured
                                  ? "bg-brand-gold text-white border-brand-gold font-semibold shadow-sm"
                                  : "bg-[#F8F9FA] border-brand-teal/20 text-brand-teal hover:border-brand-gold/50"
                              }`}
                            >
                              {p.featured ? "Featured" : "Standard"}
                            </button>
                          </td>
                          <td className="p-4 text-right space-x-2">
                            <Link
                              href={`/work/${p.slug}`}
                              target="_blank"
                              className="p-1 text-brand-teal/70 hover:text-brand-gold inline-block"
                              title="Preview Live Case Study"
                              aria-label={`Preview live case study for ${p.title}`}
                            >
                              <Eye className="w-4 h-4" />
                            </Link>
                            <button
                              type="button"
                              onClick={() => {
                                setEditingProject(p);
                                setIsProjectModalOpen(true);
                              }}
                              className="p-1 text-brand-teal/70 hover:text-brand-gold inline-block"
                              title="Edit Project"
                              aria-label={`Edit project: ${p.title}`}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteProject(p.id)}
                              className="p-1 text-brand-teal/70 hover:text-red-600 inline-block"
                              title="Delete Project"
                              aria-label={`Delete project: ${p.title}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      )))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03: SERVICES MANAGEMENT */}
          {activeTab === "services" && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-6 border-b border-brand-teal/15">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  Disciplines Content
                </span>
                <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal mt-1">
                  Services Management
                </h1>
                <p className="text-xs text-brand-teal/70 mt-1 font-mono">
                  Manage copy, capabilities, and visual direction parameters for the four core production disciplines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(servicesData).map((s) => (
                  <div
                    key={s.slug}
                    className="p-6 bg-white border border-brand-teal/15 rounded-sm space-y-4 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-brand-teal/15 text-xs font-mono">
                        <span className="text-brand-gold font-semibold">VERTICAL // {s.number}</span>
                        <Link
                          href={`/services/${s.slug}`}
                          target="_blank"
                          className="hover:text-brand-gold text-brand-teal/70 flex items-center space-x-1"
                        >
                          <span>Live View</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>

                      <h3 className="text-xl font-display font-medium text-brand-teal mt-4">
                        {s.title}
                      </h3>
                      <p className="text-xs text-brand-teal/80 mt-2 leading-relaxed">
                        {s.tagline}
                      </p>

                      <div className="mt-4 pt-3 border-t border-brand-teal/15 text-xs font-mono">
                        <span className="text-brand-gold block mb-1 font-semibold">Visual Direction:</span>
                        <p className="text-brand-teal/70 text-[11px] leading-relaxed">
                          {s.visualDirection.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between text-xs font-mono border-t border-brand-teal/15">
                      <span className="text-brand-teal/70">
                        {s.capabilities.length} Capabilities Configured
                      </span>
                      <button
                        type="button"
                        onClick={() => alert(`Service editor for ${s.title} ready for CMS backend.`)}
                        className="text-brand-gold hover:underline font-semibold"
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-teal/15">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold font-semibold">
                    Endorsement Archive
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal mt-1">
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
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-white px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-sm font-medium"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonialsList.map((t) => (
                  <div
                    key={t.id}
                    className="p-6 bg-white border border-brand-teal/15 rounded-sm flex flex-col justify-between space-y-4 shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-brand-teal/15 text-xs font-mono text-brand-teal/70">
                        <span className="text-brand-gold font-semibold">{t.serviceCategory}</span>
                        <span>{t.year}</span>
                      </div>
                      <p className="text-xs text-brand-teal/85 italic mt-3 leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="pt-3 border-t border-brand-teal/15 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-gold/40">
                          <Image src={t.portraitUrl} alt={t.author} fill className="object-cover" />
                        </div>
                        <div className="text-xs font-mono">
                          <span className="text-brand-teal font-medium block">{t.author}</span>
                          <span className="text-brand-teal/70 text-[10px]">{t.company}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setTestimonialsList(testimonialsList.filter((item) => item.id !== t.id))
                        }
                        className="p-1 text-brand-teal/60 hover:text-red-600"
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-teal/15">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold font-semibold">
                    Asset Repository
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal mt-1">
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
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-white px-4 py-2.5 rounded-sm hover:bg-brand-gold-light transition-all shadow-sm font-medium"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Asset</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mediaList.length === 0 ? (
                  <div className="col-span-full py-16 text-center border border-dashed border-brand-teal/30 bg-white rounded-sm p-8 space-y-3 shadow-sm">
                    <FolderArchive className="w-8 h-8 text-brand-gold mx-auto" />
                    <p className="text-sm font-sans text-brand-teal font-medium">No media assets in library.</p>
                    <p className="text-xs font-mono text-brand-teal/70">Upload film stills, DCI masters, or promotional posters to populate the vault.</p>
                  </div>
                ) : (
                  mediaList.map((m) => (
                  <div
                    key={m.id}
                    className="group bg-white border border-brand-teal/15 rounded-sm overflow-hidden flex flex-col justify-between shadow-sm"
                  >
                    <div className="relative aspect-[16/10] bg-brand-teal">
                      <Image
                        src={m.thumbnail}
                        alt={m.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-1 bg-brand-teal/90 backdrop-blur-sm text-[11px] font-mono uppercase text-brand-gold rounded border border-brand-gold/40 font-semibold">
                        {m.category}
                      </span>
                    </div>

                    <div className="p-4 space-y-2 font-mono text-xs">
                      <h4 className="text-brand-teal font-sans text-xs font-medium line-clamp-1">
                        {m.title}
                      </h4>
                      <div className="flex justify-between text-[10px] text-brand-teal/70 border-t border-brand-teal/15 pt-2">
                        <span>{m.format} • {m.size}</span>
                        <span>{m.resolution}</span>
                      </div>
                    </div>
                  </div>
                )))}
              </div>
            </div>
          )}

          {/* TAB 06: ENQUIRIES INBOX */}
          {activeTab === "enquiries" && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-6 border-b border-brand-teal/15">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  Inbound Commissions
                </span>
                <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal mt-1">
                  Enquiries Inbox
                </h1>
                <p className="text-xs text-brand-teal/70 mt-1 font-mono">
                  Review project commissions, budget scopes, and customer contact requests.
                </p>
              </div>

              <div className="bg-white border border-brand-teal/15 rounded-sm overflow-hidden shadow-sm">
                <div className="divide-y divide-brand-teal/15">
                  {enquiriesList.length === 0 ? (
                    <div className="p-12 text-center text-brand-teal/70 space-y-3">
                      <Inbox className="w-8 h-8 text-brand-gold mx-auto" />
                      <p className="text-sm font-sans text-brand-teal font-medium">No production enquiries logged yet.</p>
                      <p className="text-xs font-mono text-brand-teal/60">Inbound project briefs submitted via /contact or /book will appear in this registry.</p>
                    </div>
                  ) : (
                    enquiriesList.map((enq) => (
                    <div
                      key={enq.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`View enquiry details from ${enq.name} (${enq.company})`}
                      onClick={() => setSelectedEnquiry(enq)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedEnquiry(enq);
                        }
                      }}
                      className={`p-6 cursor-pointer hover:bg-brand-teal/5 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold ${
                        selectedEnquiry?.id === enq.id ? "bg-brand-teal/10 ring-1 ring-inset ring-brand-gold" : ""
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-sm font-medium text-brand-teal font-sans">
                            {enq.name}
                          </h3>
                          <span className="text-xs font-mono text-brand-teal/70">
                            ({enq.company})
                          </span>
                        </div>
                        <p className="text-xs text-brand-teal/80 font-mono">
                          {enq.service} • Budget: {enq.budget}
                        </p>
                        <p className="text-xs text-brand-teal/70 line-clamp-1 font-light pt-1">
                          {enq.message}
                        </p>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                        <span
                          className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded ${
                            enq.status === "New"
                              ? "bg-brand-gold text-white font-semibold shadow-sm"
                              : enq.status === "In Review"
                              ? "bg-brand-teal/10 text-brand-teal border border-brand-teal/30 font-medium"
                              : "bg-[#F8F9FA] text-brand-teal/70"
                          }`}
                        >
                          {enq.status}
                        </span>
                        <span className="text-[10px] font-mono text-brand-teal/60">
                          {enq.date}
                        </span>
                      </div>
                    </div>
                  )))}
                </div>
              </div>

              {/* Enquiry Detail Drawer */}
              {selectedEnquiry && (
                <div className="p-4 sm:p-8 bg-brand-teal rounded-sm border border-brand-gold/40 text-white space-y-6 animate-fade-in shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-brand-teal-light/50">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold block font-semibold">
                        Detail Drawer // ID: {selectedEnquiry.id}
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-medium text-white mt-1 break-words">
                        {selectedEnquiry.name} — {selectedEnquiry.company}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedEnquiry(null)}
                      className="p-1 text-white/80 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded"
                      aria-label="Close enquiry detail drawer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono break-all">
                    <div>
                      <span className="text-brand-teal-light/80 block">Email:</span>
                      <span className="text-white font-medium">{selectedEnquiry.email}</span>
                    </div>
                    <div>
                      <span className="text-brand-teal-light/80 block">Service:</span>
                      <span className="text-white font-medium">{selectedEnquiry.service}</span>
                    </div>
                    <div>
                      <span className="text-brand-teal-light/80 block">Budget:</span>
                      <span className="text-white font-medium">{selectedEnquiry.budget}</span>
                    </div>
                    <div>
                      <span className="text-brand-teal-light/80 block">Timeline:</span>
                      <span className="text-white font-medium">{selectedEnquiry.timeline}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-brand-teal-light/40">
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-gold block font-semibold">
                      Enquiry Narrative:
                    </span>
                    <p className="text-sm text-white/90 font-light leading-relaxed">
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
                      className="text-xs font-mono uppercase tracking-wider bg-brand-gold text-white px-4 py-2 rounded-sm font-semibold hover:bg-brand-gold-light shadow-sm"
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
                      className="text-xs font-mono uppercase tracking-wider border border-brand-teal-light text-white/80 hover:text-white px-4 py-2 rounded-sm hover:bg-white/10"
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
              <div className="pb-6 border-b border-brand-teal/15">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  System Configuration
                </span>
                <h1 className="text-2xl sm:text-3xl font-display font-medium text-brand-teal mt-1">
                  Site Settings & Tokens
                </h1>
                <p className="text-xs text-brand-teal/70 mt-1 font-mono">
                  Global studio variables, brand contact anchors, and SEO meta defaults.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      value={settingsForm.studioName}
                      onChange={(e) => setSettingsForm({ ...settingsForm, studioName: e.target.value })}
                      className="w-full bg-white border border-brand-teal/20 focus:border-brand-gold p-3 rounded-sm text-sm text-brand-teal focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                      Proposed Tagline
                    </label>
                    <input
                      type="text"
                      value={settingsForm.tagline}
                      onChange={(e) => setSettingsForm({ ...settingsForm, tagline: e.target.value })}
                      className="w-full bg-white border border-brand-teal/20 focus:border-brand-gold p-3 rounded-sm text-sm text-brand-teal focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                      Email Anchor
                    </label>
                    <input
                      type="email"
                      value={settingsForm.email}
                      onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                      className="w-full bg-white border border-brand-teal/20 focus:border-brand-gold p-3 rounded-sm text-xs font-mono text-brand-teal focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                      Telephone
                    </label>
                    <input
                      type="text"
                      value={settingsForm.phone}
                      onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                      className="w-full bg-white border border-brand-teal/20 focus:border-brand-gold p-3 rounded-sm text-xs font-mono text-brand-teal focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                      WhatsApp Display
                    </label>
                    <input
                      type="text"
                      value={settingsForm.whatsapp}
                      onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp: e.target.value })}
                      className="w-full bg-white border border-brand-teal/20 focus:border-brand-gold p-3 rounded-sm text-xs font-mono text-brand-teal focus:outline-none"
                    />
                  </div>
                </div>

                {/* Brand Colors Definition */}
                <div className="p-6 bg-white border border-brand-teal/15 rounded-sm space-y-4 shadow-sm">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold block font-semibold">
                    Brand Colour Tokens
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                    <div className="p-3 bg-brand-black border border-black rounded text-white shadow-sm">
                      <span className="block text-white/70 text-[10px]">Pure Black</span>
                      <span className="text-white font-semibold">#000000</span>
                    </div>
                    <div className="p-3 bg-brand-teal border border-brand-teal rounded text-white shadow-sm">
                      <span className="block text-brand-teal-light text-[10px]">Deep Blue / Teal</span>
                      <span className="text-white font-semibold">{settingsForm.brandTeal}</span>
                    </div>
                    <div className="p-3 bg-brand-gold text-white rounded font-medium shadow-sm">
                      <span className="block text-white/80 text-[10px]">Warm Gold</span>
                      <span className="font-semibold">{settingsForm.brandGold}</span>
                    </div>
                    <div className="p-3 bg-white text-brand-teal rounded font-medium border border-brand-teal/20 shadow-sm">
                      <span className="block text-brand-teal/70 text-[10px]">Pure White</span>
                      <span className="font-semibold">#FFFFFF</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                    Default Technical SEO Description
                  </label>
                  <textarea
                    rows={3}
                    value={settingsForm.seoDescription}
                    onChange={(e) => setSettingsForm({ ...settingsForm, seoDescription: e.target.value })}
                    className="w-full bg-white border border-brand-teal/20 focus:border-brand-gold p-3 rounded-sm text-xs text-brand-teal font-mono focus:outline-none"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-wider bg-brand-gold text-white px-6 py-3 rounded-sm font-semibold hover:bg-brand-gold-light transition-all shadow-md"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Site Settings</span>
                  </button>
                  {settingsSaved && (
                    <span className="text-xs font-mono text-emerald-600 flex items-center space-x-1 animate-fade-in font-medium">
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
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="bg-white border border-brand-teal/20 rounded-sm w-full max-w-2xl p-4 sm:p-8 space-y-6 my-auto shadow-2xl max-h-[92vh] overflow-y-auto text-brand-teal">
            <div className="flex items-center justify-between pb-4 border-b border-brand-teal/15">
              <h3 className="font-display font-medium text-xl text-brand-teal">
                {editingProject?.id ? "Edit Film Project" : "Add New Film Project"}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsProjectModalOpen(false);
                  setEditingProject(null);
                }}
                className="p-1 text-brand-teal/70 hover:text-brand-gold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-brand-teal font-semibold">Title *</label>
                  <input
                    type="text"
                    required
                    value={editingProject?.title || ""}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, title: e.target.value })
                    }
                    placeholder="e.g. Horizon Lights"
                    className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold p-2.5 rounded text-brand-teal focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-brand-teal font-semibold">Slug (URL Route) *</label>
                  <input
                    type="text"
                    required
                    value={editingProject?.slug || ""}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, slug: e.target.value })
                    }
                    placeholder="e.g. horizon-lights"
                    className="w-full bg-[#F8F9FA] border border-brand-teal/20 focus:border-brand-gold p-2.5 rounded text-brand-teal focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-brand-teal font-semibold">Category</label>
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
                    className="w-full bg-[#F8F9FA] border border-brand-teal/20 p-2.5 rounded text-brand-teal focus:bg-white"
                  >
                    <option value="documentary-film">Documentary & Film</option>
                    <option value="music-videos">Music Videos</option>
                    <option value="corporate-video">Corporate Video</option>
                    <option value="brand-commercials">Brand & Commercial</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-brand-teal font-semibold">Year</label>
                  <input
                    type="text"
                    value={editingProject?.year || "2026"}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, year: e.target.value })
                    }
                    className="w-full bg-[#F8F9FA] border border-brand-teal/20 p-2.5 rounded text-brand-teal focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-brand-teal font-semibold">Client</label>
                  <input
                    type="text"
                    value={editingProject?.client || "Independent"}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, client: e.target.value })
                    }
                    className="w-full bg-[#F8F9FA] border border-brand-teal/20 p-2.5 rounded text-brand-teal focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-brand-teal font-semibold">Short Subtitle / Hook</label>
                <input
                  type="text"
                  value={editingProject?.subtitle || ""}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, subtitle: e.target.value })
                  }
                  placeholder="A cinematic exploration of..."
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 p-2.5 rounded text-brand-teal focus:bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-brand-teal font-semibold">Logline & Synopsis</label>
                <textarea
                  rows={3}
                  value={editingProject?.logline || ""}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, logline: e.target.value })
                  }
                  placeholder="Logline narrative..."
                  className="w-full bg-[#F8F9FA] border border-brand-teal/20 p-2.5 rounded text-brand-teal focus:bg-white"
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
                <label htmlFor="featured-check" className="text-brand-teal cursor-pointer font-medium">
                  Feature this film prominently on the Homepage Showcase
                </label>
              </div>

              <div className="pt-4 border-t border-brand-teal/15 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsProjectModalOpen(false);
                    setEditingProject(null);
                  }}
                  className="px-4 py-2 border border-brand-teal/20 text-brand-teal hover:bg-brand-teal/5 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-brand-gold text-white font-semibold rounded hover:bg-brand-gold-light shadow-md"
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

