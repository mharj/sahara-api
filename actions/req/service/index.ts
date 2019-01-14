import {ChannelEnum, IKeys} from '../../../interfaces';
import {ServiceReq, ServiceReqAction} from '../../../interfaces/req/service';
import {AccessToken} from '../../../interfaces/tokens';

export const actionRootRegister = (token: AccessToken, issuer: string): ServiceReqAction => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceReq.REGISTER, token, issuer};
};

export const actionRootUnregister = (token: AccessToken, issuer: string): ServiceReqAction => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceReq.UNREGISTER, token, issuer};
};

export const keysServiceRegister = (): IKeys => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceReq.REGISTER};
};

export const keysServiceUnregister = (): IKeys => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceReq.UNREGISTER};
};
