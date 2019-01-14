import {ChannelEnum, IKeys} from '../../../interfaces';
import {ServiceResp, ServiceRespAction} from '../../../interfaces/resp/service';
import {AccessToken} from '../../../interfaces/tokens';

export const actionServiceRegister = (token: AccessToken, issuer: string): ServiceRespAction => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceResp.REGISTER, token, issuer};
};

export const actionServiceUnregister = (token: AccessToken, issuer: string): ServiceRespAction => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceResp.UNREGISTER, token, issuer};
};

export const keysServiceRegister = (): IKeys => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceResp.REGISTER};
};

export const keysServiceUnregister = (): IKeys => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceResp.UNREGISTER};
};
