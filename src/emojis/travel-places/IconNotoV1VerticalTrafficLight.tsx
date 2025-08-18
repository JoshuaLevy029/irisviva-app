import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#616161" d="M31.98 46.21v-7.66a6.3 6.3 0 0 1 6.3-6.3h66.4a6.3 6.3 0 0 1 6.3 6.3v7.66a6.3 6.3 0 0 1-6.3 6.3h-66.4a6.3 6.3 0 0 1-6.3-6.3m0 48.21v-7.66a6.3 6.3 0 0 1 6.3-6.3h66.4a6.3 6.3 0 0 1 6.3 6.3v7.66a6.3 6.3 0 0 1-6.3 6.3h-66.4c-3.48-.01-6.3-2.83-6.3-6.3"/><Path fill="#757576" d="M74.06 99.46V31.25c0-14.4-11.67-26.07-26.06-26.07S21.94 16.85 21.94 31.24v68.21c0 14.39 11.67 26.06 26.06 26.06c14.39.01 26.06-11.66 26.06-26.05"/><Path fill="#edece4" d="M68.76 96.75V28.54c0-14.39-11.67-26.06-26.06-26.06S16.64 14.15 16.64 28.54v68.21c0 14.39 11.67 26.06 26.06 26.06c14.39.01 26.06-11.66 26.06-26.06"/><Circle cx="42.7" cy="97.93" r="14.34" fill="#4caf50"/><Circle cx="42.7" cy="62.65" r="14.34" fill="#fcc21b"/><Circle cx="42.7" cy="27.37" r="14.34" fill="#e43f11"/></Svg>
);
