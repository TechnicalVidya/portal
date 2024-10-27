// import React from "react";
// import heroImg from "@/assets/underconstruction.svg";
// import Image from "next/image";

// const Blogs = () => {
//   return (
//     <div>
//       <Image src={heroImg} />
//     </div>
//   );
// };

// export default Blogs;

import BlogList from "../../modules/blogs/BlogList";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">ADMIN DASHBOARD</h1>
      <BlogList />
    </div>
  );
}
