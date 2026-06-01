const API_URL = "http://localhost:8001/api";

export type Comment = {
  id: number;
  name: string;
  role: string;
  message: string;
  rate: number;
  created_at: string;
};

export async function fetchComments(): Promise<Comment[]> {
  try {
    const res = await fetch(`${API_URL}/comments/`, { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch (e) {
    console.error("Erreur fetchComments:", e);
    return [];
  }
}

export async function postComment(data: {
  name: string;
  role: string;
  email: string;
  message: string;
  rate: number;
}): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/comments/create/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch (e) {
    console.error("Erreur postComment:", e);
    return false;
  }
}

export async function postContact(data: {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch (e) {
    console.error("Erreur postContact:", e);
    return false;
  }
}