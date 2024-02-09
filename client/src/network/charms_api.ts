import { User } from "../models/users";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw new Error(errorMessage);
  }
}

export async function getLoggedInUser(): Promise<User> {
  const response = await fetchData("/api/users/", { method: "GET" });
  return response.json();
}

export interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
  const response = await fetchData("/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return response.json();
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export async function login(credentials: LoginCredentials): Promise<User> {
  const response = await fetchData("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return response.json();
}

export async function logout() {
  await fetchData("/api/users/logout", { method: "POST" });
}

export async function fetchCharms() {
  try {
    const response = await fetch("/api/charms", { method: "GET" });
    const charms = await response.json();
    return charms;
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

export async function fetchCharm(slug: string) {
  try {
    const response = await fetch(`/api/charms/${slug}`, { method: "GET" });
    const charm = await response.json();
    return charm;
  } catch (error) {
    console.error(error);
    alert(error);
  }
}
