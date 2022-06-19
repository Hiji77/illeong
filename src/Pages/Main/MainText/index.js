import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const MainText = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Body>
      <TextContainer>
        <LeftAlignContaienr larger>
          <Title data-aos="fade" data-aos-duration="1000">
            새롭게 일렁이다는
          </Title>
          <Title data-aos="fade" data-aos-duration="1000" data-aos-delay="200">
            과거를 기억하고 이를 현재에 적용하여
          </Title>
          <Title data-aos="fade" data-aos-duration="1000" data-aos-delay="400">
            더 나은 미래를 만드는데 일조하고자 합니다.
          </Title>
        </LeftAlignContaienr>
        <RightAlignContainer>
          <div data-aos="fade-left" data-aos-duration="1000">
            <div>
              과거 독립 보훈 우리의 선조들이 세상에 삶을 내던져 일었던
              '일렁임'을 기억합니다.
            </div>
            <div>
              대학가요,재 당시 대학 대중 문화의 기틀을 만든 대학가요제를
              기억합니다.
            </div>
          </div>
        </RightAlignContainer>
        <LeftAlignContaienr>
          <div data-aos="fade-right" data-aos-duration="1000">
            현재
            <div>
              독립 보훈 오늘 우리가 발 딛고 사는 이 나라, 이 자유는 대가 없는
              것이 아닙니다.
            </div>
            <div>
              대학가요 사라진 '대중'을 되찾기 위해 멈춰버린 대학가요제의 새로운
              재계를 도모합니다.
            </div>
          </div>
        </LeftAlignContaienr>
        <RightAlignContainer>
          <div data-aos="fade-left" data-aos-duration="1000">
            <div>
              미래 독립 보훈 <br />이 사실을 모두가 보내는 하루와 <br />그 삶
              속에서 자연스레 느끼며 <br />
              호흡할 수 있도록 할 것입니다.
            </div>
          </div>
          <br />
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
            대학가요,재를 통해 새로운 <br />
            대학 대중문화를 만들 것이며, <br />
            이를 통해, 새로운 K-문화의 반열에
            <br />
            '대학 대중 문화'가 오를 것입니다.
          </div>
        </RightAlignContainer>
      </TextContainer>
    </Body>
  );
};

export default MainText;
const Body = styled.div`
  width: 1120px;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
`;

const LeftAlignContaienr = styled.div`
  text-align: start;
  font-size: ${({ theme, larger }) =>
    larger ? theme.fontLarge : theme.fontSemiMedium};
  margin: 40vh 0;
`;
const RightAlignContainer = styled.div`
  text-align: end;
  font-size: ${({ theme }) => theme.fontSemiMedium};
  margin: 40px;
`;

const Title = styled.div`
  line-height: 170%;
  font-weight: 300;
`;
