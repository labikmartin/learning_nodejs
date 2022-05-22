import { STATUS } from '../constants/status-codes';
import { isRoot } from '../utils';
import { routes } from './routes';

export const routing = (req, res) => {
  const { url, method } = req;

  if (isRoot(url)) {
    res.write(routes.root.template);

    return res.end();
  }

  if (url === routes.message.path && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString('utf-8');

      console.log(parsedBody);
    });

    res.statusCode = STATUS.REDIRECT_FOUND;
    res.setHeader('Location', routes.message.path);

    return res.end();
  }

  if (url === routes.message.path) {
    res.write(routes.message.template);

    return res.end();
  }
};
