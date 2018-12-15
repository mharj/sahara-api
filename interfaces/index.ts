
export type AccessToken = string;

export enum ChannelEnum {
	ROOT = 'root',
	WEATHER = 'weather',
}

export interface IChannel<C = string> {
	readonly _channel: C;
}

export interface IType<T = string> {
	_type: T;
}