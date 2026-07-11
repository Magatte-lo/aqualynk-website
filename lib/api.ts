// lib/api.ts
import { ref, push, onValue, get, query, orderByChild, DataSnapshot } from 'firebase/database';
import { db } from './firebase';

export type Comment = {
  id: number | string;
  name: string;
  role: string;
  message: string;
  rate: number;
  created_at: string;
  email?: string;
};

/**
 * Récupère tous les commentaires depuis Firebase Realtime Database
 * Tries par date décroissante (plus récents en premier)
 */
export async function fetchComments(): Promise<Comment[]> {
  try {
    const commentsRef = ref(db, 'commentaires');
    const snapshot: DataSnapshot = await get(commentsRef);
    
    if (!snapshot.exists()) {
      return [];
    }

    const data = snapshot.val();
    const comments: Comment[] = Object.entries(data).map(([id, value]) => {
      const c = value as Comment;
      return {
        id,
        name: c.name || '',
        role: c.role || 'Utilisateur',
        message: c.message || '',
        rate: c.rate || 5,
        created_at: c.created_at || new Date().toISOString(),
      };
    });

    // Trier par date décroissante (plus récent en premier)
    comments.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return comments;
  } catch (error) {
    console.error('Erreur fetchComments:', error);
    return [];
  }
}

/**
 * Ajoute un nouveau commentaire dans Firebase Realtime Database
 */
export async function postComment(data: {
  name: string;
  role: string;
  email: string;
  message: string;
  rate: number;
}): Promise<boolean> {
  try {
    const commentsRef = ref(db, 'commentaires');
    await push(commentsRef, {
      name: data.name.trim(),
      role: data.role.trim() || 'Utilisateur',
      email: data.email.trim(),
      message: data.message.trim(),
      rate: data.rate,
      created_at: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error('Erreur postComment:', error);
    return false;
  }
}