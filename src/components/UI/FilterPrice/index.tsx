"use client";

import { filterByPrice } from "@/redux/features/productsSlice";
import { useAppDispatch } from "@/redux/typed-hooks";
import type { PriceInput } from "@/types";
import { useId, useState } from "react";

const FilterPrice = ({ label, breakPoint }: PriceInput) => {
  const priceId = useId();
  const [price, setPrice] = useState<number | boolean>(false);
  const dispatch = useAppDispatch();

  const onClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    setPrice(+e.currentTarget.value);
    dispatch(filterByPrice(+e.currentTarget.value));
  };
  return (
    <>
      <input
        type="radio"
        id={priceId}
        name="price"
        value={breakPoint}
        checked={price === breakPoint}
        onClick={onClickHandler}
        className="focus:ring-0 cursor-pointer"
      />
      <label htmlFor={priceId} className="ml-2">
        {label}
      </label>
    </>
  );
};

export default FilterPrice;
