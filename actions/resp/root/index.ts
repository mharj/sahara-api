import {ChannelEnum} from '../../../interfaces';
import {RootResp, RootRespAction} from '../../../interfaces/resp/root';

export const actionRootRegistered = (): RootRespAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootResp.REGISTERED};
};

export const actionRootUnregistered = (): RootRespAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootResp.UNREGISTERED};
};

export const actionRootError = (message: string): RootRespAction => {
	return {_channel: ChannelEnum.ROOT, _type: RootResp.ERROR, message};
}
