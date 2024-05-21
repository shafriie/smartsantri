import{
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native"

export const MyButton=(props)=>{
    return(
        <TouchableOpacity style={[styles.container, props.style]}>
            <Image
            style={styles.iconStyle}
            source={props.imgUrl}/>
           <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

    const styles = StyleSheet.create({
        container:{
            padding:10,
            borderColor:'grey',
            backgroundColor: 'tomato',
            borderWidth: 0.5,
            borderRadius: 5,
            flex:1,
            flexDirection:'row',
            justifyContent:'center'
        }
       
    })