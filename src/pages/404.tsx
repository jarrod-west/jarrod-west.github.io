import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Section from "../components/section";

const content = renderToStaticMarkup(
  <p>
    Sorry, that page can't be found. Click{" "}
    <Link className="text-gray-400 hover:text-white" to="/">
      here
    </Link>{" "}
    to return home.
  </p>,
);

const NotFoundPage = () => {
  return (
    <Layout>
      <Section header="Not Found" html={content} />
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 - Not Found</title>;
