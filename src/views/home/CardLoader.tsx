import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

export default ({ width = 476, height = 70, ...props } : { width?: number, height?: number }) => (
    <ContentLoader 
        speed={2}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <Circle cx="20" cy="20" r="20" /> 
        <Rect x="49" y="10" rx="4" ry="4" width={100} height="15" />
        <Rect x={width - 70} y="0" rx="10" ry="10" width={40} height="40" /> 
    </ContentLoader>
)