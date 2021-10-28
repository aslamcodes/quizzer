import axios from "axios";
import { useEffect, useState } from "react";
export function useAxiosQuiz(
  amount: string,
  category: string
): [boolean, QuizData, boolean] {
  const [isLoading, setIsLoading] = useState(false);
  const [quizData, setQuizData] = useState({});
  const [error, setError] = useState<any>();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`
        );
        const data = await response?.data;
        setQuizData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [amount, category]);

  return [isLoading, quizData as QuizData, error];
}

export interface Quiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  chosen_answer?: boolean;
  options: string[];
}

export interface QuizData {
  response_code: number;
  results: Quiz[];
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
