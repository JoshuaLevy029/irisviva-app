import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#77a3ad" d="M64 105.1c-6.6 0-11.9-5.3-11.9-11.9V12.9C52.1 6.3 57.4 1 64 1s11.9 5.3 11.9 11.9v80.4c0 6.5-5.3 11.8-11.9 11.8"/><Circle cx="64" cy="103.6" r="22.5" fill="#77a3ad"/><Circle cx="64" cy="103.6" r="16.9" fill="#fff"/><Path fill="#fff" d="M64 106.7c-3.8 0-6.9-3.1-6.9-6.9V14.2c0-3.8 3.1-6.9 6.9-6.9s6.9 3.1 6.9 6.9v85.6c0 3.8-3.1 6.9-6.9 6.9"/><Path fill="#ed6c30" d="M64.2 99.8h-.3c-2.1 0-3.7-1.7-3.7-3.7V34.6c0-2.1 1.7-3.7 3.7-3.7h.3c2.1 0 3.7 1.7 3.7 3.7V96c0 2.1-1.7 3.8-3.7 3.8"/><Circle cx="64" cy="103.6" r="12.4" fill="#ed6c30"/><Path fill="none" stroke="#77a3ad" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M55.9 20.9h6.3m-6.1 16h6.3m-6.3 15.9h6.3m-6.3 15h6.3m-6.3 14.9h6.3"/></Svg>
);
