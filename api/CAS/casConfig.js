import { CasAuthentication } from 'cas-authentication';

const casConfig = {
  casServerUrl: '---------', //need to put cas server url here
  serviceUrl: 'http://localhost:8080/holiday',
};

const casClient = new CasAuthentication(casConfig);

export default casClient;
