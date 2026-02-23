import { siteData } from "@/data/siteData";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Companies", href: "#companies" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="content-max flex items-center justify-between h-14 md:h-16">
        <a href="#" className="text-sm font-medium tracking-tight text-foreground">
          {siteData.name}
        </a>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full hover:bg-secondary"
              onClick={() => trackEvent("nav_click", { label: item.label.toLowerCase() })}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
