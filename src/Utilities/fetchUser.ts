import Cookies from "js-cookie";
import { UserData } from "@/Components/Header/Authentication/interfaces/user";

export async function fetchUser(): Promise<UserData> {
    const token = Cookies.get('accessToken');

    if (!token) {
      throw new Error("Access token is missing. Please log in again.")
    }
  
    const response = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      const errorDetail = await response.text()
      throw new Error(`failed to fetch profile info. status: ${response.status}. Details: ${errorDetail}`)
    }
    
    try{
      return await response.json();
    } catch (error) {
      throw new Error("Failed to parse user data. Please try again.")
    }
  }
  