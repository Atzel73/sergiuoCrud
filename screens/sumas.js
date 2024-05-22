import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextInput from "../componentes/textInput";

export default function Sumas() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    function Sumar() {
        const n1 = Number(num);
        const n2 = Number(num2);
        setCount(n1 + n2);
    }

    function Vaciar() {
        setCount("");
    }

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', fontStyle: 'italic', marginVertical: 10 }}>
                Resultado   {count}
            </Text>
            <TouchableOpacity
                onPress={Sumar}
                style={{ borderWidth: 2, borderRadius: 90, borderColor: 'violet', padding: 10, margin: 10 }}
            >
                <Text
                    style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', fontStyle: 'italic', marginVertical: 10 }}
                >
                    Sumar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={Vaciar}
                style={{ borderWidth: 2, borderRadius: 90, borderColor: 'violet', padding: 10, margin: 10 }}
            >
                <Text
                    style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', fontStyle: 'italic', marginVertical: 10 }}
                >
                    Vaciar
                </Text>
            </TouchableOpacity>
            <View>
                <TextInput
                    value={num}
                    onChangeText={(num) => setNum(num)}

                    placeholder="Introduzca un numero" />
                <TextInput
                    value={num2}
                    onChangeText={(num2) => setNum2(num2)}

                    placeholder="Introduzca un numero" />
            </View>
        </View>
    )
}