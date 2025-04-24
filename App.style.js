import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
      }, 
      castButton: { 
        tintColor: "black", 
        height: 78, 
        width: 78 
      }, 
      nextAndPrev: { 
        flex: 3,
        flexDirection: 'row',
      }, 
      workspace: {
        height: 400,
        alignItems: "center",
        justifyContent: "space-evenly"
      }
}

)