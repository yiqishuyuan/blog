import type { Key, Value } from "./localStorage.d";

/**
 * 获取本地数据
 * @param key 需要的key值
 * @returns 返回对应的value值
 */
function getLocalStorage<T = Value>(key: Key): T | null {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }
  return null;
}

/**
 * 设置本地数据
 * @param key 需要的key值
 * @param value 需要存储的value值
 */
function setLocalStorage(key: Key, value: Value): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * 删除本地数据
 * @param key 设置的key值
 */
function removeLocalStorage(key: Key): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
}
export { getLocalStorage, setLocalStorage, removeLocalStorage };
