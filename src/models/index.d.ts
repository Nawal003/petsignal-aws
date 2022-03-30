import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Gender {
  MALE = "MALE",
  FEMELLE = "FEMELLE",
  INCONNU = "INCONNU"
}

export enum Animaltype {
  CHAT = "CHAT",
  CHIEN = "CHIEN",
  AUTRE = "AUTRE"
}

export enum Signaltype {
  PERDU = "PERDU",
  TROUVE = "TROUVE",
  VU = "VU"
}

export declare class GPSCOORDINATES {
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  constructor(init: ModelInit<GPSCOORDINATES>);
}

export declare class CLASSIFIED {
  readonly creationDate?: string | null;
  readonly userId?: string | null;
  readonly username?: string | null;
  readonly gpsCoordinates?: GPSCOORDINATES | null;
  readonly photo?: string | null;
  readonly comment?: string | null;
  constructor(init: ModelInit<CLASSIFIED>);
}

export declare class REPORT {
  readonly type?: Signaltype | keyof typeof Signaltype | null;
  readonly animalType?: Animaltype | keyof typeof Animaltype | null;
  readonly photo?: string | null;
  readonly animalName?: string | null;
  readonly age?: number | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly chip?: boolean | null;
  readonly identificationNumber?: string | null;
  readonly gpsCoordinates?: GPSCOORDINATES | null;
  readonly description?: string | null;
  constructor(init: ModelInit<REPORT>);
}

export declare class LOCATION {
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  constructor(init: ModelInit<LOCATION>);
}

type USERMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SIGNALMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class USER {
  readonly id: string;
  readonly lastname?: string | null;
  readonly firstname?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly group?: string | null;
  readonly active?: boolean | null;
  readonly gpsCoordinates?: GPSCOORDINATES | null;
  readonly creationDate?: string | null;
  readonly validationDate?: string | null;
  readonly telephone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<USER, USERMetaData>);
  static copyOf(source: USER, mutator: (draft: MutableModel<USER, USERMetaData>) => MutableModel<USER, USERMetaData> | void): USER;
}

export declare class SIGNAL {
  readonly id: string;
  readonly creationDate?: string | null;
  readonly idUser?: string | null;
  readonly username?: string | null;
  readonly userEmail?: string | null;
  readonly telephone?: string | null;
  readonly location?: LOCATION | null;
  readonly report?: REPORT | null;
  readonly classified?: CLASSIFIED | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SIGNAL, SIGNALMetaData>);
  static copyOf(source: SIGNAL, mutator: (draft: MutableModel<SIGNAL, SIGNALMetaData>) => MutableModel<SIGNAL, SIGNALMetaData> | void): SIGNAL;
}