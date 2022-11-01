import axios from "axios";

type RequestParams = {
  amount: number;
  difficulty: string;
};

export const getQuiz = async (params: RequestParams) => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${[params.amount]}&difficulty=${
        params.difficulty
      }&type=multiple`
    );
    return response.data;
  } catch (error) {
    console.error("get quiz api error: ", error);
    return [];
  }
};

export default {};