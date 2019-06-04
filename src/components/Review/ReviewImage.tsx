import React from "react";
import { Props as Review } from "./Review";

// view
import { Image } from "semantic-ui-react";

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

export const ReviewImage: React.FC<Pick<Review, "imageUrl">> = ({ imageUrl }) =>
  typeof imageUrl !== "undefined" ? (
    <Image src={imageUrl} size="medium" />
  ) : (
    <DefaultImage />
  );

export default ReviewImage;
