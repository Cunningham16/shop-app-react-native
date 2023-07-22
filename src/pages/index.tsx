import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Home } from "./Home"
import {NavigationContainer} from "@react-navigation/native"

const Stack = createNativeStackNavigator()

export const Routing = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}