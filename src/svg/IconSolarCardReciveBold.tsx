import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M18.47 20.53a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V14a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06z" clipRule="evenodd"/><Path fill={color} d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"/><Path fill={color} fillRule="evenodd" d="M10 20h4c.66 0 1.261 0 1.812-.006l-.403-.403a2.25 2.25 0 0 1 1.341-3.827V14a2.25 2.25 0 0 1 4.5 0v1.764c.224.025.445.083.654.175C22 14.917 22 13.636 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20m-4-4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm6.5 0a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/></Svg>
);
