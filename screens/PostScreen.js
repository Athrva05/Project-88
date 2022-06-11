import React, { Component } from 'react';
import { Text, View ,StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

export default class PostScreen extends Component {
    renderItem = ({item: post }) => {
          return <PostCard post ={post} navigation={this.props.navigation} />
          };
    fetchUser = () => {
            let theme;
            firebase
              .database()
              .ref("/users/" + firebase.auth().currentUser.uid)
              .on("value", snapshot => {
                theme = snapshot.val().current_theme;
                this.setState({ light_theme: theme === "light" });
              });
          };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>PostScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
postCardLight: {
margin: RFValue(20), 
backgroundColor: "#eaeaea",
borderRadius : RFValue(20) },

authorNameText: {
 color: "white",
fontSize: RFValue (20)
},

authorNameTextLight: {
color: "black",
fontSize : RFValue (20)
}
});
