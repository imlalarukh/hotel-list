import * as React from "react";
import { useState, useEffect } from "react";
import * as Styled from "./styled";
import { v4 as uuid } from "uuid";

interface RatingProps {
  rating: number;
  type: string;
}

const Rating: React.FunctionComponent<RatingProps> = (props: RatingProps) => {
  const [ratingIcon, setRatingIcon] = useState(
    props.type == "star" ? "\u2605" : "\u25CF"
  );

  const totalStars = 5;

  // finding integer part of the number
  const [filledIconCount, setFilledIconCount] = useState(
    Math.trunc(props.rating)
  );

  // finding if there is a decimal part of the number
  const [halfFilledIconCount, setHalfFilledIconCount] = useState(
    props.rating - Math.floor(props.rating) > 0 ? 1 : 0
  );

  // empty stars would be (5 minus given rating integer part)
  const [emptyIconCount, setEmptyIconCount] = useState(
    Math.floor(totalStars - props.rating)
  );

  useEffect(() => {
    console.log("full", Math.trunc(props.rating));
    console.log("half", props.rating - Math.floor(props.rating) > 0 ? 1 : 0);
    console.log("empty", Math.floor(totalStars - props.rating));
  }, [props.rating]);

  return (
    <>
      <Styled.RatingContainer>
        {[...new Array(totalStars)].map((arr, index) => {
          return (
            <>
              {index <= filledIconCount - 1 && (
                <Styled.RatingIcon
                  rated={true}
                  key={index}
                  className="full-icon"
                >
                  {ratingIcon}
                </Styled.RatingIcon>
              )}

              {halfFilledIconCount > 0 &&
                ((filledIconCount == 0 && index == totalStars - 1) ||
                  index == filledIconCount - 1) && (
                  // there can be only a single half rating
                  <Styled.RatingIconHalf
                    data-content={ratingIcon}
                    key={index + 1}
                    className="half-icon"
                  >
                    {ratingIcon}
                  </Styled.RatingIconHalf>
                )}

              {emptyIconCount > 0 &&
                ((filledIconCount == 0 && index == totalStars - 1) ||
                  index == filledIconCount - 1) &&
                // empty can be more than one, so looping
                [...new Array(emptyIconCount)].map((arr, emptyIndex) => {
                  return (
                    <Styled.RatingIcon
                      rated={false}
                      key={index + 1 + emptyIndex}
                      className="empty-icon"
                    >
                      {ratingIcon}
                    </Styled.RatingIcon>
                  );
                })}
            </>
          );
        })}
      </Styled.RatingContainer>
    </>
  );
};

export default Rating;
