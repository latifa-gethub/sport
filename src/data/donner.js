import { USER_MAIN_DATA } from './data';
import { USER_ACTIVITY } from './data';
import { USER_AVERAGE_SESSIONS } from './data';
import { USER_PERFORMANCE } from './data';

/* const choix = false; */

export async function getUser(userId, choix) {
  let data;
  if (choix) {
    data = USER_MAIN_DATA.find(user => user.id === userId);
    if (data != null) {
      return data;
    } else {
      return false;
    }
  } else {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      if (response.ok) {
        data = await response.json();
        return data.data;
      } else if (response.status === 404) {
        return false;
      }
    } catch (error) {
    /*   console.error('erreur', error); */
      return "erreur serveur"
    }
  }
}
/**getUser activity************ */
export async function getUserActivity(userId, choix) {
  let data;
  if (choix) {
    const data = USER_ACTIVITY.find(userA => userA.userId === userId);
    return data;
  } else {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/activity`
      );
      if (response.ok) {
        data = await response.json();
        return data.data;
      } else if (response.ok === 404) {
        return false;
      }
    } catch (error) {
      /* console.error('erreur', error); */
    }
  }
}

/**getUser avarage sessions************ */
export async function getUSER_AVERAGE_SESSIONS(userId, choix) {
 
  let data;
  if (choix) {
    const data = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);

    return data.sessions;
  } else {
    try{
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    if (response.ok) {
      data = await response.json();

      return data.data.sessions;
    } else if (response.ok === 404) {
      return false;
    }
  } catch (error) {
    /* console.error('erreur', error); */
  }
  }
}
/**getUser performance************ */
export async function getUSER_PERFORMANCE(userId, choix) {
  let data;
  if (choix) {
    const data = USER_PERFORMANCE.find(user => user.userId === userId);

    return data;
  } else {
    try{
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    if(response.ok){
      data = await response.json();
    return data.data;
    }else if(response.ok===404){
      return false
    }
  } catch (error) {
   /*  console.error('erreur', error); */
  }
  }
}
