import { ConflictError, NotFoundError } from "@/components/errors/http_errors";
import { User } from "../models/users";

// credentials fetch?
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

  if (response.ok) {
    return response.json();
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    if (response.status === 409) {
      throw new ConflictError(errorMessage);
    } else {
      throw new Error(
        "Request failed with status code: " +
          response.status +
          "message: " +
          errorMessage
      );
    }
  }
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

export async function fetchCharmsOfType(type: string | null) {
  const response = await fetch(`/api/charms/${type}`, { method: "GET" });
  if (response.ok) {
    const charmTypes = await response.json();
    return charmTypes;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    if (response.status === 404) {
      console.error(errorMessage);
      throw new NotFoundError(errorMessage);
    } else {
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
}

export async function fetchCharm(
  type: string | null,
  slug: string | undefined
) {
  try {
    const response = await fetch(`/api/charms/${type}/${slug}`, {
      method: "GET",
    });
    const charm = await response.json();
    return charm;
  } catch (error) {
    console.error(error);
    alert(error);
  }
}
