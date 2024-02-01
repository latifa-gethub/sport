import { USER_MAIN_DATA } from './data';
import { USER_ACTIVITY } from './data';
import { USER_AVERAGE_SESSIONS } from './data';
import { USER_PERFORMANCE } from './data';

/* const choix = false; */

export async function getUser(userId,choix) {
  
  let data;
  if (choix) {
    data = USER_MAIN_DATA.find(user => user.id === userId);
   
    return data;
  } else {
    try {
       const response = await fetch(`http://localhost:3000/user/${userId}`);
    data = await response.json();
  
    return data.data
    } catch (error) {
      console.error("erreur",error)
    }
   
  }
}
/**getUser activity************ */
export async function getUserActivity(userId,choix) {
  let data;
  if (choix) {
    const data = USER_ACTIVITY.find(userA => userA.userId === userId);
    return data;
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    data = await response.json();
    return data.data;
  }
}

/**getUser avarage sessions************ */
export async function getUSER_AVERAGE_SESSIONS(userId,choix) {
 
  let data;
  if (choix) {
    const data = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);
 
    return data.sessions;
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    data = await response.json();

    return data.data.sessions;
  }
}
/**getUser performance************ */
export async function getUSER_PERFORMANCE(userId,choix) {
  let data;
  if (choix) {
    const data = USER_PERFORMANCE.find(user => user.userId === userId);

    return data;
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    data = await response.json();
    return data.data;
  }
}
 
