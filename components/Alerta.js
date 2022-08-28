import { Alert } from "@mui/material"

const Alerta = ({mensaje}) => {
    return (
        <Alert severity = "success">
            {mensaje}
            </Alert>
    )
}
export default Alerta