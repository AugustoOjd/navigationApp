import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    btnBox: {
        height: 150,
        display: 'flex',
        justifyContent: 'space-around',
    },
    btn: {
        backgroundColor: 'red',
        borderRadius: 10,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 20,
        color: 'white'
    },
    avatar: {
        width: 150,
        height: 150
    }
})