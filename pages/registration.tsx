import { useEffect } from 'react'

// Import Components
import Link from 'next/link'
import { Form, Input, Button, Row, Col, Typography } from 'antd'
import DebounceSearch from '@/components/common/DebounceSearch'

// Import Hooks
import { useAppDispatch } from '@/redux/store'
import { useRouter } from 'next/router'

// Import Actions and Utils
import { registration, isValidatedUser } from '@/redux/actions/authActions'

// Constants
const { Item } = Form
const { Title, Text } = Typography
const { Password } = Input

const Registration = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	
	// Antd Use From Hook
	const [ form ] = Form.useForm()

	// On Form Submit
	const _onSubmit = (values: any) => {
		const data = {
			...values,
			address: values?.address?.value ?? '' 
		}
		dispatch( registration(data) )
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
		<div className='p-4 bg-opacity-50 rounded-lg shadow-2xl md:p-8 lg:p-8 xl:p-16 lg:w-1/2 md:w-2/3 sm:w-full bg-gradient-to-r from-green-20 to-green-10'>
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
						{ 'Register' }
					</Title>
				</Item>
				<Row gutter={[ 12, 0 ]}>
					<Col span={ 12 } xs={ 24 } sm={ 12 }>
						<Item
							label={ <Text>{ 'Name' }</Text> }
							name='name'
							rules={[
								{
									required: true,
									message: 'Please enter your Name.'
								}
							]}
						>
							<Input placeholder='Name' />
						</Item>
					</Col>
					<Col span={ 12 }  xs={ 24 } sm={ 12 }>
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
								placeholder='Email'
							/>
						</Item>
					</Col>
					<Col span={ 12 } xs={ 24 } sm={ 12 }>
						<Item
							label={ <Text>{ 'Phone' }</Text> }
							name='phone'
							hasFeedback={ true }
							rules={[
								{ required: true, message: 'Please enter your Phone.' },
								{ pattern: new RegExp(/^(?:(?:\+|00)88|01)?\d{11}$/), message: 'Invalid Phone Number' }
							]}
						>
							<Input placeholder='Phone' />
						</Item>
					</Col>
				<Col span={ 12 } xs={ 24 } sm={ 12 }>
					<Item
						label="Address"
						name="address"
						rules={[]}
					>
						<DebounceSearch
							placeholder="Address"
							name="address"
							style={{ width: '100%' }}
						/>
					</Item>
				</Col>
					<Col span={ 12 } xs={ 24 } sm={ 12 }>
						<Item
							label={ <Text>{ 'Password' }</Text> }
							name='password'
							hasFeedback={ true }
							rules={[
								{ required: true, message: 'Please enter your Password.' },
								{ min: 6, message: 'Password must be at least 6 characters.' }
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
							{ 'Register' }
						</Button>
					</div>
				</Item>
				<Item>
					<div className='flex items-center justify-center gap-4'>
						<Typography>{ 'Already have an account ?' }</Typography>
						<Link href={ '/login' }>
							<Typography className='text-blue-400'>{ 'Log In' }</Typography>
						</Link>
					</div>
				</Item>
			</Form>
		</div>	
    </div>
  )
}

export default Registration