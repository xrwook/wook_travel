export {};

declare global {
  interface PollsData {
    getPolls: Array<{
      id: string;
      question: {
        title: string;
        episodes: Array<{
          order: number;
          episode: string;
        }>;
      };
      view: {
        count: number;
      };
      deadline: {
        kind: string;
        endTime: string;
      };
      summary: {
        result: string;
        optionalCount: Array<{
          title: string;
          order: number;
          count: number;
        }>;
      };
      participants: Array<{
        id: string;
        like: {
          up: number;
          down: number;
        };
        gender: string;
        vote: number;
        comment: string;
        nickName: string;
        replies: Array<{
          text: string;
          grant: 'MASTER' | 'public' | 'PARTICIPANT';
        }>;
        createAt: string;
      }>;
      createAt: string;
      userCount: number;
    }>;
  }

  interface PollByIdData {
    getPollById: {
      id: string;
      question: {
        title: string;
        episodes: Array<{
          order: number;
          episode: string;
        }>;
      };
      view: {
        count: number;
      };
      deadline: {
        kind: string;
        endTime: string;
      };
      summary: {
        result: string;
        optionalCount: Array<{
          title: string;
          order: number;
          count: number;
        }>;
      };
      participants: Array<{
        id: string;
        like: {
          up: number;
          down: number;
        };
        gender: string;
        vote: number;
        comment: string;
        nickName: string;
        replies: Array<{
          text: string;
          grant: 'MASTER' | 'public' | 'PARTICIPANT';
          createAt: string;
        }>;
        createAt: string;
      }>;
      createAt: string;
      userCount: number;
    };
  }
}

