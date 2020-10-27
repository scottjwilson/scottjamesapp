import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import ContextProvider from "../provider/ContextProvider";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <ContextProvider>
      <div className="site-wrapper">
        <header className="site-header">
          <div className="site-title">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <Navigation />
        </header>
        {children}
        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} Scott James &bull; Crafted with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
          </p>
        </footer>
      </div>
    </ContextProvider>
  );
};
