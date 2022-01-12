import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";
import { renderRule, isHeading } from 'datocms-structured-text-utils';

export default function PageBody({ content }) {
  return (
    <div className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <StructuredText
                data={content}
                renderBlock={({ record }) => {
                  if (record.__typename === "DatoCmsImageBlock") {
                    return <GatsbyImage image={record.image.gatsbyImageData} className="my-4"/>;
                  }
                  return (
                    <>
                      <p>Don't know how to render a block!</p>
                      <pre>{JSON.stringify(record, null, 2)}</pre>
                    </>
                  );
                }}
                customRules={[
                  renderRule(
                    isHeading,
                    ({ node, adapter: { renderNode }, children, key }) => {
                      return renderNode(`h${node.level}`, { key, className: node.level === 1 ? 'title' : null }, children);
                    },
                  ),
                ]}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
