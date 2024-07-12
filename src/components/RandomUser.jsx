import axios from "axios";
import { useEffect, useState } from "react";

export const RandomUser = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        //Definir una función asíncrona para la petición que le vamos a hacer a la API
        const fetchData = async () => {
            try {
                //Realizar la petición a la API
                const response = await axios.get("https://api.randomuser.me");
                //Extraer los datos de la petición
                const data = response.data;

                //Formato de los datos a mostrar
                const userData = {
                    name: data.results[0].name,
                    email: data.results[0].email,
                    gender: data.results[0].gender,
                    phone: data.results[0].phone,
                    picture: data.results[0].picture.large,
                    age: data.results[0].dob.age,
                    location: data.results[0].location.city,
                    nationality: data.results[0].nat,
                };
                console.log(userData)
                //Actualizar el estado con los datos obtenidos
                setUser(userData);
            } catch (error) {
                console.error("Error al consultar los datos de la API", error);
            }
        };
        //Llamar a la función asíncrona para obtener los datos
        fetchData();
        //Se crea un intervalo para que cambie el usuario
        /*  const intervalId = setInterval(fetchData, 20000);
         return () => clearInterval(intervalId); //Liberar el intervalo cuando se desmonta el componente */
    }, []); //Array de dependencias vacío para que useEffect se ejecute una vez

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <h1>RandomUser</h1>

            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <img src={user?.picture} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{user?.name.first}</h4>
                        <p className="card-text">
                            Some the cards content.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
