
export type AccessToken = string;
export type IdToken = string;

export enum ChannelEnum {
	ROOT = 'root',
	WEATHER = 'weather',
}

export interface IChannel<C = string> {
	readonly _channel: C;
}

export interface IType<T = string> {
	readonly _type: T;
}

export type IKeys = IChannel<string> & IType<string>;