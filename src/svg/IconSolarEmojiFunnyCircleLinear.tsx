import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"/><Ellipse cx="14.509" cy="9.774" fill={color} rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"/><Ellipse cx="8.714" cy="11.328" fill={color} rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"/><Path stroke={color} strokeWidth="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"/></G></Svg>
);
