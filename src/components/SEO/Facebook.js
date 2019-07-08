import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Facebook = ({ tagData }) => (
    <Helmet>
        {tagData.map(tag =>
            <meta key={tag.property} property={tag.property} content={tag.content} />
        )}
    </Helmet>
)

export default Facebook;

Facebook.propTypes = {
    tagData: PropTypes.arrayOf(PropTypes.shape({
        property: PropTypes.string,
        content: PropTypes.string,
    }))
}

//  Default props?