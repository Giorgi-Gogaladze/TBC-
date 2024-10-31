import Cookies from "js-cookie";

export async function fetchUser() {
    const token = Cookies.get('accessToken');
  
    const response = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`profile info didn't fetch`);
    }
    return response.json();
  }
  