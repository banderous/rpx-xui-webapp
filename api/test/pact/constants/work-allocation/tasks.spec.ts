import { ACTIONS } from './actions.spec';

const KILI_MUSO = {
  id: '1604075580956811',
  caseReference: '1604 0755 8095 6811',
  caseName: 'Kili Muso',
  caseCategory: 'Grant of representation',
  location: 'Taylor House',
  taskName: 'Apply for probate',
  dueDate: new Date(1604938789000),
  actions: [ ACTIONS.REASSIGN, ACTIONS.RELEASE ]
};

const MANKAI_LIT = {
  id: '2345678901234567',
  caseReference: '2345 6789 0123 4567',
  caseName: 'Mankai Lit',
  caseCategory: 'Revocation',
  location: 'Taylor House',
  taskName: 'Review appellant case',
  dueDate: new Date(1604506789000),
  actions: [ ACTIONS.RELEASE ]
};

const BOB_CRATCHITT = {
  id: '3456789012345678',
  caseReference: '3456 7890 1234 5678',
  caseName: 'Bob Cratchit',
  caseCategory: 'Protection',
  location: 'Taylor Swift',
  taskName: 'Review respondent evidence',
  dueDate: new Date(),
  actions: [ ACTIONS.REASSIGN, ACTIONS.RELEASE ]
};

const EBENEZER_SCROOGE = {
  id: '4567890123456789',
  caseReference: '4567 8901 2345 6789',
  caseName: 'Ebenezer Scrooge',
  caseCategory: 'Revocation',
  location: 'Bleak House',
  taskName: 'Review appellant case',
  dueDate: new Date(),
  actions: [ ACTIONS.RELEASE ]
};

const OLIVER_TWIST = {
  id: '5678901234567890',
  caseReference: '5678 9012 3456 7890',
  caseName: 'Oliver Twist',
  caseCategory: 'Protection',
  location: 'Orphanage',
  taskName: 'Give more gruel',
  dueDate: new Date(new Date().getTime() + (86400 * 5000)),
  actions: [ ACTIONS.REASSIGN, ACTIONS.RELEASE ]
};

const DAVID_COPPERFIELD = {
  id: '6789012345678901',
  caseReference: '6789 0123 4567 8901',
  caseName: 'David Copperfield',
  caseCategory: 'Revocation',
  location: 'Taylor House',
  taskName: 'Review appellant case',
  dueDate: new Date(1604506789000),
  actions: [ ACTIONS.REASSIGN ]
};

const BRAD_REQUEST = {
  id: '400',
  caseReference: '0400 0400 0400 0400',
  caseName: 'Brad Request',
  caseCategory: 'Will Fail',
  location: 'Dodgy Location',
  taskName: 'Assess errors',
  dueDate: new Date(),
  actions: [ ACTIONS.REASSIGN ]
};

const AL_REDDY_DUNNE = {
  id: '204',
  caseReference: '0204 0204 0204 0204',
  caseName: 'Al Reddy-Dunne',
  caseCategory: 'Will Fail',
  location: 'Dodgy Location',
  taskName: 'Assess errors',
  dueDate: new Date(),
  actions: [ ACTIONS.REASSIGN ]
};

const NAT_ALLOWED = {
  id: '403',
  caseReference: '0403 0403 0403 0403',
  caseName: 'Nat Allowed',
  caseCategory: 'Will Fail',
  location: 'Dodgy Location',
  taskName: 'Assess errors',
  dueDate: new Date(),
  actions: [ ACTIONS.REASSIGN ]
};

const ANNE_SUPPORTED = {
  id: '415',
  caseReference: '0415 0415 0415 0415',
  caseName: 'Anne Supported',
  caseCategory: 'Will Fail',
  location: 'Dodgy Location',
  taskName: 'Assess errors',
  dueDate: new Date(),
  actions: [ ACTIONS.REASSIGN ]
};

