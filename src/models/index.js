// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "MALE": "MALE",
  "FEMELLE": "FEMELLE",
  "INCONNU": "INCONNU"
};

const Animaltype = {
  "CHAT": "CHAT",
  "CHIEN": "CHIEN",
  "AUTRE": "AUTRE"
};

const Signaltype = {
  "PERDU": "PERDU",
  "TROUVE": "TROUVE",
  "VU": "VU"
};

const { USER, SIGNAL, GPSCOORDINATES, CLASSIFIED, REPORT, LOCATION } = initSchema(schema);

export {
  USER,
  SIGNAL,
  Gender,
  Animaltype,
  Signaltype,
  GPSCOORDINATES,
  CLASSIFIED,
  REPORT,
  LOCATION
};