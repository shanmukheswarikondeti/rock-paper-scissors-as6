import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid #ffffff;
  margin-top: 2%;
  width: 80%;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ScoreBoard = styled(ScoreNameContainer)`
  height: 100%;
  width: 15%;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  font-size: 20px;
  color: #223a5f;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled.p`
  font-size: 42px;
  color: #223a5f;
  margin-top: 0px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
