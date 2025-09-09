import React from 'react';
import { useWindowDimensions, View } from 'react-native';
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
    onEdit: (user?: User) => () => void
    onStatus: (user: User) => () => void
    onDelete: (user: User) => () => void
    onVerified: (user: User) => () => void
}

export default ({ user, onEdit, onStatus, onDelete, onVerified }: UserItemProps) => {
    const dimensions = useWindowDimensions();
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

    const onClose = () => setMenuOpen(false);

    return (
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
                    <Icon name={user.role === 'user' ? 'IconSolarUserLinear' : 'IconSolarStethoscopeLinear'} size={30} color='white' />
                    <View style={{ position: 'absolute', top: -2, right: -2, width: 12.5, height: 12.5, borderRadius: 10, backgroundColor: themeConfig.colors[user.status ? 'success' : 'error'].main }}/>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <Typography fontWeight='semibold' color='black'>
                                {user.name}
                            </Typography>
                            {user.verified && <Icon name='IconSolarVerifiedCheckBold' size={20} color={themeConfig.colors.main['A600']} />}
                        </View>
                        <Typography fontWeight='medium' color='gray' fontSize={12}>
                            {user.email}
                        </Typography>
                        <Typography fontWeight='medium' color='gray' fontSize={12}>
                            {user.contact}
                        </Typography>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 5 }}>
                        <Menu 
                            visible={menuOpen} 
                            onDismiss={onClose} 
                            anchor={<IconButton icon='IconSolarMenuDotsBold' onPress={() => setMenuOpen(!menuOpen)} size={20} />}
                            contentStyle={{ backgroundColor: 'white' }}
                        >
                            <Menu.Item 
                                style={{ height: 'fit-content', padding: 5 } as any}
                                onPress={() => {
                                    onClose()
                                    _.delay(() => onEdit(user)(), 200)
                                }} 
                                title={(<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, }}>
                                    <Icon name='IconSolarPenNewSquareLinear' size={20} />
                                    <Typography fontWeight='medium' color='black' sx={{ margin: 0, padding: 0 }}>Editar</Typography>
                                </View>)}
                            />
                            <Menu.Item 
                                style={{ height: 'fit-content', padding: 5 } as any}
                                onPress={() => {
                                    onClose()
                                    _.delay(() => onStatus(user)(), 200)
                                }} 
                                title={(<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, }}>
                                    <Icon name={user.status ? 'IconSolarLockKeyholeMinimalisticLinear' : 'IconSolarLockKeyholeMinimalisticUnlockedLinear'} size={20} />
                                    <Typography fontWeight='medium' color='black' sx={{ margin: 0, padding: 0 }}>{user.status ? 'Desativar' : 'Ativar'}</Typography>
                                </View>)} 
                            />
                            <Menu.Item 
                                style={{ height: 'fit-content', padding: 5 } as any}
                                onPress={() => {
                                    onClose()
                                    _.delay(() => onDelete(user)(), 200)
                                }} 
                                title={(<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, }}>
                                    <Icon name='IconSolarTrashBinMinimalisticLinear' size={20} />
                                    <Typography fontWeight='medium' color='black' sx={{ margin: 0, padding: 0 }}>Deletar</Typography>
                                </View>)} 
                            />
                            {user.role === 'professional' && (
                                <Menu.Item 
                                    style={{ height: 'fit-content', padding: 5 } as any}
                                    onPress={() => {
                                        onClose()
                                        _.delay(() => onVerified(user)(), 200)
                                    }} 
                                    title={(<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, }}>
                                        <Icon name='IconSolarVerifiedCheckLinear' size={20} />
                                        <Typography fontWeight='medium' color='black' sx={{ margin: 0, padding: 0 }}>
                                            {user.verified ? 'Desaprovar' : 'Aprovar'}
                                        </Typography>
                                    </View>)} 
                                />
                            )}
                        </Menu>
                        {/* <IconButton icon='IconSolarPenNewSquareLinear' onPress={onEdit(user)} size={20} />
                        <IconButton icon={user.status ? 'IconSolarLockKeyholeMinimalisticLinear' : 'IconSolarLockKeyholeMinimalisticUnlockedLinear'} onPress={onStatus(user)} size={20} />
                        <IconButton icon='IconSolarTrashBinMinimalisticLinear' onPress={onDelete(user)} size={20} /> */}
                    </View>
                </View>
            </View>
        </View>
    );
}