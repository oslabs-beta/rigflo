import objects from '../utils/objects';
import { normalize } from '../utils/normalize';

const loadDocument = (set) => (json) => {
  const doc = Object.assign(objects.document(), json);
  const normed = normalize(doc);
  set(normed);
};

export default {
  loadDocument,
};
