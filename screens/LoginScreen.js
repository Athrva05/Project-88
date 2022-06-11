import React, { Component } from 'react';
import { View, Button} from 'react-native';
export default class LoginScreen extends Component { 

signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behaviour: "web",
                androidClientId:
                    "840110494340-99ijj93ruji57nqpn5kqteuohrmb9rk4.apps.googleusercontent.com",
                iosClientId:
                    "840110494340-qupn3ta1rtrcdackn652kfi6db2722b6.apps.googleusercontent.com",
                scopes: ["profile", "email"]
            });

            if (result.type === "success") {
                this.onSignIn(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log(e.message);
            return { error: true };
        }
    };
    render() {
        if (!this.state.fontsLoaded) { return <AppLoading />;
            } else {
            return (
            <View
            style={{
            flex: 1,
            justifyContent: "center", alignItems: "center"
            }}>
            <Button
            title="Sign in with Google"
            onPress={() => this.signInWithGoogleAsync()}></Button>
            </View>
            )}
    
        return (
                <View style={styles.container}>
                  <SafeAreaView style={styles.droidSafeArea} />
                  <View style={styles.appTitle}>
                    <Image
                      source={require("../assets/logo.png")}
                      style={styles.appIcon}
                    ></Image>
                    <Text style={styles.appTitleText}>{`Storytelling\nApp`}</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => this.signInWithGoogleAsync()}
                    >
                      <Image
                        source={require("../assets/google_icon.png")}
                        style={styles.googleIcon}
                      ></Image>
                      <Text style={styles.googleText}>Sign in with Google</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cloudContainer}>
                    <Image
                      source={require("../assets/cloud.png")}
                      style={styles.cloudImage}
                    ></Image>
                  </View>
                </View>
              );
       
  
    }}