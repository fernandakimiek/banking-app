import axios from 'axios';

const signUp = async (email: string, name: string, password: string) => {
  console.log('registrou');
  await axios
    .post('https://6553607d5449cfda0f2e94f2.mockapi.io/users', {
      email,
      name,
      password,
    })
    .catch(() => {
      new Error('Erro no cadastro!');
    });
};

export const signUpService = {
  signUp,
};
