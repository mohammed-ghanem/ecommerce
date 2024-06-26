import { Button, Col, Form, Row, Alert, Spinner } from 'react-bootstrap';
import { signInSchema, signInType } from "@validations/signInValidation"
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputForm from '@components/form/InputForm';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { actAuthLogin, restUI } from '@store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';


const Login = () => {
  const { error, loading } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const { handleSubmit, register, formState: { errors }, } = useForm<signInType>(
    {
      resolver: zodResolver(signInSchema),
      mode: "onChange"
    }
  )

  const submitForm: SubmitHandler<signInType> = (data) => {
    if (searchParams.get("message") === "account_created") {
      setSearchParams("")
    }
    dispatch(actAuthLogin(data)).unwrap().then(() => navigate("/"))
  }

  useEffect(() => {
    return () => {
      dispatch(restUI())
    }
  }, [dispatch])

  return (
    <Row>

      <Col md={{ span: 6, offset: 3 }}>

        {searchParams.get("message") === "account_created"
          &&
          (<Alert variant='success'>
            your account is created successfully please login in </Alert>
          )
        }
        <h3>Login Page</h3>

        <Form onSubmit={handleSubmit(submitForm)}>

          <InputForm
            register={register}
            Placeholder='Email Address'
            label="Email Address"
            name={'email'}
            error={errors.email?.message}
          />
          <InputForm
            register={register}
            Placeholder='Password'
            label="Password"
            name='password'
            error={errors.password?.message}
            type='password'
          />

          <Button variant="primary" type="submit">
            {loading === "pending" ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading...
              </>
            ) : (
              "Submit"
            )}
          </Button>
          {error && (
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
          )}
        </Form>
      </Col>
    </Row>
  )
}

export default Login