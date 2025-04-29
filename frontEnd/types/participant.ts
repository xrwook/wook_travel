export interface Like {
  up: number;
  down: number;
}

export interface Participant {
  id: string | null;
  nickName: string | null;
  comment: string | null;
  createAt: string | null;
  gender: string | null;
  like: Like | null;
  vote: number | null;
  poll_id?: string | null;
  replies?: Array<{
    text: string | null;
    grant: string | null;
    createAt: string | null;
  } | null> | null;
}

export interface CreateParticipantInput {
  poll_id: string;
  nickName: string;
  comment?: string;
  gender?: string;
  vote?: number;
}

export interface MutationResponse<T> {
  createParticipant: T;
}

