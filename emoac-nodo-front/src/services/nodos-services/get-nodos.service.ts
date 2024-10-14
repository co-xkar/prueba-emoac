import { GET_NODOS_PATH } from '../../constants/api.constants';
import { getNodoDto } from '../../types/dto/get-nodos.dto';
import api from '../axios.client';

export const getNodos = async (): Promise<getNodoDto[]> => {
  const response = await api.get<getNodoDto[]>(GET_NODOS_PATH);
  console.log(response);
  return response.data;
};
