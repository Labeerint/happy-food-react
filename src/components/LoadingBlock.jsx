import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="20" cy="20" r="20" />
        <rect x="-2" y="1" rx="0" ry="0" width="278" height="232" />
        <rect x="2" y="242" rx="0" ry="0" width="274" height="36" />
        <rect x="1" y="289" rx="0" ry="0" width="274" height="50" />
        <rect x="3" y="347" rx="0" ry="0" width="274" height="50" />
        <rect x="2" y="405" rx="0" ry="0" width="274" height="50" />
    </ContentLoader>
)

export default LoadingBlock