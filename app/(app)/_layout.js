import { Text } from 'react-native-paper';
import { Redirect, Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSession } from '../../src/providers/SessionProvider';

export default function Layout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Tabs>
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
          tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />
        }}
        name="notifications"
      />
      <Tabs.Screen
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <FontAwesome6 name="gear" size={24} color={color} />
        }}
        name="settings"
      />
      <Tabs.Screen
        options={{
          href: null,
          title: "Post"
        }}
        name="post/[uuid]"
        getId={() => String(Date.now())}
      />
    </Tabs>
  );
}
