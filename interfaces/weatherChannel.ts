import {ChannelEnum, IChannel} from '.';

export interface IWeatherChannel extends IChannel<ChannelEnum> {
	_channel: ChannelEnum.WEATHER;
}
