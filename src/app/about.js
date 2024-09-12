import {router} from "expo-router";
import { Button, Text, View } from "react-native";

export default function about() {
    return (
        <View>
            <Text>Sobre</Text>
            <Button title="voltar" onPress={() => {router.replace("/")}}/>
        </View>
    );
}