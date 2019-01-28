import {ActionMapperType, ChannelEnum} from '../../../interfaces';
import {RootReq, RootReqAction, RootReqEnumKeys, RootReqKey} from '../../../interfaces/req/root';
import {AccessToken} from '../../../interfaces/tokens';

export const actionRootRegister = (token: AccessToken): RootReqAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootReq.REGISTER, token};
};

export const actionRootUnregister = (token: AccessToken): RootReqAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootReq.UNREGISTER, token};
};

export const actionKeysMapper: ActionMapperType<RootReqEnumKeys, RootReqKey> = {
	REGISTER: {_channel: ChannelEnum.ROOT, _type: RootReq.REGISTER},
	UNREGISTER: {_channel: ChannelEnum.ROOT, _type: RootReq.UNREGISTER},
};
