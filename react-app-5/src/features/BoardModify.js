import { CustomCard, CustomContainer } from "../components/Style"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import axios from "axios";
import { useParams } from "react-router-dom";

// 게시물 수정 화면 :
// 1. 게시물의 모든 데이터 출력
// 2. 특정 데이터 수정 가능

// 게시물 데이터 : 번호, 제목, 내용, 작성자, 등록일, 수정일
// 수정이 가능한 필드

// 가짜 데이터
// const board = {no :1, title:"1번", content:"1번입니다", writer:"마돈나" ,regDate:"2025-06-01", modDate:"2025-06-02"}

// 게시물 수정 화면
// 기존 게시물 데이터 조회
// 일부 데이터 수정 가능
// 수정 버튼을 클릭하면 게시물 데이터 업데이트

const BoardModify = () => {

  // board를 state로 변경
  let [board, setBoard] = useState(null)
  
  // api를 호출해서 데이터베이스에 있는 게시물 데이터 꺼내오기

  // api 기본 주소 가져오기
  const { host } = useContext(Context)

  // URL 주소에 포함되어 있는 no 파라미터 꺼내기
  const params = useParams()

  // axios를 사용해서 api 호출
  const apicall = async () => {
    // ex) board/read?no=1
    // 인자: URL 주소, 헤더(토큰)
    const response = await axios.get(`${host}/board/read?no=${params.no}`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NTAyOTY3NjUsImV4cCI6MTc1Mjg4ODc2NSwic3ViIjoiYWJjIn0.F4LL5PFsURKcNXxnNP7_n9HcXD5mx-9JcrwqxTUcdvo'
      }
    })

    // 상태 업데이트
    if (response.status === 200) {
      setBoard(response.data)
    }
  }
  
  // 컴포넌트가 처음 로드될 때 한번만 api를 호출
  useEffect(() => {
    apicall()
  }, [])

  // 사용자가 입력필드에서 값을 바꾸면 실행됨
  // 사용자가 입력한 내용을 다시 board state에 업데이트
  // 그러묜 변경된 내용이 화면에 나타남
  const handlerChange = (event) => {

    // 이벤트가 발생한 엘리먼트에서 필요한 데이터만 추출
    const { name, value, files } = event.target
    
    // 기존 게시물 복사
    const newBoard = { ...board }
    
    // 특정 프로퍼티만 교체
    // 예: newBoard[title] = 'abc'
    // newBoard[]
    newBoard[name] = value

    // 상태 업데이트
    setBoard(newBoard)

  }

  
  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 수정</h3>

        {
          board !== null &&
          <Form>
          <Form.Group className="mb-3" controlId="board.no">
            <Form.Label>번호</Form.Label>
            <Form.Control type="text" value={board.no} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.title">
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" value={board.title} name="title" onChange={ handlerChange }/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="board.content">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={3} value={board.content} name="content" onChange={ handlerChange }/> 
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.writer">
            <Form.Label>작성자</Form.Label>
            <Form.Control type="text" value={board.writer} readOnly/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="board.uploadFile">
            <Form.Label>이미지</Form.Label>
            <Form.Control type="file" name='uploadFile' onChange={ handlerChange }/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.regDate">
            <Form.Label>등록일</Form.Label>
            <Form.Control type="text" value={board.regDate} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.modDate">
            <Form.Label>수정일</Form.Label>
            <Form.Control type="text" value={board.modDate} readOnly />
          </Form.Group>

          <Button variant="secondary" type="submit">저장</Button>
          <Button variant="danger">삭제</Button>

        </Form>
        }


        

      </CustomContainer>
    </CustomCard>
  )
}

export default BoardModify