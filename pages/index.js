import { useFormik } from 'formik'
import * as yup from 'yup'

import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Center,
  InputGroup,
  InputLeftAddon,
  InputRightAddon
} from '@chakra-ui/react'

import { Logo } from './../components'
import firebase from './../config/firebase'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email inválido')
    .required('Preenchimento Obrigatório'),
  password: yup.string().required('Preenchimento Obrigatório'),
  username: yup.string().required('Preenchimento Obrigatório')
})

export default function Home() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = useFormik({
    onSubmit: (values, form) => {
      console.log(values)
    },
    validationSchema,
    initialValues: {
      email: '',
      username: '',
      password: ''
    }
  })
  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={10}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            size="lg"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && (
            <FormHelperText color="#e74c3c">{errors.email} </FormHelperText>
          )}
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            size="lg"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && (
            <FormHelperText color="#e74c3c">{errors.password} </FormHelperText>
          )}
        </FormControl>

        <FormControl id="username" isRequired p="4" size="lg">
          <InputGroup size="lg">
            <InputLeftAddon children="roomcloker.online/" />

            <Input
              type="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputGroup>
          {touched.username && (
            <FormHelperText color="#e74c3c">{errors.username} </FormHelperText>
          )}
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          mt={4}
          onClick={handleSubmit}
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Box>
    </Container>
  )
}
