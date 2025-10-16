import Icon from '@/components/Icon'
import LoadingAction from '@/components/LoadingAction'
import themeConfig from '@/config/theme.config'
import { useSession } from '@/context/auth'
import { User } from '@/entities/user.entity'
import { Icons } from '@/enums/icons.enum'
import { Theme, useTheme } from '@react-navigation/native'
import { Redirect, Tabs, useFocusEffect, useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'


const TabScreen = ({ label, iconName, theme, focused, center = false }: { label: string, iconName: keyof typeof Icons, theme: Theme, focused: boolean, center?: boolean }) => {
  if (center) {
    return <View 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minWidth: 70, 
        height: 70, 
        backgroundColor: themeConfig.colors.primary,
        borderRadius: 100,
        borderColor: themeConfig.colors.background,
        borderWidth: 4,
      }}
    >
      <Icon name={iconName} size={30} color={themeConfig.colors.gray['A50']} />
    </View>
  }

  return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 60, height: 60 }}>
    <Icon name={iconName} size={25} color={focused ? theme.colors['main'].main : themeConfig.colors['gray']['A400']} />
    {label && <Text style={{ fontSize: 10, fontFamily: 'Quicksand_700Bold', color: focused ? theme.colors['main'].main : themeConfig.colors['gray']['A400'] }}>{label}</Text>}
  </View>
}

export default function TabLayout () {
    const theme = useTheme()
  const { isLoading, session, isAuthenticated, getSession, signOut, ...sessionData } = useSession()
  const [user, setUser] = React.useState<User | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const router = useRouter()

  useFocusEffect(React.useCallback(() => { 
    if (isAuthenticated && !isLoading) {
      getSession().then((user) => {
        setUser(user)
        
        if (user && user.role !== 'admin') {
          setLoading(false)
          
          router.navigate({
            pathname: '/(tabs)',
            params: {}
          })
        }

        setLoading(false)
      })
    } else if (!isAuthenticated && !isLoading) {
      setLoading(false)
      signOut()
    }
  }, [isLoading, isAuthenticated, getSession, router]))

  if (isLoading || loading) {
    return <LoadingAction message='Carregando conta...' />
  }

  if (!isAuthenticated) {
    return <Redirect href='/(signin)' />
  }

    return (
        <Tabs
            screenOptions={{ 
                tabBarActiveTintColor: theme.colors.primary,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    borderTopColor: 'transparent',
                    borderRadius: 25,
                    shadowColor: 'transparent',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0,
                    shadowRadius: 0,
                    elevation: 0,
                    height: 50,
                    bottom: 27,
                    marginHorizontal: 16,
                    paddingTop: 5,
                    zIndex: 0,
                    position: 'absolute',
                },
            }}
        >
        
        <Tabs.Screen 
            name='index' 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => <TabScreen label='Dashboard' iconName={focused ? 'IconSolarChart2Bold' : 'IconSolarChart2Linear'} theme={theme as any} focused={focused} />
                
            }}
        />

        <Tabs.Screen 
            name='plans' 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => <TabScreen label='Planos' iconName={focused ? 'IconSolarDocumentsBold' : 'IconSolarDocumentsLinear'} theme={theme as any} focused={focused} />
                
            }}
        />

        <Tabs.Screen 
            name='users' 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => <TabScreen label='Usuários' iconName={focused ? 'IconSolarUsersGroupTwoRoundedBold' : 'IconSolarUsersGroupTwoRoundedLinear'} theme={theme as any} focused={focused} />
                
            }}
        />

        <Tabs.Screen 
            name='profile' 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => <TabScreen label='Perfil' iconName={focused ? 'IconSolarUserCircleBold' : 'IconSolarUserCircleLinear'} theme={theme as any} focused={focused} />
            }}
        />
        </Tabs>
    )
}
