import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Circle cx="18.5" cy="4.5" r="2.5"/><Path strokeLinecap="round" d="M14.4 22v-.959a7 7 0 0 0-2.837-5.554c-.04-.03-.06-.045-.075-.058a2 2 0 0 1-.136-3.022l.07-.064l1.04-.946c1.628-1.479 1.133-4.153-.916-4.95a2.96 2.96 0 0 0-2.271.05l-.522.23c-.54.237-.809.356-1.072.487q-.658.327-1.275.725c-.247.16-.487.33-.967.672L4 9.636M9 17l-.26.311A7.47 7.47 0 0 1 3 20m13-8a8.25 8.25 0 0 0 4 0"/></G></Svg>
);
