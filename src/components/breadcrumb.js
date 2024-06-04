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

export function BreadcrumbDemo({ clubName }) {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);

  const breadcrumbItems = pathParts.map((part, index) => {
    const isLast = index === pathParts.length - 1;
    const href = `/${pathParts.slice(0, index + 1).join("/")}`;
    console.log(clubName);
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
