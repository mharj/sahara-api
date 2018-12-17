import {ChannelEnum, IChannel} from '.';

export interface IRootChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.ROOT;
}
