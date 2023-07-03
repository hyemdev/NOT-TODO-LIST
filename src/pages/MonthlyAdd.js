import React from "react";
import MonthlyList from "../components/MonthlyList";
import MonthlyForm from "../components/MonthlyForm";
import {
  AddTable,
  AddTableTr,
  AddTableThead,
  AddTitle,
  MonthlyAddWrap,
  AddTableThDate,
  AddTableThTitle,
  AddTableThNumber,
  AddTableThBtn,
  AddTitleDiv,
} from "../style/MonthlyAddCSS";

const MonthlyAdd = ({ todoData, setTodoData }) => {
  return (
    <div>
      <MonthlyAddWrap>
        <AddTitleDiv>
          <AddTitle>한달목표 설정하기</AddTitle>
        </AddTitleDiv>
        <AddTable>
          <AddTableThead>
            <AddTableTr>
              <AddTableThDate>기간</AddTableThDate>
              <AddTableThTitle>월간목표</AddTableThTitle>
              <AddTableThNumber>단위</AddTableThNumber>
              <AddTableThNumber>수량</AddTableThNumber>
              <AddTableThBtn></AddTableThBtn>
              <AddTableThBtn></AddTableThBtn>
            </AddTableTr>
          </AddTableThead>
        </AddTable>
        <MonthlyList todoData={todoData} setTodoData={setTodoData} />
        <MonthlyForm todoData={todoData} setTodoData={setTodoData} />
      </MonthlyAddWrap>
    </div>
  );
};

export default MonthlyAdd;
