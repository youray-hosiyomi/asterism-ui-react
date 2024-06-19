import { LucideIcon } from "lucide-react";
import { AnchorHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import { cn } from "@shadcn/lib/utils"; 

export type UIBreadcrumbItem = {
  name?: ReactNode;
  path: string;
  icon?: LucideIcon;
};

interface UIBreadcrumbProps {
  className?: string;
  firstItem?: UIBreadcrumbItem;
  items: UIBreadcrumbItem[];
  replacePath?: (prevPath: string) => string;
  replaceContent?: (path: string, prevContent: ReactNode) => ReactNode;
  Link?: FC<DetailedHTMLProps< AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>
}

const UIBreadcrumb: FC<UIBreadcrumbProps> = ({ className, firstItem, items, replacePath, replaceContent, Link = (props) => <a {...props} /> }) => {
  return (
    <div className={cn(className, "breadcrumbs text-sm px-1")}>
      <ul>
        {firstItem && firstItem.icon && (
          <li>
            <Link href={!replacePath ? firstItem.path : replacePath(firstItem.path)}>
              <firstItem.icon className="w-4 h-4" />
            </Link>
          </li>
        )}
        {items.map((item, i) => {
          const path = !replacePath ? item.path : replacePath(item.path);
          const content = (
            <>
              {item.icon && <item.icon className="w-4 h-4" />}
              <span>{item.name}</span>
            </>
          );
          return (
            <li key={i}>
              <Link href={path} className="flex items-center space-x-1">
                {!replaceContent ? content : replaceContent(path, content)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UIBreadcrumb;
