import * as fs from 'node:fs';
import {HTTP_OK} from '@constants/api';

const sendLogoResponse = (logo: string) => {
  const readBuffer = fs.readFileSync(logo);

  return new Response(readBuffer, {
    status: HTTP_OK,
    headers: {
      'Content-type': 'image/jpeg',
    },
  });
};

export default sendLogoResponse;
