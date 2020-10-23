import React from "react";
import "./Categories.css";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비지니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const Categories = ({ onSelect, category }) => {
  return (
    <div className="Categories">
      {categories.map((cate, index) => {
        return (
          <div
            className={category == cate.name ? "cate on" : "cate"}
            key={index}
            onClick={() => {
              onSelect(cate.name);
            }}
          >
            {cate.text}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
