import { defineStore } from 'pinia';

export type ConfirmType = 'success' | 'info' | 'warning' | 'error';

interface Footer {
  label: string;
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  color?: string;
  handler: () => void;
}

interface ModalOptions {
  title: string;
  description: string;
  type?: ConfirmType;
  footers?: Footer[];
  persistent?: boolean;
  width?: string;
}

export const useConfirmStore = defineStore('confirm', {
  state: () => ({
    visible: false,
    title: '',
    description: '',
    type: 'info' as ConfirmType,
    footers: [] as Footer[],
    persistent: false,
    width: '400'
  }),

  actions: {
    /**
     * 모달 표시
     * @param options 모달 옵션
     */
    showModal(options: ModalOptions) {
      this.title = options.title;
      this.description = options.description;
      this.type = options.type || 'info';
      this.footers = options.footers || [];
      this.persistent = options.persistent || false;
      this.width = options.width || '400';
      this.visible = true;
    },

    /**
     * 모달 닫기
     */
    closeModal() {
      this.visible = false;
    }
  }
});
