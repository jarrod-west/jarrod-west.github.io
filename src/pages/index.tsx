import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/section";

/* overflow-y-scroll*/

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 bg-black text-white">
        <Section header="Foo" html="Bar" />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jarrod West</title>;
