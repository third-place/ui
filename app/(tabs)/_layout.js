import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: 'Sign up',
          href: null,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          href: null,
        }}
      />
      <Tabs.Screen
        name="forgot-password"
        options={{
          title: 'Forgot Password',
          href: null,
        }}
      />
    </Tabs>
  );
}
