import { AuthContext } from "../../context/auth.context"
import { useContext } from "react"

const PruebaUser = () => {

    const { session } = useContext(AuthContext)

    console.log(session)

    return (
        <>
            {
                !session ? <h1>Logeate zorra</h1> :


                    session.isVillage
                        ?
                        <h1>Bienvenido {session.name}</h1>
                        :
                        <>
                            <h1>Bienvenid@ {session.firstName} {session.lastName}</h1>
                            <p>{session._id}</p>
                        </>

            }

        </>
    )
}

export default PruebaUser