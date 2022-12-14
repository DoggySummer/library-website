//이 파일은 props를 사용해야 하지만 귀찮으므로 그냥 복붙합니다. component로서 기능하지 않습니다.

function App() {
  const post = '강남 우동 맛집';
  let [글제목, 글제목수정] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);
  let [글순서, 글순서수정] = useState(0);
  let [따봉, 따봉수정] = useState([0,0,0]);
  let [modal, setModal] = useState(true);
  let [입력값, 입력값수정] = useState('');
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
              <button onClick={()=>{
                let tmp글제목 = [...글제목];
                tmp글제목.splice(i,1);
                글제목수정(tmp글제목);
                let tmp따봉 = [...따봉];
                tmp따봉.splice(i,1);
                따봉수정(tmp따봉);
              }}>삭제</button>
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

      <input onChange={(e)=>{
        입력값수정(e.target.value);
      }} />
      <button onClick={()=>{
        let copy = [...글제목];
        copy.push(입력값);
        글제목수정(copy);
        let thumbAdd = [...따봉];
        thumbAdd.push(0);
        따봉수정(thumbAdd);
      }
      }>글발행</button>
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