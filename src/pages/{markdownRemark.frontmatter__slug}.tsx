import React from "react";
import { graphql, PageProps } from "gatsby";

export function IndexTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: PageProps<Queries.FileQuery>) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
};

export const pageQuery = graphql`
  query FileQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

export default IndexTemplate;