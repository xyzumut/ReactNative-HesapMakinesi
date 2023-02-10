import React from 'react'
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
const HesapMakinesi = () => {

    const veriler = ['+','-','/','X']

    let eskiler = [10,20,30,40]

    return (
        <View style={style.layout}>
            <View style={style.headerContainer}>
                <View style={style.inputContainer}>
                    <TextInput  style={style.input} inputMode={'numeric'}/>
                    <Text style={style.selectedOperation}>+</Text>
                    <TextInput  style={style.input} inputMode={'numeric'}/>
                </View>
                <View style={style.operationContainer}>
                {
                    veriler.map( (item, key) => {
                        return(
                            <TouchableOpacity key={key}>
                                <Text style={style.operations}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                </View>
            </View>
            <View style={style.footerContainer}>
                <Text style={style.result}>
                    Sonuç : 1000
                </Text>
                <Text style={[style.result,{fontSize:30}]}>
                    -- Eski Sonuçlar --
                </Text>
                <ScrollView style={style.oldResultsContainer}>
                    {
                        eskiler.map( (item,key) => { 
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
        color:'white'
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
        color:'white'
    },
    footerContainer:{
        width:'100%',
        height:'72%',
        backgroundColor:'blue'
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
        backgroundColor:'pink'
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

export default HesapMakinesi