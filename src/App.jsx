import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Archive,
  Bookmark,
  Box,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Compass,
  Copy,
  Folder,
  Grid2X2,
  Heart,
  Hand,
  Home,
  Layers3,
  LayoutDashboard,
  Link2,
  LogOut,
  Maximize2,
  Menu,
  Minus,
  MousePointer2,
  Move,
  Plus,
  Search,
  Settings,
  Share2,
  SlidersHorizontal,
  Sparkles,
  User,
  X,
  Zap,
  Download,
  ShieldCheck,
  Bell,
  Eye,
  Package,
  Upload,
  Lock,
  Unlock,
  Mail,
  Pencil,
  PenTool,
  Eraser,
  PaintBucket,
  Star,
  ImageIcon,
  RotateCcw,
  Undo2,
  Redo2,
  Trash2,
  EyeOff,
  Type,
  Shapes,
  Brush,
  Palette,
  Crop,
  MoreHorizontal,
  AlignCenter,
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  PanelRight,
  Wand2,
} from "lucide-react";

const baseImagePool = [
  {
    id: 1,
    title: "Neo editorial forms",
    category: "Editorial",
    source: "Metainspo Curated",
    color: "#ff5b3d",
    colorName: "Red",
    ratio: "Portrait",
    style: "Experimental",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    title: "Chromatic object study",
    category: "3D & Objects",
    source: "Community",
    color: "#8cf26b",
    colorName: "Green",
    ratio: "Square",
    style: "Playful",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "Future matter",
    category: "Photography",
    source: "Open collection",
    color: "#745df6",
    colorName: "Purple",
    ratio: "Landscape",
    style: "Futurist",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    title: "Soft brutalism",
    category: "Architecture",
    source: "Open collection",
    color: "#edcf91",
    colorName: "Neutral",
    ratio: "Portrait",
    style: "Brutalist",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    title: "Signal / noise",
    category: "Graphic Design",
    source: "Metainspo Curated",
    color: "#ffdf42",
    colorName: "Yellow",
    ratio: "Landscape",
    style: "Minimal",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    title: "Electric movement",
    category: "Motion",
    source: "Community",
    color: "#e543c8",
    colorName: "Pink",
    ratio: "Portrait",
    style: "Experimental",
    image:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    title: "Living geometry",
    category: "Art Direction",
    source: "Metainspo Curated",
    color: "#3155ff",
    colorName: "Blue",
    ratio: "Square",
    style: "Playful",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    title: "Material language",
    category: "Product",
    source: "Open collection",
    color: "#e5784d",
    colorName: "Orange",
    ratio: "Landscape",
    style: "Organic",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    title: "Type in space",
    category: "Typography",
    source: "Community",
    color: "#67d7ee",
    colorName: "Blue",
    ratio: "Portrait",
    style: "Brutalist",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    title: "Afterglow identity",
    category: "Branding",
    source: "Metainspo Curated",
    color: "#ff914d",
    colorName: "Orange",
    ratio: "Landscape",
    style: "Futurist",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    title: "Botanical system",
    category: "Packaging",
    source: "Community",
    color: "#47774f",
    colorName: "Green",
    ratio: "Portrait",
    style: "Organic",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    title: "Quiet interface",
    category: "UI / UX",
    source: "Metainspo Curated",
    color: "#c9bfff",
    colorName: "Purple",
    ratio: "Square",
    style: "Minimal",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85",
  },
];

const creators = [
  "North Studio",
  "Forma Dept.",
  "Studio Kajo",
  "Morrow Objects",
  "Typefolk",
  "Odd Practice",
];
const imagePool = baseImagePool.map((item, index) => ({
  ...item,
  creator: creators[index % creators.length],
  creatorInitials: creators[index % creators.length]
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2),
  price: [0, 18, 24, 0, 32, 16, 28, 0, 14, 36, 12, 22][index],
  rating: (4.6 + (index % 4) / 10).toFixed(1),
  sales: 86 + index * 47,
  fileSize: `${18 + index * 7} MB`,
  formats: [
    ["FIG", "PDF"],
    ["BLEND", "OBJ"],
    ["JPG", "PNG"],
    ["PSD", "JPG"],
    ["AI", "EPS"],
    ["AE", "MP4"],
  ][index % 6],
  software: [
    "Figma",
    "Blender",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "After Effects",
  ][index % 5],
  license: "Standard commercial license",
  productType:
    [0, 18, 24, 0, 32, 16, 28, 0, 14, 36, 12, 22][index] === 0
      ? "Free"
      : "Paid",
  status: "approved",
}));

const positions = [
  { x: 150, y: 165, w: 245, h: 305, r: -5 },
  { x: 450, y: 65, w: 265, h: 330, r: 4 },
  { x: 765, y: 150, w: 300, h: 240, r: 0 },
  { x: 1085, y: 82, w: 220, h: 285, r: 5 },
  { x: 275, y: 520, w: 290, h: 230, r: 2 },
  { x: 635, y: 450, w: 230, h: 295, r: -3 },
  { x: 910, y: 475, w: 275, h: 220, r: 4 },
  { x: 1240, y: 430, w: 245, h: 315, r: -2 },
  { x: 70, y: 815, w: 230, h: 285, r: 3 },
  { x: 390, y: 825, w: 300, h: 220, r: -4 },
  { x: 770, y: 780, w: 250, h: 320, r: 2 },
  { x: 1100, y: 820, w: 305, h: 235, r: -3 },
];

const startingSpaces = [
  {
    id: "s1",
    name: "Future-friendly finance",
    count: 18,
    color: "#ff684f",
    covers: [1, 3, 7],
  },
  {
    id: "s2",
    name: "Soft brutalist interiors",
    count: 24,
    color: "#b4a48b",
    covers: [4, 8, 11],
  },
  {
    id: "s3",
    name: "Playful identities",
    count: 12,
    color: "#755cf4",
    covers: [2, 5, 10],
  },
];

function Logo({ compact = false }) {
  return (
    <div className="logo">
      <span className="logo-mark">
        <Sparkles size={17} strokeWidth={2.8} />
      </span>
      {!compact && <span>metainspo</span>}
    </div>
  );
}

function Avatar({ initials = "AM" }) {
  return <div className="avatar">{initials}</div>;
}

function Header({
  view,
  setView,
  search,
  setSearch,
  onSearch,
  openProfile,
  user,
}) {
  return (
    <header className="topbar">
      <button className="mobile-menu">
        <Menu size={20} />
      </button>
      <button className="brand-button" onClick={() => setView("explore")}>
        <Logo />
      </button>
      <nav className="main-nav">
        {user.role === "admin" && (
          <button
            className={view === "admin" ? "active" : ""}
            onClick={() => setView("admin")}
          >
            <ShieldCheck size={17} /> Admin Panel
          </button>
        )}
        <button
          className={view === "explore" ? "active" : ""}
          onClick={() => setView("explore")}
        >
          <Compass size={17} /> Explore
        </button>
        <button
          className={view === "free" ? "active" : ""}
          onClick={() => setView("free")}
        >
          <Zap size={17} /> Free
        </button>
        {user.role === "creator" && (
          <button
            className={view === "editor" ? "active" : ""}
            onClick={() => setView("editor")}
          >
            <Pencil size={17} /> Edit Tool
          </button>
        )}
      </nav>
      <form className="header-search" onSubmit={onSearch}>
        <Search size={18} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a feeling, style, or idea..."
        />
        <kbd>⌘ K</kbd>
      </form>
      <div className="header-actions">
        <button className="icon-button help">
          <CircleHelp size={19} />
        </button>
        <button className="profile-button" onClick={openProfile}>
          <Avatar initials={user.initials} />
          <span>{user.name}</span>
          <ChevronDown size={15} />
        </button>
      </div>
    </header>
  );
}

