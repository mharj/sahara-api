export type IDToken = Readonly<string>;
export type AccessToken = Readonly<string>;

export interface IAccessTokenVerifyData {
	readonly azp: string;
	readonly aud: string;
	readonly sub: string;
	readonly scope: string;
	readonly exp: string;
	readonly expires_in: string;
	readonly email: string;
	readonly email_verified: string;
	readonly access_type: string;
}