const SIR_VAN_ERROR = {
  id: '500',
  caseReference: '0500 0500 0500 0500',
  caseName: 'Sir Van Error',
  caseCategory: 'Will Fail',
  location: 'Dodgy Location',
  taskName: 'Assess errors',
  dueDate: new Date(),
  actions: [ ACTIONS.REASSIGN ]
};

const SORTED_BY_CASE_REFERENCE = [
  AL_REDDY_DUNNE, BRAD_REQUEST, NAT_ALLOWED, ANNE_SUPPORTED, SIR_VAN_ERROR,
  KILI_MUSO, MANKAI_LIT, BOB_CRATCHITT, EBENEZER_SCROOGE, OLIVER_TWIST, DAVID_COPPERFIELD
];

const SORTED_BY_CASE_NAME = [
  AL_REDDY_DUNNE, ANNE_SUPPORTED, BOB_CRATCHITT, BRAD_REQUEST, DAVID_COPPERFIELD,
  EBENEZER_SCROOGE, KILI_MUSO, MANKAI_LIT, NAT_ALLOWED, OLIVER_TWIST, SIR_VAN_ERROR
];

const SORTED_BY_CATEGORY = [
  KILI_MUSO, BOB_CRATCHITT, OLIVER_TWIST, DAVID_COPPERFIELD, EBENEZER_SCROOGE, MANKAI_LIT,
  AL_REDDY_DUNNE, BRAD_REQUEST, NAT_ALLOWED, ANNE_SUPPORTED, SIR_VAN_ERROR
];

const SORTED_BY_LOCATION = [
  EBENEZER_SCROOGE, AL_REDDY_DUNNE, BRAD_REQUEST, NAT_ALLOWED, ANNE_SUPPORTED,
  SIR_VAN_ERROR, OLIVER_TWIST, KILI_MUSO, DAVID_COPPERFIELD, MANKAI_LIT, BOB_CRATCHITT
];

const SORTED_BY_TASK = [
  KILI_MUSO, AL_REDDY_DUNNE, BRAD_REQUEST, NAT_ALLOWED, ANNE_SUPPORTED, SIR_VAN_ERROR,
  OLIVER_TWIST, EBENEZER_SCROOGE, DAVID_COPPERFIELD, MANKAI_LIT, BOB_CRATCHITT
];

const SORTED_BY_DUE_DATE = [
  MANKAI_LIT, DAVID_COPPERFIELD, KILI_MUSO, BOB_CRATCHITT, EBENEZER_SCROOGE,
  AL_REDDY_DUNNE, BRAD_REQUEST, NAT_ALLOWED, ANNE_SUPPORTED, SIR_VAN_ERROR, OLIVER_TWIST
];

export const TASKS = {
  BOB_CRATCHITT,
  DAVID_COPPERFIELD,
  EBENEZER_SCROOGE,
  KILI_MUSO,
  MANKAI_LIT,
  OLIVER_TWIST
};

export const BAD_TASKS = {
  BRAD_REQUEST,
  AL_REDDY_DUNNE,
  NAT_ALLOWED,
  ANNE_SUPPORTED,
  SIR_VAN_ERROR
}


export const ALL_TASKS = {
  ...TASKS,
  ...BAD_TASKS
};

export const TASKS_SORTED_BY = {
  caseReference: [ ...SORTED_BY_CASE_REFERENCE ],
  caseName: [ ...SORTED_BY_CASE_NAME ],
  caseCategory: [ ...SORTED_BY_CATEGORY ],
  location: [ ...SORTED_BY_LOCATION ],
  taskName: [ ...SORTED_BY_TASK ],
  dueDate: [ ...SORTED_BY_DUE_DATE ]
};

export const UNAVAILABLE_TASKS = {
  caseReference: 400,
  caseName: 401,
  caseCategory: 403,
  location: 500,
  taskName: [ ...SORTED_BY_TASK ],
  dueDate: [ ...SORTED_BY_DUE_DATE ]
};
