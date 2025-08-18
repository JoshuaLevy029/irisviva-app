import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Circle cx="12" cy="12" r="10"/><Circle cx="12" cy="12" r="3"/><Path d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m4.613.724c.471.415 1.088.776 1.805.776c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403"/><Path strokeLinecap="round" d="M14.5 7L16 5m3 2l1-1m-8-1l-1-1m-.5 3l-1.366.366m7.516 1.611l.066 1.412m3.962-.304L19 11.563M7 5L6 4m.792 5.144l-.585-1.288m-.542 4.786L6.5 11.5m-2.817-1.15l-.079-1.412"/></G></Svg>
);
