import React, { FC } from "react";

export const ScoreCard: FC<ScoreCardProps> = ({
  score,
  noQuestions,
  percentage,
}) => {
  return (
    <>
      <div className="flex justify-between items-center px-32 py-20 ">
        <p className="text-2xl text-white">Your Score</p>
        <div className="flex justify-center items-center h-28 bg-green-900 text-red w-28 rounded-full text-3xl">
          <p>{score}/</p>
          <p>{noQuestions}</p>
        </div>

        <div className="text-white">
          <p>{percentage}%</p>
        </div>
      </div>
    </>
  );
};

interface ScoreCardProps {
  score: number;
  noQuestions: number;
  percentage: number;
}
