// 로그인 화면

import { CustomCard, CustomContainer } from "../components/Style"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



// 공통 스타일로 꾸미기
const Login = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <h3>Login</h3>

        <Form>
          <Form.Group className="mb-3" controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>패스워드</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Button variant="secondary" type="submit">로그인</Button>

        </Form>


      </CustomContainer>
    </CustomCard>
    
  )
}

export default Login