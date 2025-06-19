import React from 'react'
import Form from 'react-bootstrap/Form';
import { CustomCard, CustomContainer } from '../components/Style';
import Button from 'react-bootstrap/Button';


const Reigster = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <h3>Reigster</h3>

        <Form>
          {/* Group컴포넌트 : div 태그 */}
          <Form.Group className="mb-3" controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="member.neme">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="member.check">
            <Form.Check
              type="radio"
              label="사용자"
              id="member.role1"
              name='role'
          />
          <Form.Check
              type="radio"
              label="관리자"
              id="member.role2"
              name='role'
          />
          </Form.Group>

          <Button variant="secondary" type='submit'>등록</Button>

        </Form>
        
      </CustomContainer>
    </CustomCard>
    
  )
}

export default Reigster;