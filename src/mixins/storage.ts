export default function storage() {

  function setLocalStorage(KEY: string, value: any) {
    localStorage.setItem(KEY, JSON.stringify(value));
  }

  function getLocalStorage(KEY: string) {
    const saved: any = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : '';
  }

  return {setLocalStorage, getLocalStorage}
}
