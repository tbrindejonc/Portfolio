import {ApiCollection} from '@appTypes/api';
import {HTTP_OK} from '@constants/api';

const sendCollectionResponse = <T>(data: T[]) => {
  const collectionReturn: ApiCollection<T> = {
    type: 'collection',
    count: data.length,
    items: data,
  };

  return Response.json(collectionReturn, {status: HTTP_OK});
};

export default sendCollectionResponse;
