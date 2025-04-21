import { useEffect, useState } from "react";
import { listarUsuarios } from "../services/UserService";

const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  const cargarUsuarios = async () => {
    setLoading(true);
    const { data, error } = await listarUsuarios();
    if (error) setErrors(error);
    else setUsuarios(data);
    setLoading(false);
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return {
    usuarios,
    error,
    loading,
    reload: cargarUsuarios,
    setUsuarios
  };
};

export default useUsuarios;
