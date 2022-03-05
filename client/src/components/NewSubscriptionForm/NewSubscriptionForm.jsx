import { useContext, useState } from "react"
import { Form } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"

const NewSubscriptionForm = () => {

    const { user } = useContext(AuthContext)

    const [subscriptionState, setSubscriptionState] = useState({
        coRenter: '',
        house: '',
        totalPrice: '',
        totalDays: '',
        daysLeftToBook: ''
    })

    return (
        <Form></Form>
    )

}

export default NewSubscriptionForm