import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M21.974 7.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078M13 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2 10q0-.663.002-1.25h19.996Q22 9.337 22 10v2q0 .662-.002 1.25H2.002Q1.999 12.662 2 12zm10 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m9.974 2.75H2.026c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clipRule="evenodd"/></Svg>
);
