import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import { Button } from "../UI";

const options: Option[] = [
  { value: "18", label: "Computer Science" },
  { value: "31", label: "Anime & Manga" },
  { value: "19", label: "Mathematics" },
];

export const Categorizer = () => {
  const [selectedCategory, setSelectedCategory] = useState<SingleValue<Option>>(
    options[0]
  );
  const [questionsCount, setQuestionsCount] = useState("10");
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="w-full flex flex-col items-center  gap-7 bg-gray-200 px-10 py-10 rounded-lg"
      onSubmit={submitHandler}
    >
      <div className="flex gap-8 justify-between w-full">
        <p>Category</p>
        <Select
          options={options}
          className="w-10/12"
          value={selectedCategory}
          onChange={(value) => {
            setSelectedCategory(value);
          }}
        />
      </div>
      <div className="flex gap-8 justify-between w-full">
        <p>No of Questions</p>
        <input
          type="number"
          max={50}
          min={10}
          value={questionsCount}
          onChange={(e) => {
            setQuestionsCount(e.target.value);
          }}
          className="border-2 h-full w-10/12 px-2 py-1"
        />
      </div>
      <div>
        <Button>
          <Link to={`/quiz/${selectedCategory?.value}/${questionsCount}`}>
            Take Quiz
          </Link>
        </Button>
      </div>
    </form>
  );
};

interface Option {
  value: string;
  label: string;
}
