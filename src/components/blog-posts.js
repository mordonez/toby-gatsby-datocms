import React from "react";
import Date from "@components/date"
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function BlogPosts({ posts }) {
  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="content">
          {
            posts.map((post) => (
              <div key={post.slug} className="columns is-centered">
                <div className="column is-8">
                  <div className="post mt-6 box">
                    <div className="columns">
                      <div className="column is-8 is-offset-2 mt-6">
                        <h3 className="has-text-centered semibold">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={post.slug}
                          >{post.title}
                          </Link>
                        </h3>
                        <p className="has-text-centered has-text-grey"><Date dateString={post.date} /></p>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-8 is-offset-2 mb-4">
                        <GatsbyImage
                          image={post.coverImage.fullwidth}
                          style={{ borderRadius: "5px" }}
                          alt={post.title}
                          className="mb-4"
                        />
                        <p>{post.excerpt}</p>
                        <Link to={post.slug}>
                          Read more ...
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
