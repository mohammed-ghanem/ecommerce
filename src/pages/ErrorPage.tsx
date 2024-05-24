import { Link, useRouteError, isRouteErrorResponse  } from "react-router-dom"
import { Container } from "react-bootstrap"
const ErrorPage = () => {

    const error = useRouteError()
    let errorStatus: number;
    let errorStatusText: string;

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorStatusText = error.statusText;
      } else {
        errorStatus = 404;
        errorStatusText = "Page Not Found";
      }
    return (
        <Container>
            <h1>{errorStatus}</h1>
            <p>{errorStatusText}</p>
            <Link to="/" replace={true}>
                How about going back to safety?
            </Link>
        </Container>

    )
}

export default ErrorPage