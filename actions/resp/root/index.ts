import {ChannelEnum} from '../../../interfaces';
import {IRootRegisteredRespAction, IRootUnregisteredRespAction, RootResp} from '../../../interfaces/resp/root';

export const actionRootRegistered = (): IRootRegisteredRespAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootResp.REGISTERED};
};

export const actionRootUnregistered = (): IRootUnregisteredRespAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootResp.UNREGISTERED};
};
