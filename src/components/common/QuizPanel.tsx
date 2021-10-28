import React, { useEffect, useState } from "react";
import { QuizCard } from ".";
import { QuizData } from "../../hooks/useAxiosQuiz";
import { Button } from "../UI";

export const QuizPanel = ({ quizData }: QuizPanelProps) => {
  const [questionNum, setQuestionNum] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [isAnsweredCorrect, setIsAnsweredCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const { results: questions } = quizData;
  const correctAnswer = questions[questionNum].correct_answer;

  useEffect(() => {
    setOptions(
      shuffle([
        ...questions[questionNum]?.incorrect_answers,
        questions[questionNum].correct_answer,
      ])
    );
  }, [questionNum, questions]);

  const onSelectOption = (selectedOption: string) => {
    if (selectedOption === correctAnswer && !isAnswered) {
      setIsAnsweredCorrect(true);
      increaseScore();
    }
    setIsAnswered(true);

    console.log(isAnsweredCorrect, isAnswered, score);
  };

  const nextQuestion = () => {
    setQuestionNum((prev) => (prev < questions?.length - 1 ? prev + 1 : prev));
    setIsAnswered(false);
    setIsAnsweredCorrect(false);
  };

  const increaseScore = () => {
    !isAnswered && setScore((prev) => prev + 1);
  };

  return (
    <div className="mx-auto w-10/12 flex flex-col mt-32 bg-gray-900 rounded py-6 px-10 text-white">
      <div className="bg-gray-600 p-3 mb-3 rounded-md text-lg">
        <p
          dangerouslySetInnerHTML={{ __html: questions[questionNum].question }}
        />
      </div>
      <div>
        {options.map((option) => (
          <QuizCard
            key={option}
            option={option}
            onSelectOption={onSelectOption}
            isCorrectAnswer={correctAnswer === option}
            isAnswered={isAnswered}
            isAnsweredCorrect={isAnsweredCorrect}
          />
        ))}
      </div>
      <div className="text-right">
        <Button onClick={nextQuestion}>Next</Button>
      </div>
    </div>
  );
};

export interface QuizPanelProps {
  quizData: QuizData;
}

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
