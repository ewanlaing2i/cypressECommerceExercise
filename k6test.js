import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 5,
    duration: '60s'
}

export default function (){
  let res = http.get('https://www.edgewordstraining.co.uk/demo-site/my-account/');
  console.log(res.status);

  check(res, {
    'Post response is 200': (r) => res.status === 200,
  });

  sleep(5);
}