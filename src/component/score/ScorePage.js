import './ScorePage.css';


import * as React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: '최악이에요',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: '별로예요',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: '괜찮았어요',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: '좋았어요',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: '최고예요!',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <div class="p-3 d-flex flex-column align-items-center">
      <span {...other}>{customIcons[value].icon}</span>
      <span {...other}>{customIcons[value].label}</span>
    </div>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};




function App() {
  return (
      <div class="content d-flex flex-column align-items-center">
        <div class="container mt-5 d-flex ">
          <div class="profile p-2">
            <div class="profile-icon"></div>
            <div class="profile-name mt-4">이름</div>
          </div>
        </div>
      <div class="ScoreBox m-5 justify-content-center p-3">
        <p class="ml-4"> /이름/ 님과의 팀프로젝트는 어떠셨나요?</p>
        <div class="d-flex justify-content-center">
          <Rating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            highlightSelectedOnly
          />
        </div>
        <br />
        <div class="container mt-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-8">
              <div class="d-flex flex-column comment-section">
                  <div>
                  <p>세부적인 멘트를 남겨주세요!</p>
                  </div>
                  <div>
                      <div class="d-flex flex-row align-items-start"><textarea class="form-control ml-1 shadow-sm textarea"></textarea></div>
                      <div class="mt-2 text-right"><button class="btn btn-light btn-sm shadow-none" type="button">평가 완료 →</button></div>
                      {/* onClick => 평가점수, 코멘트 전송 및 저장 */}
                  </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
