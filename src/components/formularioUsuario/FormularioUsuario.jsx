import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import './FormularioUsuario.css';


const defaultValues = {
  id: "",
  nombre: "",
  email: "",
  edad: "",
  rol: "",
  password: "",
  confirmarPassword: "",
  tyc: false,
  genero: "",
};

const FormularioUsuario = ({
  onEnviar,
  isCrear = true,
  initialValues = defaultValues,
}) => {
  const requiredValidationMessage = (input) =>
    `${input} es requerido para el registro`;

  const yukSchema = new Yup.ObjectSchema({
    nombre: Yup.string().required(requiredValidationMessage("Nombre")),
    email: Yup.string()
      .email("Ingresar un email valido, ejm: test@test")
      .required(requiredValidationMessage("Email")),
    password: Yup.string()
      .min(6, "La contraseña debe tener minimo 6 caracteres")
      .required(requiredValidationMessage("Contraseña"))
      .test(
        "validacionAlfanumerico",
        "Debe contener numeros y letras",
        (value) => /[a-zA-Z]/.test(value) && /\d/.test(value)
      ),
    confirmarPassword: Yup.string()
      .required(requiredValidationMessage("Confirmar contraseña"))
      .oneOf([Yup.ref("password"), null], "Contraseñas no coinciden"),
    rol: Yup.string().required(requiredValidationMessage("Rol")),
    tyc: Yup.boolean().oneOf([true], "Se necesitan aceptar los terminos"),
    genero: Yup.string().required(requiredValidationMessage("Genero")),
    edad: Yup.number()
      .required(requiredValidationMessage("Edad"))
      .min(18, "Debe ser mayor de edad para ingresar")
      .max(90, "Se encuentra fuera del rango permitido"),
  });

  return (
    <Formik
      initialValues={{ ...initialValues, tyc: isCrear ? false : true }}
      validationSchema={yukSchema}
      onSubmit={(values) => {
        const datos = { ...values };
        if (isCrear) delete datos.id;
        delete datos.tyc;
        onEnviar(datos);
      }}
    >
      {() => (
        <Form id="formUsuario" className="formulario-usuario">
          <Field name="id" type="text" hidden />

          <div className="form-group">
            <label className="form-label">Nombre:</label>
            <Field
              name="nombre"
              type="text"
              placeholder="Ingrese un nombre"
              className="form-input"
            />
            <ErrorMessage
              name="nombre"
              component="div"
              className="error-text"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email:</label>
            <Field
              name="email"
              type="email"
              placeholder="Ingrese un email"
              className="form-input"
            />
            <ErrorMessage name="email" component="div" className="error-text" />
          </div>

          <div className="form-group">
            <label className="form-label">Edad:</label>
            <Field
              type="number"
              name="edad"
              placeholder="Ingrese edad"
              className="form-input"
            />
            <ErrorMessage name="edad" component="div" className="error-text" />
          </div>

          <div className="form-group">
            <label className="form-label">Rol:</label>
            <div>
              <label className="me-3">
                <Field type="radio" name="rol" value="estudiante" /> Estudiante
              </label>
              <label>
                <Field type="radio" name="rol" value="docente" /> Docente
              </label>
            </div>
            <ErrorMessage name="rol" component="div" className="error-text" />
          </div>

          <div className="form-group">
            <label className="form-label">Género:</label>
            <Field as="select" name="genero" className="form-select">
              <option value="">Seleccione una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </Field>
            <ErrorMessage
              name="genero"
              component="div"
              className="error-text"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña:</label>
            <Field
              name="password"
              type="password"
              placeholder="Ingrese contraseña"
              className="form-input"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-text"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirmar contraseña:</label>
            <Field
              name="confirmarPassword"
              type="password"
              placeholder="Repita la contraseña"
              className="form-input"
            />
            <ErrorMessage
              name="confirmarPassword"
              component="div"
              className="error-text"
            />
          </div>

          {isCrear && (
            <div className="form-group">
              <label>
                <Field type="checkbox" name="tyc" className="me-2" />
                Acepto los términos y condiciones
              </label>
              <ErrorMessage name="tyc" component="div" className="error-text" />
            </div>
          )}

          <Button type="submit" className="btn-submit" variant="primary">
            {isCrear ? "Registrar Usuario" : "Editar Usuario"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioUsuario;
