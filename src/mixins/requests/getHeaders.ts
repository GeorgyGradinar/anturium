import {person} from "@/stores/person";
import {storeToRefs} from "pinia";

export default function getHeaders(payload: any) {
  const personStore = person();
  const {token} = storeToRefs(personStore)
  const headers = {};

  payload.forEach(headerElement => {
    if (headerElement.key === 'Authorization') {
      headers[headerElement.key] = `${token.value}`;
    } else {
      headers[headerElement.key] = headerElement.body;
    }
  });
  return {headers}
}
