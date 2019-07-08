import React from "react";
import SEO from "./SEO/SEO";

export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <SEO />
        {children}
    </div>
);