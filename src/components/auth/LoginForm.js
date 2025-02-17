import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState();

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object(validateSchema()),
    validateOnChange: false,
    onSubmit: (values) => {
      const { userName, passWord } = values;

      setError("");

      if (userName !== user.username || passWord !== user.password) {
        setError("Usuario o contraseña incorrectos");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.userName}
        onChangeText={(text) => formik.setFieldValue("userName", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.passWord}
        onChangeText={(text) => formik.setFieldValue("passWord", text)}
      />
      <View style={styles.btnIn}>
        <Button title="Entrar" onPress={() => formik.handleSubmit()} />
      </View>
      <Text style={styles.error}>{formik.errors.userName}</Text>
      <Text style={styles.error}>{formik.errors.passWord}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return { userName: "", passWord: "" };
}

function validateSchema() {
  return {
    userName: yup.string().required("El Usuario es obligatorio"),
    passWord: yup.string().required("La contraseña es obligatoria"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    color: "#f00",
    textAlign: "center",
  },
  btnIn: {
    width: 200,
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
  },
});
