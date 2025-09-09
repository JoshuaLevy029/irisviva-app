import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M12.39 9.724a1.333 1.333 0 1 1 1.886 1.885a1.333 1.333 0 0 1-1.886-1.885"/><Path fill={color} fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M16.651 7.35a4.605 4.605 0 0 1-4.405 7.715a.72.72 0 0 0-.691.172l-1.118 1.118l-.003-.003l-1.166-1.153a.75.75 0 1 0-1.055 1.066l1.163 1.15l-.296.297a.99.99 0 0 1-.807.283l-1.392-.155a.66.66 0 0 1-.393-.188l-.139-.14a.66.66 0 0 1-.188-.392l-.155-1.392a.99.99 0 0 1 .283-.807l2.475-2.474a.72.72 0 0 0 .172-.692a4.604 4.604 0 0 1 7.715-4.405" clipRule="evenodd"/></Svg>
);
