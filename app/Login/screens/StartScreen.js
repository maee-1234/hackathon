import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  console.log(navigation)
  return (
    <Background>
      <Logo />
      <Header>시작화면</Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        로그인
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        회원가입
      </Button>
    </Background>
  )
}
