import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill="none" stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M2 6v12.5c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552C3.393 22 4.096 22 5.5 22s2.107 0 2.611-.337a2 2 0 0 0 .552-.552C9 20.607 9 19.904 9 18.5V11c0-.943 0-1.414.293-1.707S10.057 9 11 9h7.5c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C22 7.607 22 6.904 22 5.5s0-2.107-.337-2.611a2 2 0 0 0-.552-.552C20.607 2 19.904 2 18.5 2H6c-1.886 0-2.828 0-3.414.586S2 4.114 2 6Zm10-4v2m6-2v2M9 2v3m6-3v3M2 12h2m-2 6h2m-2-3h3M2 9h3"/></Svg>
);
