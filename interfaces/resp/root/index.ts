import { IType } from '../../index';
import { IRootChannel } from '../../rootChannel';

export enum RootResp {
	UNREGISTERED = 'UNREGISTERED',
	REGISTERED = 'REGISTERED',
	ERROR = 'ERROR',
}

export interface IRootUnregisteredRespAction extends IType<RootResp>, IRootChannel {
	_type: RootResp.UNREGISTERED,
}

export interface IRootRegisteredRespAction extends IType<RootResp>, IRootChannel {
	_type: RootResp.REGISTERED,
}

export interface IRootErrorRespAction extends IType<RootResp>, IRootChannel {
	_type: RootResp.ERROR,
	message: string,
}


export type RootRespAction = IRootUnregisteredRespAction | IRootRegisteredRespAction | IRootErrorRespAction;
