import React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";
import Section from "../components/section";

// Component to contain the markdown data
export function PageTemplate({ data }: PageProps<Queries.ContentFileQuery>) {
  return (
    <Layout>
      <Section
        header={data.markdownRemark?.frontmatter?.title || "Error"}
        html={data.markdownRemark?.html || "An error occurred"}
      />
    </Layout>
  );
}

// GraphQL query to read the markdown content
export const pageQuery = graphql`
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

export const Head: HeadFC<Queries.ContentFileQuery> = ({ data }) => (
  <title>{data.markdownRemark?.frontmatter?.title || "Error"}</title>
);
