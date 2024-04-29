import {personsStore} from "@/stores/person";
import {storeToRefs} from "pinia";

export default function getHeaders(payload: any) {
  const personStore = personsStore();
  const {token} = storeToRefs(personStore)
  const headers: {[key: string]:any} = {};

  payload.forEach((headerElement: any) => {
    if (headerElement.key === 'Authorization') {
      headers[headerElement.key] = `${token.value}`;
    } else {
      headers[headerElement.key] = headerElement.body;
    }
  });

  return {headers}
}
