import { Link, useLocation } from "react-router-dom";
import { siteData } from "@/data/siteData";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Companies", href: "#companies" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="content-max flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="text-sm font-medium tracking-tight text-foreground">
          {siteData.name}
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full hover:bg-secondary"
              onClick={() => trackEvent(item.label.toLowerCase())}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/case-studies"
            className={[
              "px-3 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full hover:bg-secondary",
              pathname === "/case-studies"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            ].join(" ")}
            onClick={() => trackEvent("case_studies")}
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className={[
              "px-3 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full hover:bg-secondary",
              pathname === "/about"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            ].join(" ")}
            onClick={() => trackEvent("about")}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
