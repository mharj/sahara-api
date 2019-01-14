import {ChannelEnum, IKeys} from '../../../interfaces';
import {ServiceReq, ServiceReqAction} from '../../../interfaces/req/service';

export const actionServiceLogin = (serviceId: string, serviceSecret: string): ServiceReqAction => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceReq.LOGIN, serviceId, serviceSecret};
};

export const keysServiceLogin = (): IKeys => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceReq.LOGIN};
};

export const actionServiceUnregistered = (): ServiceReqAction => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceReq.UNREGISTERED};
};

export const actionRootError = (message: string): ServiceReqAction => {
	return {_channel: ChannelEnum.SERVICE, _type: ServiceReq.ERROR, message};
}

