import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Loader } from "lucide-react";

export function BreadcrumbDemo({ clubName, loading }) {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  if (loading) return <Loader />

  const breadcrumbItems = pathParts.map((part, index) => {
    const isLast = index === pathParts.length - 1;
    const href = `/${pathParts.slice(0, index + 1).join("/")}`;
    return (
      <React.Fragment key={part}>
        <BreadcrumbItem>
          <BreadcrumbLink href={href} className="capitalize">
            {isLast ? clubName : part}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </React.Fragment>
    );
  });

  if (loading)
    return <Skeleton className="h-4 w-[250px] bg-muted-foreground/15" />;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbItems}
        {/* <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
