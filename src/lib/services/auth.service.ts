import type { ApiClient, Invite, Member } from "./apiClient";
import { Role } from "$lib/common";

export function createAuthService(apiClient: ApiClient) {
	async function login(email: string, password: string): Promise<Member> {
		const member = await apiClient.login(email, password);
		localStorage.setItem("member", JSON.stringify(member));
		return member;
	}

	function getLoggedUser(): Member | null {
		const stringMember = localStorage.getItem("member");
		if (!stringMember) return null;

		const member = JSON.parse(stringMember) as Member;
		return member;
	}

	async function getInviteById(inviteId: string): Promise<Invite> {
		const invite = await apiClient.getInvite(inviteId);
		if (!invite) {
			throw new Error("Invalid invite");
		}

		return invite;
	}

	async function acceptInvite(invite: Invite, password: string, token: string): Promise<Member> {
		const newMember = await apiClient.acceptInvite(invite.id, { password, token });
		// Because acceptInvite doesn't return Role
		newMember.role = invite.role;

		return newMember;
	}

	async function logout() {
		try {
			await apiClient.logout();
			localStorage.removeItem("member");
			window.location.href = "/login";
		} catch (e) {
			console.error(e);
		}
	}

	const canModify = (userRole: Role, targetRole: Role) => {
		if (userRole == Role.OWNER) return true;
		if (userRole == Role.ADMIN && targetRole == Role.MEMBER) return true;

		return false;
	};

	const canView = (userRole: Role, minPerms: Role) => {
		if (userRole == minPerms) return true;
		if (userRole == Role.OWNER) return true;
		if (userRole == Role.ADMIN && minPerms !== Role.OWNER) return true;

		return false;
	};

	return { login, logout, getLoggedUser, getInviteById, acceptInvite, canModify, canView };
}
