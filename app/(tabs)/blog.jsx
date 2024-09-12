import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const Blog = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-blackk">
            <View className="flex-row items-center justify-between px-4 mt-2 h-[60px]">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="bg-main p-2 rounded-tr-2xl rounded-bl-2xl"
                >
                    <ArrowLeftIcon size={20} color="black" />
                </TouchableOpacity>
                <Text className="text-2xl font-bold flex-1 text-center text-white">Create a Post</Text>   
            </View>
            {/* Line */}
            <View className="bg-gray-400 w-full h-[2px] items-center justify-center" />
        </View>
    );
};

export default Blog;
