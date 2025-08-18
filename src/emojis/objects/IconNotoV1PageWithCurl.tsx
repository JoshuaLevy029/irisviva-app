import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#e0e0e0" d="M9.42 102.85V6.51a3.06 3.06 0 0 1 3.06-3.06h89.11a3.06 3.06 0 0 1 3.06 3.06v118.04H31.12c-11.98 0-21.7-9.71-21.7-21.7"/><Path fill="#bdbdbd" d="M104.65 103.5v21.05c6.98 0 12.77-7.56 13.91-17.48c.22-1.9-1.28-3.57-3.19-3.57zm-63.38 0c-1.96 0-3.6 1.48-3.81 3.43c-1.04 9.42-6.27 16.73-12.75 17.53v.09h79.94V103.5z"/><Path fill="#e0e0e0" d="M24.71 103.5H9.42c0 11.63 6.32 21.05 14.11 21.05c.4 0 .79-.04 1.18-.09c7.24-.9 12.93-9.93 12.93-20.96z"/><Path fill="none" stroke="#616161" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" d="M22.83 29.78h68.34M22.83 45.03h68.34M22.83 60.29h68.34M22.83 75.55h68.34M22.83 90.81h29.23"/></Svg>
);
