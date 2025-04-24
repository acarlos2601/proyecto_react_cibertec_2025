import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductos } from '../../store/ProductoStore/productoAction';

const Productos = () => {
    const dispatch = useDispatch();
    const { productos, productoSeleccionado, loading, error } = useSelector( (state) => state.productos )

    useEffect(() => {
        dispatch(fetchProductos())
      }, [dispatch])

  return (
    <div >Productos</div>
  )
}

export default Productos