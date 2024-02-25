import {TextFromApi, TextFromDatabase, TextWhenDeleted} from '@schemas/api/text/text.schema';

/**
 * Format a text for the api return
 *
 * @param {TextFromDatabase} text the text to format
 * @param {boolean} isDeleted if the text is deleted
 *
 * @returns {TextFromApi | TextWhenDeleted} the formatted text
 */
const formatTextForApi = (text: TextFromDatabase, isDeleted: boolean = false): TextFromApi | TextWhenDeleted => {
  if (isDeleted) {
    return {
      english: text.english,
      french: text.french,
      id: text.id,
    } as TextWhenDeleted;
  }

  return {
    english: text.english,
    french: text.french,
    id: text.id,
    links: {
      self: {
        method: 'GET',
        href: `/api/texts/${text.id}`,
      },
      update: {
        method: 'PUT',
        href: `/api/texts/${text.id}`,
      },
      delete: {
        method: 'DELETE',
        href: `/api/texts/${text.id}`,
      },
    },
  } as TextFromApi;
};

export default formatTextForApi;
