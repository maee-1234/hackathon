import React, { useState, useEffect, createContext, useReducer } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
export const UserDispatch = React.createContext(null)

/*
const receiving = async (url) => {
  const data = await getMoviesFromApi(url)
  return data
}
const FixedDimensionsBasics = () => {
    const [dat, setCount] = useState(0);
    const [dat2, setDat] = useState(0);
    const url = 'https://reactnative.dev/movies.json'
    
    const getMoviesFromApi = (url) => {
        return fetch(url)
          .then((response) => {
              return response.json()})
          .then((json) => {
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
      };

    useEffect(() => {
      receiving(url).then((d) => {
        console.log(d)
        setCount(d)
      })
    }, [])
    
  return (
    <View>
        <Text>
     {JSON.stringify(dat)}
     </Text>
    </View>
  );
};
*/


/*const usercheck = (emails, pass) => {
  const url = 'http://192.168.0.5:8000/login/'
  
  const getMoviesFromApi = (url) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emails,
        password: pass
      })
    })
      .then((response) => {
          return response.json()})
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };
    const receiving = async (url) => {
      const data = await getMoviesFromApi(url)
      return data
    }
    
    useEffect(() => {
      receiving(url).then((d) => {
        console.log(d)
        return d
      })
    }, [])
    
};*/

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [loginsuc, setloginsuc] = useState({value: ''})
  const [tok, setTok] = useState({tok:''})
  const url = 'http://192.168.0.5:8000/login/'
  const url2 = 'http://192.168.0.5:8000/user/'
  console.log("a")



  useEffect(() => {
    // POST request using fetch inside useEffect React hook

    

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  //const [result, setresult] = useState({ result: '' })
  /*const getMoviesFromApi = (url) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })
      .then((response) => {
          return response.json()})
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };
    const receiving = async (url) => {
      const data = await getMoviesFromApi(url)
      return data
    }*/


    
  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email.value,
        password: password.value 
      })
  })
        .then(response => response.json())
        .then(data => {
          if(data.success=="false") {
          setloginsuc({value: "로그인유저정보가 없습니다"})
        } else if (data.success=="true")
        {

        fetch(url2, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: data.token[0].token })
      })
            .then(response => response.json())
            .then(data => 
              {
                console.log(data)
                if(data.success=="false") {
                  console.log('fuck')
                } else if (data.success=="true")
                {
                  setTok({tok: data.nickname[0].nickname})
                  //export const UserDispatch = React.createContext(data.nickname[0].nickname)
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home'}],
                  })
                } else {
                  
                    console.log('this is also fuck')
                }
              })

          //setTok({tok: data.token[0].token})
        } else {
          console.log('a')
        }});
      /*receiving(url).then((d) => {
        if(d.success=="false") {
          setloginsuc({value: "로그인유저정보가 없습니다"})
        } else if (d.success=="true")
        {
          console.log(d)
          setTok({tok: d.token[0].token})
          console.log(tok.tok)
        } else {
          console.log('a')
        }

        
      }).then(() => {
        const getMoviesFromApi2 = (url) => {
          return fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: tok.tok
          })
        })
          .then((response) => {
              
              return response.json()})
          .then((json) => {
            console.log(json)
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
      const receiving2 = async (url) => {
        const data2 = await getMoviesFromApi2(url)
        return data2
      }
    
    
      receiving2(url2).then((k) => {
        console.log(k)
        if(k.success=="false") {
          console.log('fuck')
        } else if (k.success=="true")
        {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home',  params: {prop: k.nickname[0].nickname}}],
          })
        } else {
          
            console.log('this is also fuck')
        }
      })
      })*/


    /*navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    })*/
  }

  return (
    <UserDispatch.Provider value={tok.tok}>
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>로그인창</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        로그인
      </Button>
      <View style={styles.row}>
        <Text>계정이 없으십니까?</Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}> 회원가입</Text>
        </TouchableOpacity>
      </View>
      <Text>
        {loginsuc.value}
      </Text>
    </Background>
    </UserDispatch.Provider>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
