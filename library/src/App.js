import { useState } from 'react';
import './App.css';
// import Header from './component/Header';
// import Top_img from './component/Top_img';
function App() {
  const post = '강남 우동 맛집';
  let [글제목, 글제목수정] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);
  let [따봉, 따봉수정] = useState(0);
  return (
    <div>
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{ 따봉수정(따봉+1) }}>😊</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <span onClick={()=>{ 
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목수정(copy);
      }}>😊</span>
    </div>
  );
}

export default App;
