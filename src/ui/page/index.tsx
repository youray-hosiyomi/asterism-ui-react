import { FC, ReactNode } from "react";
import { cn } from "@shadcn/lib/utils";

export interface UIPageProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
}

const UIPage: FC<UIPageProps> = ({ footer, header, className, ...props }) => {
  return (
    <>
      {header ? (
        <>
          <div className="flex-none bg-base-200 border-b border-gray-200 z-10 shadow-md">{header}</div>
        </>
      ) : null}
      <main {...props} className={cn(className, "flex-auto overflow-auto")} />
      {footer ? (
        <>
          <div className="flex-none bg-base-200 border-t border-gray-200">{footer}</div>
        </>
      ) : null}
    </>
  );
};

export default UIPage;