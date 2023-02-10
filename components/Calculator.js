import React, { useEffect, useRef, useState } from 'react'
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
const Calculator = () => {


    const [oldResults, setOldResults] = useState([])
    const [selectedOperation, setSelectedOperation] = useState('+')
    const [result, setResult] = useState(0)
    const operationList = ['+','-','/','X']
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const temp = useRef(false)


    const handleOperation = () => {
        selectedOperation === '+' ? setResult(input1 + input2) :
        selectedOperation === '-' ? setResult(input1 - input2) :
        selectedOperation === 'X' ? setResult((input1 * input2).toFixed(4)) :
        input2 !== 0 ? setResult((input1 / input2).toFixed(4)) : alert('Bölü İşleminde payda 0 olamaz')
    }

    useEffect(() => {
        temp.current ? 
            setOldResults(prevResults => [Number(result), ...prevResults] ) : 
            temp.current = true
    },[result])

    return (
        <View style={style.layout}>
            <View style={style.headerContainer}>
                <View style={style.inputContainer}>
                    <TextInput defaultValue={input1.toString()} style={style.input} inputMode={'numeric'} onChangeText={(newText) => {setInput1(Number(newText))}}/>
                    <TouchableOpacity 
                        style={{backgroundColor:'#445256',borderRadius:10}}
                        onPress={handleOperation}
                    >
                        <Text style={style.selectedOperation}>{selectedOperation}</Text>
                    </TouchableOpacity>
                    <TextInput defaultValue={input2.toString()} style={style.input} inputMode={'numeric'} onChangeText={(newText) => {setInput2(Number(newText))}}/>
                </View>
                <View style={style.operationContainer}>
                {
                    operationList.map( (item, key) => {
                        return(
                            <TouchableOpacity 
                                key={key}
                                onPress={() => setSelectedOperation(item)}
                            >
                                <Text style={style.operations}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                </View>
            </View>
            <View style={style.footerContainer}>
                <Text style={style.result}>
                    Sonuç : {result}
                </Text>
                <Text style={[style.result,{fontSize:30}]}>
                    -- Eski Sonuçlar --
                </Text>
                <ScrollView style={style.oldResultsContainer} keyboardDismissMode={'on-drag'}>
                    {
                        oldResults.lengths !== 0 && oldResults.map( (item,key) => { 
                            return(
                                <Text style={style.oldResults} key={key}>{item}</Text>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View> 
    )
}

const style = StyleSheet.create({
    layout:{
        width:'100%',
        height:'100%',
        backgroundColor:'#445256',
        padding:0,
        margin:0,
    },
    headerContainer:{
        width:'100%',
        height:'28%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    inputContainer:{
        width:350,
        height:'40%',
        backgroundColor:'#314146',
        borderRadius:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    input:{
        width:115,
        height:50,
        backgroundColor:'#4D89BF',
        color:'white',
        fontSize:40,
        padding:5,
        borderRadius:10
    },
    selectedOperation:{
        fontSize:40,
        color:'white',
        width:40,
        textAlign:'center',
    },
    operationContainer:{
        width:300,
        height:'40%',
        backgroundColor:'#314146',
        borderRadius:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    operations:{
        fontSize:60,
        color:'white',
    },
    footerContainer:{
        width:'100%',
        height:'72%',
    },
    result:{
        width:'100%',
        height:100,
        color:'white',
        fontSize:40,
        textAlign:'center',
        lineHeight:100,
    },
    oldResultsContainer:{
        width:'100%',
    },
    oldResults:{
        width:'100%',
        height:100,
        color:'white',
        fontSize:40,
        textAlign:'center',
        lineHeight:100,
    }

})

export default Calculator