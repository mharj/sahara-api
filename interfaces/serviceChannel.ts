import {ChannelEnum, IChannel} from '.';

export interface IServiceChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.SERVICE;
}
