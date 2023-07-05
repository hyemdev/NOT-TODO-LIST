import React from "react";
import MemoSection from "../components/MemoSection";
import BriefSection from "../components/BriefSection";
import DailySection from "../components/DailySection";
import {
  MainFlex,
  MainRight,
  MainWrap,
  MainLeft,
  BriefData,
  Memo,
} from "../style/MainCSS";

const Main = ({ todoData, setTodoData }) => {
  return (
    <MainWrap>
      <MainFlex>
        <MainLeft>
          {/*  컴포넌트 */}
          <DailySection todoData={todoData} setTodoData={setTodoData} />
        </MainLeft>
        <MainRight>
          <Memo>
            {/* 컴포넌트 */}
            <MemoSection />
          </Memo>
          <BriefData>
            {/* 컴포넌트 */}
            <BriefSection />
          </BriefData>
        </MainRight>
      </MainFlex>
    </MainWrap>
  );
};

export default Main;
