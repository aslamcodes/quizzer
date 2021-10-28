import { useParams } from "react-router-dom";
import { useAxiosQuiz } from "../../hooks/useAxiosQuiz";
import { QuizPanel } from "../common";

export const Quiz = () => {
  const { amount, category } =
    useParams<{ amount: string; category: string }>();
  const [isLoading, quizData, error] = useAxiosQuiz(amount, category);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }
  if (quizData.results)
    return (
      <div>
        <QuizPanel quizData={quizData} />
      </div>
    );
  return <></>;
};
