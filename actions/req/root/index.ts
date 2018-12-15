import {AccessToken, ChannelEnum} from '../../../interfaces';
import {IRootRegisterReqAction, IRootUnregisterReqAction, RootReq} from '../../../interfaces/req/root';

export const actionRootRegister = (token: AccessToken): IRootRegisterReqAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootReq.REGISTER, token};
};

export const actionRootUnregister = (token: AccessToken): IRootUnregisterReqAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootReq.UNREGISTER, token};
};
