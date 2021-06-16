import React from 'react';
import Header from '../components/header'

function MainPage( { location, history}) {
  // location과 history 
  // 기본적으로 가지고 있는 props

  // console.log(history);
  // console.log(location);

  return (
    <>
      <Header location={location} history={history}/>
      <div>메인 페이지</div>
    </>
  );
}

export default MainPage;