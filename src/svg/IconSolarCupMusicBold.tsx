import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M11.316 11.267a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/><Path fill={color} fillRule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2m1.5 2.75a.75.75 0 0 0-1.5 0v3.378a2.25 2.25 0 1 0 1.5 2.122V7.2c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clipRule="evenodd"/><Path fill={color} d="M2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162m20 0v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958"/></Svg>
);
