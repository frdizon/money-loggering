import { FC } from "react";
import { StyledPaper } from "./styles";
import CategoryItem from "../CategoryItem/CategoryItem";
import { TCategory } from "../../../../../../redux/categoryApi";

interface TCategoryListProps {
  categories: TCategory[];
}

const CategoryList: FC<TCategoryListProps> = ({ categories }) => {
  return (
    <StyledPaper elevation={0}>
      {categories.map((category) => (
        <CategoryItem key={category.id} name={category.name} />
      ))}
      {/* <CategoryItem name="Category 1" />
      <CategoryItem name="Category 2" /> */}
    </StyledPaper>
  );
};

export default CategoryList;
