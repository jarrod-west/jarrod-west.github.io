import React from "react";
import { StaticQuery, graphql } from "gatsby";
import type { HeadProps, PageProps } from "gatsby";

import Layout from "../components/layout";
import Section from "../components/section";

// Component to contain the markdown data
const PageTemplate = (props: PageProps<Queries.ContentFileQuery>) => {
  return (
    // TODO: Error state
    <Layout>
      <Section
        header={props.data.markdownRemark?.frontmatter?.title || "Error"}
        html={props.data.markdownRemark?.html || "An error occurred"}
      />
    </Layout>
  );
};

// GraphQL query to read the markdown content
export const contentQuery = graphql`
  query ContentFile($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default PageTemplate;

export const Head = ({ data }: HeadProps<Queries.ContentFileQuery>) => (
  <title>{data.markdownRemark?.frontmatter?.title || "Error"}</title>
);
