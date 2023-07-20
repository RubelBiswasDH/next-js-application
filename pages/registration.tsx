// Import Components
import Link from 'next/link'
import { Form, Input, Button, Row, Col, Typography } from 'antd'
import DebounceSearch from '@/components/common/DebounceSearch'
import { MailOutlined } from '@ant-design/icons'

const { Item } = Form
const { Title, Text } = Typography
const { Password } = Input

const Registration = () => {
	// Antd Use From Hook
	const [ form ] = Form.useForm()

	// On Form Submit
	const _onSubmit = (data: any) => {
		console.log({ data })
	}
	// On Form Submit Error
	const _onSubmitError = (err: any) => {
		console.error(err)
	}

  return (
    <div className={ `bg-cover bg-center min-h-screen flex flex-row items-center justify-center lg:justify-end overflow-auto p-4 md:p-16 sm:p-8 xs:p-4 bg-[url('/images/login-bg.jpg')]` }>
			<div className='p-4 bg-opacity-50 rounded-lg shadow-2xl md:p-8 lg:p-16 lg:w-1/2 md:w-2/3 sm:w-full bg-gradient-to-r from-green-20 to-green-10'>
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
								hasFeedback={ true }
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
									suffix={ <MailOutlined style={{ color: '#ACACAC' }} /> }
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
						<Col span={ 12 } xs={ 24 } sm={ 12 }>
							<Item
								label={ <Text>{ 'Retype Password' }</Text> }
								name='confirm_password'
								hasFeedback={ true }
								rules={[
									{ required: true, message: 'Please retype your Password.' },
									{ min: 6, message: 'Password must be at least 6 characters.' }
								]}
							>
								<Password placeholder='Retype Password' />
							</Item>
						</Col>
					</Row>
					<Item>
						<Button
							type='default'
							htmlType='submit'
						>
							{ 'Register' }
						</Button>
					</Item>
					<Item>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
							<Typography>{ 'Already have an account yet ?' }</Typography>
							<Link href={ '/login' }>
								<Typography>{ 'LOG IN' }</Typography>
							</Link>
						</div>
					</Item>
				</Form>
			</div>	
    </div>
  )
}

export default Registration