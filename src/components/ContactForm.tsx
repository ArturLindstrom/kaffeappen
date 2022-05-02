const Form = () => (
    <form>
        <input type="text" placeholder="e-post" />
        <button type="submit">Skicka</button>
    </form>
)

const ConfirmationText = () => (
    <h1>tack för din mamma!</h1>
)

const ContactForm = ({isSent}: any) => {
    return isSent ? <ConfirmationText /> : <Form />
}

export default ContactForm
    