function FilterBar({
  active,
  setActive,
  aiOnly,
  setAiOnly,
  designFilters,
  setDesignFilters,
  query,
}) {
  const filters = [
    "For you",
    "Branding",
    "Editorial",
    "UI / UX",
    "Typography",
    "3D & Objects",
    "Photography",
  ];
  const [open, setOpen] = useState(false);
  const colors = [
    { name: "Red", hex: "#ef5545" },
    { name: "Orange", hex: "#f28a43" },
    { name: "Yellow", hex: "#f2ce3f" },
    { name: "Green", hex: "#4e9a68" },
    { name: "Blue", hex: "#4e78e8" },
    { name: "Purple", hex: "#835fdb" },
    { name: "Pink", hex: "#dc65a5" },
    { name: "Neutral", hex: "#b9ae99" },
  ];
  const update = (key, value) =>
    setDesignFilters((current) => ({
      ...current,
      [key]: current[key] === value ? "" : value,
    }));
  const activeCount = Object.values(designFilters).filter(Boolean).length;
  return (
    <div className="filterbar">
      <div className="filter-scroll">
        {filters.map((f) => (
          <button
            key={f}
            className={active === f ? "active" : ""}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="filter-context">
        <span>
          <Zap size={11} fill="currentColor" /> LIVE WORLD
        </span>
        <div>
          <strong>
            {query
              ? `Ideas around “${query}”`
              : "Wander until something clicks."}
          </strong>
          <small>Drag, collect, and open new directions</small>
        </div>
      </div>
      <button
        className={`ai-toggle ${aiOnly ? "active" : ""}`}
        onClick={() => setAiOnly(!aiOnly)}
      >
        <Sparkles size={15} /> AI concepts <span>{aiOnly ? "On" : "Off"}</span>
      </button>
      <button
        className={`filter-button ${activeCount ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <SlidersHorizontal size={16} /> Filters{" "}
        {activeCount > 0 && <b>{activeCount}</b>}
      </button>
      {open && (
        <div className="design-filter-panel">
          <div className="filter-panel-head">
            <div>
              <p>DESIGN FILTERS</p>
              <h3>Shape the world</h3>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <section>
            <label>Dominant color</label>
            <div className="color-options">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={
                    designFilters.color === color.name ? "selected" : ""
                  }
                  onClick={() => update("color", color.name)}
                  title={color.name}
                >
                  <i style={{ background: color.hex }} />
                  {designFilters.color === color.name && <Check size={12} />}
                </button>
              ))}
            </div>
          </section>
          <section>
            <label>Aspect ratio</label>
            <div className="ratio-options">
              {["Portrait", "Square", "Landscape"].map((ratio) => (
                <button
                  key={ratio}
                  className={designFilters.ratio === ratio ? "selected" : ""}
                  onClick={() => update("ratio", ratio)}
                >
                  <i className={ratio.toLowerCase()} />
                  <span>{ratio}</span>
                </button>
              ))}
            </div>
          </section>
          <section>
            <label>Design style</label>
            <div className="style-options">
              {[
                "Minimal",
                "Brutalist",
                "Playful",
                "Organic",
                "Futurist",
                "Experimental",
              ].map((style) => (
                <button
                  key={style}
                  className={designFilters.style === style ? "selected" : ""}
                  onClick={() => update("style", style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </section>
          <div className="filter-panel-foot">
            <button
              onClick={() =>
                setDesignFilters({ color: "", ratio: "", style: "" })
              }
            >
              Clear all
            </button>
            <button className="apply-filter" onClick={() => setOpen(false)}>
              Show results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function InspirationCard({
  item,
  position,
  zoom,
  saved,
  onSave,
  onSelect,
  onExplore,
  onMove,
  onClose,
}) {
  const [loaded, setLoaded] = useState(false);
  const [moving, setMoving] = useState(false);
  const beginMove = (e) => {
    if (e.target.closest("button")) return;
    e.preventDefault();
    e.stopPropagation();
    setMoving(true);
    const start = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      x: position.x,
      y: position.y,
    };
    const handleMove = (event) =>
      onMove(item.id, {
        ...position,
        x: start.x + (event.clientX - start.mouseX) / zoom,
        y: start.y + (event.clientY - start.mouseY) / zoom,
      });
    const finishMove = () => {
      setMoving(false);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", finishMove);
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", finishMove);
  };
  const openDetails = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget
      .closest(".inspiration-card")
      ?.getBoundingClientRect();
    onSelect(item, rect);
  };
  return (
    <article
      className={`inspiration-card ${loaded ? "loaded" : ""} ${moving ? "moving" : ""}`}
      style={{
        left: position.x,
        top: position.y,
        width: position.w,
        height: position.h,
        transform: `rotate(${position.r}deg)`,
      }}
      onMouseDown={beginMove}
      onDoubleClick={() => onExplore(item)}
    >
      <div className="image-wrap" style={{ backgroundColor: item.color }}>
        <img
          src={item.image}
          alt={item.title}
          onLoad={() => setLoaded(true)}
          draggable="false"
        />
        <div className="card-shade" />
        <span className={`price-badge ${item.price === 0 ? "free" : ""}`}>
          {item.price === 0 ? "FREE" : `$${item.price}`}
        </span>
        <button
          className="dismiss-button"
          onClick={(e) => {
            e.stopPropagation();
            onClose(item);
          }}
          aria-label="Dismiss this idea"
        >
          <X size={17} />
        </button>
        <button
          className={`save-button ${saved ? "saved" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onSave(item);
          }}
          aria-label="Save idea"
        >
          {saved ? <Check size={17} /> : <Bookmark size={17} />}
        </button>
        <button className="expand-button" onClick={openDetails}>
          <Maximize2 size={16} />
        </button>
        <div className="card-copy" onClick={openDetails}>
          <span>{item.category}</span>
          <h3>{item.title}</h3>
          <p>by {item.creator}</p>
        </div>
      </div>
    </article>
  );
}

function Canvas({ items, savedIds, onSave, onSelect, onExplore, query }) {
  const [zoom, setZoom] = useState(0.78);
  const [offset, setOffset] = useState({ x: 45, y: -10 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(null);
  const surface = useRef(null);
  const resultCounter = useRef(0);
  const makeNodes = (source) =>
    source.slice(0, 9).map((item, index) => ({
      item,
      position: {
        ...positions[index],
        y: Math.max(22, positions[index].y - 95),
      },
    }));
  const [nodes, setNodes] = useState(() => makeNodes(items));
  useEffect(() => {
    resultCounter.current = 0;
    setNodes(makeNodes(items));
  }, [items, query]);
  const down = (e) => {
    if (e.target.closest(".inspiration-card")) return;
    setDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };
  const move = (e) =>
    dragging &&
    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  const up = () => setDragging(false);
  const fit = () => {
    setZoom(0.78);
    setOffset({ x: 45, y: -10 });
  };
  const moveCard = (id, nextPosition) =>
    setNodes((current) =>
      current.map((node) =>
        node.item.id === id ? { ...node, position: nextPosition } : node,
      ),
    );
  const dismissCard = (dismissed) =>
    setNodes((current) => {
      const dismissedNode = current.find(
        (node) => node.item.id === dismissed.id,
      );
      if (!dismissedNode) return current;
      const used = new Set(current.map((node) => node.item.id));
      let replacement = items.find((item) => !used.has(item.id));
      if (!replacement) {
        const base = items[resultCounter.current % items.length];
        resultCounter.current += 1;
        replacement = {
          ...base,
          id: `${base.id}-result-${resultCounter.current}`,
          title: query
            ? `${base.title} · ${query}`
            : `${base.title} · new direction`,
        };
      }
      return current.map((node) =>
        node.item.id === dismissed.id
          ? {
              item: replacement,
              position: {
                ...dismissedNode.position,
                r: -dismissedNode.position.r + (resultCounter.current % 3) - 1,
              },
            }
          : node,
      );
    });
  const loadMore = (e) => {
    e.stopPropagation();
    setNodes((current) => {
      const usedBaseIds = new Set(
        current.map((node) => String(node.item.id).split("-result-")[0]),
      );
      const additions = [];
      for (let i = 0; i < 3; i += 1) {
        let next = items.find((item) => !usedBaseIds.has(String(item.id)));
        if (!next) {
          const base = items[resultCounter.current % items.length];
          resultCounter.current += 1;
          next = {
            ...base,
            id: `${base.id}-result-${resultCounter.current}`,
            title: query
              ? `${base.title} · ${query}`
              : `${base.title} · fresh find`,
          };
        } else usedBaseIds.add(String(next.id));
        const index = current.length + additions.length;
        const cycle = Math.floor(index / positions.length);
        const basePosition = positions[index % positions.length];
        additions.push({
          item: next,
          position: {
            ...basePosition,
            x: basePosition.x + cycle * 155,
            y: Math.max(22, basePosition.y - 95) + cycle * 170,
            r: basePosition.r + (i - 1),
          },
        });
      }
      return [...current, ...additions];
    });
  };
  return (
    <main
      ref={surface}
      className={`world ${dragging ? "dragging" : ""}`}
      onMouseDown={down}
      onMouseMove={move}
      onMouseUp={up}
      onMouseLeave={up}
    >
      <div
        className="canvas-transform"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
        }}
      >
        {nodes.map(({ item, position }) => (
          <InspirationCard
            key={item.id}
            item={item}
            position={position}
            zoom={zoom}
            saved={savedIds.includes(item.id)}
            onSave={onSave}
            onSelect={onSelect}
            onExplore={onExplore}
            onMove={moveCard}
            onClose={dismissCard}
          />
        ))}
        {nodes.length > 0 && (
          <button
            className="direction-node"
            style={{
              left: 1430 + Math.floor(nodes.length / 12) * 155,
              top: 245 + Math.floor(nodes.length / 12) * 170,
            }}
            onClick={loadMore}
            title="Load more results from the same search"
          >
            <Sparkles size={20} />
            <strong>Keep exploring</strong>
            <small>Load more</small>
          </button>
        )}
      </div>
      {nodes.length === 0 && (
        <div className="empty-results">
          <span>
            <Search size={23} />
          </span>
          <h2>No ideas in this exact mix</h2>
          <p>Try removing one filter to open the world back up.</p>
        </div>
      )}
      <div className="world-tools">
        <button onClick={() => setZoom((z) => Math.min(1.35, z + 0.1))}>
          <Plus size={18} />
        </button>
        <span>{Math.round(zoom * 100)}%</span>
        <button onClick={() => setZoom((z) => Math.max(0.45, z - 0.1))}>
          <Minus size={18} />
        </button>
        <i />
        <button onClick={fit}>
          <Maximize2 size={17} />
        </button>
      </div>
      <div className="pan-hint">
        <Move size={16} /> Drag empty space to move
      </div>
      {items.length > 0 && (
        <button
          className="surprise"
          onClick={() =>
            onExplore(items[Math.floor(Math.random() * items.length)])
          }
        >
          <Sparkles size={17} /> Surprise me
        </button>
      )}
    </main>
  );
}

function DetailPanel({
  selection,
  saved,
  owned,
  onClose,
  onSave,
  onExplore,
  onAcquire,
}) {
  if (!selection) return null;
  const { item, origin } = selection;
  const originX = origin
    ? origin.left + origin.width / 2
    : window.innerWidth / 2;
  const originY = origin
    ? origin.top + origin.height / 2
    : window.innerHeight / 2;
  const animationStyle = {
    "--origin-x": `${originX}px`,
    "--origin-y": `${originY}px`,
  };
  return (
    <div
      className="panel-overlay centered"
      onClick={onClose}
      style={animationStyle}
    >
      <section className="detail-stage" onClick={(e) => e.stopPropagation()}>
        <button
          className="stage-close"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={21} />
        </button>
        <div className="detail-hero">
          <img src={item.image} alt={item.title} />
          <div className="image-meta">
            <span>{item.ratio}</span>
            <span>{item.colorName}</span>
          </div>
        </div>
        <aside className="detail-info">
          <div className="detail-info-scroll">
            <p className="eyebrow">IDEA DETAILS</p>
            <div className="category-line">
              <span style={{ background: item.color }} />
              {item.category}
              <i /> {item.style}
            </div>
            <h2>{item.title}</h2>
            <div className="creator-line">
              <span>{item.creatorInitials}</span>
              <div>
                <strong>{item.creator}</strong>
                <small>Verified creator · ★ {item.rating}</small>
              </div>
              <button>View profile</button>
            </div>
            <p className="detail-description">
              A visual direction selected for its composition, color language,
              material character, and creative energy. Use it as a starting
              point, then move deeper into the ideas, forms, and references
              around it.
            </p>
            <div className="product-facts">
              <div>
                <span>Included files</span>
                <strong>{item.formats?.join(", ")}</strong>
              </div>
              <div>
                <span>Works with</span>
                <strong>{item.software}</strong>
              </div>
              <div>
                <span>File size</span>
                <strong>{item.fileSize}</strong>
              </div>
              <div>
                <span>License</span>
                <strong>Commercial</strong>
              </div>
            </div>
            <button
              className={`acquire-button ${item.price === 0 ? "free" : ""}`}
              onClick={() => onAcquire(item)}
            >
              {owned ? (
                <>
                  <Check size={18} /> In your library
                </>
              ) : item.price === 0 ? (
                <>
                  <Zap size={18} /> Download for free
                </>
              ) : (
                <>
                  <span>Buy for ${item.price}</span>
                  <ArrowUpRight size={18} />
                </>
              )}
            </button>
            <div className="detail-actions">
              <button className="primary" onClick={() => onExplore(item)}>
                <Sparkles size={17} /> Explore this direction
              </button>
              <button
                className={saved ? "saved" : ""}
                onClick={() => onSave(item)}
              >
                {saved ? <Check size={17} /> : <Bookmark size={17} />}{" "}
                {saved ? "Saved" : "Save idea"}
              </button>
            </div>
            <div className="traits">
              <div className="trait-title">
                <h4>Visual signals</h4>
                <span>Detected from this idea</span>
              </div>
              <div>
                <span>{item.style}</span>
                <span>{item.colorName} led</span>
                <span>{item.ratio}</span>
                <span>Contemporary</span>
              </div>
            </div>
            <button className="source-link">
              <div>
                <p>Published by</p>
                <strong>
                  {item.creator} · {item.license}
                </strong>
              </div>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}

function SaveModal({ item, spaces, onClose, onConfirm, onNewSpace }) {
  const [selected, setSelected] = useState(spaces[0]?.id);
  if (!item) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="save-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <p>SAVE IDEA</p>
            <h2>Where should this live?</h2>
          </div>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="save-preview">
          <img src={item.image} />
          <div>
            <strong>{item.title}</strong>
            <span>{item.category}</span>
          </div>
        </div>
        <div className="space-options">
          {spaces.map((space) => (
            <button
              key={space.id}
              className={selected === space.id ? "selected" : ""}
              onClick={() => setSelected(space.id)}
            >
              <span style={{ background: space.color }}>
                <Box size={18} />
              </span>
              <div>
                <strong>{space.name}</strong>
                <small>{space.count} ideas</small>
              </div>
              {selected === space.id && <Check size={18} />}
            </button>
          ))}
          <button className="new-space" onClick={onNewSpace}>
            <Plus size={18} /> Create a new space
          </button>
        </div>
        <button
          className="confirm-save"
          onClick={() => onConfirm(item, selected)}
        >
          Save to space
        </button>
      </div>
    </div>
  );
}

function SpacesView({ spaces, items, setView }) {
  return (
    <main className="page-shell">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR CREATIVE UNIVERSE</p>
          <h1>Spaces</h1>
          <span>
            Ideas become directions when you give them somewhere to grow.
          </span>
        </div>
        <button className="primary">
          <Plus size={18} /> New space
        </button>
      </div>
      <section className="spaces-grid">
        {spaces.map((space, index) => (
          <article
            className="space-card"
            key={space.id}
            onClick={() => setView("explore")}
          >
            <div className="space-covers">
              {space.covers.map((id, i) => {
                const it =
                  items.find((x) => x.id === id) ||
                  items[(index + i) % items.length];
                return <img src={it.image} key={i} />;
              })}
              <div className="space-overlay">
                <button>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
            <div className="space-info">
              <div>
                <h3>{space.name}</h3>
                <p>{space.count} ideas · Updated recently</p>
              </div>
              <button>
                <MoreDots />
              </button>
            </div>
          </article>
        ))}
        <button className="empty-space">
          <span>
            <Plus size={22} />
          </span>
          <h3>Start a new space</h3>
          <p>Give your next creative direction room to evolve.</p>
        </button>
      </section>
      <section className="workflow-strip">
        <div className="flow-icon">
          <Layers3 size={22} />
        </div>
        <div>
          <p className="eyebrow">HOW SPACES WORK</p>
          <h2>One project. Many possible worlds.</h2>
        </div>
        <div className="flow-steps">
          <span>
            <b>01</b>Collect ideas
          </span>
          <ChevronRight />
          <span>
            <b>02</b>Group directions
          </span>
          <ChevronRight />
          <span>
            <b>03</b>Share the space
          </span>
        </div>
      </section>
    </main>
  );
}

function MoreDots() {
  return <span className="dots">•••</span>;
}

function Dashboard({
  savedItems,
  ownedItems,
  spaces,
  items,
  onSelect,
  setView,
}) {
  const displaySaved = savedItems.length ? savedItems : items.slice(0, 4);
  return (
    <main className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="profile-card">
          <Avatar />
          <div>
            <strong>Alex Morgan</strong>
            <span>Creative explorer</span>
          </div>
        </div>
        <nav>
          <button className="active">
            <Grid2X2 size={18} /> Overview
          </button>
          <button onClick={() => setView("spaces")}>
            <Box size={18} /> My spaces <em>{spaces.length}</em>
          </button>
          <button>
            <Bookmark size={18} /> Saved ideas <em>{savedItems.length}</em>
          </button>
          <button>
            <Folder size={18} /> Downloads <em>{ownedItems.length}</em>
          </button>
          <button>
            <Share2 size={18} /> Shared with me
          </button>
        </nav>
        <div className="sidebar-bottom">
          <button>
            <Settings size={18} /> Settings
          </button>
          <button>
            <LogOut size={18} /> Sign out
          </button>
        </div>
      </aside>
      <div className="dashboard-content">
        <div className="dash-welcome">
          <div>
            <p className="eyebrow">TUESDAY, JULY 14</p>
            <h1>Good afternoon, Alex.</h1>
            <span>Your creative world is getting interesting.</span>
          </div>
          <button className="primary" onClick={() => setView("explore")}>
            <Compass size={18} /> Explore ideas
          </button>
        </div>
        <div className="stats-row">
          <div>
            <span>
              <Bookmark size={18} />
            </span>
            <strong>{savedItems.length || 32}</strong>
            <p>Ideas saved</p>
            <small>+8 this week</small>
          </div>
          <div>
            <span>
              <Box size={18} />
            </span>
            <strong>{spaces.length}</strong>
            <p>Active spaces</p>
            <small>2 shared</small>
          </div>
          <div>
            <span>
              <Zap size={18} />
            </span>
            <strong>14</strong>
            <p>Directions explored</p>
            <small>+21% this month</small>
          </div>
        </div>
        <section className="dash-section">
          <div className="section-title">
            <div>
              <p className="eyebrow">RECENTLY SAVED</p>
              <h2>Ideas worth returning to</h2>
            </div>
            <button>
              View all <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="saved-row">
            {displaySaved.slice(0, 4).map((item) => (
              <article key={item.id} onClick={() => onSelect(item)}>
                <img src={item.image} />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="dash-section">
          <div className="section-title">
            <div>
              <p className="eyebrow">YOUR SPACES</p>
              <h2>Continue building a direction</h2>
            </div>
            <button onClick={() => setView("spaces")}>
              View all <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="mini-spaces">
            {spaces.map((space, idx) => (
              <article key={space.id}>
                <div className="mini-cover">
                  {space.covers.slice(0, 3).map((id, i) => (
                    <img
                      key={i}
                      src={
                        (
                          items.find((x) => x.id === id) ||
                          items[(idx + i) % items.length]
                        ).image
                      }
                    />
                  ))}
                </div>
                <h3>{space.name}</h3>
                <p>{space.count} ideas</p>
              </article>
            ))}
          </div>
        </section>
        {ownedItems.length > 0 && (
          <section className="dash-section">
            <div className="section-title">
              <div>
                <p className="eyebrow">YOUR LIBRARY</p>
                <h2>Ready to download</h2>
              </div>
              <button>
                View all <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="library-list">
              {ownedItems.map((item) => (
                <article key={item.id}>
                  <img src={item.image} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      {item.formats.join(", ")} · {item.fileSize}
                    </p>
                  </div>
                  <button>
                    <Folder size={16} /> Download
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function CreatorStudio({ products, onPublish, onArchive, onDelete }) {
  const [uploading, setUploading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [menuId, setMenuId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    category: "UI / UX",
    price: "18",
    type: "Paid",
    file: null,
    preview: null,
  });
  const previewUrl = useMemo(
    () => (form.preview ? URL.createObjectURL(form.preview) : ""),
    [form.preview],
  );
  useEffect(
    () => () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    },
    [previewUrl],
  );
  const publish = (e, status = "pending") => {
    e.preventDefault();
    if (!form.title.trim()) return;
    if (status === "pending" && (!form.file || !form.preview)) return;
    onPublish(form, status);
    setUploading(false);
    setForm({
      title: "",
      category: "UI / UX",
      price: "18",
      type: "Paid",
      file: null,
      preview: null,
    });
  };
  const shownProducts = [...products]
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .sort((a, b) => sortBy === "sales" ? b.sales - a.sales : sortBy === "price" ? b.price - a.price : String(b.id).localeCompare(String(a.id)));
  return (
    <main className="creator-shell">
      <div className="creator-hero">
        <div>
          <p className="eyebrow">CREATOR STUDIO</p>
          <h1>
            Turn your work into
            <br />
            <em>someone’s next idea.</em>
          </h1>
          <span>
            Publish free resources, sell digital products, and build your
            creative presence.
          </span>
        </div>
        <button className="primary" onClick={() => setUploading(true)}>
          <Plus size={18} /> New Asset
        </button>
      </div>
      <div className="creator-stats">
        <div>
          <p>Total revenue</p>
          <strong>$2,846.00</strong>
          <small>+18.4% this month</small>
        </div>
        <div>
          <p>Asset views</p>
          <strong>18.2k</strong>
          <small>Across all products</small>
        </div>
        <div>
          <p>Downloads & sales</p>
          <strong>642</strong>
          <small>8.2% conversion</small>
        </div>
        <div>
          <p>Creator balance</p>
          <strong>$486.20</strong>
          <button>View payouts</button>
        </div>
      </div>
      <section className="creator-products">
        <div className="section-title">
          <div>
            <p className="eyebrow">YOUR ASSETS</p>
            <h2>Uploaded work</h2>
          </div>
          <div className="creator-tabs">
            {[["all","All"],["approved","Approved"],["pending","In review"],["draft","Drafts"]].map(([id,label]) => <button key={id} className={statusFilter === id ? "active" : ""} onClick={() => setStatusFilter(id)}>{label}</button>)}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}><option value="newest">Newest</option><option value="sales">Sales</option><option value="price">Price</option></select>
          </div>
        </div>
        <div className="product-table">
          <div className="table-head">
            <span>Asset</span>
            <span>Price</span>
            <span>Performance</span>
            <span>Status</span>
            <span />
          </div>
          {shownProducts.map((item) => (
            <article key={item.id}>
              <div className="product-cell">
                <img src={item.image} />
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.category} · Updated today</small>
                </div>
              </div>
              <b>{item.price === 0 ? "Free" : `$${item.price}`}</b>
              <div>
                <strong>{item.sales} sales</strong>
                <small>★ {item.rating} rating</small>
              </div>
              <span className={`status-live ${item.status}`}>
                {item.status === "pending"
                  ? "In review"
                  : item.status === "draft"
                    ? "Draft"
                    : item.status === "archived"
                      ? "Archived"
                  : item.status === "rejected"
                    ? "Needs changes"
                    : "Published"}
              </span>
              <button onClick={() => setMenuId(menuId === item.id ? null : item.id)}>
                <MoreDots />
              </button>
              {menuId === item.id && <div className="asset-menu"><button onClick={() => { onArchive(item.id); setMenuId(null); }}><Archive size={14}/> Archive</button><button className="danger-action" onClick={() => { onDelete(item.id); setMenuId(null); }}><Trash2 size={14}/> Delete</button></div>}
            </article>
          ))}
        </div>
      </section>
      {uploading && (
        <div className="modal-overlay">
          <form className="publish-modal" onSubmit={publish}>
            <div className="modal-head">
              <div>
                <p>NEW ASSET</p>
                <h2>Submit an asset</h2>
              </div>
              <button type="button" onClick={() => setUploading(false)}>
                <X size={20} />
              </button>
            </div>
            <p className="upload-label">1. Marketplace preview</p>
            <label
              className={`preview-upload ${form.preview ? "has-preview" : ""}`}
              style={
                form.preview ? { backgroundImage: `url(${previewUrl})` } : {}
              }
            >
              <input
                type="file"
                required
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) =>
                  setForm({ ...form, preview: e.target.files[0] })
                }
              />
              <div>
                <span>
                  {form.preview ? <Check size={22} /> : <Plus size={22} />}
                </span>
                <strong>
                  {form.preview
                    ? "Preview image ready"
                    : "Upload the card preview"}
                </strong>
                <p>JPG, PNG or WEBP · Recommended 1600 × 1200</p>
                <b>{form.preview ? "Replace preview" : "Choose image"}</b>
              </div>
            </label>
            <p className="upload-label">2. Original asset files</p>
            <label className="upload-drop product-file">
              <input
                type="file"
                required
                accept=".zip"
                onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
              />
              <span>
                {form.file ? <Check size={23} /> : <Upload size={23} />}
              </span>
              <strong>
                {form.file ? form.file.name : "Upload your original files as ZIP"}
              </strong>
              <p>
                {form.file
                  ? `${(form.file.size / 1024 / 1024).toFixed(2)} MB ready to upload`
                  : "ZIP, FIG, PSD, AI, AE, BLEND · up to 2 GB"}
              </p>
              <b>{form.file ? "Replace file" : "Choose file"}</b>
            </label>
            <label>
              Asset title
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Give your asset a clear name"
              />
            </label>
            <div className="form-row">
              <label>
                Category
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                >
                  <option>UI / UX</option>
                  <option>Branding</option>
                  <option>Typography</option>
                  <option>3D & Objects</option>
                  <option>Templates</option>
                </select>
              </label>
              <label>
                Offering
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                >
                  <option>Paid</option>
                  <option>Free</option>
                </select>
              </label>
            </div>
            {form.type === "Paid" && (
              <label>
                Price (USD)
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </label>
            )}
            <div className="publish-actions">
              <button type="button" onClick={(e) => publish(e, "draft")}>
                Save draft
              </button>
              <button className="primary" type="submit">
                <Sparkles size={16} /> Submit for review
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

function ProfileMenu({ close, setView, user, onSignOut }) {
  return (
    <div className="profile-menu">
      <div>
        <Avatar initials={user.initials} />
        <span>
          <strong>{user.name}</strong>
          <small>{user.email}</small>
        </span>
      </div>
      {user.role === "admin" && (
        <button onClick={() => { setView("admin"); close(); }}>
          <ShieldCheck size={17} /> Admin Panel
        </button>
      )}
      <button onClick={() => { setView("profile"); close(); }}>
        <User size={17} /> Profile
      </button>
      <button
        onClick={() => {
          setView("account-spaces");
          close();
        }}
      >
        <Box size={17} /> My Spaces
      </button>
      <button onClick={() => { setView("downloads"); close(); }}>
        <Download size={17} /> My Downloads
      </button>
      <button onClick={() => { setView("billing"); close(); }}>
        <Package size={17} /> Plan &amp; Billing
      </button>
      <button
        onClick={() => {
          setView("settings");
          close();
        }}
      >
        <Settings size={17} /> Preferences
      </button>
      {user.role === "creator" && (
        <>
          <i />
          <button
            onClick={() => {
              setView("creator");
              close();
            }}
          >
            <Sparkles size={17} /> Creator Studio
          </button>
          <button
            onClick={() => {
              setView("editor");
              close();
            }}
          >
            <Pencil size={17} /> Edit Tool
          </button>
        </>
      )}
      <i />
      <button onClick={onSignOut}>
        <LogOut size={17} /> Sign out
      </button>
    </div>
  );
}

const demoUsers = {
  explorer: {
    name: "Mia Carter",
    email: "mia@metainspo.co",
    role: "explorer",
    initials: "MC",
  },
  creator: {
    name: "Alex Morgan",
    email: "alex@studio.co",
    role: "creator",
    initials: "AM",
  },
  admin: {
    name: "Jordan Admin",
    email: "admin@metainspo.co",
    role: "admin",
    initials: "JA",
  },
};

function AuthScreen({ onAuth }) {
  const [mode, setMode] = useState("signin");
  const [role, setRole] = useState("explorer");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const submit = (e) => {
    e.preventDefault();
    const base = demoUsers[role];
    onAuth(
      mode === "signup"
        ? {
            ...base,
            name: form.name || base.name,
            email: form.email || base.email,
            initials: (form.name || base.name)
              .split(" ")
              .map((x) => x[0])
              .join("")
              .slice(0, 2)
              .toUpperCase(),
          }
        : base,
    );
  };
  return (
    <main className="auth-shell">
      <section className="auth-art">
        <Logo />
        <div>
          <span>
            <Sparkles size={15} /> THE CREATIVE MARKETPLACE
          </span>
          <h1>
            Find the work.
            <br />
            Meet the maker.
            <br />
            <em>Make it yours.</em>
          </h1>
          <p>
            Explore a spatial world of design resources from independent
            creators.
          </p>
        </div>
        <div className="auth-collage">
          {imagePool.slice(0, 4).map((item, i) => (
            <img
              key={item.id}
              src={item.image}
              style={{ transform: `rotate(${[-7, 5, -3, 8][i]}deg)` }}
            />
          ))}
        </div>
      </section>
      <section className="auth-form-wrap">
        <form className="auth-form" onSubmit={submit}>
          <div className="auth-mobile-logo">
            <Logo />
          </div>
          <p className="eyebrow">
            {mode === "signin" ? "WELCOME BACK" : "JOIN METAINSPО"}
          </p>
          <h2>
            {mode === "signin"
              ? "Sign in to your world"
              : "Create your account"}
          </h2>
          <span>
            {mode === "signin"
              ? "Continue collecting, downloading, and creating."
              : "Choose how you want to use the creative marketplace."}
          </span>
          {mode === "signup" && (
            <label>
              Full name
              <div>
                <User size={17} />
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
            </label>
          )}
          <label>
            Email address
            <div>
              <Mail size={17} />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </div>
          </label>
          <label>
            Password
            <div>
              <Lock size={17} />
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
              />
            </div>
          </label>
          <div className="role-picker">
            <p>{mode === "signin" ? "Demo account" : "I want to"}</p>
            <div>
              <button
                type="button"
                className={role === "explorer" ? "active" : ""}
                onClick={() => setRole("explorer")}
              >
                <Compass size={17} />
                <span>
                  <strong>Explorer</strong>
                  <small>Browse & download</small>
                </span>
              </button>
              <button
                type="button"
                className={role === "creator" ? "active" : ""}
                onClick={() => setRole("creator")}
              >
                <Sparkles size={17} />
                <span>
                  <strong>Creator</strong>
                  <small>Upload & sell</small>
                </span>
              </button>
              {mode === "signin" && (
                <button
                  type="button"
                  className={role === "admin" ? "active" : ""}
                  onClick={() => setRole("admin")}
                >
                  <ShieldCheck size={17} />
                  <span>
                    <strong>Admin</strong>
                    <small>Review platform</small>
                  </span>
                </button>
              )}
            </div>
          </div>
          <button className="auth-submit" type="submit">
            {mode === "signin" ? "Sign in" : "Create account"}{" "}
            <ArrowUpRight size={17} />
          </button>
          <p className="auth-switch">
            {mode === "signin"
              ? "New to Metainspo?"
              : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            >
              {mode === "signin" ? "Create an account" : "Sign in"}
            </button>
          </p>
        </form>
      </section>
    </main>
  );
}

function AccountCenter({
  user,
  initialTab,
  savedItems,
  ownedItems,
  spaces,
  sharedSpaces,
  catalog,
  onSelect,
  onDownload,
  setView,
  onUpdateUser,
  onCreateSpace,
  onDeleteSpace,
}) {
  const [tab, setTab] = useState(initialTab || "overview");
  useEffect(() => setTab(initialTab || "overview"), [initialTab]);
  const nav = [
    { id: "spaces", label: "My Spaces", icon: Box, count: spaces.length },
    {
      id: "downloads",
      label: "My Downloads",
      icon: Download,
      count: ownedItems.length,
    },
    { id: "profile", label: "Profile", icon: User },
    { id: "billing", label: "Plan & Billing", icon: Package },
    { id: "settings", label: "Preferences", icon: Settings },
  ];
  const titles = {
    overview: "Your creative world",
    spaces: "My Spaces",
    shared: "Shared with me",
    saved: "Saved ideas",
    downloads: "Downloads",
    profile: user.role === "explorer" ? "Private profile" : "Creator profile",
    billing: "Plan & Billing",
    settings: "Preferences",
  };
  return (
    <main className="account-shell">
      <aside className="account-nav">
        <div className="profile-card">
          <Avatar initials={user.initials} />
          <div>
            <strong>{user.name}</strong>
            <span className={`role-pill ${user.role}`}>{user.role}</span>
          </div>
        </div>
        <nav>
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <button
                key={n.id}
                className={tab === n.id ? "active" : ""}
                onClick={() => setTab(n.id)}
              >
                <Icon size={18} />
                {n.label}
                {n.count !== undefined && <em>{n.count}</em>}
              </button>
            );
          })}
        </nav>
        {user.role === "creator" && (
          <button
            className="studio-shortcut"
            onClick={() => setView("creator")}
          >
            <Sparkles size={17} /> Creator Studio <ArrowUpRight size={15} />
          </button>
        )}
      </aside>
      <div className="account-content">
        <header>
          <div>
            <p className="eyebrow">ACCOUNT / {tab.toUpperCase()}</p>
            <h1>{titles[tab]}</h1>
          </div>
          {tab === "overview" && (
            <button className="primary" onClick={() => setView("explore")}>
              <Compass size={17} /> Explore marketplace
            </button>
          )}
        </header>
        {tab === "overview" && (
          <>
            <div className="account-welcome">
              <div>
                <p>Welcome back, {user.name.split(" ")[0]}.</p>
                <h2>
                  Your next great direction
                  <br />
                  could be one click away.
                </h2>
              </div>
              <div className="quick-stats">
                <span>
                  <b>{savedItems.length}</b>saved ideas
                </span>
                <span>
                  <b>{ownedItems.length}</b>downloads
                </span>
                <span>
                  <b>{spaces.length}</b>spaces
                </span>
              </div>
            </div>
            <ContentGrid
              title="Recently saved"
              items={savedItems.length ? savedItems : catalog.slice(0, 4)}
              onSelect={onSelect}
            />
          </>
        )}
        {tab === "spaces" && (
          <SpacesMini
            spaces={spaces}
            catalog={catalog}
            onCreate={onCreateSpace}
            onDelete={onDeleteSpace}
          />
        )}
        {tab === "shared" && (
          <SpacesMini spaces={sharedSpaces} catalog={catalog} shared />
        )}
        {tab === "saved" && (
          <ContentGrid
            title="Everything you kept"
            items={savedItems}
            onSelect={onSelect}
            empty="Save ideas from the marketplace and they will appear here."
          />
        )}
        {tab === "downloads" && (
          <div className="download-library">
            {ownedItems.length ? (
              ownedItems.map((item) => (
                <article key={item.id}>
                  <img src={item.image} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      by {item.creator} · {item.formats.join(", ")} ·{" "}
                      {item.fileSize}
                    </p>
                    <span>{item.license}</span>
                  </div>
                  <button onClick={() => onDownload(item)}>
                    <Download size={16} /> Download files
                  </button>
                </article>
              ))
            ) : (
              <EmptyAccount
                icon={Download}
                text="Your purchased and free downloads will appear here."
              />
            )}
          </div>
        )}
        {tab === "profile" && (
          <ProfileEditor user={user} onSave={onUpdateUser} />
        )}
        {tab === "billing" && (
          <section className="settings-card billing-card">
            <p className="eyebrow">CURRENT PLAN</p>
            <h2>Explorer Free</h2>
            <p>Save unlimited inspiration spaces and download free assets. Upgrade when you need premium commercial assets.</p>
            <div className="setting-row"><span>Billing cycle</span><strong>No active subscription</strong></div>
            <button className="primary">View available plans</button>
          </section>
        )}
        {tab === "settings" && <SettingsPanel user={user} />}
      </div>
    </main>
  );
}

function ContentGrid({ title, items, onSelect, empty }) {
  return (
    <section className="account-section">
      <div className="section-title">
        <h2>{title}</h2>
        <span>{items.length} items</span>
      </div>
      {items.length ? (
        <div className="account-grid">
          {items.map((item) => (
            <article key={item.id} onClick={() => onSelect(item)}>
              <img src={item.image} />
              <div>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>
                  {item.price === 0 ? "Free" : `$${item.price}`} ·{" "}
                  {item.creator}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <EmptyAccount icon={Bookmark} text={empty} />
      )}
    </section>
  );
}
function SpacesMini({ spaces, catalog, shared, onCreate, onDelete }) {
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");
  const create = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate?.(name.trim());
    setName("");
    setCreating(false);
  };
  return (
    <>
      {!shared && <div className="spaces-actions"><button className="primary" onClick={() => setCreating(true)}><Plus size={16}/> New space</button></div>}
      {creating && <form className="new-space-form" onSubmit={create}><input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="Space title"/><button className="primary">Create space</button><button type="button" onClick={() => setCreating(false)}>Cancel</button></form>}
      <div className="account-spaces">
      {spaces.map((space, i) => (
        <article key={space.id} className="space-card">
          <div>
            {space.covers.length ? space.covers.map((id, j) => (
              <img
                key={j}
                src={
                  (
                    catalog.find((x) => x.id === id) ||
                    catalog[(i + j) % catalog.length]
                  ).image
                }
              />
            )) : <span className="empty-space-cover"><ImageIcon size={28}/><small>The first saved asset becomes the cover</small></span>}
          </div>
          <header><h3>{space.name}</h3>{!shared && <button title="Delete space" onClick={() => onDelete?.(space.id)}><Trash2 size={15}/></button>}</header>
          <p>
            {space.count} ideas {shared ? "· Shared by North Studio" : ""}
          </p>
        </article>
      ))}
      </div>
    </>
  );
}
function EmptyAccount({ icon: Icon, text }) {
  return (
    <div className="empty-account">
      <span>
        <Icon size={24} />
      </span>
      <h3>Nothing here yet</h3>
      <p>{text}</p>
    </div>
  );
}
function ProfileEditor({ user, onSave }) {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio || "");
  const [location, setLocation] = useState(user.location || "");
  const [url, setUrl] = useState(user.url || "");
  const [photo, setPhoto] = useState(user.photo || "");
  return (
    <section className="settings-card">
      <div className="profile-edit-head">
        {photo ? <img className="profile-photo" src={photo} alt="Profile"/> : <Avatar initials={user.initials} />}
        <div>
          <h3>{user.name}</h3>
          <p>{user.role === "explorer" ? "Private profile · not searchable" : `metainspo.com/${user.name.toLowerCase().replaceAll(" ", "")}`}</p>
        </div>
        <label className="photo-button">Change photo<input type="file" accept="image/*" onChange={(e) => { const file=e.target.files[0]; if(file) setPhoto(URL.createObjectURL(file)); }}/></label>
      </div>
      <label>
        Display name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Bio
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell us a little about yourself" />
      </label>
      <div className="form-row">
        <label>
          Location
          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City, Country" />
        </label>
        <label>
          Website or portfolio URL
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://" />
        </label>
      </div>
      <button
        className="primary"
        onClick={() =>
          onSave({
            ...user,
            name,
            bio,
            location,
            url,
            photo,
            initials: name
              .split(" ")
              .map((x) => x[0])
              .join("")
              .slice(0, 2)
              .toUpperCase(),
          })
        }
      >
        Save profile
      </button>
    </section>
  );
}
function SettingsPanel({ user }) {
  return (
    <div className="settings-stack">
      <section className="settings-card">
        <h3>Account</h3>
        <label>
          Email address
          <input defaultValue={user.email} />
        </label>
        <label>
          Password
          <div className="setting-row">
            <span>Last changed 3 months ago</span>
            <button>Change password</button>
          </div>
        </label>
      </section>
      <section className="settings-card">
        <h3>Notifications</h3>
        {[
          "New products from creators I follow",
          "Someone shares a space with me",
          "Product updates and download alerts",
          "Marketplace news",
        ].map((x, i) => (
          <div className="toggle-row" key={x}>
            <span>{x}</span>
            <button className={i < 3 ? "on" : ""}>
              <i />
            </button>
          </div>
        ))}
      </section>
      <section className="settings-card danger">
        <h3>Privacy & account</h3>
        <button>Download my account data</button>
        <button>Delete account</button>
      </section>
    </div>
  );
}

function DesignEditor({ notify }) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageDimensions, setImageDimensions] = useState(null);
  const [textBounds, setTextBounds] = useState({ left: 96, top: 55, width: 260, height: 68 });
  const [fileName, setFileName] = useState("Untitled design");
  const [activeTool, setActiveTool] = useState("Move");
  const [panelTool, setPanelTool] = useState("Media");
  const [zoom, setZoom] = useState(65);
  const [background, setBackground] = useState("#ffffff");
  const [adjustments, setAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    grayscale: 0,
  });
  const [layers, setLayers] = useState([
    {
      id: "background",
      name: "Background",
      type: "background",
      visible: true,
      locked: true,
    },
  ]);
  const [selectedLayer, setSelectedLayer] = useState("background");
  const [history, setHistory] = useState(["New document"]);
  const [openMenu, setOpenMenu] = useState(null);
  const [layerClipboard, setLayerClipboard] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ width: 1200, height: 800 });
  const [stagePan, setStagePan] = useState({ x: 0, y: 0 });
  const [drawSettings, setDrawSettings] = useState({ color: "#111111", size: 18, pressure: 70, softness: 70, shape: "circle", mode: "freehand" });
  const [strokes, setStrokes] = useState([]);
  const [drawing, setDrawing] = useState(null);
  const [assetSearch, setAssetSearch] = useState("");
  const [adjustDialog, setAdjustDialog] = useState(null);
  const [documents, setDocuments] = useState([{ id: `doc-${Date.now()}`, name: "Untitled design", dirty: false, state: null }]);
  const [activeDocumentId, setActiveDocumentId] = useState(() => null);
  const [closeTarget, setCloseTarget] = useState(null);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [showSaveAs, setShowSaveAs] = useState(false);
  const [showRulers, setShowRulers] = useState(false);
  const [transformMenu, setTransformMenu] = useState(null);
  const [toolContextMenu, setToolContextMenu] = useState(null);
  const [transformMode, setTransformMode] = useState("normal");
  const [scaleLinked, setScaleLinked] = useState(true);
  const [perspective3d, setPerspective3d] = useState({ x: 0, y: 0, z: 700, rotateX: 0, rotateY: 0, rotateZ: 0 });
  const pointerTrackingRef = useRef(false);
  const transformRef = useRef(null);
  const undoStack = useRef([]);
  const redoStack = useRef([]);
  const dragRef = useRef(null);
  const imgRef = useRef(null);
  const openFileRef = useRef(null);
  const openProjectRef = useRef(null);
  const filterString = `brightness(${adjustments.brightness}%) contrast(${adjustments.contrast}%) saturate(${adjustments.saturation}%) blur(${adjustments.blur}px) grayscale(${adjustments.grayscale}%)`;
  const layerFilter = (layer) => {
    const a = layer.adjustments || adjustments;
    return `brightness(${a.brightness}%) contrast(${a.contrast}%) saturate(${a.saturation}%) blur(${a.blur}px) grayscale(${a.grayscale}%)`;
  };
  const snapshot = () => ({ layers, adjustments, background, imageUrl, imageDimensions, canvasSize, strokes, fileName, history, stagePan });
  const restore = (state) => {
    setLayers(state.layers); setAdjustments(state.adjustments); setBackground(state.background);
    setImageUrl(state.imageUrl || ""); setImageDimensions(state.imageDimensions || null); setCanvasSize(state.canvasSize); setStrokes(state.strokes || []);
    setFileName(state.fileName || "Untitled design"); setHistory(state.history || ["Opened project"]); setStagePan(state.stagePan || {x:0,y:0});
  };
  const record = (action) => {
    undoStack.current.push(snapshot());
    if (undoStack.current.length > 40) undoStack.current.shift();
    redoStack.current = [];
    setHistory((items) => [...items.slice(-15), action]);
    setDocuments((all) => all.map((doc) => doc.id === (activeDocumentId || all[0]?.id) ? { ...doc, dirty: true } : doc));
  };
  const undo = () => {
    const previous = undoStack.current.pop();
    if (!previous) return;
    redoStack.current.push(snapshot()); restore(previous);
    setHistory((items) => [...items.slice(-15), "Undo"]); setOpenMenu(null);
  };
  const redo = () => {
    const next = redoStack.current.pop();
    if (!next) return;
    undoStack.current.push(snapshot()); restore(next);
    setHistory((items) => [...items.slice(-15), "Redo"]); setOpenMenu(null);
  };
  const upload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result);
      const probe = new Image();
      probe.onload = () => setImageDimensions({ width: probe.naturalWidth, height: probe.naturalHeight });
      probe.src = url;
      const id=`image-${Date.now()}`;
      setImageUrl(url);
      setLayers((current) => [{ id, name:file.name, type:"image", visible:true, locked:false, x:0, y:0, src:url }, ...current]);
      setSelectedLayer(id); record("Imported image");
    };
    reader.readAsDataURL(file);
    e.target.value="";
  };
  const addText = () => {
    const id = `text-${Date.now()}`;
    setLayers((current) => [
      {
        id,
        name: "Your headline",
        type: "text",
        visible: true,
        locked: false,
        text: "Your headline",
        color: "#111111",
        size: 54,
        x: 0,
        y: 0,
        fillType: "solid",
        gradientColor: "#6c51f4",
        strokeColor: "#000000",
        strokeGradient: "#ff694f",
        strokeWidth: 0, fontFamily:"Manrope", fontWeight:700, fontStyle:"normal", textDecoration:"none", letterSpacing:0, lineHeight:1.1, textAlign:"center",
      },
      ...current,
    ]);
    setSelectedLayer(id);
    record("Added text layer");
  };
  const updateLayer = (id, values) =>
    setLayers((current) =>
      current.map((layer) =>
        layer.id === id ? { ...layer, ...values, ...(scaleLinked && id === selectedLayer && ("scaleX" in values || "scaleY" in values) ? { scaleX: values.scaleX ?? values.scaleY ?? layer.scaleX ?? 1, scaleY: values.scaleY ?? values.scaleX ?? layer.scaleY ?? 1 } : {}) } : layer,
      ),
    );
  const perspectiveMatrix = (points) => {
    if (!points) return "";
    const source = [[0,0],[1,0],[1,1],[0,1]];
    const matrix = source.flatMap(([x,y], index) => [[x,y,1,0,0,0,-x*points[index].x,-y*points[index].x],[0,0,0,x,y,1,-x*points[index].y,-y*points[index].y]]);
    const values = matrix.map((row,index) => [...row, index % 2 === 0 ? points[Math.floor(index/2)].x : points[Math.floor(index/2)].y]);
    for (let i=0;i<8;i++) { let pivot=i; for(let j=i+1;j<8;j++) if(Math.abs(values[j][i])>Math.abs(values[pivot][i])) pivot=j; [values[i],values[pivot]]=[values[pivot],values[i]]; const divisor=values[i][i]||1; for(let j=i;j<=8;j++) values[i][j]/=divisor; for(let k=0;k<8;k++) if(k!==i){const factor=values[k][i];for(let j=i;j<=8;j++) values[k][j]-=factor*values[i][j];} }
    const [a,b,c,d,e,f,g,h] = values.map((row)=>row[8]);
    return `matrix3d(${a},${d},0,${g},${b},${e},0,${h},0,0,1,0,${c},${f},0,1)`;
  };
  const layerTransform = (layer) => {
    const points = layer.perspectivePoints;
    const space = layer.perspective3d || {};
    const perspective = points ? `perspective(${space.z || layer.perspective || 700}px) translate3d(${space.x || 0}px,${space.y || 0}px,0) rotateX(${space.rotateX || 0}deg) rotateY(${space.rotateY || 0}deg) rotateZ(${space.rotateZ || 0}deg) rotateX(${((points[2].y + points[3].y - points[0].y - points[1].y) / 4) * 0.45}deg) rotateY(${((points[1].x + points[2].x - points[0].x - points[3].x) / 4) * -0.45}deg)` : "";
    return `${perspective} translate(${layer.x || 0}px,${layer.y || 0}px) rotate(${layer.rotation || 0}deg) skew(${layer.skewX || 0}deg,${layer.skewY || 0}deg) scale(${layer.scaleX || 1},${layer.scaleY || 1})`;
  };
  const layerPerspectiveStyle = () => ({});
  const imageBounds = (() => {
    const aspect = imageDimensions?.width && imageDimensions?.height ? imageDimensions.width / imageDimensions.height : canvasSize.width / canvasSize.height;
    let width = canvasSize.width;
    let height = width / aspect;
    if (height > canvasSize.height) { height = canvasSize.height; width = height * aspect; }
    return { left: (canvasSize.width - width) / 2, top: (canvasSize.height - height) / 2, width, height };
  })();
  const beginTransform = (e, type, layer) => {
    if (!layer || layer.locked) return;
    e.preventDefault();
    e.stopPropagation();
    const box = e.currentTarget.closest(".transform-box")?.getBoundingClientRect();
    if (!box) return;
    const center = { x: box.left + box.width / 2, y: box.top + box.height / 2 };
    const startAngle = Math.atan2(e.clientY - center.y, e.clientX - center.x);
    const startDistance = Math.max(1, Math.hypot(e.clientX - center.x, e.clientY - center.y));
    transformRef.current = { type, id: layer.id, startX: e.clientX, startY: e.clientY, center, box, corner: e.currentTarget.dataset.corner ? Number(e.currentTarget.dataset.corner) : 0, startAngle, startDistance, scaleX: layer.scaleX || 1, scaleY: layer.scaleY || 1, rotation: layer.rotation || 0, skewX: layer.skewX || 0, skewY: layer.skewY || 0 };
    const moveTransform = (event) => {
      const session = transformRef.current;
      if (!session) return;
      setLayers((all) => all.map((item) => {
        if (item.id !== session.id) return item;
        if (session.type === "rotate") {
          const angle = Math.atan2(event.clientY - session.center.y, event.clientX - session.center.x);
          return { ...item, rotation: session.rotation + ((angle - session.startAngle) * 180) / Math.PI };
        }
        if (session.type === "skewX") return { ...item, skewX: session.skewX + (event.clientX - session.startX) / 4 };
        if (session.type === "skewY") return { ...item, skewY: session.skewY + (event.clientY - session.startY) / 4 };
        if (session.type === "perspective-corner") {
          const dx = (event.clientX - session.startX) / Math.max(1, session.box.width) * 100;
          const dy = (event.clientY - session.startY) / Math.max(1, session.box.height) * 100;
          const points = item.perspectivePoints || [{x:0,y:0},{x:100,y:0},{x:100,y:100},{x:0,y:100}];
          return { ...item, perspectivePoints: points.map((point,index)=>index === session.corner ? { x: point.x + dx, y: point.y + dy } : point) };
        }
        if (session.type === "perspective") return { ...item, perspective: Math.max(0, Math.min(2000, (item.perspective || 0) + (event.clientY - session.startY) * 3)) };
        const distance = Math.max(8, Math.hypot(event.clientX - session.center.x, event.clientY - session.center.y));
        const ratio = distance / session.startDistance;
        const uniform = session.type === "scale-uniform";
        return { ...item, scaleX: Math.max(0.05, session.scaleX * (uniform ? ratio : 1 + (event.clientX - session.startX) / Math.max(50, box.width))), scaleY: Math.max(0.05, session.scaleY * (uniform ? ratio : 1 + (event.clientY - session.startY) / Math.max(50, box.height))) };
      }));
    };
    const endTransform = () => { window.removeEventListener("pointermove", moveTransform); window.removeEventListener("pointerup", endTransform); window.removeEventListener("pointercancel", endTransform); transformRef.current = null; };
    window.addEventListener("pointermove", moveTransform);
    window.addEventListener("pointerup", endTransform);
    window.addEventListener("pointercancel", endTransform);
  };
  const applyTransformCommand = (command, layer) => {
    if (!layer || layer.locked) return;
    if (command === "flipX") updateLayer(layer.id, { scaleX: -(layer.scaleX || 1) });
    if (command === "flipY") updateLayer(layer.id, { scaleY: -(layer.scaleY || 1) });
    if (command === "skew") updateLayer(layer.id, { skewX: (layer.skewX || 0) + 12 });
    if (command === "perspective") { setTransformMode("perspective"); setPerspective3d(layer.perspective3d || { x:0, y:0, z:700, rotateX:0, rotateY:0, rotateZ:0 }); updateLayer(layer.id, { perspective: 700, perspective3d: layer.perspective3d || { x:0, y:0, z:700, rotateX:0, rotateY:0, rotateZ:0 }, perspectivePoints: layer.perspectivePoints || [{x:0,y:0},{x:100,y:0},{x:100,y:100},{x:0,y:100}] }); }
    if (command === "skew") setTransformMode("skew");
    record(`${command} ${layer.name}`);
    setTransformMenu(null);
  };
  const resetPerspective = (layer) => {
    if (!layer) return;
    updateLayer(layer.id, { perspective: 0, perspectivePoints: undefined });
    setPerspective3d({ x:0, y:0, z:700, rotateX:0, rotateY:0, rotateZ:0 });
    setTransformMode("normal");
    record(`Reset perspective ${layer.name}`);
  };
  const resetSkew = (layer) => {
    if (!layer) return;
    updateLayer(layer.id, { skewX: 0, skewY: 0 });
    setTransformMode("normal");
    record(`Reset skew ${layer.name}`);
  };
  const alignLayer = (layer, alignment) => {
    if (!layer || layer.locked) return;
    const bounds = layer.type === "image" ? imageBounds : layer.type === "shape" ? { left: canvasSize.width / 2 - (layer.size || 120) / 2, top: canvasSize.height / 2 - (layer.size || 120) / 2, width: layer.size || 120, height: layer.size || 120 } : { left: canvasSize.width * .08, top: 55, width: canvasSize.width * .84, height: Math.max(42, (layer.size || 54) * 1.25) };
    const sx = Math.abs(layer.scaleX || 1);
    const sy = Math.abs(layer.scaleY || 1);
    const scaledLeftOffset = bounds.left + (bounds.width * (1 - sx)) / 2;
    const scaledTopOffset = bounds.top + (bounds.height * (1 - sy)) / 2;
    const scaledWidth = bounds.width * sx;
    const scaledHeight = bounds.height * sy;
    const targetX = alignment === "left" ? -scaledLeftOffset : alignment === "right" ? canvasSize.width - scaledLeftOffset - scaledWidth : alignment === "center" ? canvasSize.width / 2 - (scaledLeftOffset + scaledWidth / 2) : layer.x || 0;
    const targetY = alignment === "top" ? -scaledTopOffset : alignment === "bottom" ? canvasSize.height - scaledTopOffset - scaledHeight : alignment === "middle" ? canvasSize.height / 2 - (scaledTopOffset + scaledHeight / 2) : layer.y || 0;
    const changes = ["left","right","center"].includes(alignment) ? { x: targetX } : { y: targetY };
    updateLayer(layer.id, changes);
    record(`Aligned ${layer.name} ${alignment}`);
  };
  const setScaleValue = (layer, axis, value) => updateLayer(layer.id, scaleLinked ? { scaleX:value, scaleY:value } : { [axis]:value });
  const toggleLock = (id) => {
    const layer = layers.find((x) => x.id === id);
    if (!layer || layer.type === "background") return;
    record(layer.locked ? `Unlocked ${layer.name}` : `Locked ${layer.name}`);
    updateLayer(id, { locked: !layer.locked });
  };
  const beginCanvasAction = (e, layer = null) => {
    if (layer && activeTool !== "Move") return;
    const rect = e.currentTarget.closest(".pro-artboard")?.getBoundingClientRect() || e.currentTarget.getBoundingClientRect();
    if (activeTool === "Text" && !layer) {
      const point = { x: (e.clientX - rect.left) / (zoom / 100), y: (e.clientY - rect.top) / (zoom / 100) };
      const id = `text-${Date.now()}`;
      record("Added text layer");
      setLayers((all) => [{ id, name:"Your headline", type:"text", visible:true, locked:false, text:"Your headline", color:drawSettings.color, size:54, x:point.x-canvasSize.width/2, y:point.y-55, fillType:"solid", gradientColor:"#6c51f4", strokeColor:"#000000", strokeGradient:"#ff694f", strokeWidth:0, fontFamily:"Manrope", fontWeight:700, fontStyle:"normal", textDecoration:"none", letterSpacing:0, lineHeight:1.1, textAlign:"center" }, ...all]);
      setSelectedLayer(id);
      return;
    }
    if (activeTool === "Hand") {
      dragRef.current = { type: "hand", startX: e.clientX, startY: e.clientY, pan: stagePan };
      e.currentTarget.setPointerCapture?.(e.pointerId);
      window.addEventListener("pointermove", moveCanvasAction);
      window.addEventListener("pointerup", endCanvasAction);
      pointerTrackingRef.current = true;
      return;
    }
    if (activeTool === "Move" && layer && !layer.locked) {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.setPointerCapture?.(e.pointerId);
      setSelectedLayer(layer.id);
      record(`Moved ${layer.name}`);
      const startX = e.clientX;
      const startY = e.clientY;
      const startLayerX = layer.x || 0;
      const startLayerY = layer.y || 0;
      const moveLayer = (event) => {
        const scale = Math.max(0.01, zoom / 100);
        setLayers((current) => current.map((item) => item.id === layer.id
          ? { ...item, x: startLayerX + (event.clientX - startX) / scale, y: startLayerY + (event.clientY - startY) / scale }
          : item));
      };
      const finishLayer = () => {
        window.removeEventListener("pointermove", moveLayer);
        window.removeEventListener("pointerup", finishLayer);
        window.removeEventListener("pointercancel", finishLayer);
        dragRef.current = null;
      };
      dragRef.current = { type: "move", id: layer.id };
      window.addEventListener("pointermove", moveLayer);
      window.addEventListener("pointerup", finishLayer);
      window.addEventListener("pointercancel", finishLayer);
      return;
    }
    if (["Pen", "Brush", "Eraser"].includes(activeTool)) {
      const point = { x: (e.clientX - rect.left) / (zoom / 100), y: (e.clientY - rect.top) / (zoom / 100) };
      if (activeTool === "Eraser") {
        record("Erased brush stroke");
        setStrokes((all) => all.filter((path) => !path.points.some((p) => Math.hypot(p.x-point.x,p.y-point.y) < Math.max(12,drawSettings.size)))); return;
      }
      record(activeTool === "Pen" ? "Drew vector path" : "Painted brush stroke");
      setDrawing({ id: `stroke-${Date.now()}`, tool: activeTool, color: drawSettings.color, width: drawSettings.size * (drawSettings.pressure / 100), points: [point] });
    }
  };
  const moveCanvasAction = (e) => {
    if (dragRef.current?.type === "hand") {
      setStagePan({ x: dragRef.current.pan.x + e.clientX - dragRef.current.startX, y: dragRef.current.pan.y + e.clientY - dragRef.current.startY });
    } else if (drawing) {
      const rect = e.currentTarget.querySelector(".pro-artboard")?.getBoundingClientRect();
      if (rect) setDrawing((path) => ({ ...path, points: [...path.points, { x: (e.clientX - rect.left) / (zoom / 100), y: (e.clientY - rect.top) / (zoom / 100) }] }));
    }
  };
  const endCanvasAction = () => {
    if (dragRef.current?.type === "move") return;
    if (pointerTrackingRef.current) {
      window.removeEventListener("pointermove", moveCanvasAction);
      window.removeEventListener("pointerup", endCanvasAction);
      pointerTrackingRef.current = false;
    }
    dragRef.current = null;
    if (drawing) {
      if (drawing.tool === "Pen" && drawing.points.length > 1) {
        const id = `path-${Date.now()}`;
        setLayers((all) => [{ id, name:"Pen path", type:"path", visible:true, locked:false, color:drawing.color, width:drawing.width, points:drawing.points, closed:false, x:0, y:0 }, ...all]);
        setSelectedLayer(id);
      } else setStrokes((all) => [...all, drawing]);
      setDrawing(null);
    }
  };
  const openToolMenu = (e, layer = null) => {
    e.preventDefault(); e.stopPropagation();
    if (layer) setSelectedLayer(layer.id);
    setToolContextMenu({ x:e.clientX, y:e.clientY, tool:activeTool, layerId:layer?.id || selectedLayer });
  };
  const applyFill = () => {
    const target = layers.find((x)=>x.id===selectedLayer);
    if (target && target.type !== "background") updateLayer(target.id,{color:drawSettings.color}); else setBackground(drawSettings.color);
    record("Filled selected layer"); setToolContextMenu(null);
  };
  const removeLayer = () => {
    const layer = layers.find((x) => x.id === selectedLayer);
    if (!layer || layer.locked) return;
    setLayers((current) => current.filter((x) => x.id !== selectedLayer));
    if (layer.type === "image") setImageUrl("");
    setSelectedLayer("background");
    record(`Deleted ${layer.name}`);
  };
  const duplicateLayer = () => {
    const layer = layers.find((x) => x.id === selectedLayer);
    if (!layer || layer.type === "background") return;
    const copy = {
      ...layer,
      id: `${layer.type}-${Date.now()}`,
      name: `${layer.name} copy`,
    };
    setLayers((current) => [copy, ...current]);
    setSelectedLayer(copy.id);
    record("Duplicated layer");
  };
  const copyLayer = () => {
    const layer = layers.find((x) => x.id === selectedLayer);
    if (!layer || layer.type === "background") return;
    setLayerClipboard({ ...layer });
    record("Copied layer");
    setOpenMenu(null);
  };
  const cutLayer = () => {
    const layer = layers.find((x) => x.id === selectedLayer);
    if (!layer || layer.locked) return;
    setLayerClipboard({ ...layer });
    removeLayer();
    record("Cut layer");
    setOpenMenu(null);
  };
  const pasteLayer = () => {
    if (!layerClipboard) return;
    const pasted = {
      ...layerClipboard,
      id: `${layerClipboard.type}-${Date.now()}`,
      name: `${layerClipboard.name} pasted`,
      locked: false,
    };
    setLayers((current) => [pasted, ...current]);
    setSelectedLayer(pasted.id);
    record("Pasted layer");
    setOpenMenu(null);
  };
  const reset = () => {
    const defaults = {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      blur: 0,
      grayscale: 0,
    };
    const target = layers.find((x) => x.id === selectedLayer);
    if (target?.type === "image") updateLayer(target.id, { adjustments: defaults }); else setAdjustments(defaults);
    record("Reset adjustments");
  };
  const autoTone = () => {
    setAdjustments((a) => ({ ...a, brightness: 106, contrast: 108 }));
    record("Auto Tone");
    setOpenMenu(null);
  };
  const autoContrast = () => {
    setAdjustments((a) => ({ ...a, contrast: 118 }));
    record("Auto Contrast");
    setOpenMenu(null);
  };
  const autoColor = () => {
    setAdjustments((a) => ({ ...a, saturation: 112, grayscale: 0 }));
    record("Auto Color");
    setOpenMenu(null);
  };
  const blankProject = (name = "Untitled design") => ({
    layers: [{ id: "background", name: "Background", type: "background", visible: true, locked: true }],
    adjustments: { brightness:100, contrast:100, saturation:100, blur:0, grayscale:0 },
    background:"#ffffff", imageUrl:"", canvasSize:{width:1200,height:800}, strokes:[], fileName:name, history:["New document"], stagePan:{x:0,y:0}
  });
  const persistActiveDocument = () => {
    const id = activeDocumentId || documents[0]?.id;
    const state = snapshot();
    setDocuments((all) => all.map((doc) => doc.id === id ? { ...doc, name:fileName, state } : doc));
    return state;
  };
  const newDocument = () => {
    persistActiveDocument();
    const id = `doc-${Date.now()}`;
    const state = blankProject();
    setDocuments((all) => [...all, {id,name:"Untitled design",dirty:false,state}]);
    setActiveDocumentId(id);
    restore(state);
    undoStack.current=[]; redoStack.current=[];
    setOpenMenu(null);
  };
  const switchDocument = (id) => {
    if (id === (activeDocumentId || documents[0]?.id)) return;
    const currentState = snapshot();
    const target = documents.find((doc)=>doc.id===id);
    setDocuments((all)=>all.map((doc)=>doc.id === (activeDocumentId || all[0]?.id) ? {...doc,name:fileName,state:currentState}:doc));
    setActiveDocumentId(id);
    restore(target?.state || blankProject(target?.name));
    undoStack.current=[]; redoStack.current=[];
  };
  const requestCloseDocument = (doc) => doc.dirty ? setCloseTarget(doc) : closeDocument(doc.id);
  const closeDocument = (id) => {
    const index=documents.findIndex((doc)=>doc.id===id);
    const remaining=documents.filter((doc)=>doc.id!==id);
    if (!remaining.length) { const state=blankProject(); const fresh={id:`doc-${Date.now()}`,name:"Untitled design",dirty:false,state}; setDocuments([fresh]);setActiveDocumentId(fresh.id);restore(state); }
    else { const next=remaining[Math.min(index,remaining.length-1)]; setDocuments(remaining); if(id === (activeDocumentId || documents[0]?.id)){setActiveDocumentId(next.id);restore(next.state || blankProject(next.name));} }
    setCloseTarget(null);
  };
  const resetCurrentDocument = () => {
    setImageUrl("");
    setFileName("Untitled design");
    setBackground("#ffffff");
    setLayers([
      {
        id: "background",
        name: "Background",
        type: "background",
        visible: true,
        locked: true,
      },
    ]);
    setSelectedLayer("background");
    setAdjustments({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      blur: 0,
      grayscale: 0,
    });
    setHistory(["New document"]);
    setOpenMenu(null);
  };
  const saveProject = () => {
    const projectState={...snapshot(),fileName};
    const data = new Blob(
      [
        JSON.stringify(
          { format:"metainspo-project", version:1, name:fileName, savedAt:new Date().toISOString(), state:projectState },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.metainspo`;
    link.click();
    URL.revokeObjectURL(url);
    setHistory((items)=>[...items.slice(-15),"Saved project"]);
    setDocuments((all)=>all.map((doc)=>doc.id === (activeDocumentId || all[0]?.id) ? {...doc,name:fileName,dirty:false,state:projectState}:doc));
    setOpenMenu(null);
    notify("Editable Metainspo project saved");
  };
  const openProject = (e) => {
    const file=e.target.files[0]; if(!file)return;
    const reader=new FileReader();
    reader.onload=()=>{try{const data=JSON.parse(String(reader.result));if(data.format!=="metainspo-project"||!data.state?.layers)throw new Error("Invalid project");persistActiveDocument();const id=`doc-${Date.now()}`;const state={...data.state,fileName:data.name||file.name.replace(/\.metainspo$|\.json$/i,"")};setDocuments((all)=>[...all,{id,name:state.fileName,dirty:false,state}]);setActiveDocumentId(id);restore(state);setOpenMenu(null);notify("Project opened successfully");}catch{notify("This file is not a valid Metainspo project");}};
    reader.readAsText(file);e.target.value="";
  };
  const exportImage = (mime="image/png", extension="png") => {
    const canvas = document.createElement("canvas");
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const imageLayer = layers.find((x) => x.type === "image" && x.visible);
    if (imageLayer && imgRef.current) {
      ctx.filter = filterString;
      const img = imgRef.current;
      const scale = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * scale,
        h = img.naturalHeight * scale;
      ctx.drawImage(img, (canvas.width - w) / 2 + (imageLayer.x||0), (canvas.height - h) / 2 + (imageLayer.y||0), w, h);
      ctx.filter = "none";
    }
    layers
      .filter((x) => x.type === "text" && x.visible)
      .reverse()
      .forEach((layer, i) => {
        ctx.fillStyle = layer.color;
        ctx.font = `700 ${layer.size}px Manrope, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(layer.text, canvas.width/2+(layer.x||0), 150 + i * 80+(layer.y||0));
      });
    strokes.forEach((path)=>{if(path.points.length<2)return;ctx.beginPath();ctx.moveTo(path.points[0].x,path.points[0].y);path.points.slice(1).forEach((p)=>ctx.lineTo(p.x,p.y));ctx.strokeStyle=path.color;ctx.lineWidth=path.width;ctx.lineCap="round";ctx.lineJoin="round";ctx.stroke();});
    canvas.toBlob((blob) => {
      if(!blob){notify(`${extension.toUpperCase()} is not supported by this browser`);return;}
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName}.${extension}`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      notify(`${extension.toUpperCase()} image saved`);
    }, mime, .92);
  };
  const tools = [
    ["Photos", ImageIcon],
    ["AI Image", Wand2],
    ["Media", ImageIcon],
    ["Templates", Grid2X2],
    ["Elements", Shapes],
    ["Background", Palette],
    ["Resize", Crop],
  ];
  const controls = [
    ["brightness", "Brightness", 0, 200],
    ["contrast", "Contrast", 0, 200],
    ["saturation", "Saturation", 0, 200],
    ["blur", "Blur", 0, 20],
    ["grayscale", "Grayscale", 0, 100],
  ];
  const selected = layers.find((x) => x.id === selectedLayer);
  const selectedAdjustments = selected?.adjustments || adjustments;
  const photoLibrary = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Creative photo ${i + 1}`, url: `https://images.unsplash.com/photo-${[1618005182384,1634017839464,1635070041078,1511818966892,1558655146,1604871000636,1547891654,1616486338812,1561214115,1557682250][i % 10]}-${["a83a8bd57fbe","5c339ebe3cb4","e363dbe005cb","d7d671e672a2","9f40138edfeb","074fa5117945","e66ed7ebb968","3dadae4b4ace","f2f134cc4912","33bd709cbe85"][i % 10]}?auto=format&fit=crop&w=500&q=75` }));
  const templateLibrary = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Creative layout ${i + 1}`, bg: ["#f5df4d","#6c51f4","#ff694f","#84d6c3","#111111"][i % 5], accent: ["#111111","#ffffff","#f5df4d"][i % 3] }));
  const textLibrary = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, text: ["MAKE IT BOLD","New perspectives","Less, but better","Creative direction","Ideas in motion"][i % 5], size: [34,44,54,64,76][i % 5] }));
  const shapeLibrary = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, shape: ["square","circle","star","triangle","diamond"][i % 5] }));
  const placePhoto = (photo) => { record("Placed stock photo"); setImageUrl(photo.url); setFileName(photo.name); const probe=new Image(); probe.onload=()=>setImageDimensions({width:probe.naturalWidth,height:probe.naturalHeight}); probe.src=photo.url; setLayers((all) => [{ id: `image-${Date.now()}`, name: photo.name, type: "image", visible: true, locked: false, x: 0, y: 0, src: photo.url }, ...all]); };
  const applyTemplate = (template) => { record(`Applied ${template.name}`); setBackground(template.bg); const now=Date.now(); setLayers([{ id:`text-${now}`, name:"Template headline", type:"text", visible:true, locked:false, text:template.name, color:template.accent, size:64, x:0, y:-80, fillType:"solid", gradientColor:"#ffffff", strokeColor:"#000000", strokeGradient:"#ff694f", strokeWidth:0 }, { id:`shape-${now}`, name:"Accent shape", type:"shape", shape:"circle", visible:true, locked:false, color:template.accent, x:180, y:100, size:120 }, { id:"background", name:"Background", type:"background", visible:true, locked:true }]); };
  const addTextPreset = (preset) => { addText(); setTimeout(() => setLayers((all) => all.map((layer, i) => i === 0 ? {...layer, text:preset.text, name:preset.text, size:preset.size} : layer)), 0); };
  const addShape = (shape) => { const id=`shape-${Date.now()}`; record(`Added ${shape.shape}`); setLayers((all) => [{id,name:shape.shape,type:"shape",shape:shape.shape,visible:true,locked:false,color:drawSettings.color,size:140,x:0,y:0},...all]); setSelectedLayer(id); };
  const panelContent = () => {
    const activeTool = panelTool;
    if (activeTool === "Layers") return <div className="pro-panel-content left-layers-panel"><div className="layers-title"><strong>Layers</strong><div><button onClick={duplicateLayer}><Copy size={14}/></button><button onClick={removeLayer}><Trash2 size={14}/></button></div></div>{layers.map((layer)=><button key={layer.id} className={`left-layer-row ${selectedLayer===layer.id?"active":""}`} onClick={()=>setSelectedLayer(layer.id)}><span onClick={(e)=>{e.stopPropagation();updateLayer(layer.id,{visible:!layer.visible})}}>{layer.visible?<Eye size={14}/>:<EyeOff size={14}/>}</span><i>{layer.type === "image" && (layer.src || imageUrl) ? <img src={layer.src || imageUrl}/> : layer.type === "text" ? <Type size={14}/> : <Palette size={14}/>}</i><strong>{layer.name}</strong><span onClick={(e)=>{e.stopPropagation();toggleLock(layer.id)}}>{layer.locked?<Lock size={12}/>:<Unlock size={12}/>}</span></button>)}</div>;
    if (activeTool === "Upload")
      return (
        <div className="pro-panel-content">
          <h3>Uploads</h3>
          <p>Add media from your device.</p>
          <label className="pro-upload">
            <input type="file" accept="image/*" onChange={upload} />
            <Upload size={20} />
            <strong>Upload files</strong>
          </label>
          {imageUrl && (
            <div className="uploaded-thumb">
              <img src={imageUrl} />
              <span>{fileName}</span>
            </div>
          )}
        </div>
      );
    if (activeTool === "Text")
      return (
        <div className="pro-panel-content">
          <h3>Text</h3>
          <button className="add-heading" onClick={addText}>
            Add a text box
          </button>
          <button className="text-preset big" onClick={addText}>
            Add a heading
          </button>
          <button className="text-preset">Add a subheading</button>
          <button className="text-preset small">Add body text</button>
          <div className="asset-library text-library">{textLibrary.map((preset) => <button key={preset.id} onClick={() => addTextPreset(preset)} style={{fontSize: Math.min(18,preset.size/3)}}>{preset.text}</button>)}</div>
        </div>
      );
    if (activeTool === "Background")
      return (
        <div className="pro-panel-content">
          <h3>Background</h3>
          <p>Choose the artboard color.</p>
          <input
            className="color-field"
            type="color"
            value={background}
            onChange={(e) => {
              setBackground(e.target.value);
              record("Changed background");
            }}
          />
          <div className="swatches">
            {[
              "#ffffff",
              "#111111",
              "#f5df4d",
              "#6c51f4",
              "#ff694f",
              "#84d6c3",
              "#e7c7a1",
              "#c7d7ff",
            ].map((c) => (
              <button
                style={{ background: c }}
                key={c}
                onClick={() => setBackground(c)}
              />
            ))}
          </div>
        </div>
      );
    if (activeTool === "Templates") return <div className="pro-panel-content"><h3>Templates</h3><div className="pro-search"><Search size={15}/><input value={assetSearch} onChange={(e)=>setAssetSearch(e.target.value)} placeholder="Search 100 templates..."/></div><div className="asset-library template-library">{templateLibrary.filter(x=>x.name.toLowerCase().includes(assetSearch.toLowerCase())).map((item)=><button key={item.id} onClick={()=>applyTemplate(item)} style={{background:item.bg,color:item.accent}}><b>Aa</b><span>{item.name}</span></button>)}</div></div>;
    if (activeTool === "Elements") return <div className="pro-panel-content"><h3>Elements</h3><p>100 reusable vector shapes.</p><div className="asset-library shape-library">{shapeLibrary.map((item)=><button key={item.id} onClick={()=>addShape(item)} title={`${item.shape} ${item.id}`}><Shapes size={20}/><span>{item.shape}</span></button>)}</div></div>;
    if (activeTool === "Draw") return <div className="pro-panel-content"><h3>Draw</h3><label>Brush color<input type="color" value={drawSettings.color} onChange={(e)=>setDrawSettings({...drawSettings,color:e.target.value})}/></label><label>Size <input type="range" min="1" max="100" value={drawSettings.size} onChange={(e)=>setDrawSettings({...drawSettings,size:Number(e.target.value)})}/></label><label>Pressure <input type="range" min="10" max="100" value={drawSettings.pressure} onChange={(e)=>setDrawSettings({...drawSettings,pressure:Number(e.target.value)})}/></label><div className="brush-options"><button onClick={()=>setActiveTool("Brush")}>Soft brush</button><button onClick={()=>{setDrawSettings({...drawSettings,pressure:100});setActiveTool("Brush")}}>Hard brush</button><button onClick={()=>setActiveTool("Pen")}>Bezier pen</button></div></div>;
    if (activeTool === "Media") return <div className="pro-panel-content"><h3>Your media</h3><p>Files uploaded by this Creator.</p><label className="pro-upload"><input type="file" accept="image/*" onChange={upload}/><Upload size={20}/><strong>Add media</strong></label>{imageUrl&&<div className="asset-library photo-library"><button onClick={()=>placePhoto({url:imageUrl,name:fileName})}><img src={imageUrl}/><span>{fileName}</span></button></div>}</div>;
    if (activeTool === "Resize")
      return (
        <div className="pro-panel-content">
          <h3>Resize</h3>
          <label>
            Width
            <input type="number" value={canvasSize.width} onChange={(e)=>setCanvasSize({...canvasSize,width:Number(e.target.value)})} />
          </label>
          <label>
            Height
            <input type="number" value={canvasSize.height} onChange={(e)=>setCanvasSize({...canvasSize,height:Number(e.target.value)})} />
          </label>
          <button className="add-heading" onClick={()=>record("Resized canvas")}>Resize canvas</button>
        </div>
      );
    if (["AI Image", "Photos"].includes(activeTool))
      return (
        <div className="pro-panel-content">
          <h3>{activeTool}</h3>
          <div className="pro-search">
            <Search size={15} />
            <input value={assetSearch} onChange={(e)=>setAssetSearch(e.target.value)} placeholder={`Search ${activeTool.toLowerCase()}...`} />
          </div>
          {activeTool === "AI Image" && (
            <>
              <textarea placeholder="Describe the image you want to create..." />
              <button className="add-heading">
                <Sparkles size={14} /> Generate image
              </button>
              <p className="api-note">
                Connect an image-generation API to activate this module.
              </p>
            </>
          )}
          {activeTool === "Photos" && <div className="asset-library photo-library">{photoLibrary.filter(x=>x.name.includes(assetSearch)).map((photo)=><button key={photo.id} onClick={()=>placePhoto(photo)}><img src={photo.url}/><span>{photo.name}</span></button>)}</div>}
        </div>
      );
    return (
      <div className="pro-panel-content">
        <h3>{activeTool}</h3>
        <p>This professional tool module is ready for its editing engine.</p>
        <div className="module-placeholder">
          <span>
            <Sparkles size={23} />
          </span>
          <strong>{activeTool} tools</strong>
          <small>Coming in the next editor milestone</small>
        </div>
      </div>
    );
  };
  useEffect(() => {
    const shortcuts = (e) => {
      const tag = e.target?.tagName;
      if (!e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey && !["INPUT","TEXTAREA","SELECT"].includes(tag) && !e.target?.isContentEditable) {
        const toolShortcuts = { v:"Move", h:"Hand", p:"Pen", b:"Brush", e:"Eraser", g:"Fill" };
        const nextTool = toolShortcuts[e.key.toLowerCase()];
        if (nextTool) { e.preventDefault(); setActiveTool(nextTool); return; }
      }
      if (!(e.ctrlKey || e.metaKey)) return;
      if (e.key.toLowerCase() === "z") { e.preventDefault(); e.shiftKey ? redo() : undo(); }
      if (e.key.toLowerCase() === "y") { e.preventDefault(); redo(); }
      if (e.key.toLowerCase() === "n") { e.preventDefault(); newDocument(); }
      if (e.key.toLowerCase() === "o") { e.preventDefault(); openProjectRef.current?.click(); }
      if (e.key.toLowerCase() === "s") { e.preventDefault(); e.shiftKey ? setShowSaveAs(true) : saveProject(); }
      if (e.key.toLowerCase() === "r") { e.preventDefault(); setShowRulers((value)=>!value); }
    };
    window.addEventListener("keydown", shortcuts);
    return () => window.removeEventListener("keydown", shortcuts);
  });
  return (
    <main className="pro-editor">
      <input
        ref={openFileRef}
        className="hidden-editor-file"
        type="file"
        accept="image/*"
        onChange={upload}
      />
      <input ref={openProjectRef} className="hidden-editor-file" type="file" accept=".metainspo,.json,application/json" onChange={openProject} />
      <div className="pro-menubar">
        <div className="editor-wordmark">
          <Logo compact />
        </div>
        <div className="menu-wrap">
          <button
            className={openMenu === "File" ? "active" : ""}
            onClick={() => setOpenMenu(openMenu === "File" ? null : "File")}
          >
            File
          </button>
          {openMenu === "File" && (
            <div className="file-dropdown">
              <button onClick={newDocument}>
                <span>New…</span>
                <kbd>Ctrl + N</kbd>
              </button>
              <button
                onClick={() => {
                  openProjectRef.current?.click();
                  setOpenMenu(null);
                }}
              >
                <span>Open project…</span>
                <kbd>Ctrl + O</kbd>
              </button>
              <button
                onClick={() => {
                  openFileRef.current?.click();
                  setOpenMenu(null);
                }}
              >
                <span>Import…</span>
                <kbd>⇧ Ctrl + O</kbd>
              </button>
              <button>
                <span>Open recent</span>
                <ChevronRight size={13} />
              </button>
              <i />
              <button>
                <span>Share</span>
                <ChevronRight size={13} />
              </button>
              <i />
              <button onClick={saveProject}>
                <span>Save project</span>
                <kbd>Ctrl + S</kbd>
              </button>
              <button onClick={() => {setShowSaveAs(true);setOpenMenu(null)}}>
                <span>Save project as…</span>
                <kbd>⇧ Ctrl + S</kbd>
              </button>
              <i />
              <button onClick={() => exportImage("image/png","png")}>
                <span>Export as PNG</span>
                <ChevronRight size={13} />
              </button>
              <button onClick={() => window.print()}>
                <span>Print…</span>
                <kbd>Ctrl + P</kbd>
              </button>
              <i />
              <button
                onClick={() => {setShowProjectInfo(true);setOpenMenu(null)}}
              >
                <span>File info…</span>
              </button>
            </div>
          )}
        </div>
        <div className="menu-wrap">
          <button
            className={openMenu === "Edit" ? "active" : ""}
            onClick={() => setOpenMenu(openMenu === "Edit" ? null : "Edit")}
          >
            Edit
          </button>
          {openMenu === "Edit" && (
            <div className="file-dropdown edit-dropdown">
              <button
                onClick={undo}
              >
                <span>Undo</span>
                <kbd>Ctrl + Z</kbd>
              </button>
              <button
                onClick={redo}
              >
                <span>Redo</span>
                <kbd>Ctrl + Y</kbd>
              </button>
              <button onClick={redo}>
                <span>Step Forward</span>
                <kbd>Shift + Ctrl + Z</kbd>
              </button>
              <button onClick={undo}>
                <span>Step Backward</span>
                <kbd>Ctrl + Z</kbd>
              </button>
              <i />
              <button className="disabled">
                <span>Fade…</span>
                <kbd>Shift + Ctrl + F</kbd>
              </button>
              <i />
              <button onClick={cutLayer}>
                <span>Cut</span>
                <kbd>Ctrl + X</kbd>
              </button>
              <button onClick={copyLayer}>
                <span>Copy</span>
                <kbd>Ctrl + C</kbd>
              </button>
              <button onClick={copyLayer}>
                <span>Copy Merged</span>
                <kbd>Shift + Ctrl + C</kbd>
              </button>
              <button onClick={pasteLayer}>
                <span>Paste</span>
                <kbd>Ctrl + V</kbd>
              </button>
              <button
                onClick={() => {
                  removeLayer();
                  setOpenMenu(null);
                }}
              >
                <span>Clear</span>
                <kbd>Delete</kbd>
              </button>
              <i />
              <button
                onClick={() => {
                  setBackground("#ffffff");
                  record("Fill");
                  setOpenMenu(null);
                }}
              >
                <span>Fill…</span>
                <kbd>Shift + F5</kbd>
              </button>
              <button onClick={() => record("Stroke")}>
                <span>Stroke…</span>
              </button>
              <i />
              <button onClick={() => record("Content-aware scale")}>
                <span>Content-Aware Scale</span>
              </button>
              <button onClick={() => record("Puppet warp")}>
                <span>Puppet Warp</span>
              </button>
              <button onClick={() => record("Perspective warp")}>
                <span>Perspective Warp</span>
              </button>
              <button onClick={() => record("Free transform")}>
                <span>Free Transform</span>
                <kbd>Alt + Ctrl + T</kbd>
              </button>
              <button>
                <span>Transform</span>
                <ChevronRight size={13} />
              </button>
              <button onClick={() => record("Auto-align layers")}>
                <span>Auto-Align</span>
              </button>
              <button onClick={() => record("Auto-blend layers")}>
                <span>Auto-Blend</span>
              </button>
              <i />
              <button>
                <span>Assign Profile</span>
                <ChevronRight size={13} />
              </button>
              <button>
                <span>Convert to Profile</span>
                <ChevronRight size={13} />
              </button>
              <i />
              <button>
                <span>Define New</span>
                <ChevronRight size={13} />
              </button>
              <button onClick={() => notify("Preset Manager will open here")}>
                <span>Preset Manager…</span>
              </button>
              <button onClick={() => notify("Editor preferences opened")}>
                <span>Preferences…</span>
                <kbd>Ctrl + K</kbd>
              </button>
              <button
                onClick={() => notify("Local project storage is available")}
              >
                <span>Local Storage…</span>
              </button>
            </div>
          )}
        </div>
        <div className="menu-wrap">
          <button
            className={openMenu === "Image" ? "active" : ""}
            onClick={() => setOpenMenu(openMenu === "Image" ? null : "Image")}
          >
            Image
          </button>
          {openMenu === "Image" && (
            <div className="file-dropdown image-dropdown">
              <button>
                <span>Mode</span>
                <ChevronRight size={13} />
              </button>
              <button className="disabled"><span>Adjustments</span></button>
              {controls.map(([key,label]) => <button key={key} onClick={()=>{record(`Opened ${label}`);setAdjustDialog(key);setOpenMenu(null)}}><span>{label}…</span></button>)}
              <i />
              <button onClick={autoTone}>
                <span>Auto Tone</span>
              </button>
              <button onClick={autoContrast}>
                <span>Auto Contrast</span>
              </button>
              <button onClick={autoColor}>
                <span>Auto Color</span>
              </button>
              <i />
              <button
                onClick={() => {
                  setAdjustments((a) => ({ ...a, saturation: 65 }));
                  record("Reduced colors");
                  setOpenMenu(null);
                }}
              >
                <span>Reduce Colors…</span>
              </button>
              <button
                onClick={() => {
                  record("Vectorized bitmap");
                  notify("Vectorize Bitmap is prepared for the vector engine");
                }}
              >
                <span>Vectorize Bitmap…</span>
              </button>
              <button onClick={() => record("Wavelet decompose")}>
                <span>Wavelet Decompose</span>
              </button>
              <i />
              <button
                onClick={() => {
                  setPanelTool("Resize");
                  setOpenMenu(null);
                }}
              >
                <span>Canvas Size…</span>
                <kbd>Alt + Ctrl + C</kbd>
              </button>
              <button
                onClick={() => {
                  setPanelTool("Resize");
                  setOpenMenu(null);
                }}
              >
                <span>Image Size…</span>
                <kbd>Alt + Ctrl + I</kbd>
              </button>
              <button>
                <span>Transform</span>
                <ChevronRight size={13} />
              </button>
              <button
                className={!imageUrl ? "disabled" : ""}
                onClick={() => record("Crop image")}
              >
                <span>Crop</span>
              </button>
              <button
                onClick={() => {
                  record("Trimmed canvas");
                  notify("Transparent canvas edges trimmed");
                }}
              >
                <span>Trim…</span>
                <kbd>Ctrl + .</kbd>
              </button>
              <button
                onClick={() => {
                  setZoom(65);
                  record("Reveal All");
                }}
              >
                <span>Reveal All</span>
              </button>
              <i />
              <button
                onClick={() => {
                  duplicateLayer();
                  setOpenMenu(null);
                }}
              >
                <span>Duplicate</span>
              </button>
              <button
                onClick={() => {
                  record("Applied image");
                  notify("Current composite applied to the selected layer");
                }}
              >
                <span>Apply Image…</span>
              </button>
              <i />
              <button
                onClick={() => notify("Image variables panel will open here")}
              >
                <span>Variables…</span>
              </button>
            </div>
          )}
        </div>
        {["Layer", "Select", "Filter"].map((menu) => (
          <button
            key={menu}
            onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
          >
            {menu}
          </button>
        ))}
        <div className="menu-wrap"><button className={openMenu === "View" ? "active" : ""} onClick={()=>setOpenMenu(openMenu === "View" ? null : "View")}>View</button>{openMenu === "View" && <div className="file-dropdown view-dropdown"><button onClick={()=>{setShowRulers(!showRulers);setOpenMenu(null)}}><span>{showRulers ? "✓ " : ""}Rulers</span><kbd>Ctrl + R</kbd></button><button onClick={()=>{setZoom(100);setOpenMenu(null)}}><span>Actual size</span><kbd>Ctrl + 1</kbd></button><button onClick={()=>{setZoom(65);setStagePan({x:0,y:0});setOpenMenu(null)}}><span>Fit canvas</span><kbd>Ctrl + 0</kbd></button></div>}</div>
        {["Window", "More"].map((menu) => (
          <button key={menu} onClick={() => setOpenMenu(openMenu === menu ? null : menu)}>{menu}</button>
        ))}
        <div className="pro-menu-spacer" />
        <button onClick={() => exportImage("image/png","png")}>Export</button>
        <Avatar initials="AM" />
      </div>
      <div className="pro-contextbar">
        <button onClick={undo} disabled={!undoStack.current.length}>
          <Undo2 size={16} />
        </button>
        <button onClick={redo} disabled={!redoStack.current.length}>
          <Redo2 size={16} />
        </button>
        <i />
        <button>
          <MousePointer2 size={15} /> Position
        </button>
        <label>
          Opacity <input type="number" defaultValue="100" />
        </label>
        <div className="pro-context-spacer" />
        <button onClick={duplicateLayer} title="Duplicate">
          <Copy size={16} />
        </button>
        <button onClick={removeLayer} title="Delete">
          <Trash2 size={16} />
        </button>
        <button>
          <MoreHorizontal size={17} />
        </button>
      </div>
      <div className="pro-body">
        <nav className="pro-toolrail">
          <button className={panelTool === "Layers" ? "active" : ""} onClick={() => setPanelTool("Layers")}><Layers3 size={18}/><span>Layers</span></button>
          {tools.map(([name, Icon]) => (
            <button
              key={name}
              className={activeTool === name ? "active" : ""}
              onClick={() => setPanelTool(name)}
            >
              <Icon size={18} />
              <span>{name}</span>
            </button>
          ))}
        </nav>
        <aside className="pro-assetpanel">{panelContent()}</aside>
        <section className="pro-stage">
          <div className="document-tabs">
            {documents.map((doc)=><button key={doc.id} className={doc.id === (activeDocumentId || documents[0]?.id) ? "active" : ""} onClick={()=>switchDocument(doc.id)}><span>{doc.name}.mti{doc.dirty ? " •" : ""}</span><i onClick={(e)=>{e.stopPropagation();requestCloseDocument(doc)}}><X size={13}/></i></button>)}
          </div>
          <div className={`pro-artboard-wrap tool-${activeTool.toLowerCase()} ${showRulers ? "with-rulers" : ""}`} onContextMenu={(e)=>openToolMenu(e)} onPointerMove={moveCanvasAction} onPointerUp={endCanvasAction} onPointerLeave={endCanvasAction} onPointerDown={(e)=>{if(!e.target.closest(".transform-box")&&!e.target.closest(".canvas-text")&&!e.target.closest(".canvas-shape")&&!e.target.closest("img")&&!e.target.closest("svg"))setTransformMode("normal");beginCanvasAction(e)}}>
            {showRulers && <><div className="canvas-ruler ruler-horizontal">{Array.from({length:21},(_,i)=><span key={i} style={{left:`${i*5}%`}}>{i*100}</span>)}</div><div className="canvas-ruler ruler-vertical">{Array.from({length:21},(_,i)=><span key={i} style={{top:`${i*5}%`}}>{i*100}</span>)}</div></>}
            <div
              className="pro-artboard"
              style={{ background, width:canvasSize.width, height:canvasSize.height, transform: `translate(${stagePan.x}px,${stagePan.y}px) scale(${zoom / 100})` }}
            >
              {layers
                .slice()
                .reverse()
                .map((layer, index) =>
                  layer.visible && layer.type === "image" ? (
                    <img
                      ref={imgRef}
                      key={layer.id}
                      src={layer.src || imageUrl}
                      style={{ filter: layerFilter(layer), transform: layerTransform(layer), ...layerPerspectiveStyle(layer) }}
                      onClick={() => setSelectedLayer(layer.id)}
                      onContextMenu={(e)=>activeTool === "Move" ? (e.preventDefault(),setSelectedLayer(layer.id),setTransformMenu({x:e.clientX,y:e.clientY,layerId:layer.id})) : openToolMenu(e,layer)}
                      onPointerDown={(e)=>beginCanvasAction(e,layer)}
                    />
                  ) : layer.visible && layer.type === "text" ? (
                    <div
                      key={layer.id}
                      className={`canvas-text ${selectedLayer === layer.id ? "selected" : ""}`}
                      ref={(node)=>{if(node && layer.id === selectedLayer){const next={left:node.offsetLeft,top:node.offsetTop,width:node.offsetWidth,height:node.offsetHeight};if(next.width!==textBounds.width||next.height!==textBounds.height||next.left!==textBounds.left||next.top!==textBounds.top)setTextBounds(next)}}}
                      style={{ color: layer.fillType === "gradient" ? "transparent" : layer.color, backgroundImage: layer.fillType === "gradient" ? `linear-gradient(90deg,${layer.color},${layer.gradientColor})` : "none", backgroundClip: layer.fillType === "gradient" ? "text" : "border-box", WebkitBackgroundClip: layer.fillType === "gradient" ? "text" : "border-box", WebkitTextStroke:`${layer.strokeWidth||0}px ${layer.strokeColor||"transparent"}`, fontSize: layer.size, fontFamily:layer.fontFamily || "Manrope", fontWeight:layer.fontWeight || 400, fontStyle:layer.fontStyle || "normal", textDecoration:layer.textDecoration || "none", letterSpacing:`${layer.letterSpacing || 0}px`, lineHeight:layer.lineHeight || 1.1, textAlign:layer.textAlign || "center", transform: layerTransform(layer), ...layerPerspectiveStyle(layer) }}
                      onClick={() => setSelectedLayer(layer.id)}
                      onContextMenu={(e)=>activeTool === "Move" ? (e.preventDefault(),setSelectedLayer(layer.id),setTransformMenu({x:e.clientX,y:e.clientY,layerId:layer.id})) : openToolMenu(e,layer)}
                      onPointerDown={(e)=>beginCanvasAction(e,layer)}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        updateLayer(layer.id, {
                          text: e.currentTarget.textContent,
                        })
                      }
                    >
                      {layer.text}
                    </div>
                ) : layer.visible && layer.type === "shape" ? <div key={layer.id} className={`canvas-shape ${layer.shape}`} style={{'--shape-color':layer.color,width:layer.size,height:layer.size,transform:layerTransform(layer),...layerPerspectiveStyle(layer)}} onPointerDown={(e)=>beginCanvasAction(e,layer)} onClick={()=>setSelectedLayer(layer.id)} onContextMenu={(e)=>activeTool === "Move" ? (e.preventDefault(),setSelectedLayer(layer.id),setTransformMenu({x:e.clientX,y:e.clientY,layerId:layer.id})) : openToolMenu(e,layer)}>{layer.shape === "star" && <Star size={layer.size} fill={layer.color}/>}</div> : layer.visible && layer.type === "path" ? <svg key={layer.id} className="vector-path-layer" style={{transform:layerTransform(layer)}} onPointerDown={(e)=>beginCanvasAction(e,layer)} onClick={()=>setSelectedLayer(layer.id)}><polyline points={layer.points.map((p)=>`${p.x},${p.y}`).join(" ")} fill={layer.closed?layer.color:"none"} stroke={layer.color} strokeWidth={layer.width} strokeLinecap="round" strokeLinejoin="round"/></svg> : null,
                )}
              {selected && selected.type !== "background" && selected.visible && <div className={`transform-box transform-${selected.type} mode-${transformMode}`} style={selected.type === "image" ? { left:imageBounds.left, top:imageBounds.top, width:imageBounds.width, height:imageBounds.height, transform: layerTransform(selected), "--ui-inverse-scale": 1 / Math.max(Math.abs(selected.scaleX || 1), Math.abs(selected.scaleY || 1)) } : selected.type === "text" ? { left:textBounds.left, top:textBounds.top, width:textBounds.width, height:textBounds.height, transform:layerTransform(selected), "--ui-inverse-scale": 1 / Math.max(Math.abs(selected.scaleX || 1), Math.abs(selected.scaleY || 1)) } : { left:"50%", top:"50%", width:selected.size || 120, height:selected.size || 120, marginLeft:-(selected.size || 120)/2, marginTop:-(selected.size || 120)/2, transform:layerTransform(selected), "--ui-inverse-scale": 1 / Math.max(Math.abs(selected.scaleX || 1), Math.abs(selected.scaleY || 1)) }}>
                <span className="transform-outline" />
                <button data-corner="0" className="transform-handle handle-nw" aria-label="Transform layer corner" onPointerDown={(e)=>beginTransform(e,transformMode === "perspective" ? "perspective-corner" : "scale-uniform",selected)} />
                <button data-corner="1" className="transform-handle handle-ne" aria-label="Transform layer corner" onPointerDown={(e)=>beginTransform(e,transformMode === "perspective" ? "perspective-corner" : "scale-uniform",selected)} />
                <button data-corner="3" className="transform-handle handle-sw" aria-label="Transform layer corner" onPointerDown={(e)=>beginTransform(e,transformMode === "perspective" ? "perspective-corner" : "scale-uniform",selected)} />
                <button data-corner="2" className="transform-handle handle-se" aria-label="Transform layer corner" onPointerDown={(e)=>beginTransform(e,transformMode === "perspective" ? "perspective-corner" : "scale-uniform",selected)} />
                <button className="transform-handle handle-n" aria-label="Skew layer horizontally" onPointerDown={(e)=>beginTransform(e,transformMode === "skew" ? "skewX" : "scale-uniform",selected)} />
                <button className="transform-handle handle-e" aria-label="Scale layer" onPointerDown={(e)=>beginTransform(e,transformMode === "skew" ? "skewY" : "scale-uniform",selected)} />
                <button className="transform-handle handle-s" aria-label="Skew layer vertically" onPointerDown={(e)=>beginTransform(e,transformMode === "skew" ? "skewX" : "scale-uniform",selected)} />
                <button className="transform-handle handle-w" aria-label="Scale layer" onPointerDown={(e)=>beginTransform(e,transformMode === "skew" ? "skewY" : "scale-uniform",selected)} />
                {transformMode === "normal" && <button className="transform-rotate" aria-label="Rotate layer" onPointerDown={(e)=>beginTransform(e,"rotate",selected)}><RotateCcw size={12}/></button>}
              </div>}
              <svg className="drawing-layer" viewBox={`0 0 ${canvasSize.width} ${canvasSize.height}`}><g>{[...strokes,...(drawing?[drawing]:[])].map(path=><polyline key={path.id} points={path.points.map(p=>`${p.x},${p.y}`).join(" ")} fill="none" stroke={path.color} strokeWidth={path.width} strokeLinecap="round" strokeLinejoin="round"/>)}</g></svg>
            </div>
          </div>
          <div className="quick-tool-dock">{[["Move",Move],["Hand",Hand],["Pen",PenTool],["Brush",Brush],["Eraser",Eraser],["Fill",PaintBucket],["Text",Type]].map(([name,Icon])=><button key={name} className={activeTool===name?"active":""} onClick={()=>{setActiveTool(name);if(name==="Fill"){record("Filled selected layer");selected?.type==="background"?setBackground(drawSettings.color):selected&&updateLayer(selected.id,{color:drawSettings.color})}}} title={`${name} Tool`}><Icon size={18}/><span>{name}</span></button>)}</div>
          <div className="zoom-control">
            <button onClick={() => setZoom((z) => Math.max(10, z - 10))}>
              <Minus size={14} />
            </button>
            <strong>{zoom}%</strong>
            <button onClick={() => setZoom((z) => Math.min(200, z + 10))}>
              <Plus size={14} />
            </button>
          </div>
        </section>
        <aside className="pro-rightpanel">
          <div className="right-tabs">
            <button className="active">Properties</button>
            <button>History</button>
          </div>
          {selected && (
            <div className="layer-properties">
              <p className="eyebrow">SELECTED LAYER</p>
              <div className="selected-layer-thumb">{selected.type === "image" && (selected.src || imageUrl) ? <img src={selected.src || imageUrl} alt=""/> : selected.type === "text" ? <Type size={18}/> : <Shapes size={18}/>}<span>{selected.name}</span></div>
              <strong>{selected.name}</strong>
              {selected.type !== "background" && <div className="alignment-properties"><p className="eyebrow">ALIGNMENT</p><div className="alignment-grid"><button title="Align left" onClick={()=>alignLayer(selected,"left")}><AlignHorizontalJustifyStart size={14}/><small>Left</small></button><button title="Align center" onClick={()=>alignLayer(selected,"center")}><AlignHorizontalJustifyCenter size={14}/><small>Center</small></button><button title="Align right" onClick={()=>alignLayer(selected,"right")}><AlignHorizontalJustifyEnd size={14}/><small>Right</small></button><button title="Align top" onClick={()=>alignLayer(selected,"top")}><AlignVerticalJustifyStart size={14}/><small>Top</small></button><button title="Align middle" onClick={()=>alignLayer(selected,"middle")}><AlignVerticalJustifyCenter size={14}/><small>Middle</small></button><button title="Align bottom" onClick={()=>alignLayer(selected,"bottom")}><AlignVerticalJustifyEnd size={14}/><small>Bottom</small></button></div></div>}
              {selected.type !== "background" && <div className="transform-properties"><p className="eyebrow">TRANSFORM</p><div className="transform-grid"><label>X<input type="number" value={Math.round(selected.x || 0)} onChange={(e)=>updateLayer(selected.id,{x:Number(e.target.value)})}/></label><label>Y<input type="number" value={Math.round(selected.y || 0)} onChange={(e)=>updateLayer(selected.id,{y:Number(e.target.value)})}/></label><label>Scale X<input type="number" step="0.01" value={Number(selected.scaleX || 1).toFixed(2)} onChange={(e)=>updateLayer(selected.id,{scaleX:Number(e.target.value) || 0.05})}/></label><label>Scale Y<input type="number" step="0.01" value={Number(selected.scaleY || 1).toFixed(2)} onChange={(e)=>updateLayer(selected.id,{scaleY:Number(e.target.value) || 0.05})}/></label><label>Rotation<input type="number" value={Math.round(selected.rotation || 0)} onChange={(e)=>updateLayer(selected.id,{rotation:Number(e.target.value)})}/></label><label>Skew X<input type="number" value={Math.round(selected.skewX || 0)} onChange={(e)=>updateLayer(selected.id,{skewX:Number(e.target.value)})}/></label><label>Skew Y<input type="number" value={Math.round(selected.skewY || 0)} onChange={(e)=>updateLayer(selected.id,{skewY:Number(e.target.value)})}/></label></div><hr/><div className="transform-property-actions"><button onClick={()=>applyTransformCommand("flipX",selected)}>Flip H</button><button onClick={()=>applyTransformCommand("flipY",selected)}>Flip V</button></div>{selected.perspectivePoints && <button className="reset-perspective" onClick={()=>resetPerspective(selected)}>Reset perspective</button>}</div>}
              {transformMode === "perspective" && selected.type !== "background" && <div className="perspective-3d-properties"><p className="eyebrow">PERSPECTIVE 3D</p><div className="transform-grid"><label>Position X<input type="number" value={perspective3d.x} onChange={(e)=>{const value={...perspective3d,x:Number(e.target.value)};setPerspective3d(value);updateLayer(selected.id,{perspective3d:value})}}/></label><label>Position Y<input type="number" value={perspective3d.y} onChange={(e)=>{const value={...perspective3d,y:Number(e.target.value)};setPerspective3d(value);updateLayer(selected.id,{perspective3d:value})}}/></label><label>Depth Z<input type="number" min="1" value={perspective3d.z} onChange={(e)=>{const value={...perspective3d,z:Number(e.target.value)};setPerspective3d(value);updateLayer(selected.id,{perspective3d:value})}}/></label><label>Rotate X<input type="number" value={perspective3d.rotateX} onChange={(e)=>{const value={...perspective3d,rotateX:Number(e.target.value)};setPerspective3d(value);updateLayer(selected.id,{perspective3d:value})}}/></label><label>Rotate Y<input type="number" value={perspective3d.rotateY} onChange={(e)=>{const value={...perspective3d,rotateY:Number(e.target.value)};setPerspective3d(value);updateLayer(selected.id,{perspective3d:value})}}/></label><label>Rotate Z<input type="number" value={perspective3d.rotateZ} onChange={(e)=>{const value={...perspective3d,rotateZ:Number(e.target.value)};setPerspective3d(value);updateLayer(selected.id,{perspective3d:value})}}/></label></div><button className="reset-perspective" onClick={()=>resetPerspective(selected)}><RotateCcw size={12}/> Reset perspective</button></div>}
              {selected.type !== "background" && <div className="inspector-action-row"><button className={`scale-link ${scaleLinked ? "active" : ""}`} title="Link scale X and Y" onClick={()=>setScaleLinked(!scaleLinked)}><Link2 size={12}/> Scale values linked</button><button title="Reset skew" onClick={()=>resetSkew(selected)}><RotateCcw size={12}/> Reset skew</button></div>}
              {selected.type === "text" && (
                <>
                  <label>
                    Text
                    <input
                      value={selected.text}
                      onChange={(e) =>
                        updateLayer(selected.id, { text: e.target.value })
                      }
                    />
                  </label>
                  <label>
                    Size
                    <input
                      type="number"
                      value={selected.size}
                      onChange={(e) =>
                        updateLayer(selected.id, {
                          size: Number(e.target.value),
                        })
                      }
                    />
                  </label>
                  <label>Font<select value={selected.fontFamily || "Manrope"} onChange={(e)=>updateLayer(selected.id,{fontFamily:e.target.value})}><option>Manrope</option><option>Arial</option><option>Georgia</option><option>Impact</option></select></label>
                  <label>Style<select value={`${selected.fontWeight||400}-${selected.fontStyle||"normal"}`} onChange={(e)=>{const [w,s]=e.target.value.split("-");updateLayer(selected.id,{fontWeight:Number(w),fontStyle:s})}}><option value="400-normal">Regular</option><option value="700-normal">Bold</option><option value="400-italic">Italic</option><option value="700-italic">Bold italic</option></select></label>
                  <label>Letter spacing<input type="number" value={selected.letterSpacing || 0} onChange={(e)=>updateLayer(selected.id,{letterSpacing:Number(e.target.value)})}/></label>
                  <label>Line spacing<input type="number" step="0.1" value={selected.lineHeight || 1.1} onChange={(e)=>updateLayer(selected.id,{lineHeight:Number(e.target.value)})}/></label>
                  <label>Paragraph align<select value={selected.textAlign || "center"} onChange={(e)=>updateLayer(selected.id,{textAlign:e.target.value})}><option>left</option><option>center</option><option>right</option></select></label>
                  <div className="inspector-action-row"><button onClick={()=>updateLayer(selected.id,{fontWeight:selected.fontWeight===700?400:700})}>Bold</button><button onClick={()=>updateLayer(selected.id,{fontStyle:selected.fontStyle==="italic"?"normal":"italic"})}>Italic</button><button onClick={()=>updateLayer(selected.id,{textDecoration:selected.textDecoration==="underline"?"none":"underline"})}>Underline</button></div>
                  <label>
                    Fill color
                    <input
                      type="color"
                      value={selected.color}
                      onChange={(e) =>
                        updateLayer(selected.id, { color: e.target.value })
                      }
                    />
                  </label>
                  <label>Fill mode<select value={selected.fillType || "solid"} onChange={(e)=>updateLayer(selected.id,{fillType:e.target.value})}><option value="solid">Solid</option><option value="gradient">Gradient</option></select></label>
                  {selected.fillType === "gradient" && <label>Gradient color<input type="color" value={selected.gradientColor || "#6c51f4"} onChange={(e)=>updateLayer(selected.id,{gradientColor:e.target.value})}/></label>}
                  <label>Stroke color<input type="color" value={selected.strokeColor || "#000000"} onChange={(e)=>updateLayer(selected.id,{strokeColor:e.target.value})}/></label>
                  <label>Stroke gradient<input type="color" value={selected.strokeGradient || "#ff694f"} onChange={(e)=>updateLayer(selected.id,{strokeGradient:e.target.value})}/></label>
                  <label>Stroke width<input type="number" min="0" max="30" value={selected.strokeWidth || 0} onChange={(e)=>updateLayer(selected.id,{strokeWidth:Number(e.target.value)})}/></label>
                </>
              )}
              {selected.type === "image" && (
                <div className="adjust-panel compact">
                  {controls.map(([key, label, min, max]) => (
                    <label key={key}>
                      <span>
                        {label}
                        <b>{selectedAdjustments[key]}</b>
                      </span>
                      <input
                        type="range"
                        onPointerDown={() => record(`Adjusted ${label}`)}
                        min={min}
                        max={max}
                        value={selectedAdjustments[key]}
                        onChange={(e) => updateLayer(selected.id, { adjustments: { ...selectedAdjustments, [key]: Number(e.target.value) } })}
                      />
                    </label>
                  ))}
                  <button onClick={reset}>
                    <RotateCcw size={13} /> Reset image
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="layers-panel right-layers-panel">
            <div className="layers-title">
              <strong>Layers</strong>
              <div>
                <button onClick={duplicateLayer}>
                  <Copy size={14} />
                </button>
                <button onClick={removeLayer}>
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            {layers.map((layer) => (
              <button
                key={layer.id}
                className={selectedLayer === layer.id ? "active" : ""}
                onClick={() => setSelectedLayer(layer.id)}
              >
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    updateLayer(layer.id, { visible: !layer.visible });
                  }}
                >
                  {layer.visible ? <Eye size={14} /> : <EyeOff size={14} />}
                </span>
                <i>
                  {layer.type === "image" && imageUrl ? (
                    <img src={imageUrl} />
                  ) : layer.type === "text" ? (
                    <Type size={14} />
                  ) : (
                    <Palette size={14} />
                  )}
                </i>
                <strong>{layer.name}</strong>
                <span className={`layer-lock ${layer.locked ? "locked" : ""}`} onClick={(e)=>{e.stopPropagation();toggleLock(layer.id)}} title={layer.locked ? "Unlock layer" : "Lock layer"}><Lock size={12}/></span>
              </button>
            ))}
          </div>
          <div className="history-panel">
            <strong>History</strong>
            {history
              .slice()
              .reverse()
              .slice(0, 3)
              .map((item, i) => (
                <span key={`${item}-${i}`}>{item}</span>
              ))}
          </div>
        </aside>
      </div>
      {adjustDialog && <div className="editor-dialog-backdrop"><div className="adjustment-dialog"><header><strong>{controls.find(([key])=>key===adjustDialog)?.[1]}</strong><button onClick={()=>setAdjustDialog(null)}><X size={16}/></button></header><p>Adjust the selected image layer.</p><input type="range" min={controls.find(([key])=>key===adjustDialog)?.[2]} max={controls.find(([key])=>key===adjustDialog)?.[3]} value={selectedAdjustments[adjustDialog]} onChange={(e)=>selected?.type==="image"&&updateLayer(selected.id,{adjustments:{...selectedAdjustments,[adjustDialog]:Number(e.target.value)}})}/><output>{selectedAdjustments[adjustDialog]}</output><footer><button onClick={()=>setAdjustDialog(null)}>Cancel</button><button className="primary" onClick={()=>{record(`Adjusted ${adjustDialog}`);setAdjustDialog(null)}}>Apply</button></footer></div></div>}
      {closeTarget && <div className="editor-dialog-backdrop"><div className="editor-modal confirm-close"><header><strong>Close unsaved project?</strong><button onClick={()=>setCloseTarget(null)}><X size={16}/></button></header><p>“{closeTarget.name}” contains changes that have not been saved. Closing it will permanently discard those changes.</p><footer><button onClick={()=>setCloseTarget(null)}>Cancel</button><button className="danger-button" onClick={()=>closeDocument(closeTarget.id)}>Close without saving</button></footer></div></div>}
      {showSaveAs && <div className="editor-dialog-backdrop"><div className="editor-modal save-as-dialog"><header><strong>Save project as image</strong><button onClick={()=>setShowSaveAs(false)}><X size={16}/></button></header><p>Select an image format for the current canvas.</p><div className="format-options"><button onClick={()=>{exportImage("image/jpeg","jpg");setShowSaveAs(false)}}><b>JPG</b><span>Small, widely compatible</span></button><button onClick={()=>{exportImage("image/webp","webp");setShowSaveAs(false)}}><b>WebP</b><span>Modern web image</span></button><button onClick={()=>{exportImage("image/avif","avif");setShowSaveAs(false)}}><b>AVIF</b><span>High-efficiency image</span></button></div></div></div>}
      {showProjectInfo && <div className="editor-dialog-backdrop"><div className="editor-modal project-info-dialog"><header><strong>Project information</strong><button onClick={()=>setShowProjectInfo(false)}><X size={16}/></button></header><table><tbody><tr><th>Project name</th><td>{fileName}</td></tr><tr><th>Canvas size</th><td>{canvasSize.width} × {canvasSize.height} px</td></tr><tr><th>Layers</th><td>{layers.length}</td></tr><tr><th>Drawing paths</th><td>{strokes.length}</td></tr><tr><th>Status</th><td>{documents.find((doc)=>doc.id === (activeDocumentId || documents[0]?.id))?.dirty ? "Unsaved changes" : "Saved"}</td></tr><tr><th>Format</th><td>Metainspo editable project</td></tr></tbody></table><footer><button className="primary" onClick={()=>setShowProjectInfo(false)}>Done</button></footer></div></div>}
      {transformMenu && <div className="transform-context-menu" style={{left:transformMenu.x,top:transformMenu.y}} onMouseLeave={()=>setTransformMenu(null)}><strong>Transform</strong><button onClick={()=>applyTransformCommand("skew",layers.find((item)=>item.id===transformMenu.layerId))}>Skew</button><button onClick={()=>applyTransformCommand("perspective",layers.find((item)=>item.id===transformMenu.layerId))}>Perspective</button><i/><button onClick={()=>applyTransformCommand("flipX",layers.find((item)=>item.id===transformMenu.layerId))}>Flip Horizontal</button><button onClick={()=>applyTransformCommand("flipY",layers.find((item)=>item.id===transformMenu.layerId))}>Flip Vertical</button></div>}
      {toolContextMenu && <div className="transform-context-menu tool-context-menu" style={{left:toolContextMenu.x,top:toolContextMenu.y}} onMouseLeave={()=>setToolContextMenu(null)}><strong>{toolContextMenu.tool} Tool</strong>{toolContextMenu.tool === "Hand" && <button onClick={()=>{setStagePan({x:0,y:0});setZoom(65);setToolContextMenu(null)}}>Center canvas</button>}{["Brush","Eraser","Pen"].includes(toolContextMenu.tool) && <><label>Size <input type="range" min="1" max="120" value={drawSettings.size} onChange={(e)=>setDrawSettings({...drawSettings,size:Number(e.target.value)})}/></label><label>Pressure <input type="range" min="1" max="100" value={drawSettings.pressure} onChange={(e)=>setDrawSettings({...drawSettings,pressure:Number(e.target.value)})}/></label><button onClick={()=>setDrawSettings({...drawSettings,softness:100})}>Soft brush</button><button onClick={()=>setDrawSettings({...drawSettings,softness:0})}>Hard brush</button></>}{toolContextMenu.tool === "Fill" && <button onClick={applyFill}>Fill selected layer</button>}<button onClick={()=>setToolContextMenu(null)}>Close</button></div>}
    </main>
  );
}

function AdminPanel({ products, users, onApprove, onReject }) {
  const [section, setSection] = useState("overview");
  const pending = products.filter((x) => x.status === "pending");
  return (
    <main className="admin-shell">
      <aside>
        <div className="admin-brand">
          <ShieldCheck size={20} /> METAINSPО ADMIN
        </div>
        <nav>
          <button className={section === "overview" ? "active" : ""} onClick={() => setSection("overview")}>
            <LayoutDashboard size={17} /> Overview
          </button>
          <button className={section === "review" ? "active" : ""} onClick={() => setSection("review")}>
            <ShieldCheck size={17} /> Review queue <em>{pending.length}</em>
          </button>
          <button className={section === "assets" ? "active" : ""} onClick={() => setSection("assets")}>
            <Package size={17} /> All assets
          </button>
          <button className={section === "users" ? "active" : ""} onClick={() => setSection("users")}>
            <User size={17} /> Users <em>{users.length}</em>
          </button>
          <button>
            <Share2 size={17} /> Reports
          </button>
          <button>
            <Settings size={17} /> Platform settings
          </button>
        </nav>
      </aside>
      <section className="admin-content">
        <header>
          <div>
            <p className="eyebrow">ADMIN PANEL</p>
            <h1>{section === "overview" ? "Platform overview" : section === "review" ? "Review queue" : section === "assets" ? "All assets" : "User directory"}</h1>
            <span>
              Verify quality, licensing, and product information before
              publication.
            </span>
          </div>
          <div className="admin-health">
            <i /> Platform healthy
          </div>
        </header>
        <div className={`admin-stats ${section === "assets" || section === "users" ? "section-hidden" : ""}`}>
          <div>
            <strong>{pending.length}</strong>
            <span>Awaiting review</span>
          </div>
          <div>
            <strong>24</strong>
            <span>Approved today</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Reported items</span>
          </div>
          <div>
            <strong>{users.filter((x) => x.role === "creator").length}</strong>
            <span>Active creators</span>
          </div>
        </div>
        <div className={`review-list ${section !== "review" ? "section-hidden" : ""}`}>
          {pending.length ? (
            pending.map((item) => (
              <article key={item.id}>
                <img src={item.image} />
                <div className="review-main">
                  <span>
                    {item.category} · {item.productType}
                  </span>
                  <h3>{item.title}</h3>
                  <p>
                    Submitted by {item.creator} · {item.formats.join(", ")} ·{" "}
                    {item.price === 0 ? "Free" : `$${item.price}`}
                  </p>
                </div>
                <button className="preview-review" onClick={() => {}}>
                  <Eye size={16} /> Preview
                </button>
                <button className="reject" onClick={() => onReject(item.id)}>
                  <X size={16} /> Reject
                </button>
                <button className="approve" onClick={() => onApprove(item.id)}>
                  <Check size={16} /> Approve
                </button>
              </article>
            ))
          ) : (
            <EmptyAccount
              icon={ShieldCheck}
              text="Every submitted product has been reviewed."
            />
          )}
        </div>
        {section === "overview" && <div className="admin-overview-grid"><section><p className="eyebrow">RECENT ACTIVITY</p><h2>Marketplace actions</h2>{users.flatMap((account) => account.activity.map((entry, i) => <div className="activity-row" key={`${account.email}-${i}`}><Avatar initials={account.initials}/><div><strong>{account.name}</strong><span>{entry}</span></div><small>Today</small></div>))}</section><section><p className="eyebrow">ROLE BREAKDOWN</p><h2>Community</h2><div className="role-breakdown"><strong>{users.filter((x) => x.role === "explorer").length}</strong><span>Explorers</span><strong>{users.filter((x) => x.role === "creator").length}</strong><span>Creators</span></div></section></div>}
        {section === "users" && <div className="admin-user-table"><div className="admin-table-head"><span>User</span><span>Role</span><span>Downloads</span><span>Uploaded assets</span></div>{users.map((account) => <article key={account.email}><div><Avatar initials={account.initials}/><span><strong>{account.name}</strong><small>{account.email}</small></span></div><b className={`role-pill ${account.role}`}>{account.role}</b><span>{account.downloads.length}</span><span>{account.role === "creator" ? products.filter((p) => p.creator === account.name).length : "—"}</span></article>)}</div>}
        {section === "assets" && <div className="review-list">{products.filter((x) => x.status !== "archived").map((item) => <article key={item.id}><img src={item.image}/><div className="review-main"><span>{item.category} · {item.productType}</span><h3>{item.title}</h3><p>by {item.creator} · {item.sales} downloads/sales</p></div><span className={`status-live ${item.status}`}>{item.status}</span></article>)}</div>}
      </section>
    </main>
  );
}

export default function App() {
  const [user, setUser] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("metainspo-user")) || demoUsers.creator
      );
    } catch {
      return demoUsers.creator;
    }
  });
  const [view, setView] = useState("explore");
  const [catalog, setCatalog] = useState(imagePool);
  const [ownedIds, setOwnedIds] = useState([1]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("For you");
  const [aiOnly, setAiOnly] = useState(false);
  const [designFilters, setDesignFilters] = useState({
    color: "",
    ratio: "",
    style: "",
  });
  const [selected, setSelected] = useState(null);
  const [saveTarget, setSaveTarget] = useState(null);
  const [savedIds, setSavedIds] = useState([2, 7]);
  const [spaces, setSpaces] = useState(startingSpaces);
  const [profileOpen, setProfileOpen] = useState(false);
  const [toast, setToast] = useState("");
  const sharedSpaces = [
    {
      id: "shared-1",
      name: "Neo hospitality systems",
      count: 31,
      color: "#6c51f4",
      covers: [2, 6, 10],
    },
    {
      id: "shared-2",
      name: "Earthbound packaging",
      count: 17,
      color: "#47774f",
      covers: [4, 8, 11],
    },
  ];
  const adminUsers = [
    { ...demoUsers.explorer, downloads: [1, 4, 8], activity: ["Downloaded Soft brutalism", "Created a new space"] },
    { ...demoUsers.creator, downloads: [2, 5], activity: ["Submitted Chromatic object study", "Updated creator profile"] },
    { name: "Noah Williams", email: "noah@example.com", role: "explorer", initials: "NW", downloads: [3], activity: ["Downloaded Future matter"] },
    { name: "Lina Studio", email: "hello@lina.studio", role: "creator", initials: "LS", downloads: [7, 10], activity: ["Published Afterglow identity"] },
  ];

  const visibleItems = useMemo(() => {
    let results = (
      filter === "For you"
        ? catalog
        : catalog.filter((x) => x.category === filter)
    ).filter((x) => x.status === "approved");
    if (view === "free") results = results.filter((x) => x.price === 0);
    if (designFilters.color)
      results = results.filter((x) => x.colorName === designFilters.color);
    if (designFilters.ratio)
      results = results.filter((x) => x.ratio === designFilters.ratio);
    if (designFilters.style)
      results = results.filter((x) => x.style === designFilters.style);
    return results;
  }, [filter, designFilters, catalog, view]);
  const savedItems = catalog.filter((x) => savedIds.includes(x.id));
  const ownedItems = catalog.filter((x) => ownedIds.includes(x.id));
  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2400);
  };
  const openDetails = (item, origin = null) =>
    setSelected({
      item,
      origin: origin
        ? {
            left: origin.left,
            top: origin.top,
            width: origin.width,
            height: origin.height,
          }
        : null,
    });
  const handleSave = (item) =>
    savedIds.includes(item.id)
      ? (setSavedIds((ids) => ids.filter((id) => id !== item.id)),
        notify("Removed from saved ideas"))
      : setSaveTarget(item);
  const confirmSave = (item, spaceId) => {
    setSavedIds((ids) => [...new Set([...ids, item.id])]);
    setSpaces((all) =>
      all.map((s) => (s.id === spaceId ? { ...s, count: s.count + 1, covers: s.covers.length ? s.covers : [item.id] } : s)),
    );
    setSaveTarget(null);
    notify(`Saved “${item.title}” to your space`);
  };
  const acquire = (item) => {
    if (ownedIds.includes(item.id)) {
      downloadProduct(item);
      return;
    }
    if (!ownedIds.includes(item.id)) setOwnedIds((ids) => [...ids, item.id]);
    setSelected(null);
    notify(
      item.price === 0
        ? `“${item.title}” added to your downloads`
        : `Purchase complete — “${item.title}” is now yours`,
    );
  };
  const downloadProduct = async (item) => {
    try {
      if (item.fileUrl) {
        const link = document.createElement("a");
        link.href = item.fileUrl;
        link.download = item.fileName || `${item.title}.zip`;
        link.click();
      } else {
        const response = await fetch(item.image);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-preview.jpg`;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }
      notify(`Download started for “${item.title}”`);
    } catch {
      const receipt = new Blob(
        [
          JSON.stringify(
            {
              product: item.title,
              creator: item.creator,
              license: item.license,
              formats: item.formats,
            },
            null,
            2,
          ),
        ],
        { type: "application/json" },
      );
      const url = URL.createObjectURL(receipt);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${item.title}-license.json`;
      link.click();
      URL.revokeObjectURL(url);
      notify(
        "License file downloaded; the remote preview blocked direct access",
      );
    }
  };
  const publishProduct = (form, status = "pending") => {
    const seed = catalog[(catalog.length + 2) % catalog.length];
    const price = form.type === "Free" ? 0 : Number(form.price || 0);
    const ext = form.file ? form.file.name.split(".").pop().toUpperCase() : "ZIP";
    const product = {
      ...seed,
      id: `product-${Date.now()}`,
      title: form.title,
      category: form.category,
      price,
      productType: form.type,
      creator: user.name,
      creatorInitials: user.initials,
      sales: 0,
      rating: "New",
      status,
      image: form.preview ? URL.createObjectURL(form.preview) : seed.image,
      fileName: form.file?.name || "Draft asset.zip",
      fileUrl: form.file ? URL.createObjectURL(form.file) : "",
      fileSize: form.file ? `${(form.file.size / 1024 / 1024).toFixed(2)} MB` : "—",
      formats: [ext],
    };
    setCatalog((items) => [product, ...items]);
    notify(status === "draft" ? "Asset saved as draft" : `“${form.title}” was submitted for admin review`);
  };
  const authenticate = (nextUser) => {
    setUser(nextUser);
    localStorage.setItem("metainspo-user", JSON.stringify(nextUser));
    setView(nextUser.role === "admin" ? "admin" : "explore");
  };
  const signOut = () => {
    localStorage.removeItem("metainspo-user");
    setUser(null);
    setProfileOpen(false);
  };
  const updateUser = (nextUser) => {
    setUser(nextUser);
    localStorage.setItem("metainspo-user", JSON.stringify(nextUser));
    notify("Profile updated");
  };
  const moderate = (id, status) => {
    setCatalog((items) =>
      items.map((item) => (item.id === id ? { ...item, status } : item)),
    );
    notify(
      status === "approved"
        ? "Product approved and published"
        : "Product returned to the designer",
    );
  };
  const explore = (item) => {
    setQuery(item.title);
    setSelected(null);
    setView("explore");
    notify(`Opening a new direction from “${item.title}”`);
  };
  const submitSearch = (e) => {
    e?.preventDefault();
    if (!search.trim()) return;
    setQuery(search.trim());
    setView("explore");
  };
  const createSpace = (name = "Untitled creative space") => {
    const id = `s${Date.now()}`;
    setSpaces((s) => [
      ...s,
      {
        id,
        name,
        count: 0,
        color: "#75d9bc",
        covers: [],
      },
    ]);
    notify("New space created");
  };
  const deleteSpace = (id) => {
    setSpaces((all) => all.filter((space) => space.id !== id));
    notify("Space deleted");
  };
  const updateAssetStatus = (id, status) => setCatalog((items) => items.map((item) => item.id === id ? { ...item, status } : item));
  const deleteAsset = (id) => { setCatalog((items) => items.filter((item) => item.id !== id)); notify("Asset deleted"); };

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.querySelector(".header-search input")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!user) return <AuthScreen onAuth={authenticate} />;
  return (
    <div className="app">
      <Header
        view={view}
        setView={setView}
        search={search}
        setSearch={setSearch}
        onSearch={submitSearch}
        openProfile={() => setProfileOpen(!profileOpen)}
        user={user}
      />
      {profileOpen && (
        <ProfileMenu
          close={() => setProfileOpen(false)}
          setView={setView}
          user={user}
          onSignOut={signOut}
        />
      )}
      {(view === "explore" || view === "free") && (
        <>
          <FilterBar
            active={filter}
            setActive={setFilter}
            aiOnly={aiOnly}
            setAiOnly={setAiOnly}
            designFilters={designFilters}
            setDesignFilters={setDesignFilters}
            query={view === "free" ? "Free design resources" : query}
          />
          <Canvas
            items={visibleItems}
            savedIds={savedIds}
            onSave={handleSave}
            onSelect={openDetails}
            onExplore={explore}
            query={view === "free" ? "Free design resources" : query}
          />
        </>
      )}
      {view === "spaces" && (
        <SpacesView spaces={spaces} items={catalog} setView={setView} />
      )}
      {(view === "dashboard" || view === "profile" || view === "settings" || view === "downloads" || view === "billing" || view === "account-spaces") && (
        <AccountCenter
          user={user}
          initialTab={view === "dashboard" ? "profile" : view === "account-spaces" ? "spaces" : view}
          savedItems={savedItems}
          ownedItems={ownedItems}
          spaces={spaces}
          sharedSpaces={sharedSpaces}
          catalog={catalog}
          onSelect={openDetails}
          onDownload={downloadProduct}
          setView={setView}
          onUpdateUser={updateUser}
          onCreateSpace={createSpace}
          onDeleteSpace={deleteSpace}
        />
      )}
      {view === "creator" && (
        <CreatorStudio
          products={
            catalog.filter((item) => item.creator === user.name).length
              ? catalog.filter((item) => item.creator === user.name)
              : catalog.slice(0, 5)
          }
          onPublish={publishProduct}
          onArchive={(id) => { updateAssetStatus(id, "archived"); notify("Asset archived"); }}
          onDelete={deleteAsset}
        />
      )}
      {view === "editor" && (user.role === "creator" || user.role === "admin") && (
        <DesignEditor notify={notify} />
      )}
      {view === "admin" && (
        <AdminPanel
          products={catalog}
          users={adminUsers}
          onApprove={(id) => moderate(id, "approved")}
          onReject={(id) => moderate(id, "rejected")}
        />
      )}
      <DetailPanel
        selection={selected}
        saved={selected && savedIds.includes(selected.item.id)}
        owned={selected && ownedIds.includes(selected.item.id)}
        onClose={() => setSelected(null)}
        onSave={handleSave}
        onExplore={explore}
        onAcquire={acquire}
      />
      <SaveModal
        item={saveTarget}
        spaces={spaces}
        onClose={() => setSaveTarget(null)}
        onConfirm={confirmSave}
        onNewSpace={createSpace}
      />
      {toast && (
        <div className="toast">
          <Check size={17} />
          {toast}
        </div>
      )}
    </div>
  );
}
