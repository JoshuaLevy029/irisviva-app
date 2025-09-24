import Icon from '@/components/Icon'
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
    <Icon name={iconName} size={25} color={theme.colors['main'].main} />
    {/* <Text style={{ fontSize: 10, fontFamily: 'Quicksand_700Bold', color: theme.colors[focused ? 'main' : 'gray'].main }}>{label}</Text> */}
  </View>
}

export default function TabLayout() {
  const theme = useTheme()
  const { isLoading, session, isAuthenticated, getSession, ...sessionData } = useSession()
  const [user, setUser] = React.useState<User | null>(null)
  const router = useRouter()

  useFocusEffect(React.useCallback(() => { 
    if (isAuthenticated && !isLoading) {
      getSession().then((user) => {
        setUser(user)

        if (user && !['user', 'professional'].includes(user.role)) {
          router.navigate({
            pathname: '/(admin)',
            params: {}
          })
        }
      })
    }
  }, [isLoading, isAuthenticated, getSession, router]))

  if (isLoading) {
    return null
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
          zIndex: 1,
        },
      }}
    >
      <Tabs.Screen 
          name='history' 
          options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => <TabScreen label='' iconName='IconSolarChatLineLinear' theme={theme as any} focused={focused} />
          }}
      />
      <Tabs.Screen 
          name='index' 
          options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => <TabScreen label='' iconName='IconSolarEyeScanLinear' theme={theme as any} focused={focused} center />
              
          }}
      />
      <Tabs.Screen 
          name='profile' 
          options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => <TabScreen label='' iconName='IconSolarUserCircleLinear' theme={theme as any} focused={focused} />
          }}
      />

      {/* <Tabs.Screen 
          name='supermarket' 
          options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => <TabScreen label='Market' iconName='IconSolarCartLarge4Linear' theme={theme as any} focused={focused} />
          }}
      /> */}

      {/* <Tabs.Screen 
          name='catalog' 
          options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => <TabScreen label='Catalogs' iconName='IconSolarTagPriceLinear' theme={theme as any} focused={focused} />
          }}
      /> */}
    </Tabs>
  )
}
