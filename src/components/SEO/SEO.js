import React from "react";
import { graphql, useStaticQuery } from "gatsby"; // IF we want to add links on the site we use this instead of a tags ex. <Link to="/">Home</Link>
import { Helmet } from "react-helmet";
import Facebook from './Facebook';
import Twitter from './Twitter';

const SEO = () => {
    const { site } = useStaticQuery(query);
    const { title, siteLang,  metaTags, linkTags, facebook, twitter} = site.siteMetadata;

    return (
        <>
            <Helmet>
                <html lang={siteLang} />
                <title>{title}</title>
                {/* Other site data goes here */}
                {metaTags.map(tag => <meta key={tag.name} name={tag.name} content={tag.content} />)}
                {linkTags.map(tag => <link key={tag.rel} rel={tag.rel} href={tag.href} />)}
            </Helmet>
            <Facebook tagData={facebook} />
            <Twitter tagData={twitter} />
        </>
    )
}

export default SEO;

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                siteLang
                metaTags {
                    name
                    content
                }
                linkTags {
                    rel
                    href
                }
                facebook {
                    property
                    content
                }
                twitter {
                    name
                    content
                }
            }
        }
    }
`;
