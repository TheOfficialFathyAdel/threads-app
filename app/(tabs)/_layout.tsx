import { Tabs, useRouter } from "expo-router";
import { Activity, House, Plus, Search, User } from "lucide-react-native";
import React from "react";
import { Platform, Pressable } from "react-native";

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
        tabBarButton: (props) => (
          <Pressable
            onPress={props.onPress}
            android_ripple={null}
            style={props.style}
          >
            {props.children}
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <House size={35} color={color} style={{ marginTop: 15 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Search size={35} color={color} style={{ marginTop: 15 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Plus size={35} color={color} style={{ marginTop: 15 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Activity size={35} color={color} style={{ marginTop: 15 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <User size={35} color={color} style={{ marginTop: 15 }} />
          ),
        }}
      />
    </Tabs>
  );
}
