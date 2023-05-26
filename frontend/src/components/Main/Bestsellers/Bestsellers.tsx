import React from "react";
import { Products } from "../../../models/productModels";
import photo from "../../../images/no-image.jpg";
import sprite from "../../../images/svg-sprite/MenuSVG.svg";

import styled from "styled-components";
import { MenuSVG } from "../../Header/Header.styled";
import { Link } from "react-router-dom";

interface Props {
  products: Products | null;
}

export const Bestsellers: React.FC<Props> = ({ products }) => {
  if (!products?.results || products.results.length === 0) {
    return <p>No bestsellers found.</p>;
  }

  return (
    <BestsellersList>
      {products.results.slice(0, 3).map(({ name, id, price, photos, slug }) => {
        return (
          <BestsellersItem key={id}>
            <RedirectLink to={`/product/${slug}`}>
              <ImageBlock>
                <HeartBlock>
                  <Link to="/">
                    <MenuSVG>
                      <use href={sprite + "#Heart"}></use>
                    </MenuSVG>
                  </Link>
                </HeartBlock>
                {photos[0].image ? (
                  <Image src={photos[0].image} width="300" height="275" />
                ) : (
                  <Image src={photo} width="300" height="275" />
                )}
              </ImageBlock>
              <ProductName>{name}</ProductName>
              <PriceBlock>
                <Price>{price} грн</Price>
                <Link to="/">
                  <MenuSVG>
                    <use href={sprite + "#Bag"}></use>
                  </MenuSVG>
                </Link>
              </PriceBlock>
            </RedirectLink>
          </BestsellersItem>
        );
      })}
    </BestsellersList>
  );
};

const BestsellersList = styled.ul`
  display: flex;
  margin-bottom: 100px;
`;

const BestsellersItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const RedirectLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const HeartBlock = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
`;

const Image = styled.img`
  width: 275px;
  height: 300px;
`;
const ImageBlock = styled.div`
  position: relative;
`;

const ProductName = styled.p`
  font-family: "MontserratRegular";
  font-size: 16px;
  line-height: 22px;
  margin-top: 10px;
`;

const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.p`
  font-family: "NEXT-ART_BOLD";
  font-size: 16px;
  line-height: 22px;
  margin-top: 9px;
`;
