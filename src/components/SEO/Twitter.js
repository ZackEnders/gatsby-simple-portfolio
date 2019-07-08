import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Twitter = ({ tagData }) => (
    <Helmet>
        {tagData.map(tag =>
            <meta key={tag.name} property={tag.name} content={tag.content} />
        )}
    </Helmet>
)

export default Twitter;

Twitter.propTypes = {
    tagData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        content: PropTypes.string,
    }))
}

//  Default props?