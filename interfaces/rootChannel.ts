import {ChannelEnum, IChannel} from '.';

export interface IRootChannel extends IChannel {
	_channel: ChannelEnum.ROOT;
}
