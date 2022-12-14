import { useState } from 'react';
import './App.css';
// import Header from './component/Header';
// import Top_img from './component/Top_img';
function App() {
  const post = '강남 우동 맛집';
  let [글제목, 글제목수정] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);
  let [글순서, 글순서수정] = useState(0);
  let [따봉, 따봉수정] = useState([0,0,0]);
  let [modal, setModal] = useState(true);
  return (
    <div>
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4><span onClick={()=>{
                글순서수정(i);
              }}>
                { a }</span>
              <span onClick={()=>{ 
                let copy = [...따봉];
                copy[i] = copy[i]+1
                따봉수정(copy) 
                }}>😊</span> {따봉[i]} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{ 따봉수정(따봉+1) }}>😊</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]} <span onClick={()=>{ 
          modal == true ? setModal(false) : setModal(true)
        }}>❤️</span> </h4>
        <p>2월 17일 발행</p>
      </div>
      {
        modal==true ? <Modal 글제목={글제목} 글순서 = {글순서}/> : null
      } 


      <span onClick={()=>{ 
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목수정(copy);
      }}>😊</span>
    </div>
  );
}

function Modal(props){
  return(
    <div>
      <div className="modal">
        <h4>{props.글제목[props.글순서]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  )
}
export default App;
