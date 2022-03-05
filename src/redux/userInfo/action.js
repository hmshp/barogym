export const SET_UID = 'USER_INFO/SET_UID'


export function setUid(uid) {
  return {
      type : SET_UID,
      uid : uid
  };
}


