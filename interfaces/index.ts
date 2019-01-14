export enum ChannelEnum {
	ROOT = 'root',
	SERVICE = 'service',
	WEATHER = 'weather',
}

export interface IChannel<C = string> {
	readonly _channel: C;
}

export interface IType<T = string> {
	readonly _type: T;
}

export type IKeys = IChannel<string> & IType<string>;
// to remove _channel and _type keys from object we can utilize ActionData type
type IEachKeys = keyof IChannel<string> | keyof IType<string>;
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type ActionData<A extends IKeys> = Omit<A, IEachKeys>;

export const getActionKeys = (actionFunction: () => IKeys): IKeys => {
	const action = actionFunction();
	if ( action._channel !== null && action._type !== null ) {
		const data:IKeys = {_channel: action._channel,_type: action._type};
		return data;
	}
	throw new Error('No action keys found');
};
