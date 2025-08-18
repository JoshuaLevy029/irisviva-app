import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" d="M19.1 10.66c1.111 1.314.88 2.922.88 4.34c0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34m14.2 0c-.195-.23-.43-.45-.716-.66m.715.66c.7.403.88-1.105.881-1.598V7.188C19.98 5.563 18.863 5 17.905 5c-.957 0-2.873 1.563-3.511 1.563c-.766 0-.914-.157-2.394-.157s-1.628.157-2.394.157C8.968 6.563 7.052 5 6.095 5S4.02 5.563 4.02 7.188v1.875c.002.492.18 2 .88 1.597m0 0c.195-.23.43-.45.716-.66"/><Path d="M12.826 16c0 .173-.361.313-.807.313c-.445 0-.806-.14-.806-.313s.361-.312.806-.312s.807.14.807.312Zm2.674-2.406c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Zm-6 0c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Z"/><Path strokeLinecap="round" d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094m1.774 3.594c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094m-1.774 3.594c.484-.313 1.613-1.094 2.42-1.094"/></G></Svg>
);
