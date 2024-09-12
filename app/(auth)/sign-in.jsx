import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import { useState } from 'react'
import { useNavigation, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View className="bg-blackk h-full flex-1">
      <SafeAreaView className="flex">
        <ScrollView>
          {/* top arrow */}
          <View className="flex-row justify-start">
            <TouchableOpacity onPress={() => navigation.goBack()}
              className="bg-main p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
              <ArrowLeftIcon size={20} color="black"/>
            </TouchableOpacity>
          </View>
          {/* main img */}
          <View className="flex-row justify-center">
          <Image source={require('../../assets/images/homeimg/maze.jpg')} className="w-[200px] h-[200px] rounded-lg " resizeMode="cover"/>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View className="flex-1 bg-lightmainn mt-10 px-8 pt-10  rounded-t-[70px]">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4 font-bold">Email Address</Text>
            <TextInput
              className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              value={email}
              onChangeText={setEmail}
              placeholder='Enter Email'
            />

            <Text className="text-gray-700 ml-4 font-bold">Password</Text>
            <TextInput
              className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholder='Enter Password'
            />
            <TouchableOpacity className="flex items-end mb-5">
              <Text className="text-gray-700">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-darkmainn rounded-xl"
            onPress={()=>router.push('../(tabs)/Home')}>
              <Text className="text-gray-700 font-xl font-bold text-center">Login</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../../assets/images/homeimg/google.png')} className="w-10 h-10"/>
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../../assets/images/homeimg/apple.png')} className="w-10 h-10 object-cover"/>
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../../assets/images/homeimg/fb.png')} className="w-10 h-10 object-cover"/>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-7">
            <Text className="text-gray-700 font-semibold">Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.push('sign-up')}>
                <Text className="text-toodark font-semibold"> Sign Up</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default SignIn