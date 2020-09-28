import React from 'react';
import styled from 'styled-components';

const main = () => {
  const MainStyle = styled.div`
    margin: 30px 80px;
  `;
  const SectionStyle = styled.div`
    margin: 30px 0;
  `;
  const AdImageStyle = styled.div`
    background-image: url('images/ad1.jpg');
    height: 350px;
    border-radius: 20px;
    margin: 40px 0;
    background-size: 100% 100%;
  `;
  const MainTitleStyle = styled.div`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin: 0 0 20px 0;
  `;
  const MainSubStyle = styled.div`
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  `;
  const CardBosStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;
  const CardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 1px solid rgb(212, 210, 210);
    border-radius: 6px;
    box-shadow: 0 0 3px 0 rgb(172, 170, 170);
  `;
  const CardImgStyle = styled.img`
    height: 70px;
    background-size: 100% 100%;
  `;
  const CardContentStyle = styled.div`
    display: grid;
    align-items: center;
    font-weight: 600;
    margin: 0 0 0 10px;
  `;
  const ChooseBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;
  const ChooseImgStyle = styled.img`
    height: 250px;
    background-size: 100% 100%;
  `;
  const AdImage2Style = styled.div`
    margin: 20px 0;
    background-image: url(images/ad2.png);
    height: 300px;
    background-size: 100% 100%;
  `;
  const WorldBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;
  const WorldStyle = styled.div``;
  const WorldImgStyle = styled.img`
    height: 180px;
    background-size: 100% 100%;
  `;
  const WorldInfoStyle = styled.div``;
  const Info1Style = styled.div`
    margin: 5px 0;
    font-size: 13px;
    color: gray;
  `;
  const Info2Style = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: rgb(61, 60, 60);
  `;
  const Info3Style = styled.div`
    display: flex;
    font-size: 12px;
  `;
  const InfoStarStyle = styled.div`
    padding-right: 10px;
    font-size: 12px;
    color: rgb(30, 119, 115);
    font-weight: 800;
  `;
  const InfoCountStyle = styled.div`
    padding-right: 10px;
  `;

  return (
    <MainStyle>
      <SectionStyle>
        <MainTitleStyle>에어비앤비 둘러보기</MainTitleStyle>
        <CardBosStyle>
          <CardStyle>
            <CardImgStyle src="images/card1.jpg"></CardImgStyle>
            <CardContentStyle>숙소 및 부티크 호텔</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <CardImgStyle src="images/card2.jpg"></CardImgStyle>
            <CardContentStyle>트립</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <CardImgStyle src="images/card3.jpg"></CardImgStyle>
            <CardContentStyle>어드벤처</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <CardImgStyle src="images/card4.jpg"></CardImgStyle>
            <CardContentStyle>레스토랑</CardContentStyle>
          </CardStyle>
        </CardBosStyle>
      </SectionStyle>
      <AdImageStyle></AdImageStyle>
      <SectionStyle>
        <MainTitleStyle>추천 여행지</MainTitleStyle>
        <ChooseBoxStyle>
          <ChooseImgStyle src="images/choo1.png"></ChooseImgStyle>
          <ChooseImgStyle src="images/choo2.png"></ChooseImgStyle>
          <ChooseImgStyle src="images/choo3.png"></ChooseImgStyle>
          <ChooseImgStyle src="images/choo4.png"></ChooseImgStyle>
          <ChooseImgStyle src="images/choo5.png"></ChooseImgStyle>
        </ChooseBoxStyle>
      </SectionStyle>
      <SectionStyle>
        <MainTitleStyle style={{ margin: 0 }}>
          에어비앤비 플러스를 만나보세요!
        </MainTitleStyle>
        <MainSubStyle>
          퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션
        </MainSubStyle>
        <AdImage2Style></AdImage2Style>
      </SectionStyle>
      <SectionStyle>
        <MainTitleStyle>전세계 숙소</MainTitleStyle>
        <WorldBoxStyle>
          <WorldStyle>
            <WorldImgStyle src="images/home1.png"></WorldImgStyle>
            <WorldInfoStyle>
              <Info1Style>오두막 · BALIAN BEACH, BALI</Info1Style>
              <Info2Style>BALIAN TREEHOUSE w beautiful pool</Info2Style>
              <Info3Style>
                <InfoStarStyle>★★★★★</InfoStarStyle>
                <InfoCountStyle>185</InfoCountStyle>
                <div>슈퍼호스트</div>
              </Info3Style>
            </WorldInfoStyle>
          </WorldStyle>
          <WorldStyle>
            <WorldImgStyle src="images/home2.png"></WorldImgStyle>
            <WorldInfoStyle>
              <Info1Style>키클라데스 주택 · 이아(OIA)</Info1Style>
              <Info2Style>Unique Architecture Cave House</Info2Style>
              <Info3Style>
                <InfoStarStyle>★★★★★</InfoStarStyle>
                <InfoCountStyle>188</InfoCountStyle>
                <div>슈퍼호스트</div>
              </Info3Style>
            </WorldInfoStyle>
          </WorldStyle>
          <WorldStyle>
            <WorldImgStyle src="images/home3.png"></WorldImgStyle>
            <WorldInfoStyle>
              <Info1Style>성 · 트웬티나인 팜스(TWENTYNINE PALMS)</Info1Style>
              <Info2Style>Tile House</Info2Style>
              <Info3Style>
                <InfoStarStyle>★★★★★</InfoStarStyle>
                <InfoCountStyle>367</InfoCountStyle>
                <div>슈퍼호스트</div>
              </Info3Style>
            </WorldInfoStyle>
          </WorldStyle>
          <WorldStyle>
            <WorldImgStyle src="images/home4.png"></WorldImgStyle>
            <WorldInfoStyle>
              <Info1Style>검증됨 · 케이프타운</Info1Style>
              <Info2Style>
                Modern, Chic Penthouse with Mountain, City & Sea Views
              </Info2Style>
              <Info3Style>
                <InfoStarStyle>★★★★★</InfoStarStyle>
                <InfoCountStyle>177</InfoCountStyle>
                <div>슈퍼호스트</div>
              </Info3Style>
            </WorldInfoStyle>
          </WorldStyle>
          <WorldStyle>
            <WorldImgStyle src="images/home5.png"></WorldImgStyle>
            <WorldInfoStyle>
              <Info1Style>아파트 전체 · 마드리드(MADRID)</Info1Style>
              <Info2Style>솔광장에 위치한 개인 스튜디오</Info2Style>
              <Info3Style>
                <InfoStarStyle>★★★★★</InfoStarStyle>
                <InfoCountStyle>459</InfoCountStyle>
                <div>슈퍼호스트</div>
              </Info3Style>
            </WorldInfoStyle>
          </WorldStyle>
          <WorldStyle>
            <WorldImgStyle src="images/home6.png"></WorldImgStyle>
            <WorldInfoStyle>
              <Info1Style>집 전체 · HUMAC</Info1Style>
              <Info2Style>Vacation house in etno-eco village Humac</Info2Style>
              <Info3Style>
                <InfoStarStyle>★★★★★</InfoStarStyle>
                <InfoCountStyle>119</InfoCountStyle>
                <div>슈퍼호스트</div>
              </Info3Style>
            </WorldInfoStyle>
          </WorldStyle>
          <WorldStyle>
            <WorldImgStyle src="images/home7.png"></WorldImgStyle>
            <WorldInfoStyle>
              <Info1Style>개인실 · 마라케시</Info1Style>
              <Info2Style>The Cozy Palace</Info2Style>
              <Info3Style>
                <InfoStarStyle>★★★★★</InfoStarStyle>
                <InfoCountStyle>559</InfoCountStyle>
                <div>슈퍼호스트</div>
              </Info3Style>
            </WorldInfoStyle>
          </WorldStyle>
          <WorldStyle>
            <WorldImgStyle src="images/home8.png"></WorldImgStyle>
            <WorldInfoStyle>
              <Info1Style>게스트용 별채 전체 · 로스앤젤레스</Info1Style>
              <Info2Style>Private Pool House with Amazing Views!</Info2Style>
              <Info3Style>
                <InfoStarStyle>★★★★★</InfoStarStyle>
                <InfoCountStyle>170</InfoCountStyle>
                <div>슈퍼호스트</div>
              </Info3Style>
            </WorldInfoStyle>
          </WorldStyle>
        </WorldBoxStyle>
      </SectionStyle>
    </MainStyle>
  );
};

export default main;
