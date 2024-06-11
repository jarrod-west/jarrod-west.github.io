import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

type LayoutProps = {
  children: React.ReactNode;
};

const menuItems = (data: any) => {
  return data.allMarkdownRemark.edges?.map((edge: any) => ({
    title: edge.node.frontmatter.title,
    slug: edge.node.frontmatter.slug,
  }));
};

// TODO: Types
const Layout = ({ children }: LayoutProps) => {
  return (
    <StaticQuery
      query={graphql`
        query AllContentFiles {
          allMarkdownRemark(sort: { frontmatter: { sortOrder: ASC } }) {
            edges {
              node {
                frontmatter {
                  title
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="flex flex-col h-screen">
          <Header menuItems={menuItems(data)} />
          <main className="flex-1 bg-black text-white">{children}</main>
          <Footer />
        </div>
      )}
    />
  );
};

export default Layout;
