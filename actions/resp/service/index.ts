import {ChannelEnum, IKeys} from '../../../interfaces';
import {ServiceResp, ServiceRespAction} from '../../../interfaces/resp/service';


export const actionServiceLoggedIn = (): ServiceRespAction => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceResp.LOGGED_IN};
};

export const keysServiceLoggedIn = (): IKeys => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceResp.LOGGED_IN};
};
