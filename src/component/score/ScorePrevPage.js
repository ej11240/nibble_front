import './ScorePrevPage.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div class="container mt-5 d-flex justify-content-center">
        <div class="card p-3 justify-content-center align-items-center">
          <h4 class="mb-0 mt-0">프로필 자리</h4>
        </div>
      </div>
    <div class="sp-bubble">
      <p> /이름/ 님과 /과목/ 수업 팀플을 함께 한 지 한달이 되었어요!</p>
      <p> /이름/ 님은 어떤 분이셨나요?</p> <br />
      <Link to="/score" class="ScoreLink">평가하러 가기</Link>
    </div>
    </div>
  );
}

export default App;
