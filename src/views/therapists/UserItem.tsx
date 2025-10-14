import React from 'react';
import { Image, Linking, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";
import { User } from '@/entities/user.entity';
import themeConfig from '@/config/theme.config';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import { IconButton } from '@/components/Button';
import formatUtil from '@/utils/format.util';
import { Menu } from 'react-native-paper';
import _ from 'lodash';

interface UserItemProps {
    user: User
}

export default ({ user }: UserItemProps) => {
    const dimensions = useWindowDimensions();

    return (
        <TouchableOpacity onPress={() => {
            Linking.openURL(`https://wa.me/${user.contact}?text=Olá, ${user.name}! Vi seu perfil no IrisViva e gostaria de agendar uma consulta.`)
        }}>
            <View 
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    minHeight: 50,
                    padding: 16,
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                    width: dimensions.width - 32,
                    marginBottom: 10,
                    position: 'relative',
                }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                    <View style={{ position: 'relative', width: 40, height: 40, borderRadius: 20, backgroundColor: themeConfig.colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: user.photo || 'https://ui-avatars.com/api/?name=' + user.name }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Typography fontWeight='semibold' color='black'>
                                    {user.name}
                                </Typography>
                            </View>
                            <Typography fontWeight='medium' color='gray' fontSize={12}>
                                {user.occupation}
                            </Typography>
                            <Typography fontWeight='medium' color='gray' fontSize={12}>
                                {user.contact}
                            </Typography>
                        </View>
                    </View>
                    <Icon name='IconLogosWhatsapp' size={20} />
                </View>
            </View>
        </TouchableOpacity>
    );
}