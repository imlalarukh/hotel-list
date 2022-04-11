import * as React from "react";
import * as Styled from "./styled";
import Rating from "../rating/rating";
import { IHotelData } from "../../services/interface/hotelDataInterface";

interface HotelProps {
  hotelData: IHotelData;
}

const Hotel: React.FunctionComponent<HotelProps> = (props: HotelProps) => {
  const hotelData = props.hotelData;

  return (
    <Styled.MainContainer>
      <Styled.ImageContainer id="imageContainer">
        <Styled.PreviewImage
          src={hotelData.property.previewImage.url}
          alt={hotelData.property.previewImage.caption}
        ></Styled.PreviewImage>
        <Styled.TextOverImage>
          {hotelData.offer.promotion.title}
        </Styled.TextOverImage>
      </Styled.ImageContainer>
      <Styled.DetailContainer id="detailContainer">
        <Styled.TopRow>
          <Styled.Title>{hotelData.property.title}</Styled.Title>
          <Styled.Rating>
            <Rating
              rating={hotelData.property.rating.ratingValue}
              type={hotelData.property.rating.ratingType}
            ></Rating>
          </Styled.Rating>
        </Styled.TopRow>
        <Styled.Address>
          {hotelData.property.address.map((i) => i).join(",  ")}
        </Styled.Address>
        <Styled.RoomName>{hotelData.offer.name}</Styled.RoomName>

        {hotelData.offer.cancellationOption &&
          hotelData.offer.cancellationOption.cancellationType ==
            "FREE_CANCELLATION" && (
            <Styled.CancelationText className="cancellation-text">
              Free cancellation
            </Styled.CancelationText>
          )}
      </Styled.DetailContainer>
      <Styled.PriceContainer id="priceContainer">
        <Styled.PerNight>1 night total(AUD)</Styled.PerNight>
        <Styled.Price>
          <Styled.Currency>
            <sup>$</sup>
          </Styled.Currency>
          <Styled.Amount>{hotelData.offer.displayPrice.amount}</Styled.Amount>
        </Styled.Price>
        {hotelData.offer.savings && (
          <Styled.Savings className="savings-amount">
            Save ${hotelData.offer.savings.amount} <sup>~</sup>
          </Styled.Savings>
        )}
      </Styled.PriceContainer>
    </Styled.MainContainer>
  );
};

export default Hotel;
