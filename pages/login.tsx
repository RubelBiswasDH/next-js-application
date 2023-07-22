import { useEffect } from 'react'

// Import Components
import Link from 'next/link'
import { Form, Input, Button, Row, Col, Typography } from 'antd'
import { MailOutlined } from '@ant-design/icons'

const { Item } = Form
const { Title, Text } = Typography
const { Password } = Input

// Import Hooks
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/redux/store'

// Import Actions and Methods
import { login, isValidatedUser } from '@/redux/actions/authActions'

const Login = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	// Antd Use From Hook
	const [ form ] = Form.useForm()

	// On Form Submit
	const _onSubmit = (data: any) => {
		dispatch( login(data) )
	}

	// On Form Submit Error
	const _onSubmitError = (err: any) => {
		console.error(err)
	}

	useEffect(() => {
		const isVaildUser = dispatch( isValidatedUser() )
		if(isVaildUser){
		router.push('/')
		}
	}, [])

  return (
    <div className={ `bg-cover bg-center min-h-screen flex flex-row items-center justify-center lg:justify-end overflow-auto p-4 md:p-16 sm:p-8 xs:p-4 bg-[url('/images/login-bg.jpg')]` }>
		<div className='p-4 bg-opacity-50 rounded-lg shadow-2xl md:p-8 lg:p-16 lg:w-2/3 xl:w-1/3 md:w-2/3 sm:w-full bg-gradient-to-r from-green-20 to-green-10'>
			<Form
				form={ form }
				layout='vertical'
				size='large'
				onFinish={ _onSubmit }
				onFinishFailed={ _onSubmitError }
				validateTrigger='onChange'
			>
				<Item>
					<Title level={ 3 }>
						{ 'Login' }
					</Title>
				</Item>
				<Row gutter={[ 12, 0 ]}>	
					<Col span={ 24 }>
						<Item
							label={ <Text>{ 'Email' }</Text> }
							name='email'
							hasFeedback={ true }
							rules={[
								{ required: true, message: 'Please enter your Email.'},
								{ type: 'email', message: 'The input is not valid E-mail!' }
							]}
						>
							<Input
								suffix={ <MailOutlined style={{ color: '#ACACAC' }} /> }
								placeholder='Email'
							/>
						</Item>
					</Col>
					<Col span={ 24 }>
						<Item
							label={ <Text>{ 'Password' }</Text> }
							name='password'
							hasFeedback={ true }
							rules={[
								{ required: true, message: 'Please enter your Password.' }
							]}
						>
							<Password placeholder='Password' />
						</Item>
					</Col>
				</Row>
                <Item>
                    <div className='flex justify-end w-full'>
                        <Button
                            type='default'
                            htmlType='submit'
                        >
                            { 'Login' }
                        </Button>
                    </div>
                </Item>
				<Item>
					<div className='flex items-center justify-center gap-4'>
						<Typography>{ `Don't have an account yet?` }</Typography>
						<Link href={ '/registration' }>
							<Typography className='text-blue-400'>{ 'Register Now' }</Typography>
						</Link>
					</div>
				</Item>
			</Form>
		</div>	
    </div>
  )
}

export default Login