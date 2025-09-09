import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Circle cx="12" cy="6" r="4" fill={color}/><Path fill={color} fillRule="evenodd" d="M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3a2.24 2.24 0 0 0-.97-.22m2.03 1.28l-3 3a2.25 2.25 0 0 0 3-3m-5.78.97a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clipRule="evenodd"/><Path fill={color} d="M15.327 13.48A5.25 5.25 0 0 0 12.75 18c0 1.07.32 2.064.869 2.893q-.782.107-1.619.108c-3.866 0-7-1.79-7-4s3.134-4 7-4c1.204 0 2.337.174 3.327.48"/></Svg>
);
