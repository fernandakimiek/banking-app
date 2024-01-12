import axios from 'axios';
import {AuthData} from '../contexts/Auth';

type User = {
  id: Number;
  createdAt: Date;
  name: String;
  avatar: String;
  email: String;
  password: String;
};

const signIn = async (email: string, password: string): Promise<AuthData> => {
  const {data, status} = await axios.get(
    'https://6553607d5449cfda0f2e94f2.mockapi.io/users',
  );
  let usersFound: Array<any | User>;

  if (status === 200) {
    usersFound = data.filter((user: {email: string}) => user.email === email);
  }

  return new Promise((resolve, reject) => {
    const userFound = usersFound[0];
    setTimeout(() => {
      if (userFound.password === password) {
        resolve({
          token: JWTTokenMock,
          ...userFound,
        });
      } else {
        reject(new Error('credenciais incorretas'));
      }
    }, 1000);
  });
};

export const authService = {
  signIn,
};

const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
