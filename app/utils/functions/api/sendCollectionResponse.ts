import {ApiCollection} from '@appTypes/api';

const sendCollectionResponse = <T>(data: T[], code: number) => {
  const collectionReturn: ApiCollection<T> = {
    type: 'collection',
    count: data.length,
    items: data,
  };

  return Response.json(collectionReturn, {status: code});
};

export default sendCollectionResponse;
