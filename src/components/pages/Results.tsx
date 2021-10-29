import { useLocation } from "react-router";
import { ScoreCard } from "../common";

export const Results = () => {
  const location = useLocation<{
    score: number;
    percentage: number;
    timeTaken: string;
    noQuestions: number;
  }>();
  const { score, timeTaken, percentage, noQuestions } = location.state;

  return (
    <div className="mx-auto w-9/12 bg-gray-500 rounded-md">
      <div>
        <ScoreCard
          score={score}
          noQuestions={noQuestions}
          percentage={percentage}
        />
      </div>
      <div>
        <p className="text-center text-white">Time Taken {timeTaken} seconds</p>
      </div>
    </div>
  );
};
