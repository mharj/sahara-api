import {ChannelEnum, IKeys} from '../../../interfaces';
import {RootReq, RootReqAction} from '../../../interfaces/req/root';
import {AccessToken} from '../../../interfaces/tokens';

export const actionRootRegister = (token: AccessToken): RootReqAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootReq.REGISTER, token};
};

export const actionRootUnregister = (token: AccessToken): RootReqAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootReq.UNREGISTER, token};
};

export const keysRootRegister = (): IKeys => {
	return {_channel: ChannelEnum.ROOT, _type: RootReq.REGISTER};
};

export const keysRootUnregister = (): IKeys => {
	return {_channel: ChannelEnum.ROOT, _type: RootReq.UNREGISTER};
};
