import { useSession } from '@/context/auth';
import { Redirect } from 'expo-router';
import { Stack } from 'expo-router/stack';

export default function Layout () {
    const { isLoading, session, isAuthenticated, ...sessionData } = useSession();

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated) {
        return <Redirect href='/(signin)' />;
    }

    return (
        <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName='index'
        />
    );
}