import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSession } from '../../src/providers/SessionProvider';
import HeaderTitleLink from '../../src/components/HeaderBack';
import Loading from '../../src/components/Loading';

export default function Layout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Tabs backBehavior="history">
      <Tabs.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          headerShown: false,
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />,
          href: session ? '/notifications' : null,
        }}
        name="notifications"
      />
      <Tabs.Screen
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <FontAwesome6 name="gear" size={24} color={color} />,
          href: session ? '/settings' : null,
        }}
        name="settings"
      />
      <Tabs.Screen
        options={{
          href: null,
          headerTitle: () => <HeaderTitleLink />,
        }}
        name="post/[uuid]"
        getId={() => String(Date.now())}
      />
      <Tabs.Screen
        options={{
          title: "Sign Up",
          tabBarIcon: ({ color }) => <FontAwesome6 name="user-plus" size={24} color={color} />,
          href: session ? null : 'sign-up',
        }}
        name="sign-up"
      />
      <Tabs.Screen
        options={{
          title: "Sign In",
          tabBarIcon: ({color}) => <Entypo name="login" size={24} color={color} />,
          href: session ? null : 'sign-in',
        }}
        name="sign-in"
      />
      <Tabs.Screen
        options={{
          title: "Forgot Password",
          href: null,
        }}
        name="forgot-password"
      />
      <Tabs.Screen
        options={{
          title: "Change Password",
          href: null,
        }}
        name="change-password"
      />
      <Tabs.Screen
        options={{
          title: "Reset Password",
          href: null,
        }}
        name="reset-password"
      />
    </Tabs>
  );
}
