import { formatDate, formatDistanceToNow, isValid, parse } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 * string 날짜 Date로 변경
 * @param date string
 * @param format string, default: "YYYY-MM-DD HH:mm:ss"
 * @returns { Date } 변경된 날짜
 */
export const strToDate = (
  date: string,
  format: string = 'yyyy-MM-dd HH:mm:ss',
): Date => {
  const parsedDate = parse(date, format, new Date());

  // 유효한 날짜인지 확인
  if (!isValid(parsedDate)) {
    return new Date();
  }

  return parsedDate;
};

/**
 * Date 객체를 원하는 형식의 문자열로 변환
 * @param date Date
 * @param format string, default: "yyyy-MM-dd HH:mm:ss"
 * @returns { string } 변환된 날짜 문자열
 */
export const dateToStr = (
  date: Date,
  format: string = 'yyyy-MM-dd HH:mm:ss',
): string => {
  try {
    return formatDate(date, format);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

/**
 * string 날짜를 원하는 형식으로 변환
 * @param date string
 * @param format string, default: "YYYY-MM-DD HH:mm:ss"
 * @returns { string } 변환된 날짜 문자열
 */
export const formattedDate = (
  date: string | undefined | null,
  format: string = 'yyyy-MM-dd HH:mm:ss',
): string => {
  if (!date) return '';
  const parsedDate = strToDate(date, format);
  return dateToStr(parsedDate, format);
}

/**
 * 날짜를 '방금 전', 'N분 전' 등의 상대적 시간으로 표시
 * @param date Date 객체 또는 날짜 문자열
 * @returns { string } 상대적 시간 문자열
 */
export const timeAgo = (date: Date | string): string => {
  try {
    const targetDate = typeof date === 'string' ? strToDate(date) : date;

    if (!isValid(targetDate)) {
      return '';
    }

    return formatDistanceToNow(targetDate, { addSuffix: true, locale: ko });
  } catch (error) {
    console.error('Error calculating time ago:', error);
    return '';
  }
};

/**
 * 숫자에 천 단위 콤마 추가 (예: 1000 -> 1,000)
 * @param num 포맷팅할 숫자
 * @returns { string } 포맷팅된 문자열
 */
export const formatNumber = (num: number): string => {
  if (num === undefined || num === null) return '0';
  return new Intl.NumberFormat('ko-KR').format(num);
};

/**
 * 문자열을 지정된 길이로 자르고 말줄임표 추가
 * @param str 원본 문자열
 * @param maxLength 최대 길이
 * @returns { string } 잘린 문자열
 */
export const truncateString = (str: string, maxLength: number = 100): string => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return `${str.substring(0, maxLength)}...`;
};

/**
 * 디바운스 함수 (연속 호출 방지)
 * @param func 실행할 함수
 * @param wait 대기 시간 (ms)
 * @returns { Function } 디바운스된 함수
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function(...args: Parameters<T>): void {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * 쓰로틀 함수 (일정 시간 동안 최대 1번만 실행)
 * @param func 실행할 함수
 * @param limit 제한 시간 (ms)
 * @returns { Function } 쓰로틀된 함수
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number = 300
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;

  return function(...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

/**
 * 로컬 스토리지에서 데이터 가져오기 (자동 파싱)
 * @param key 스토리지 키
 * @param defaultValue 기본값
 * @returns { any } 저장된 값 또는 기본값
 */
export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;

    try {
      return JSON.parse(item);
    } catch (parseError) {
      if (typeof defaultValue === 'string') {
        return item as unknown as T;
      }
      console.error('Error parsing JSON from localStorage:', parseError);
      return defaultValue;
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

/**
 * 로컬 스토리지에 데이터 저장 (자동 직렬화)
 * @param key 스토리지 키
 * @param value 저장할 값
 */
export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

/**
 * 유니크 ID 생성
 * @returns { string } 유니크 ID
 */
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

/**
 * 객체에서 빈 값 제거
 * @param obj 입력 객체
 * @returns { object } 빈 값이 제거된 객체
 */
export const removeEmpty = (obj: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = {};

  Object.keys(obj).forEach(key => {
    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
      result[key] = obj[key];
    }
  });

  return result;
};

/**
 * 객체 깊은 복사
 * @param obj 복사할 객체
 * @returns { T } 복사된 객체
 */
export const deepCopy = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};
