import { siteData } from "@/data/siteData";

const SiteFooter = () => {
  return (
    <footer className="content-max pb-12">
      <div className="divider mb-8" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="font-medium text-foreground">{siteData.name}</span>
          <span>{siteData.location}</span>
        </div>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
