import React from "react";
import SEO from "./SEO/SEO";
import styled from 'styled-components';
import backgroundImage from '../assets/images/benny-frank.jpg'


const Layout = styled.div`
    background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(61, 65, 65, 0.7)),to(rgba(61, 65, 65, 0.6))), url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    color: #fff;
`;

export default ({ children }) => (
    <Layout>
        <SEO />
        {/* Header / Sidebar */}
        {children}
        {/* Simple footer */}
    </Layout>
);