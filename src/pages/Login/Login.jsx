import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { crearUsuarios } from "../../services/UserService";
import * as Yup from "yup";

const Login = () => {
  const requiredValidationMessage = (input) =>
    `${input} es requerido para el registro`;

  const yukSchema = new Yup.ObjectSchema({
    nombre: Yup.string().required(requiredValidationMessage("Nombre")),
    email: Yup.string()
      .email("Ingresar un email valido, ejm: test@test")
      .required(requiredValidationMessage("Email")),
    password: Yup.string()
      .min(6, "La contraseña debe tener minimo 6 caracteres")
      .required(requiredValidationMessage("Contraseña")),
    confirmarPassword: Yup.string().required(
      requiredValidationMessage("Confirmar contraseña")
    ).oneOf([Yup.ref('password'),null],'Contraseñas no coinciden')
  });

  const registrarUsuario = async (formulario) => {
    const { data, error } = await crearUsuarios(formulario);

    if (error) console.log(error);
    else console.log(data);
  };

  return (
    <Formik
      onSubmit={(value) => registrarUsuario(value)}
      initialValues={{
        nombre: "",
        email: "",
        password: "",
        confirmarPassword: "",
      }}
      validationSchema={yukSchema}
    >
      {() => (
        <Form>
          <label>Nombre: </label>
          <Field name="nombre" type="text" placeholder="Ingrese un nombre" />
          <ErrorMessage
            name="nombre"
            component={"div"}
            style={{ color: "red" }}
          />

          <label>Email: </label>
          <Field name="email" type="email" placeholder="Ingrese un email" />
          <ErrorMessage
            name="email"
            component={"div"}
            style={{ color: "red" }}
          />

          <label>Contraseña: </label>
          <Field
            name="password"
            type="text"
            placeholder="Ingrese una contraseña"
          />
          <ErrorMessage
            name="password"
            component={"div"}
            style={{ color: "red" }}
          />

          <label>Confirmar contraseña: </label>
          <Field
            name="confirmarPassword"
            type="text"
            placeholder="Repita la contraseña"
          />
          <ErrorMessage
            name="confirmarPassword"
            component={"div"}
            style={{ color: "red" }}
          />

          <Button type="submit">Ingresar</Button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
