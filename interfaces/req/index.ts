import { RootReqAction } from './root';
import { WeatherReqAction } from './weather';

// combine all Request actions as one type
export type ReqAction = RootReqAction | WeatherReqAction;
