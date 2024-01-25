import { USER_MAIN_DATA } from './data';
import { USER_ACTIVITY } from './data';
import { USER_AVERAGE_SESSIONS } from './data';
import { USER_PERFORMANCE } from './data';

const choix = true;

export function getUser(userId) {
  let data ;
  if (choix) {
    data = USER_MAIN_DATA.find(user => user.id === userId);
    return data.userInfos.firstName;
  }  /* else {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    data = await response.json();
    console.log('mes data avec fetch', data);
  }  */

  /* return data.userInfos.firstName; */
}

export function getUserActivity(userId) {
  const dataUserActivity = USER_ACTIVITY.find(userA => userA.userId === userId);

  return dataUserActivity;
}

export function getUSER_AVERAGE_SESSIONS(userId) {
  const dataUser = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);

  return dataUser.sessions;
}

export function getUSER_PERFORMANCE(userId) {
  const userPerformance = USER_PERFORMANCE.find(user => user.userId === userId);
  console.log('user-performance', userPerformance);
  return userPerformance;
}

export function getScore(userId) {
  const infoUser = USER_MAIN_DATA.find(user => user.id === userId);

  return infoUser;
}

export function getKeyData(userId) {
  const infoUser = USER_MAIN_DATA.find(user => user.id === userId);
  const keyData = infoUser.keyData;

  return keyData;
}
