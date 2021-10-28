import { useState } from "react";

export const QuizCard = ({
  option,
  onSelectOption,
  isCorrectAnswer,
  isAnswered,
  isAnsweredCorrect,
}: QuizCardProps) => {
  function getClassNames() {
    if (!isAnsweredCorrect && isCorrectAnswer && isAnswered) {
      return "bg-red-600";
    }
  }
  return (
    <div
      className={`bg-gray-500 rounded my-2 p-3 text-lg transform transition duration-100 ${
        isCorrectAnswer && isAnswered && "bg-green-400 "
      } ${!isAnsweredCorrect && isCorrectAnswer && isAnswered && "bg-red-600"}`}
      onClick={() => {
        onSelectOption(option);
      }}
    >
      <p dangerouslySetInnerHTML={{ __html: option }} />
    </div>
  );
};

interface QuizCardProps {
  option: string;
  onSelectOption: (prevOption: string) => void;
  isCorrectAnswer: boolean;
  isAnswered: boolean;
  isAnsweredCorrect: boolean;
}
